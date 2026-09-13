import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { CROSSWORD_DATA } from '../../data/gameData';
import { CrosswordClue } from '../../types';
import { sound } from '../../utils/audio';
import {
  Table,
  ChevronLeft,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Trophy,
  Lightbulb
} from 'lucide-react';

interface ScienceCrosswordProps {
  onBack: () => void;
}

export const ScienceCrossword: React.FC<ScienceCrosswordProps> = ({ onBack }) => {
  const { addExp, recordGameScore } = useGame();

  const [activeClueIndex, setActiveClueIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>(() => {
    const initial: Record<number, string[]> = {};
    CROSSWORD_DATA.forEach((clue, idx) => {
      initial[idx] = new Array(clue.answer.length).fill('');
    });
    return initial;
  });
  const [solvedClues, setSolvedClues] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const activeClue = CROSSWORD_DATA[activeClueIndex];

  const handleLetterChange = (letterIndex: number, char: string) => {
    const uppercase = char.toUpperCase().slice(-1);
    const current = [...(answers[activeClueIndex] || [])];
    current[letterIndex] = uppercase;

    const newAnswers = { ...answers, [activeClueIndex]: current };
    setAnswers(newAnswers);

    // Auto check if word is fully entered
    const enteredWord = current.join('');
    if (enteredWord === activeClue.answer) {
      if (!solvedClues.includes(activeClueIndex)) {
        sound.playCorrect();
        const newSolved = [...solvedClues, activeClueIndex];
        setSolvedClues(newSolved);

        if (newSolved.length === CROSSWORD_DATA.length) {
          // Complete
          sound.playLevelUp();
          setIsGameOver(true);
          addExp(200, 'Giải Mã Ô Chữ KHTN 7', 'crossword');
          recordGameScore('crossword', 200);
        }
      }
    }
  };

  const handleRevealHint = () => {
    sound.playClick();
    const current = [...(answers[activeClueIndex] || [])];
    // Fill the first empty or wrong letter
    for (let i = 0; i < activeClue.answer.length; i++) {
      if (current[i] !== activeClue.answer[i]) {
        current[i] = activeClue.answer[i];
        break;
      }
    }
    const newAnswers = { ...answers, [activeClueIndex]: current };
    setAnswers(newAnswers);

    if (current.join('') === activeClue.answer && !solvedClues.includes(activeClueIndex)) {
      sound.playCorrect();
      setSolvedClues(prev => [...prev, activeClueIndex]);
    }
  };

  const handleRestart = () => {
    sound.playClick();
    const initial: Record<number, string[]> = {};
    CROSSWORD_DATA.forEach((clue, idx) => {
      initial[idx] = new Array(clue.answer.length).fill('');
    });
    setAnswers(initial);
    setSolvedClues([]);
    setIsGameOver(false);
    setActiveClueIndex(0);
  };

  if (isGameOver) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-xl">
            <Trophy className="w-10 h-10 text-amber-300" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Giải Mã Thành Công
            </span>
            <h2 className="text-3xl font-black text-white font-['Space_Grotesk']">
              Toàn Bộ Ô Chữ KHTN 7 Đã Mở Khóa!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Bạn đã mở khóa toàn bộ các thuật ngữ cốt lõi của chương trình Khoa học tự nhiên lớp 7!
            </p>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 max-w-sm mx-auto">
            <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">+200 EXP</div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Kinh nghiệm giải mã từ khóa</div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Về Danh Sách Trò Chơi
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-xs shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi Lại Ô Chữ</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Danh Sách Trò Chơi</span>
        </button>

        <div className="text-xs font-bold text-teal-400 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700">
          Đã giải: {solvedClues.length} / {CROSSWORD_DATA.length} Ô Chữ
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Clues list */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-4 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase px-2 flex items-center justify-between border-b border-slate-800 pb-2">
            <span>Danh Sách Hàng Ngang</span>
            <Table className="w-4 h-4 text-teal-400" />
          </div>

          <div className="space-y-2">
            {CROSSWORD_DATA.map((clue, idx) => {
              const isSelected = activeClueIndex === idx;
              const isSolved = solvedClues.includes(idx);

              return (
                <button
                  key={idx}
                  id={`clue-button-${idx}`}
                  onClick={() => {
                    sound.playClick();
                    setActiveClueIndex(idx);
                  }}
                  className={`w-full text-left p-3 rounded-2xl border text-xs transition-all ${
                    isSelected
                      ? 'bg-teal-950/80 border-teal-500 text-teal-200 font-bold shadow-md'
                      : isSolved
                      ? 'bg-emerald-950/40 border-emerald-700/50 text-emerald-300'
                      : 'bg-slate-800/80 hover:bg-slate-750 border-slate-700/60 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold">Hàng #{idx + 1} ({clue.answer.length} chữ)</span>
                    {isSolved && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {clue.clue}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Row Grid & Input */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          
          {/* Active Clue Info */}
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-teal-400 uppercase tracking-widest font-['Space_Grotesk']">
                HÀNG NGANG SỐ {activeClueIndex + 1} ({activeClue.discipline.toUpperCase()})
              </span>
              <button
                id="btn-crossword-hint"
                onClick={handleRevealHint}
                className="flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-700/60 text-xs font-bold transition-all"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Mở 1 Kí Tự</span>
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {activeClue.clue}
            </h3>
          </div>

          {/* Letter Input Cells */}
          <div className="space-y-4">
            <span className="text-xs text-slate-400 font-semibold">Nhập các chữ cái (không dấu):</span>
            
            <div className="flex flex-wrap items-center gap-2">
              {Array.from({ length: activeClue.answer.length }).map((_, letterIdx) => {
                const val = (answers[activeClueIndex] || [])[letterIdx] || '';
                const isSolved = solvedClues.includes(activeClueIndex);

                return (
                  <input
                    key={letterIdx}
                    id={`crossword-cell-${activeClueIndex}-${letterIdx}`}
                    type="text"
                    maxLength={1}
                    value={val}
                    disabled={isSolved}
                    onChange={e => {
                      handleLetterChange(letterIdx, e.target.value);
                      if (e.target.value && letterIdx + 1 < activeClue.answer.length) {
                        const next = document.getElementById(`crossword-cell-${activeClueIndex}-${letterIdx + 1}`);
                        next?.focus();
                      }
                    }}
                    className={`w-12 h-14 rounded-2xl border text-center text-xl font-black uppercase font-['Space_Grotesk'] transition-all ${
                      isSolved
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-md'
                        : 'bg-slate-800 border-slate-700 text-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Solved Status message */}
          {solvedClues.includes(activeClueIndex) && (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-700/50 text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Chính xác! Từ khóa là <strong>{activeClue.answer}</strong>. Hãy chọn hàng ngang tiếp theo.</span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
