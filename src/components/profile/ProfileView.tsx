import React from 'react';
import { useGame } from '../../context/GameContext';
import { ACHIEVEMENTS_LIST } from '../../data/gameData';
import { sound } from '../../utils/audio';
import {
  User,
  Award,
  Flame,
  Star,
  Zap,
  RotateCcw,
  CheckCircle2,
  Lock,
  BarChart2,
  Calendar,
  Sparkles
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { userProfile, resetProgress } = useGame();

  const rankTitles = [
    'Học Giả Tập Sự',
    'Nhà Thám Hiểm Trẻ',
    'Chuyên Viên Phân Tích',
    'Kỹ Sư Khoa Học 7',
    'Viện Sĩ KHTN',
    'Nhà Khoa Học Huyền Thoại'
  ];

  const currentRank = rankTitles[Math.min(userProfile.level - 1, rankTitles.length - 1)];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16 animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center text-4xl shadow-xl shadow-teal-950/50">
              {userProfile.avatar || '👨‍🔬'}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full shadow">
              Lv.{userProfile.level}
            </div>
          </div>

          <div className="text-center sm:text-left space-y-1.5 flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              {currentRank}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk']">
              {userProfile.name}
            </h1>
            <p className="text-xs text-slate-400">
              Học sinh Khoa học tự nhiên lớp 7 • Chương trình GDPT 2018
            </p>
          </div>

          <div className="flex sm:flex-col items-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-950/40 border border-amber-800/50 text-amber-300 text-xs font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{userProfile.stars} Sao</span>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-orange-950/40 border border-orange-800/50 text-orange-300 text-xs font-bold">
              <Flame className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span>Chuỗi {userProfile.streakDays} ngày</span>
            </div>
          </div>
        </div>

        {/* EXP Progress Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400">Tiến trình thăng cấp (Cấp {userProfile.level} ➔ {userProfile.level + 1})</span>
            <span className="text-teal-400 font-['Space_Grotesk']">{userProfile.exp} / {userProfile.maxExp} EXP</span>
          </div>
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.min(100, (userProfile.exp / userProfile.maxExp) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-1">
          <div className="text-2xl font-black text-white font-['Space_Grotesk']">
            {userProfile.totalQuestionsAnswered}
          </div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase">Câu Đã Trả Lời</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-1">
          <div className="text-2xl font-black text-emerald-400 font-['Space_Grotesk']">
            {userProfile.correctAnswers}
          </div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase">Số Câu Trả Lời Đúng</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-1">
          <div className="text-2xl font-black text-cyan-400 font-['Space_Grotesk']">
            {userProfile.totalQuestionsAnswered > 0
              ? `${Math.round((userProfile.correctAnswers / userProfile.totalQuestionsAnswered) * 100)}%`
              : '100%'}
          </div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase">Tỉ Lệ Chính Xác</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-1">
          <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">
            {userProfile.unlockedBadges.length} / {ACHIEVEMENTS_LIST.length}
          </div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase">Huy Hiệu Đạt Được</div>
        </div>
      </div>

      {/* Badges Showcase */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Bảng Huy Hiệu Vinh Dự Khoa Học</span>
            </h2>
            <p className="text-xs text-slate-400">
              Hoàn thành các trạm học tập và trò chơi để mở khóa toàn bộ danh hiệu
            </p>
          </div>
          <span className="text-xs font-bold text-amber-400 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700">
            {userProfile.unlockedBadges.length} Đã Mở
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS_LIST.map(badge => {
            const isUnlocked = userProfile.unlockedBadges.includes(badge.id);

            return (
              <div
                key={badge.id}
                id={`badge-card-${badge.id}`}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-slate-800/90 border-amber-500/50 shadow-md'
                    : 'bg-slate-950/40 border-slate-800/60 opacity-50'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl shrink-0 border border-slate-700">
                  {badge.icon}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-xs font-bold ${isUnlocked ? 'text-amber-300' : 'text-slate-400'}`}>
                      {badge.title}
                    </h4>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Progress Button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={() => {
            if (window.confirm('Bạn có chắc chắn muốn làm mới toàn bộ tiến trình học tập không?')) {
              resetProgress();
            }
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-rose-400 hover:text-rose-300 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/40 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Đặt lại tiến trình học tập</span>
        </button>
      </div>
    </div>
  );
};
