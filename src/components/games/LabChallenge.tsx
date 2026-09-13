import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';
import {
  FlaskConical,
  ChevronLeft,
  Atom,
  Boxes,
  Gauge,
  Volume2,
  SunMedium,
  Magnet,
  Sprout,
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';

import { AtomSimulator } from '../simulators/AtomSimulator';
import { FormulaCalculator } from '../simulators/FormulaCalculator';
import { SpeedGraphSimulator } from '../simulators/SpeedGraphSimulator';
import { SoundOscillatorSimulator } from '../simulators/SoundOscillatorSimulator';
import { LightReflectionSimulator } from '../simulators/LightReflectionSimulator';
import { MagnetFieldSimulator } from '../simulators/MagnetFieldSimulator';
import { BioExplorerSimulator } from '../simulators/BioExplorerSimulator';

interface LabChallengeProps {
  initialSimType?: string | null;
  onBack: () => void;
}

export const LabChallenge: React.FC<LabChallengeProps> = ({ initialSimType, onBack }) => {
  const { addExp, unlockBadge } = useGame();

  const [activeLab, setActiveLab] = useState<string>(initialSimType || 'atom');
  const [completedLabs, setCompletedLabs] = useState<string[]>([]);

  const labs = [
    {
      id: 'atom',
      name: 'Nguyên Tử & Bảng Tuần Hoàn',
      chapter: 'Chương I (Hóa học)',
      icon: <Atom className="w-5 h-5 text-cyan-400" />,
      component: <AtomSimulator />
    },
    {
      id: 'formula',
      name: 'Phân Tử & Quy Tắc Hóa Trị',
      chapter: 'Chương II (Hóa học)',
      icon: <Boxes className="w-5 h-5 text-teal-400" />,
      component: <FormulaCalculator />
    },
    {
      id: 'speed',
      name: 'Tốc Độ Chuyển Động & Đồ Thị s-t',
      chapter: 'Chương III (Vật lí)',
      icon: <Gauge className="w-5 h-5 text-amber-400" />,
      component: <SpeedGraphSimulator />
    },
    {
      id: 'sound',
      name: 'Sóng Âm & Tần Số Dao Động',
      chapter: 'Chương IV (Vật lí)',
      icon: <Volume2 className="w-5 h-5 text-indigo-400" />,
      component: <SoundOscillatorSimulator />
    },
    {
      id: 'light',
      name: 'Gương Phẳng & Phản Xạ Ánh Sáng',
      chapter: 'Chương V (Vật lí)',
      icon: <SunMedium className="w-5 h-5 text-yellow-400" />,
      component: <LightReflectionSimulator />
    },
    {
      id: 'magnet',
      name: 'Từ Trường & Nam Châm Điện',
      chapter: 'Chương VI (Vật lí)',
      icon: <Magnet className="w-5 h-5 text-rose-400" />,
      component: <MagnetFieldSimulator />
    },
    {
      id: 'biology',
      name: 'Quang Hợp, Khí Khổng & Dòng Mạch Dẫn',
      chapter: 'Chương VII-X (Sinh học)',
      icon: <Sprout className="w-5 h-5 text-emerald-400" />,
      component: <BioExplorerSimulator />
    }
  ];

  const handleSelectLab = (labId: string) => {
    sound.playClick();
    setActiveLab(labId);

    if (!completedLabs.includes(labId)) {
      const updated = [...completedLabs, labId];
      setCompletedLabs(updated);
      addExp(50, `Thực hành Thí nghiệm: ${labs.find(l => l.id === labId)?.name}`, 'lab');

      if (updated.length >= 5) {
        unlockBadge('b_lab_virtuoso');
      }
    }
  };

  const currentLab = labs.find(l => l.id === activeLab) || labs[0];

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Bản Đồ & Trò Chơi</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
          <FlaskConical className="w-4 h-4" />
          <span>Đã khám phá: {completedLabs.length} / {labs.length} Phòng Lab</span>
        </div>
      </div>

      {/* Lab Tabs Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {labs.map(lab => {
          const isActive = activeLab === lab.id;
          const isDone = completedLabs.includes(lab.id);

          return (
            <button
              key={lab.id}
              id={`lab-tab-${lab.id}`}
              onClick={() => handleSelectLab(lab.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap border transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-500 shadow-lg shadow-teal-950/50'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800'
              }`}
            >
              {lab.icon}
              <div className="text-left">
                <div>{lab.name}</div>
                <div className={`text-[10px] font-normal ${isActive ? 'text-teal-100' : 'text-slate-500'}`}>
                  {lab.chapter}
                </div>
              </div>
              {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-300 ml-1" />}
            </button>
          );
        })}
      </div>

      {/* Simulator Component Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl">
        {currentLab.component}
      </div>
    </div>
  );
};
