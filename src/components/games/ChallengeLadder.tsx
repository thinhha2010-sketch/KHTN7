import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { QUIZ_QUESTIONS } from '../../data/quizDatabase';
import { QuizQuestion } from '../../types';
import { sound } from '../../utils/audio';
import {
  Mountain,
  Heart,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Trophy,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  Flame,
  Lightbulb
} from 'lucide-react';

interface ChallengeLadderProps {
  onBack: () => void;
}

const TOWER_LEVELS = [
  { floor: 1, rewardExp: 20, label: 'Tầng 1: Khởi Động' },
  { floor: 2, rewardExp: 40, label: 'Tầng 2: Nhập Môn' },
  { floor: 3, rewardExp: 60, label: 'Tầng 3: Thám Hiểm' },
  { floor: 4, rewardExp: 90, label: 'Tầng 4: Tăng Tốc' },
  { floor: 5, rewardExp: 130, label: 'Tầng 5: Cột Mốc An Toàn ⭐️', isMilestone: true },
  { floor: 6, rewardExp: 170, label: 'Tầng 6: Vượt Rào' },
  { floor: 7, rewardExp: 210, label: 'Tầng 7: Bứt Phá' },
  { floor: 8, rewardExp: 260, label: 'Tầng 8: Chuyên Gia' },
  { floor: 9, rewardExp: 320, label: 'Tầng 9: Đỉnh Cao' },
  { floor: 10, rewardExp: 400, label: 'Tầng 10: Viện Sĩ KHTN 👑', isMilestone: true }
];

export const ChallengeLadder: React.FC<ChallengeLadderProps> = ({ onBack }) => {
  const { addExp, recordAnswer, recordGameScore, unlockBadge } = useGame();

  const [currentFloor, setCurrentFloor] = useState(1);
  const [lives, setLives] = useState(3);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [usedHint, setUsedHint] = useState(false);
  const [showHintText, setShowHintText] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  // Initialize ladder questions
  useEffect(() => {
    // Select questions distributed by difficulty
    const easy = QUIZ_QUESTIONS.filter(q => q.difficulty === 'easy').sort(() => 0.5 - Math.random());
    const medium = QUIZ_QUESTIONS.filter(q => q.difficulty === 'medium').sort(() => 0.5 - Math.random());
    const hard = QUIZ_QUESTIONS.filter(q => q.difficulty === 'hard').sort(() => 0.5 - Math.random());

    const ladderQuestions: QuizQuestion[] = [
      ...easy.slice(0, 3),
      ...medium.slice(0, 4),
      ...hard.slice(0, 3)
    ];

    setQuestions(ladderQuestions);
    setCurrentQuestion(ladderQuestions[0]);
    setCurrentFloor(1);
    setLives(3);
    setSelectedOption(null);
    setIsAnswered(false);
    setEliminatedOptions([]);
    setUsedFiftyFifty(false);
    setUsedHint(false);
    setShowHintText(false);
    setIsGameOver(false);
    setIsVictory(false);
  }, []);

  const handleUseFiftyFifty = () => {
    if (usedFiftyFifty || !currentQuestion || isAnswered) return;
    sound.playClick();
    setUsedFiftyFifty(true);

    const wrongIndexes: number[] = [];
    currentQuestion.options.forEach((_, idx) => {
      if (idx !== currentQuestion.correctIndex) {
        wrongIndexes.push(idx);
      }
    });

    const shuffled = wrongIndexes.sort(() => 0.5 - Math.random()).slice(0, 2);
    setEliminatedOptions(shuffled);
  };

  const handleUseHint = () => {
    if (usedHint || !currentQuestion || isAnswered) return;
    sound.playClick();
    setUsedHint(true);
    setShowHintText(true);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctIndex;

    if (isCorrect) {
      sound.playCorrect();
      recordAnswer(true, currentQuestion.chapterId);
    } else {
      sound.playWrong();
      recordAnswer(false, currentQuestion.chapterId);
      const remainingLives = lives - 1;
      setLives(remainingLives);

      if (remainingLives <= 0) {
        // Fall back to highest milestone
        setTimeout(() => {
          setIsGameOver(true);
          const earnedExp = currentFloor >= 5 ? 130 : 30;
          addExp(earnedExp, 'Leo Tháp KHTN 7', 'challenge_ladder');
        }, 1200);
      }
    }
  };

  const handleNextFloor = () => {
    sound.playClick();
    if (currentFloor >= 10) {
      // Victory
      sound.playLevelUp();
      setIsVictory(true);
      setIsGameOver(true);
      addExp(400, 'Chinh Phục Đỉnh Tháp KHTN 7', 'challenge_ladder');
      recordGameScore('challenge_ladder', 400);
      unlockBadge('b_boss_slayer');
      return;
    }

    const nextFloor = currentFloor + 1;
    setCurrentFloor(nextFloor);
    setCurrentQuestion(questions[nextFloor - 1]);
    setSelectedOption(null);
    setIsAnswered(false);
    setEliminatedOptions([]);
    setShowHintText(false);
  };

  const handleRestart = () => {
    sound.playClick();
    const easy = QUIZ_QUESTIONS.filter(q => q.difficulty === 'easy').sort(() => 0.5 - Math.random());
    const medium = QUIZ_QUESTIONS.filter(q => q.difficulty === 'medium').sort(() => 0.5 - Math.random());
    const hard = QUIZ_QUESTIONS.filter(q => q.difficulty === 'hard').sort(() => 0.5 - Math.random());

    const ladderQuestions: QuizQuestion[] = [
      ...easy.slice(0, 3),
      ...medium.slice(0, 4),
      ...hard.slice(0, 3)
    ];

    setQuestions(ladderQuestions);
    setCurrentQuestion(ladderQuestions[0]);
    setCurrentFloor(1);
    setLives(3);
    setSelectedOption(null);
    setIsAnswered(false);
    setEliminatedOptions([]);
    setUsedFiftyFifty(false);
    setUsedHint(false);
    setShowHintText(false);
    setIsGameOver(false);
    setIsVictory(false);
  };

  if (!currentQuestion) return null;

  if (isGameOver) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl">
            {isVictory ? <Trophy className="w-10 h-10 text-amber-300" /> : <Mountain className="w-10 h-10" />}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              {isVictory ? '🎉 CHINH PHỤC HOÀN TOÀN' : 'KẾT THÚC HÀNH TRÌNH'}
            </span>
            <h2 className="text-3xl font-black text-white font-['Space_Grotesk']">
              {isVictory ? 'Bạn Đã Lên Đỉnh Tháp KHTN 7!' : `Dừng Chân Tại Tầng ${currentFloor}`}
            </h2>
            <p className="text-sm text-slate-300">
              {isVictory
                ? 'Xuất sắc vượt qua toàn bộ 10 tầng thử thách hóc búa, xứng danh Viện sĩ KHTN!'
                : 'Mỗi lần thử thách là một cơ hội tích lũy thêm kiến thức. Hãy thử sức lại nhé!'}
            </p>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 max-w-sm mx-auto">
            <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">
              +{isVictory ? 400 : currentFloor >= 5 ? 130 : 30} EXP
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Phần thưởng kinh nghiệm</div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              id="btn-ladder-back"
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Về Danh Sách Trò Chơi
            </button>
            <button
              id="btn-ladder-restart"
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thử Thách Lại</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentLevelInfo = TOWER_LEVELS[currentFloor - 1];

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Thoát Thử Thách</span>
        </button>

        {/* Lives Counter */}
        <div className="flex items-center gap-3 bg-slate-800/90 border border-slate-700 px-4 py-1.5 rounded-xl">
          <span className="text-xs text-slate-400 font-semibold">Sinh lực:</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map(i => (
              <Heart
                key={i}
                className={`w-5 h-5 transition-all ${
                  i <= lives
                    ? 'text-rose-500 fill-rose-500 animate-pulse'
                    : 'text-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Tower Ladder Sidebar */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-4 space-y-2 order-2 lg:order-1">
          <div className="text-xs font-bold text-slate-400 uppercase px-2 pb-1 border-b border-slate-800 flex items-center justify-between">
            <span>Tháp Kiến Thức</span>
            <Mountain className="w-4 h-4 text-blue-400" />
          </div>

          <div className="space-y-1">
            {TOWER_LEVELS.slice().reverse().map(lvl => {
              const isCurrent = lvl.floor === currentFloor;
              const isPassed = lvl.floor < currentFloor;

              return (
                <div
                  key={lvl.floor}
                  className={`flex items-center justify-between px-3 py-1.5 rounded-xl text-xs transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold shadow-md'
                      : isPassed
                      ? 'bg-slate-800/80 text-emerald-400 font-semibold'
                      : 'text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 text-right font-mono font-bold">{lvl.floor}</span>
                    <span className="text-[11px] truncate">{lvl.label}</span>
                  </div>
                  <span className="text-[10px] font-bold">+{lvl.rewardExp}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question Area */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 order-1 lg:order-2">
          
          {/* Floor Header & Lifelines */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black text-blue-400 uppercase tracking-widest font-['Space_Grotesk']">
                TẦNG {currentFloor} / 10
              </span>
              <h3 className="text-base font-bold text-white">
                {currentLevelInfo.label}
              </h3>
            </div>

            {/* Lifelines */}
            <div className="flex items-center gap-2">
              <button
                id="btn-lifeline-5050"
                disabled={usedFiftyFifty || isAnswered}
                onClick={handleUseFiftyFifty}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border transition-all ${
                  usedFiftyFifty
                    ? 'bg-slate-800/40 text-slate-600 border-slate-800 cursor-not-allowed'
                    : 'bg-indigo-950/60 text-indigo-300 border-indigo-700/60 hover:bg-indigo-900/60'
                }`}
                title="Loại bỏ 2 phương án sai"
              >
                50:50
              </button>

              <button
                id="btn-lifeline-hint"
                disabled={usedHint || isAnswered}
                onClick={handleUseHint}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  usedHint
                    ? 'bg-slate-800/40 text-slate-600 border-slate-800 cursor-not-allowed'
                    : 'bg-amber-950/60 text-amber-300 border-amber-700/60 hover:bg-amber-900/60'
                }`}
                title="Gợi ý chuyên gia"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Gợi ý</span>
              </button>
            </div>
          </div>

          {/* Hint text if activated */}
          {showHintText && (
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-800/40 text-amber-300 text-xs flex items-start gap-2.5 animate-fade-in">
              <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Gợi ý: Hãy chú ý các định luật cơ bản của chương {currentQuestion.chapterId} hoặc các từ khóa then chốt trong câu hỏi.</span>
            </div>
          )}

          {/* Question text */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-bold text-slate-400">
              {currentQuestion.discipline === 'chemistry' ? '🧪 Hóa học' : currentQuestion.discipline === 'physics' ? '⚡ Vật lí' : currentQuestion.discipline === 'biology' ? '🌱 Sinh học' : '🔬 Kĩ năng'}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, idx) => {
              const isEliminated = eliminatedOptions.includes(idx);
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctIndex;

              if (isEliminated) {
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/40 text-slate-600 text-xs line-through opacity-40 select-none"
                  >
                    {String.fromCharCode(65 + idx)}. {option}
                  </div>
                );
              }

              let btnStyle = 'bg-slate-800/80 hover:bg-slate-750 border-slate-700/80 text-slate-200';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-300 font-bold';
                } else {
                  btnStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  id={`ladder-option-${idx}`}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full flex items-center justify-between text-left p-4 rounded-2xl border transition-all ${btnStyle} ${
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

          {/* Explanation upon answering */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
                <Sparkles className="w-4 h-4" />
                <span>Lời giải chi tiết:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Next button */}
          {isAnswered && lives > 0 && (
            <div className="flex justify-end pt-2">
              <button
                id="btn-ladder-next-floor"
                onClick={handleNextFloor}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg transition-all active:scale-95"
              >
                <span>{currentFloor < 10 ? `Leo Lên Tầng ${currentFloor + 1}` : 'Nhận Vương Miện Viện Sĩ'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
