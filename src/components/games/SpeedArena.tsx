import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../../context/GameContext';
import { QUIZ_QUESTIONS } from '../../data/quizDatabase';
import { QuizQuestion } from '../../types';
import { sound } from '../../utils/audio';
import {
  Zap,
  Timer,
  Flame,
  Award,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  Trophy
} from 'lucide-react';

interface SpeedArenaProps {
  initialChapterId?: number | null;
  onBack: () => void;
}

export const SpeedArena: React.FC<SpeedArenaProps> = ({ initialChapterId, onBack }) => {
  const { addExp, recordAnswer, recordGameScore, setChapterStars } = useGame();
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [history, setHistory] = useState<{ isCorrect: boolean; time: number }[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize questions
  useEffect(() => {
    let pool = [...QUIZ_QUESTIONS];
    if (initialChapterId !== undefined && initialChapterId !== null) {
      const chapterPool = pool.filter(q => q.chapterId === initialChapterId);
      if (chapterPool.length >= 5) {
        pool = chapterPool;
      }
    }
    // Shuffle pool and take 10
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setIsGameOver(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(15);
  }, [initialChapterId]);

  // Timer loop
  useEffect(() => {
    if (isGameOver || isAnswered || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeOut();
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
  }, [currentIndex, isAnswered, isGameOver, questions]);

  const handleTimeOut = () => {
    setIsAnswered(true);
    setSelectedOption(-1); // Timed out
    sound.playWrong();
    setStreak(0);
    recordAnswer(false);
    setHistory(prev => [...prev, { isCorrect: false, time: 15 }]);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOption(index);
    setIsAnswered(true);

    const currentQ = questions[currentIndex];
    const isCorrect = index === currentQ.correctIndex;

    if (isCorrect) {
      sound.playCorrect();
      const timeBonus = Math.max(0, timeLeft * 10);
      const streakMultiplier = 1 + streak * 0.2;
      const points = Math.round((100 + timeBonus) * streakMultiplier);
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      recordAnswer(true, currentQ.chapterId);
      setHistory(prev => [...prev, { isCorrect: true, time: 15 - timeLeft }]);
    } else {
      sound.playWrong();
      setStreak(0);
      recordAnswer(false, currentQ.chapterId);
      setHistory(prev => [...prev, { isCorrect: false, time: 15 - timeLeft }]);
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(15);
    } else {
      // Game finished
      setIsGameOver(true);
      const totalPoints = score;
      const earnedExp = Math.round(totalPoints / 5);
      addExp(earnedExp, 'Đấu Trường Nhanh KHTN 7', 'speed_arena');
      recordGameScore('speed_arena', totalPoints);
      
      const correctCount = history.filter(h => h.isCorrect).length;
      if (correctCount >= 8) {
        sound.playLevelUp();
        if (initialChapterId !== undefined && initialChapterId !== null) {
          setChapterStars(initialChapterId, 3);
        }
      }
    }
  };

  const handleRestart = () => {
    sound.playClick();
    const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setIsGameOver(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(15);
    setHistory([]);
  };

  if (questions.length === 0) {
    return <div className="text-center py-12 text-slate-400">Đang tải ngân hàng câu hỏi...</div>;
  }

  const currentQ = questions[currentIndex];

  if (isGameOver) {
    const correctCount = history.filter(h => h.isCorrect).length;
    const accuracy = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Hoàn Thành Vòng Đấu
            </span>
            <h2 className="text-3xl font-black text-white font-['Space_Grotesk']">
              Kết Quả Đấu Trường Nhanh
            </h2>
          </div>

          {/* Stats Summary Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div>
              <div className="text-2xl font-black text-teal-400 font-['Space_Grotesk']">{score}</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Tổng Điểm</div>
            </div>
            <div className="border-x border-slate-700">
              <div className="text-2xl font-black text-emerald-400 font-['Space_Grotesk']">{accuracy}%</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Chính Xác ({correctCount}/{questions.length})</div>
            </div>
            <div>
              <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">+{Math.round(score / 5)}</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">EXP Nhận Được</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              id="btn-speed-back-menu"
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Về Danh Sách Trò Chơi
            </button>
            <button
              id="btn-speed-restart"
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-teal-900/40 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi Lại Trận Mới</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const timerPercent = (timeLeft / 15) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-12">
      {/* Top Controls Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Thoát Trận Đấu</span>
        </button>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-orange-400 font-black bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
            <Flame className="w-4 h-4 fill-orange-500" />
            <span>Streak x{streak}</span>
          </div>
          <div className="flex items-center gap-1.5 text-teal-400 font-black bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
            <Zap className="w-4 h-4" />
            <span>{score} Điểm</span>
          </div>
        </div>
      </div>

      {/* Main Game Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
        
        {/* Question Counter & Timer Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400">
              CÂU HỎI {currentIndex + 1} / {questions.length}
            </span>
            <span className={`flex items-center gap-1.5 ${timeLeft <= 5 ? 'text-rose-400 font-black animate-pulse' : 'text-slate-300'}`}>
              <Timer className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </span>
          </div>

          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft > 7 ? 'bg-teal-400' : timeLeft > 3 ? 'bg-amber-400' : 'bg-rose-500'
              }`}
              style={{ width: `${timerPercent}%` }}
            />
          </div>
        </div>

        {/* Question Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-bold text-slate-400">
            {currentQ.discipline === 'chemistry' ? '🧪 Hóa học' : currentQ.discipline === 'physics' ? '⚡ Vật lí' : currentQ.discipline === 'biology' ? '🌱 Sinh học' : '🔬 Kĩ năng'}
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {currentQ.question}
          </h2>
        </div>

        {/* Options List */}
        <div className="grid grid-cols-1 gap-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctIndex;
            
            let btnStyle = 'bg-slate-800/80 hover:bg-slate-750 border-slate-700/80 text-slate-200';
            
            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold shadow-lg shadow-emerald-950/50';
              } else if (isSelected) {
                btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-300 font-bold';
              } else {
                btnStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                id={`speed-option-${idx}`}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all duration-200 ${btnStyle} ${
                  !isAnswered ? 'active:scale-[0.99] cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-700/60 text-slate-300 flex items-center justify-center text-xs font-bold shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">
                    {option}
                  </span>
                </div>

                {isAnswered && (
                  <div>
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Card upon answering */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
              <Sparkles className="w-4 h-4" />
              <span>Giải thích sư phạm:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Next Question Button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              id="btn-speed-next-question"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white text-xs font-black shadow-lg shadow-teal-950/50 transition-all active:scale-95"
            >
              <span>{currentIndex + 1 < questions.length ? 'Câu Tiếp Theo' : 'Xem Tổng Kết'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
