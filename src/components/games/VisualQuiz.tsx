import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { VISUAL_QUIZ_DATA } from '../../data/gameData';
import { VisualQuizItem } from '../../types';
import { sound } from '../../utils/audio';
import {
  Eye,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy
} from 'lucide-react';

interface VisualQuizProps {
  onBack: () => void;
}

export const VisualQuiz: React.FC<VisualQuizProps> = ({ onBack }) => {
  const { addExp, recordAnswer, recordGameScore } = useGame();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentItem = VISUAL_QUIZ_DATA[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentItem.correctIndex;

    if (isCorrect) {
      sound.playCorrect();
      setScore(prev => prev + 100);
      recordAnswer(true, currentItem.chapterId);
    } else {
      sound.playWrong();
      recordAnswer(false, currentItem.chapterId);
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex + 1 < VISUAL_QUIZ_DATA.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Game Over
      sound.playLevelUp();
      setIsGameOver(true);
      const earnedExp = Math.round(score / 5);
      addExp(earnedExp, 'Nhìn Hình Đoán Hiện Tượng KHTN 7', 'visual_quiz');
      recordGameScore('visual_quiz', score);
    }
  };

  const handleRestart = () => {
    sound.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsGameOver(false);
  };

  // Render SVG diagram based on imageSvgType
  const renderDiagramSvg = (type: string) => {
    switch (type) {
      case 'atom_structure':
        return (
          <svg viewBox="0 0 400 240" className="w-full max-h-60 mx-auto">
            {/* Nucleus */}
            <circle cx="200" cy="120" r="28" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2.5" />
            <circle cx="194" cy="115" r="7" fill="#ef4444" />
            <text x="194" y="118" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">p+</text>
            <circle cx="206" cy="115" r="7" fill="#ef4444" />
            <text x="206" y="118" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">p+</text>
            <circle cx="200" cy="126" r="7" fill="#94a3b8" />
            <text x="200" y="129" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">n</text>
            <text x="200" y="102" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Hạt nhân (6p+, 6n)</text>

            {/* Orbit 1 */}
            <circle cx="200" cy="120" r="50" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="200" cy="70" r="6" fill="#06b6d4" />
            <circle cx="200" cy="170" r="6" fill="#06b6d4" />

            {/* Orbit 2 */}
            <circle cx="200" cy="120" r="85" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="115" cy="120" r="6" fill="#06b6d4" />
            <circle cx="285" cy="120" r="6" fill="#06b6d4" />
            <circle cx="140" cy="60" r="6" fill="#06b6d4" />
            <circle cx="260" cy="180" r="6" fill="#06b6d4" />

            <text x="200" y="225" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
              2 Lớp Electron (Tổng 6 electron)
            </text>
          </svg>
        );

      case 'photosynthesis':
        return (
          <svg viewBox="0 0 400 240" className="w-full max-h-60 mx-auto">
            {/* Sun */}
            <circle cx="60" cy="50" r="24" fill="#f59e0b" />
            <path d="M60 15 L60 22 M60 78 L60 85 M25 50 L32 50 M88 50 L95 50" stroke="#f59e0b" strokeWidth="3" />
            <text x="60" y="55" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Nắng</text>

            {/* Leaf */}
            <path d="M120 180 Q200 40 320 120 Q240 220 120 180 Z" fill="#10b981" stroke="#059669" strokeWidth="3" />
            <path d="M120 180 Q220 140 320 120" stroke="#047857" strokeWidth="2.5" fill="none" />

            {/* Inputs */}
            <g transform="translate(130, 70)">
              <rect width="80" height="26" rx="6" fill="#0284c7" />
              <text x="40" y="17" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">CO₂ + Nước ⬇</text>
            </g>

            {/* Outputs */}
            <g transform="translate(250, 160)">
              <rect width="110" height="26" rx="6" fill="#16a34a" />
              <text x="55" y="17" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Glucose + O₂ ⬆</text>
            </g>
          </svg>
        );

      case 'speed_graph':
        return (
          <svg viewBox="0 0 400 240" className="w-full max-h-60 mx-auto bg-slate-950/60 rounded-xl p-2">
            {/* Coordinate axes */}
            <line x1="60" y1="200" x2="360" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="60" y1="200" x2="60" y2="30" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="350" y="218" fill="#94a3b8" fontSize="11" fontWeight="bold">t (s)</text>
            <text x="40" y="40" fill="#94a3b8" fontSize="11" fontWeight="bold">s (m)</text>

            {/* Graph Line */}
            {/* Phase 1: Moving */}
            <line x1="60" y1="200" x2="160" y2="100" stroke="#06b6d4" strokeWidth="3.5" />
            <text x="100" y="140" fill="#06b6d4" fontSize="10" fontWeight="bold">Giai đoạn 1</text>

            {/* Phase 2: Horizontal Line */}
            <line x1="160" y1="100" x2="280" y2="100" stroke="#f59e0b" strokeWidth="4" />
            <circle cx="160" cy="100" r="5" fill="#f59e0b" />
            <circle cx="280" cy="100" r="5" fill="#f59e0b" />
            <text x="220" y="85" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">Đoạn Nằm Ngang (?)</text>

            {/* Dotted guides */}
            <line x1="160" y1="100" x2="160" y2="200" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="280" y1="100" x2="280" y2="200" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="60" y1="100" x2="160" y2="100" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
            <text x="45" y="104" fill="#cbd5e1" fontSize="10">s = 20m</text>
          </svg>
        );

      case 'reflection_ray':
        return (
          <svg viewBox="0 0 400 240" className="w-full max-h-60 mx-auto bg-slate-950/60 rounded-xl p-2">
            {/* Mirror */}
            <line x1="60" y1="180" x2="340" y2="180" stroke="#38bdf8" strokeWidth="4" />
            {/* Mirror hatch */}
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1={70 + i * 20} y1="180" x2={60 + i * 20} y2="192" stroke="#0284c7" strokeWidth="1.5" />
            ))}
            <text x="200" y="210" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Mặt gương phẳng</text>

            {/* Normal line */}
            <line x1="200" y1="180" x2="200" y2="40" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
            <text x="205" y="50" fill="#94a3b8" fontSize="11">Pháp tuyến N</text>

            {/* Incident Ray */}
            <line x1="100" y1="70" x2="200" y2="180" stroke="#eab308" strokeWidth="3" />
            <text x="85" y="65" fill="#eab308" fontSize="12" fontWeight="bold">Tia tới SI</text>
            <text x="160" y="120" fill="#facc15" fontSize="11">i = 35°</text>

            {/* Reflected Ray */}
            <line x1="200" y1="180" x2="300" y2="70" stroke="#22c55e" strokeWidth="3" />
            <text x="305" y="65" fill="#22c55e" fontSize="12" fontWeight="bold">Tia phản xạ IR</text>
            <text x="235" y="120" fill="#4ade80" fontSize="11">i' = 35°</text>

            <text x="200" y="175" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Điểm tới I</text>
          </svg>
        );

      case 'magnetic_lines':
        return (
          <svg viewBox="0 0 400 240" className="w-full max-h-60 mx-auto bg-slate-950/60 rounded-xl p-2">
            {/* Bar magnet */}
            <rect x="130" y="105" width="70" height="30" fill="#ef4444" rx="3" />
            <text x="165" y="125" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">N (Bắc)</text>

            <rect x="200" y="105" width="70" height="30" fill="#3b82f6" rx="3" />
            <text x="235" y="125" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">S (Nam)</text>

            {/* Field arcs */}
            <path d="M135 105 C 100 40, 300 40, 265 105" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="3 2" />
            <path d="M135 135 C 100 200, 300 200, 265 135" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="3 2" />
            <path d="M145 105 C 130 65, 270 65, 255 105" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <path d="M145 135 C 130 175, 270 175, 255 135" stroke="#06b6d4" strokeWidth="1.5" fill="none" />

            {/* Arrows */}
            <text x="200" y="42" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">➔ ➔ ➔</text>
            <text x="200" y="206" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">➔ ➔ ➔</text>

            <text x="200" y="232" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
              Đường sức từ ngoài: Ra Cực Bắc (N) ➔ Vào Cực Nam (S)
            </text>
          </svg>
        );

      default:
        return (
          <div className="w-full h-48 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 text-xs">
            Sơ đồ trực quan KHTN 7
          </div>
        );
    }
  };

  if (isGameOver) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-xl">
            <Trophy className="w-10 h-10 text-amber-300" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Hoàn Thành Thử Thách Trực Quan
            </span>
            <h2 className="text-3xl font-black text-white font-['Space_Grotesk']">
              Kết Quả Nhìn Hình Đoán Hiện Tượng
            </h2>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 max-w-sm mx-auto">
            <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">
              {score} Điểm (+{Math.round(score / 5)} EXP)
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Độ chính xác tư duy hình học & mô hình</div>
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
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thực Hành Lại</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Danh Sách Trò Chơi</span>
        </button>

        <div className="text-xs font-bold text-cyan-400 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700">
          Hình {currentIndex + 1} / {VISUAL_QUIZ_DATA.length}
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Title */}
        <div className="space-y-1">
          <span className="text-xs font-bold text-cyan-400 uppercase">
            {currentItem.discipline === 'chemistry' ? '🧪 Hóa học' : currentItem.discipline === 'physics' ? '⚡ Vật lí' : '🌱 Sinh học'}
          </span>
          <h2 className="text-xl font-bold text-white">
            {currentItem.title}
          </h2>
        </div>

        {/* Render Visual Illustration */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-center">
          {renderDiagramSvg(currentItem.imageSvgType)}
        </div>

        {/* Question Text */}
        <p className="text-sm font-semibold text-slate-200 leading-relaxed">
          {currentItem.question}
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {currentItem.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentItem.correctIndex;

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
                id={`visual-option-${idx}`}
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
            <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
              <Sparkles className="w-4 h-4" />
              <span>Phân tích sơ đồ:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentItem.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              id="btn-visual-next"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-black shadow-lg transition-all active:scale-95"
            >
              <span>{currentIndex + 1 < VISUAL_QUIZ_DATA.length ? 'Hình Tiếp Theo' : 'Xem Tổng Kết'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
