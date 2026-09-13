import React, { useState, useEffect, useRef } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizDatabase';
import { QuizQuestion } from '../../types';
import { sound } from '../../utils/audio';
import {
  Users,
  Timer,
  Bell,
  Plus,
  Minus,
  RotateCcw,
  Sparkles,
  Trophy,
  Play,
  Pause,
  Shuffle,
  ArrowRight,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface Team {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  score: number;
}

const DEFAULT_TEAMS: Team[] = [
  {
    id: 'team_blue',
    name: '🔵 Đội Xanh Lam',
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-950/40',
    borderColor: 'border-blue-500/60',
    textColor: 'text-blue-400',
    score: 0
  },
  {
    id: 'team_red',
    name: '🔴 Đội Đỏ Rực',
    color: 'from-rose-600 to-red-600',
    bgColor: 'bg-rose-950/40',
    borderColor: 'border-rose-500/60',
    textColor: 'text-rose-400',
    score: 0
  },
  {
    id: 'team_gold',
    name: '🟡 Đội Vàng Kim',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-950/40',
    borderColor: 'border-amber-500/60',
    textColor: 'text-amber-400',
    score: 0
  },
  {
    id: 'team_purple',
    name: '🟣 Đội Tím Huyền Bí',
    color: 'from-purple-600 to-violet-600',
    bgColor: 'bg-purple-950/40',
    borderColor: 'border-purple-500/60',
    textColor: 'text-purple-400',
    score: 0
  }
];

export const TeamBattle: React.FC = () => {
  const [teamCount, setTeamCount] = useState<number>(4);
  const [teams, setTeams] = useState<Team[]>(DEFAULT_TEAMS);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [timeLimit, setTimeLimit] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [buzzedTeamId, setBuzzedTeamId] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Student Randomizer
  const [studentNames, setStudentNames] = useState<string>('Minh, An, Bảo, Chi, Dũng, Giang, Hùng, Linh, Nam, Trang, Phúc, Thảo');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 20);
    setQuestions(shuffled);
    setCurrentQIndex(0);
    setTimeLeft(30);
    setIsTimerRunning(false);
    setBuzzedTeamId(null);
    setShowAnswer(false);
  }, []);

  useEffect(() => {
    if (!isTimerRunning) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsTimerRunning(false);
          sound.playWrong();
          return 0;
        }
        if (prev <= 5) {
          sound.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  const handleBuzzer = (teamId: string) => {
    if (buzzedTeamId) return; // already buzzed
    sound.playBuzzer();
    setBuzzedTeamId(teamId);
    setIsTimerRunning(false); // Pause timer when buzzed
  };

  const handleScoreChange = (teamId: string, delta: number) => {
    sound.playClick();
    setTeams(prev =>
      prev.map(t => (t.id === teamId ? { ...t, score: Math.max(0, t.score + delta) } : t))
    );
  };

  const handleToggleTimer = () => {
    sound.playClick();
    setIsTimerRunning(!isTimerRunning);
  };

  const handleResetTimer = () => {
    sound.playClick();
    setIsTimerRunning(false);
    setTimeLeft(timeLimit);
    setBuzzedTeamId(null);
  };

  const handleNextQuestion = () => {
    sound.playClick();
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
      setShowAnswer(false);
      setBuzzedTeamId(null);
      setTimeLeft(timeLimit);
      setIsTimerRunning(false);
    }
  };

  const handleSpinStudent = () => {
    if (isSpinning) return;
    const list = studentNames.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);
    if (list.length === 0) return;

    setIsSpinning(true);
    sound.playTick();

    let counter = 0;
    const interval = setInterval(() => {
      const randomName = list[Math.floor(Math.random() * list.length)];
      setSelectedStudent(randomName);
      sound.playTick();
      counter++;

      if (counter >= 15) {
        clearInterval(interval);
        setIsSpinning(false);
        sound.playLevelUp();
      }
    }, 100);
  };

  const currentQ = questions[currentQIndex];
  const activeTeams = teams.slice(0, teamCount);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Đấu Trường Game Show Lớp Học
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Chế Độ Thi Đấu Đội & Bấm Chuông
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Thiết kế tối ưu cho máy chiếu và màn hình tương tác tại lớp: Chia đội, hệ thống chuông giành quyền, đồng hồ đếm ngược và vòng quay gọi học sinh ngẫu nhiên.
            </p>
          </div>

          {/* Team count selector */}
          <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-700 p-2 rounded-2xl">
            <span className="text-xs text-slate-400 font-semibold px-2">Số đội thi:</span>
            {[2, 3, 4].map(num => (
              <button
                key={num}
                id={`btn-team-count-${num}`}
                onClick={() => {
                  sound.playClick();
                  setTeamCount(num);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  teamCount === num
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {num} Đội
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Giant Scoreboard for Teams */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${teamCount} gap-4`}>
        {activeTeams.map(team => {
          const isBuzzed = buzzedTeamId === team.id;

          return (
            <div
              key={team.id}
              id={`team-scorecard-${team.id}`}
              className={`relative rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
                isBuzzed
                  ? 'ring-4 ring-amber-400 border-amber-400 bg-amber-950/40 animate-pulse'
                  : `${team.bgColor} ${team.borderColor}`
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm sm:text-base text-white">
                    {team.name}
                  </h3>
                  {isBuzzed && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black uppercase animate-bounce">
                      ĐÃ GIÀNH CHUÔNG!
                    </span>
                  )}
                </div>

                <div className="text-center py-2">
                  <div className={`text-4xl sm:text-5xl font-black font-['Space_Grotesk'] ${team.textColor}`}>
                    {team.score}
                  </div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Điểm Số</div>
                </div>
              </div>

              {/* Buzzer and Point Controls */}
              <div className="space-y-2 mt-4 pt-3 border-t border-slate-700/50">
                <button
                  id={`buzzer-btn-${team.id}`}
                  onClick={() => handleBuzzer(team.id)}
                  className={`w-full py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${
                    isBuzzed
                      ? 'bg-amber-400 text-slate-900 shadow-amber-400/40'
                      : `bg-gradient-to-r ${team.color} text-white hover:brightness-110`
                  }`}
                >
                  <Bell className="w-4 h-4" />
                  <span>BẤM CHUÔNG</span>
                </button>

                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => handleScoreChange(team.id, 100)}
                    className="py-1 rounded-lg bg-slate-800 hover:bg-emerald-950 hover:text-emerald-300 text-slate-300 text-xs font-bold border border-slate-700 transition-colors"
                  >
                    +100
                  </button>
                  <button
                    onClick={() => handleScoreChange(team.id, 50)}
                    className="py-1 rounded-lg bg-slate-800 hover:bg-emerald-950 hover:text-emerald-300 text-slate-300 text-xs font-bold border border-slate-700 transition-colors"
                  >
                    +50
                  </button>
                  <button
                    onClick={() => handleScoreChange(team.id, -50)}
                    className="py-1 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-300 text-slate-300 text-xs font-bold border border-slate-700 transition-colors"
                  >
                    -50
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Classroom Question Display */}
      {currentQ && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          
          {/* Question Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-black text-blue-400 uppercase tracking-widest font-['Space_Grotesk']">
                CÂU HỎI SỐ {currentQIndex + 1} / {questions.length} • {currentQ.discipline.toUpperCase()}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed mt-1">
                {currentQ.question}
              </h2>
            </div>

            {/* Timer & Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <div className={`flex items-center gap-2 text-xl font-black font-['Space_Grotesk'] px-4 py-2 rounded-2xl border ${
                timeLeft <= 5 ? 'bg-rose-950/80 text-rose-300 border-rose-600 animate-pulse' : 'bg-slate-800 text-white border-slate-700'
              }`}>
                <Timer className="w-5 h-5 text-teal-400" />
                <span>{timeLeft}s</span>
              </div>

              <button
                id="btn-toggle-battle-timer"
                onClick={handleToggleTimer}
                className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-750 text-white border border-slate-700"
                title={isTimerRunning ? 'Tạm dừng' : 'Bắt đầu đếm ngược'}
              >
                {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <button
                id="btn-reset-battle-timer"
                onClick={handleResetTimer}
                className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700"
                title="Đặt lại đồng hồ"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Options Display (Large for Classroom) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQ.options.map((opt, idx) => {
              const isCorrect = idx === currentQ.correctIndex;

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all text-sm sm:text-base font-semibold flex items-center justify-between ${
                    showAnswer
                      ? isCorrect
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/50 shadow-xl'
                        : 'bg-slate-850 border-slate-800 text-slate-500 opacity-60'
                      : 'bg-slate-800/90 border-slate-700 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-slate-700/80 text-white flex items-center justify-center font-bold font-['Space_Grotesk'] shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {showAnswer && isCorrect && (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Answer and Explanation Box */}
          {showAnswer && (
            <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
                <Sparkles className="w-4 h-4" />
                <span>Đáp án chuẩn & Giải thích:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              id="btn-reveal-battle-answer"
              onClick={() => {
                sound.playClick();
                setShowAnswer(!showAnswer);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
            >
              {showAnswer ? 'Ẩn Đáp Án' : 'Hiện Đáp Án Chuẩn'}
            </button>

            <button
              id="btn-battle-next-q"
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg transition-all"
            >
              <span>Câu Hỏi Tiếp Theo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Lucky Student Picker / Randomizer Widget */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase">
            <Shuffle className="w-4 h-4" />
            <span>Vòng Quay May Mắn: Chọn Học Sinh Trả Lời</span>
          </div>
          <span className="text-[11px] text-slate-400">Nhập danh sách học sinh bên dưới</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            <textarea
              value={studentNames}
              onChange={e => setStudentNames(e.target.value)}
              rows={2}
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-3 text-xs text-slate-200 focus:outline-none focus:border-teal-400"
              placeholder="Nhập tên học sinh, cách nhau bằng dấu phẩy hoặc xuống dòng"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-2 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="text-xl sm:text-2xl font-black text-amber-400 font-['Space_Grotesk'] h-8 flex items-center">
              {selectedStudent ? selectedStudent : '---'}
            </div>
            <button
              id="btn-spin-student"
              disabled={isSpinning}
              onClick={handleSpinStudent}
              className="w-full py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-extrabold text-xs shadow-md active:scale-95 transition-all"
            >
              {isSpinning ? 'Đang quay ngẫu nhiên...' : 'Quay Chọn Học Sinh'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
