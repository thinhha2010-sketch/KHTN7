import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Discipline, Chapter, GameModeId } from '../types';
import {
  Compass,
  Atom,
  Boxes,
  Gauge,
  Volume2,
  SunMedium,
  Magnet,
  Sprout,
  Brain,
  TreeDeciduous,
  Dna,
  Star,
  Zap,
  FlaskConical,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Search,
  Trophy,
  Filter,
  Play
} from 'lucide-react';
import { sound } from '../utils/audio';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6" />,
  Atom: <Atom className="w-6 h-6" />,
  Boxes: <Boxes className="w-6 h-6" />,
  Gauge: <Gauge className="w-6 h-6" />,
  Volume2: <Volume2 className="w-6 h-6" />,
  SunMedium: <SunMedium className="w-6 h-6" />,
  Magnet: <Magnet className="w-6 h-6" />,
  Sprout: <Sprout className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  TreeDeciduous: <TreeDeciduous className="w-6 h-6" />,
  Dna: <Dna className="w-6 h-6" />
};

interface ScienceMapProps {
  onSelectChapter: (chapterId: number) => void;
  onLaunchGameMode: (mode: GameModeId, chapterId?: number) => void;
  onOpenLab: (simType: string) => void;
}

export const ScienceMap: React.FC<ScienceMapProps> = ({
  onSelectChapter,
  onLaunchGameMode,
  onOpenLab
}) => {
  const { stats, setChapterStars, addExp } = useGame();
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStation, setSelectedStation] = useState<Chapter | null>(null);

  const disciplines: { id: Discipline; label: string; icon: string; count: number }[] = [
    { id: 'all', label: 'Tất cả 11 Trạm', icon: '🌌', count: CHAPTERS_DATA.length },
    { id: 'method', label: 'Kĩ năng khoa học', icon: '🔬', count: CHAPTERS_DATA.filter(c => c.discipline === 'method').length },
    { id: 'chemistry', label: 'Chất & Hoá học', icon: '🧪', count: CHAPTERS_DATA.filter(c => c.discipline === 'chemistry').length },
    { id: 'physics', label: 'Năng lượng & Vật lí', icon: '⚡', count: CHAPTERS_DATA.filter(c => c.discipline === 'physics').length },
    { id: 'biology', label: 'Vật sống & Sinh học', icon: '🌱', count: CHAPTERS_DATA.filter(c => c.discipline === 'biology').length }
  ];

  const filteredChapters = CHAPTERS_DATA.filter(chapter => {
    const matchDiscipline = selectedDiscipline === 'all' || chapter.discipline === selectedDiscipline;
    const matchSearch =
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.lessons.some(l => l.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchDiscipline && matchSearch;
  });

  const getDisciplineTheme = (disc: string) => {
    switch (disc) {
      case 'method':
        return { border: 'border-teal-500/40', bg: 'bg-teal-950/20', text: 'text-teal-400', badge: 'bg-teal-500/20 text-teal-300' };
      case 'chemistry':
        return { border: 'border-cyan-500/40', bg: 'bg-cyan-950/20', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300' };
      case 'physics':
        return { border: 'border-amber-500/40', bg: 'bg-amber-950/20', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' };
      case 'biology':
        return { border: 'border-emerald-500/40', bg: 'bg-emerald-950/20', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' };
      default:
        return { border: 'border-slate-700', bg: 'bg-slate-900/40', text: 'text-slate-300', badge: 'bg-slate-700 text-slate-300' };
    }
  };

  const getSimTypeForChapter = (chapterId: number): string | null => {
    switch (chapterId) {
      case 1: return 'atom';
      case 2: return 'formula';
      case 3: return 'speed';
      case 4: return 'sound';
      case 5: return 'light';
      case 6: return 'magnet';
      case 7:
      case 8:
      case 9:
      case 10:
        return 'biology';
      default: return null;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner with Game Show Map Atmosphere */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -top-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              Bản Đồ Hành Trình Khám Phá Khoa Học 7
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
              Chinh Phục 11 Trạm Vũ Trụ KHTN 7
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Khám phá toàn bộ mạch kiến thức từ vi mô Nguyên tử, Năng lượng Vật lí đến Thế giới sống Sinh học. 
              Vượt qua từng trạm kiến thức để thu thập ⭐ Ngôi sao Tri thức và thăng hạng Viện sĩ Khoa học!
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="grid grid-cols-3 gap-3 bg-slate-900/80 border border-slate-700/70 p-4 rounded-2xl shrink-0 w-full md:w-auto">
            <div className="text-center px-2">
              <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">{stats.stars}/33</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Sao tích lũy</div>
            </div>
            <div className="text-center px-2 border-x border-slate-800">
              <div className="text-2xl font-black text-teal-400 font-['Space_Grotesk']">11/11</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Trạm mở khóa</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl font-black text-cyan-400 font-['Space_Grotesk']">{stats.exp}</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Điểm EXP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
        
        {/* Disciplines tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {disciplines.map(d => {
            const isSelected = selectedDiscipline === d.id;
            return (
              <button
                key={d.id}
                id={`filter-discipline-${d.id}`}
                onClick={() => {
                  sound.playClick();
                  setSelectedDiscipline(d.id);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-900/40 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/50'
                }`}
              >
                <span>{d.icon}</span>
                <span>{d.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20' : 'bg-slate-700 text-slate-400'}`}>
                  {d.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="search-chapters-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tìm bài học, chủ đề, định luật..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
          />
        </div>
      </div>

      {/* Chapters Grid / Station Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChapters.map((chapter, index) => {
          const theme = getDisciplineTheme(chapter.discipline);
          const starsEarned = stats.chapterStars[chapter.id] || 0;
          const simType = getSimTypeForChapter(chapter.id);
          const totalExercises = chapter.lessons.reduce((acc, l) => acc + (l.exercises?.length || 0), 0);

          return (
            <div
              key={chapter.id}
              id={`chapter-card-${chapter.id}`}
              className={`group relative bg-slate-900/90 hover:bg-slate-850 border ${theme.border} rounded-2xl p-5.5 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/30 flex flex-col justify-between overflow-hidden`}
            >
              {/* Subtle gradient background accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bg} rounded-bl-full -z-0 opacity-60 group-hover:scale-110 transition-transform`} />

              <div className="relative z-10 space-y-3.5">
                {/* Header: Roman number & discipline badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest font-['Space_Grotesk']">
                      TRẠM {chapter.id === 0 ? '0' : chapter.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${theme.badge}`}>
                      {chapter.badge}
                    </span>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map(s => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= starsEarned
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Chapter Title & Icon */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className={`w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center ${theme.text} shrink-0 group-hover:scale-105 transition-transform shadow-md`}>
                    {ICONS_MAP[chapter.iconName] || <BookOpen className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug line-clamp-2">
                      {chapter.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                </div>

                {/* Lessons count & meta info */}
                <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    <span>{chapter.lessons.length} bài học</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{totalExercises} bài tập SGK/SBT</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-slate-800">
                <button
                  id={`btn-explore-chapter-${chapter.id}`}
                  onClick={() => {
                    sound.playClick();
                    onSelectChapter(chapter.id);
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                  <span>Xem Lý Thuyết</span>
                </button>

                <button
                  id={`btn-quick-quiz-chapter-${chapter.id}`}
                  onClick={() => {
                    sound.playClick();
                    onLaunchGameMode('speed_arena', chapter.id);
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-bold shadow-md shadow-teal-950/50 transition-all"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Đấu Trí</span>
                </button>

                {simType && (
                  <button
                    id={`btn-lab-chapter-${chapter.id}`}
                    onClick={() => {
                      sound.playClick();
                      onOpenLab(simType);
                    }}
                    className="col-span-2 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-950/40 hover:bg-teal-900/40 text-teal-300 text-[11px] font-semibold border border-teal-800/40 hover:border-teal-600/50 transition-colors"
                  >
                    <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
                    <span>Mở Thí Nghiệm Ảo ({chapter.badge})</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
