import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { MATCH_PAIRS_DATA } from '../../data/gameData';
import { MatchPairItem } from '../../types';
import { sound } from '../../utils/audio';
import {
  Grid,
  ChevronLeft,
  Timer,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Trophy
} from 'lucide-react';

interface MatchPairsGameProps {
  onBack: () => void;
}

interface CardItem {
  id: string; // matches MatchPairItem.id
  uniqueId: string;
  text: string;
  side: 'left' | 'right';
  category: string;
}

export const MatchPairsGame: React.FC<MatchPairsGameProps> = ({ onBack }) => {
  const { addExp, recordGameScore } = useGame();

  const [leftCards, setLeftCards] = useState<CardItem[]>([]);
  const [rightCards, setRightCards] = useState<CardItem[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<{ leftId: string; rightId: string } | null>(null);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Initialize 6 random pairs
  useEffect(() => {
    startNewGame();
  }, []);

  // Timer
  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isGameOver]);

  const startNewGame = () => {
    const shuffledPairs = [...MATCH_PAIRS_DATA].sort(() => 0.5 - Math.random()).slice(0, 6);

    const left: CardItem[] = shuffledPairs.map(p => ({
      id: p.id,
      uniqueId: `l_${p.id}`,
      text: p.leftText,
      side: 'left' as const,
      category: p.category
    })).sort(() => 0.5 - Math.random());

    const right: CardItem[] = shuffledPairs.map(p => ({
      id: p.id,
      uniqueId: `r_${p.id}`,
      text: p.rightText,
      side: 'right' as const,
      category: p.category
    })).sort(() => 0.5 - Math.random());

    setLeftCards(left);
    setRightCards(right);
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedIds([]);
    setWrongPair(null);
    setMoves(0);
    setSeconds(0);
    setIsGameOver(false);
  };

  const handleSelectLeft = (id: string) => {
    if (matchedIds.includes(id)) return;
    sound.playClick();
    setSelectedLeft(id);
    setWrongPair(null);

    if (selectedRight) {
      checkMatch(id, selectedRight);
    }
  };

  const handleSelectRight = (id: string) => {
    if (matchedIds.includes(id)) return;
    sound.playClick();
    setSelectedRight(id);
    setWrongPair(null);

    if (selectedLeft) {
      checkMatch(selectedLeft, id);
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    setMoves(prev => prev + 1);

    if (leftId === rightId) {
      sound.playCorrect();
      const newMatched = [...matchedIds, leftId];
      setMatchedIds(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (newMatched.length === leftCards.length) {
        // Victory
        sound.playLevelUp();
        setIsGameOver(true);
        const earnedExp = 150;
        addExp(earnedExp, 'Ghép Đôi Thuật Ngữ KHTN 7', 'match_pairs');
        recordGameScore('match_pairs', 150);
      }
    } else {
      sound.playWrong();
      setWrongPair({ leftId, rightId });
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
      }, 700);
    }
  };

  if (isGameOver) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
            <Trophy className="w-10 h-10 text-amber-300" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">
              Xuất Sắc Hoàn Thành
            </span>
            <h2 className="text-3xl font-black text-white font-['Space_Grotesk']">
              Ghép Đôi Thành Công Toàn Bộ Thẻ!
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 bg-slate-800 rounded-2xl border border-slate-700 max-w-sm mx-auto">
            <div>
              <div className="text-xl font-bold text-teal-400 font-['Space_Grotesk']">{seconds}s</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Thời Gian</div>
            </div>
            <div>
              <div className="text-xl font-bold text-violet-400 font-['Space_Grotesk']">{moves} Lượt</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Số Lần Ghép</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Về Danh Sách Trò Chơi
            </button>
            <button
              onClick={startNewGame}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-extrabold text-xs shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi Ván Mới</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Danh Sách Trò Chơi</span>
        </button>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            <Timer className="w-4 h-4 text-teal-400" />
            <span>{seconds}s</span>
          </div>
          <div className="text-violet-400 font-bold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            Đã ghép: {matchedIds.length} / {leftCards.length}
          </div>
        </div>
      </div>

      {/* Guide Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
          <span>Nhấp chọn 1 thẻ Khái niệm ở Cột Trái, sau đó nhấp chọn Thẻ Định nghĩa/Công thức tương ứng ở Cột Phải.</span>
        </div>
      </div>

      {/* Match Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Terms */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase px-2 flex items-center justify-between">
            <span>Cột A: Khái Niệm / Đại Lượng</span>
            <span className="text-[10px] text-violet-400">Chọn thẻ A</span>
          </div>

          <div className="space-y-2.5">
            {leftCards.map(card => {
              const isMatched = matchedIds.includes(card.id);
              const isSelected = selectedLeft === card.id;
              const isWrong = wrongPair?.leftId === card.id;

              let cardStyle = 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-200';

              if (isMatched) {
                cardStyle = 'bg-emerald-950/40 border-emerald-600/50 text-emerald-300 opacity-60 pointer-events-none';
              } else if (isWrong) {
                cardStyle = 'bg-rose-950/80 border-rose-500 text-rose-300 animate-shake';
              } else if (isSelected) {
                cardStyle = 'bg-violet-950/80 border-violet-500 text-violet-200 ring-2 ring-violet-500/50 shadow-lg font-bold';
              }

              return (
                <button
                  key={card.uniqueId}
                  id={`match-left-${card.id}`}
                  onClick={() => handleSelectLeft(card.id)}
                  disabled={isMatched}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${cardStyle}`}
                >
                  <span>{card.text}</span>
                  {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Definitions */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase px-2 flex items-center justify-between">
            <span>Cột B: Định Nghĩa / Công Thức / Đơn Vị</span>
            <span className="text-[10px] text-teal-400">Chọn thẻ B</span>
          </div>

          <div className="space-y-2.5">
            {rightCards.map(card => {
              const isMatched = matchedIds.includes(card.id);
              const isSelected = selectedRight === card.id;
              const isWrong = wrongPair?.rightId === card.id;

              let cardStyle = 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-300';

              if (isMatched) {
                cardStyle = 'bg-emerald-950/40 border-emerald-600/50 text-emerald-300 opacity-60 pointer-events-none';
              } else if (isWrong) {
                cardStyle = 'bg-rose-950/80 border-rose-500 text-rose-300 animate-shake';
              } else if (isSelected) {
                cardStyle = 'bg-teal-950/80 border-teal-500 text-teal-200 ring-2 ring-teal-500/50 shadow-lg font-bold';
              }

              return (
                <button
                  key={card.uniqueId}
                  id={`match-right-${card.id}`}
                  onClick={() => handleSelectRight(card.id)}
                  disabled={isMatched}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm leading-relaxed transition-all duration-200 flex items-center justify-between ${cardStyle}`}
                >
                  <span>{card.text}</span>
                  {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
