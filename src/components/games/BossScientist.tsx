import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { SCIENTIST_BOSSES } from '../../data/gameData';
import { ScientistBoss, QuizQuestion } from '../../types';
import { sound } from '../../utils/audio';
import {
  Award,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  MessageSquare
} from 'lucide-react';

interface BossScientistProps {
  onBack: () => void;
}

export const BossScientist: React.FC<BossScientistProps> = ({ onBack }) => {
  const { addExp, recordAnswer, recordGameScore, unlockBadge } = useGame();

  const [activeBoss, setActiveBoss] = useState<ScientistBoss | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [defeatedBosses, setDefeatedBosses] = useState<string[]>([]);
  const [isDuelFinished, setIsDuelFinished] = useState(false);
  const [isDuelWon, setIsDuelWon] = useState(false);

  const handleSelectBoss = (boss: ScientistBoss) => {
    sound.playClick();
    setActiveBoss(boss);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsDuelFinished(false);
    setIsDuelWon(false);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || !activeBoss) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const question = activeBoss.questions[currentQIndex];
    const isCorrect = index === question.correctIndex;

    if (isCorrect) {
      sound.playCorrect();
      setScore(prev => prev + 1);
      recordAnswer(true, question.chapterId);
    } else {
      sound.playWrong();
      recordAnswer(false, question.chapterId);
    }
  };

  const handleNextQuestion = () => {
    if (!activeBoss) return;
    sound.playClick();

    if (currentQIndex + 1 < activeBoss.questions.length) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Finished duel
      setIsDuelFinished(true);
      const won = score + (selectedOption === activeBoss.questions[currentQIndex].correctIndex ? 0 : 0) >= 2;
      setIsDuelWon(won);

      if (won) {
        sound.playLevelUp();
        addExp(300, `Chinh phục Đại Danh Nhân ${activeBoss.name}`, 'boss_scientist');
        recordGameScore('boss_scientist', 300);

        if (!defeatedBosses.includes(activeBoss.id)) {
          const newDefeated = [...defeatedBosses, activeBoss.id];
          setDefeatedBosses(newDefeated);
          if (newDefeated.length >= 4) {
            unlockBadge('b_boss_slayer');
          }
        }
      }
    }
  };

  // Boss selection view
  if (!activeBoss) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 pb-12">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Về Danh Sách Trò Chơi</span>
          </button>

          <div className="text-xs font-bold text-amber-400 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700">
            Đã chinh phục: {defeatedBosses.length} / {SCIENTIST_BOSSES.length} Danh Nhân
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase">
            <Award className="w-3.5 h-3.5" />
            Đấu Trí Với Các Đại Danh Nhân Khoa Học
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            Chọn Nhà Khoa Học Để Thách Đấu
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Trực tiếp giải đáp những bài toán tư duy kinh điển cùng các bậc thầy vĩ đại của lịch sử khoa học nhân loại.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCIENTIST_BOSSES.map(boss => {
            const isDefeated = defeatedBosses.includes(boss.id);

            return (
              <div
                key={boss.id}
                id={`boss-card-${boss.id}`}
                className={`group bg-slate-900/90 hover:bg-slate-850 border ${
                  isDefeated ? 'border-amber-500/50' : 'border-slate-800'
                } rounded-3xl p-6 space-y-4 transition-all duration-300 shadow-xl flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{boss.avatar}</span>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                          {boss.name}
                        </h3>
                        <p className="text-[11px] text-slate-400 font-medium">{boss.era}</p>
                      </div>
                    </div>

                    {isDefeated && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                        Đã Chinh Phục 👑
                      </span>
                    )}
                  </div>

                  <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60 text-xs text-slate-300 space-y-1">
                    <div className="text-amber-300 font-bold">{boss.title}</div>
                    <div className="text-[11px] text-slate-400 italic">"{boss.quote}"</div>
                  </div>

                  <div className="text-xs text-slate-400">
                    <strong>Chuyên đề:</strong> {boss.field} ({boss.questions.length} câu hỏi đỉnh cao)
                  </div>
                </div>

                <button
                  id={`btn-duel-${boss.id}`}
                  onClick={() => handleSelectBoss(boss)}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-extrabold text-xs shadow-md transition-all active:scale-95"
                >
                  <span>Thách Đấu Trí Tuệ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Duel outcome screen
  if (isDuelFinished) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="text-5xl mx-auto">{activeBoss.avatar}</div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              {isDuelWon ? '🎉 CHIẾN THẮNG THUYẾT PHỤC' : 'CẦN ÔN TẬP THÊM'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk']">
              {isDuelWon ? `Bậc Thầy ${activeBoss.name} Tán Thưởng Bạn!` : `${activeBoss.name} Gửi Lời Khuyên`}
            </h2>
          </div>

          <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700 text-xs text-slate-200 italic leading-relaxed">
            "{isDuelWon ? activeBoss.dialogueWin : activeBoss.dialogueLose}"
          </div>

          {isDuelWon && (
            <div className="p-4 bg-amber-950/40 rounded-2xl border border-amber-800/40 text-amber-300 max-w-sm mx-auto">
              <div className="text-2xl font-black font-['Space_Grotesk']">+300 EXP</div>
              <div className="text-xs font-semibold uppercase mt-1">Vinh danh Đấu Trí Danh Nhân</div>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveBoss(null)}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Chọn Danh Nhân Khác
            </button>
            <button
              onClick={() => handleSelectBoss(activeBoss)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-extrabold text-xs shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Đấu Lại</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = activeBoss.questions[currentQIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveBoss(null)}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Danh Sách Danh Nhân</span>
        </button>

        <div className="text-xs font-bold text-amber-400 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700">
          Câu {currentQIndex + 1} / {activeBoss.questions.length}
        </div>
      </div>

      {/* Main Duel Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Boss Dialogue Intro Header */}
        <div className="flex items-center gap-4 p-4 bg-slate-800/80 rounded-2xl border border-slate-700/60">
          <span className="text-3xl shrink-0">{activeBoss.avatar}</span>
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-amber-400">{activeBoss.name}</div>
            <p className="text-xs text-slate-300 italic">
              "{currentQIndex === 0 ? activeBoss.dialogueIntro : 'Hãy giải bài toán tiếp theo của ta!'}"
            </p>
          </div>
        </div>

        {/* Question Text */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase">
            {question.discipline === 'chemistry' ? '🧪 Hóa học' : question.discipline === 'physics' ? '⚡ Vật lí' : '🌱 Sinh học'}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === question.correctIndex;

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
                id={`boss-opt-${idx}`}
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
                    {opt}
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

        {/* Explanation */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Chỉ dẫn của Nhà Khoa Học:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              id="btn-boss-next"
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white text-xs font-black shadow-lg transition-all active:scale-95"
            >
              <span>{currentQIndex + 1 < activeBoss.questions.length ? 'Câu Tiếp Theo' : 'Xem Kết Quả Đấu Trí'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
