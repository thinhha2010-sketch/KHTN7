import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { MainView } from '../types';
import {
  Compass,
  Gamepad2,
  Users,
  FlaskConical,
  BookOpen,
  GraduationCap,
  Volume2,
  VolumeX,
  Maximize,
  Sparkles,
  Flame,
  Award,
  Star
} from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile }) => {
  const { currentView, setCurrentView, setCurrentGameMode, stats, getCurrentRank, isMuted, toggleAudio } = useGame();
  const rank = getCurrentRank();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNavClick = (view: MainView) => {
    sound.playClick();
    setCurrentView(view);
    setCurrentGameMode(null);
  };

  const toggleFullscreen = () => {
    sound.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const navItems: { id: MainView; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'map', label: 'Bản Đồ KHTN 7', icon: <Compass className="w-4 h-4" /> },
    { id: 'games', label: '9 Trò Chơi', icon: <Gamepad2 className="w-4 h-4" />, badge: 'HOT' },
    { id: 'battle', label: 'Thi Đấu Lớp', icon: <Users className="w-4 h-4" />, badge: 'Đấu Đội' },
    { id: 'lab', label: 'Thí Nghiệm Ảo', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'quiz_bank', label: 'Ngân Hàng Đề', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'teacher', label: 'Giáo Viên', icon: <GraduationCap className="w-4 h-4" /> }
  ];

  const progressPercent = rank.nextExp
    ? Math.min(100, Math.round(((stats.exp - rank.prevExp) / (rank.nextExp - rank.prevExp)) * 100))
    : 100;

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & App Title */}
          <div 
            id="brand-logo-button"
            onClick={() => handleNavClick('map')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-400 bg-clip-text text-transparent font-['Space_Grotesk']">
                  KHTN 7
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  GDPT 2018
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Hành Trình Chinh Phục Khoa Học
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700/60 shadow-inner">
            {navItems.map(item => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-900/40 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Streak & Star Counter */}
            <div className="hidden sm:flex items-center gap-3 bg-slate-800/90 border border-slate-700/70 px-3 py-1.5 rounded-xl text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold" title="Tổng số sao đạt được">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{stats.stars}</span>
              </div>
              <div className="h-3.5 w-px bg-slate-700" />
              <div className="flex items-center gap-1.5 text-orange-400 font-bold" title="Chuỗi trả lời đúng">
                <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
                <span>x{stats.streak}</span>
              </div>
            </div>

            {/* EXP & Player Rank Badge */}
            <button
              id="player-profile-badge"
              onClick={() => {
                sound.playClick();
                onOpenProfile();
              }}
              className="flex items-center gap-2.5 bg-gradient-to-r from-slate-800 to-slate-800/90 hover:from-slate-700 hover:to-slate-800 border border-slate-700 hover:border-teal-500/50 px-3 py-1.5 rounded-xl text-left transition-all group"
            >
              <div className="text-xl group-hover:scale-110 transition-transform">
                {rank.icon}
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-200">
                  <span>{rank.title}</span>
                  <span className="text-[10px] text-teal-400 font-semibold bg-teal-950/60 px-1.5 rounded border border-teal-800/50">
                    Lv.{stats.level}
                  </span>
                </div>
                <div className="w-24 bg-slate-700/80 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              <Award className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" />
            </button>

            {/* Audio Toggle */}
            <button
              id="audio-toggle-button"
              onClick={toggleAudio}
              title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
              className={`p-2 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-slate-800/80 text-slate-500 border-slate-700 hover:text-slate-300'
                  : 'bg-teal-900/30 text-teal-400 border-teal-700/50 hover:bg-teal-900/50'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Fullscreen Toggle */}
            <button
              id="fullscreen-toggle-button"
              onClick={toggleFullscreen}
              title="Toàn màn hình (Thích hợp trình chiếu)"
              className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700 hover:border-slate-600 transition-all hidden sm:block"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto py-2 gap-1 border-t border-slate-800/80 scrollbar-none text-xs">
          {navItems.map(item => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                  isActive
                    ? 'bg-teal-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
