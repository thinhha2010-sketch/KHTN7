import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { ADVENTURE_MISSIONS } from '../../data/gameData';
import { AdventureMission } from '../../types';
import { sound } from '../../utils/audio';
import {
  Compass,
  ChevronLeft,
  MapPin,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Trophy,
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface ScienceAdventureProps {
  onBack: () => void;
}

export const ScienceAdventure: React.FC<ScienceAdventureProps> = ({ onBack }) => {
  const { addExp, recordAnswer, recordGameScore } = useGame();

  const [activeMission, setActiveMission] = useState<AdventureMission | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isMissionComplete, setIsMissionComplete] = useState(false);

  const handleStartMission = (mission: AdventureMission) => {
    sound.playClick();
    setActiveMission(mission);
    setCurrentStepIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsMissionComplete(false);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || !activeMission) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const step = activeMission.steps[currentStepIndex];
    const isCorrect = index === step.correctIndex;

    if (isCorrect) {
      sound.playCorrect();
      recordAnswer(true, activeMission.chapterId);
    } else {
      sound.playWrong();
      recordAnswer(false, activeMission.chapterId);
    }
  };

  const handleNextStep = () => {
    if (!activeMission) return;
    sound.playClick();

    if (currentStepIndex + 1 < activeMission.steps.length) {
      setCurrentStepIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Mission Complete
      sound.playLevelUp();
      setIsMissionComplete(true);
      addExp(activeMission.rewardExp, `Hoàn thành nhiệm vụ: ${activeMission.title}`, 'adventure');
      recordGameScore('adventure', activeMission.rewardExp);
    }
  };

  // If no mission active, display mission selector
  if (!activeMission) {
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
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase">
            <Compass className="w-3.5 h-3.5" />
            Thám Hiểm & Giải Quyết Tình Huống Thực Tế
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            Chọn Nhiệm Vụ Khoa Học 7
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Mỗi nhiệm vụ đưa bạn vào một bối cảnh thực tiễn: Lắp ráp năng lượng, cứu nông trại thông minh, căn chỉnh ngọn hải đăng hay phân tích tốc độ giao thông.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADVENTURE_MISSIONS.map(mission => (
            <div
              key={mission.id}
              id={`mission-card-${mission.id}`}
              className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 space-y-4 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{mission.location}</span>
                  </span>
                  <span className="text-xs font-black text-amber-400">+{mission.rewardExp} EXP</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {mission.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {mission.story}
                </p>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs text-slate-400">
                  <strong className="text-slate-200">Mục tiêu:</strong> {mission.objective}
                </div>
              </div>

              <button
                id={`btn-start-mission-${mission.id}`}
                onClick={() => handleStartMission(mission)}
                className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-md transition-all active:scale-95"
              >
                <span>Nhận Nhiệm Vụ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Active mission complete view
  if (isMissionComplete) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xl shadow-teal-500/20">
            <Trophy className="w-10 h-10 text-amber-300" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Nhiệm Vụ Thành Công
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk']">
              {activeMission.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Bạn đã vận dụng xuất sắc các nguyên lí KHTN 7 để giải quyết trọn vẹn tình huống thực tiễn!
            </p>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 max-w-sm mx-auto">
            <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">
              +{activeMission.rewardExp} EXP
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Kinh nghiệm nhà thám hiểm</div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveMission(null)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Chọn Nhiệm Vụ Khác
            </button>
          </div>
        </div>
      </div>
    );
  }

  const step = activeMission.steps[currentStepIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveMission(null)}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Danh Sách Nhiệm Vụ</span>
        </button>

        <div className="text-xs font-bold text-emerald-400 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700">
          Chặng {currentStepIndex + 1} / {activeMission.steps.length}
        </div>
      </div>

      {/* Mission Scenario Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        
        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
            <MapPin className="w-4 h-4" />
            <span>{activeMission.location}</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            {activeMission.title}
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
            "{step.prompt}"
          </p>
        </div>

        {/* Step Question */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-white">
            {step.question}
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {step.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === step.correctIndex;

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
                  id={`adventure-opt-${idx}`}
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
        </div>

        {/* Explanation upon answering */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
              <Sparkles className="w-4 h-4" />
              <span>Phân tích tình huống:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {step.explanation}
            </p>
          </div>
        )}

        {/* Next step button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              id="btn-adventure-next-step"
              onClick={handleNextStep}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-lg transition-all active:scale-95"
            >
              <span>{currentStepIndex + 1 < activeMission.steps.length ? 'Chặng Tiếp Theo' : 'Hoàn Tất Nhiệm Vụ'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
