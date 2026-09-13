import React, { useState } from 'react';
import { GameModeId, Discipline } from '../types';
import { useGame } from '../context/GameContext';
import {
  Zap,
  Mountain,
  Compass,
  Eye,
  Grid,
  CheckCircle2,
  Table,
  FlaskConical,
  Award,
  Flame,
  Play,
  Trophy,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/audio';

interface GameLauncherProps {
  onSelectGame: (gameId: GameModeId) => void;
}

export const GameLauncher: React.FC<GameLauncherProps> = ({ onSelectGame }) => {
  const { stats } = useGame();
  const [filterDiscipline, setFilterDiscipline] = useState<Discipline>('all');

  const games: {
    id: GameModeId;
    name: string;
    englishName: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    badge: string;
    difficulty: 'Dễ' | 'Trung bình' | 'Thử thách' | 'Nâng cao';
    expReward: string;
    highlight?: boolean;
  }[] = [
    {
      id: 'speed_arena',
      name: 'Đấu Trường Nhanh',
      englishName: 'Speed Arena Quiz',
      description: 'Trắc nghiệm tính giờ 15s với hệ số nhân điểm Streak liên hoàn. Thử thách phản xạ và độ chính xác tối đa!',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-600',
      badge: 'Phản Xạ Nhanh',
      difficulty: 'Trung bình',
      expReward: '+100-300 EXP',
      highlight: true
    },
    {
      id: 'challenge_ladder',
      name: 'Vượt Qua Thử Thách',
      englishName: 'Knowledge Tower Climb',
      description: 'Leo tháp 10 tầng thử thách KHTN. Bạn có 3 trái tim (mạng) cùng quyền trợ giúp 50:50 và Gợi ý chuyên gia!',
      icon: <Mountain className="w-6 h-6" />,
      color: 'from-blue-600 to-indigo-700',
      badge: 'Leo Tháp 10 Tầng',
      difficulty: 'Thử thách',
      expReward: '+250 EXP'
    },
    {
      id: 'adventure',
      name: 'Thám Hiểm Khoa Học',
      englishName: 'Science Adventure Missions',
      description: 'Nhiệm vụ cốt truyện thực tế: Giải mã nguyên tử bí ẩn, Điều tra tốc độ xe đèo, Giải cứu nhà kính Smart Farm...',
      icon: <Compass className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-700',
      badge: 'Nhiệm Vụ Thực Tế',
      difficulty: 'Trung bình',
      expReward: '+150-200 EXP'
    },
    {
      id: 'visual_quiz',
      name: 'Nhìn Hình Đoán Hiện Tượng',
      englishName: 'Visual Diagram Inspector',
      description: 'Quan sát các sơ đồ vi mô, đồ thị s-t, đường sức từ, cơ chế đóng mở khí khổng để trả lời bài toán tương tác.',
      icon: <Eye className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Tư Duy Trực Quan',
      difficulty: 'Trung bình',
      expReward: '+120 EXP'
    },
    {
      id: 'match_pairs',
      name: 'Ghép Đôi Khái Niệm & Công Thức',
      englishName: 'Match Pairs Memory',
      description: 'Kết nối các cặp thẻ: Hạt cơ bản - Điện tích, Định luật phản xạ, Công thức tốc độ v = s/t, Quang hợp & Hô hấp.',
      icon: <Grid className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-700',
      badge: 'Ghi Nhớ Siêu Tốc',
      difficulty: 'Dễ',
      expReward: '+100 EXP'
    },
    {
      id: 'true_false',
      name: 'Đúng / Sai Thần Tốc',
      englishName: 'True / False Blitz',
      description: 'Phán đoán khẳng định khoa học đúng hay sai trong 7 giây. Rèn luyện sự nhạy bén và phân biệt kiến thức cốt lõi.',
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'from-rose-500 to-pink-600',
      badge: 'Chớp Nhoáng 7s',
      difficulty: 'Dễ',
      expReward: '+80 EXP'
    },
    {
      id: 'crossword',
      name: 'Ô Chữ Khoa Học',
      englishName: 'Science Crossword Puzzle',
      description: 'Giải mã các hàng ngang từ khóa KHTN 7 với gợi ý thông minh: PROTON, QUANG HỢP, TỐC ĐỘ, NAM CHÂM...',
      icon: <Table className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-600',
      badge: 'Giải Mã Từ Khóa',
      difficulty: 'Trung bình',
      expReward: '+150 EXP'
    },
    {
      id: 'lab_challenge',
      name: 'Thử Thách Thực Nghiệm',
      englishName: 'Interactive Virtual Labs',
      description: '7 phòng thí nghiệm ảo tương tác: Mô hình nguyên tử Rutherford, Thước đo tốc độ, Sóng âm, Gương phẳng, Từ phổ...',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'from-emerald-600 to-green-700',
      badge: 'Thí Nghiệm Ảo',
      difficulty: 'Thử thách',
      expReward: '+200 EXP',
      highlight: true
    },
    {
      id: 'boss_scientist',
      name: 'Chinh Phục Nhà Khoa Học',
      englishName: 'Master Scientist Duel',
      description: 'Đấu trí với 4 Đại Danh Nhân Khoa Học: Mendeleev (Hóa học), Newton (Cơ học), Ørsted (Từ học), Darwin (Sinh học).',
      icon: <Award className="w-6 h-6" />,
      color: 'from-amber-600 to-yellow-600',
      badge: 'Đấu Boss Khoa Học',
      difficulty: 'Nâng cao',
      expReward: '+300 EXP',
      highlight: true
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Game Center Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Trung Tâm 9 Trò Chơi Học Tập
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Chọn Chế Độ Chinh Phục Kiến Thức
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Các hình thức game show đa dạng từ phản xạ nhanh, leo tháp, ghép đôi, ô chữ đến thực nghiệm và đấu trí với các nhà khoa học vĩ đại.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 p-3.5 rounded-2xl shrink-0">
            <Trophy className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase">Điểm cao nhất</div>
              <div className="text-lg font-extrabold text-white font-['Space_Grotesk']">
                {Object.values(stats.completedGameModes).reduce<number>((a, b) => Math.max(a, Number(b) || 0), 0)} Điểm
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => {
          const highScore = stats.completedGameModes[game.id] || 0;

          return (
            <div
              key={game.id}
              id={`game-card-${game.id}`}
              className={`group relative bg-slate-900/90 hover:bg-slate-850 border ${
                game.highlight ? 'border-teal-500/50 hover:border-teal-400' : 'border-slate-800 hover:border-slate-700'
              } rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between overflow-hidden`}
            >
              {/* Corner accent glow */}
              <div
                className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${game.color} opacity-10 rounded-bl-full group-hover:scale-125 transition-transform duration-500 -z-0`}
              />

              <div className="relative z-10 space-y-4">
                {/* Header: Mode index & Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 font-['Space_Grotesk'] uppercase tracking-wider">
                    CHẾ ĐỘ #{index + 1}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {game.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    {game.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                      {game.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {game.englishName}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {game.description}
                </p>

                {/* Difficulty & Rewards */}
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold">Độ khó:</span>
                    <span className="text-teal-400 font-bold">{game.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <span>{game.expReward}</span>
                  </div>
                </div>
              </div>

              {/* Play Button */}
              <div className="relative z-10 mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {highScore > 0 ? `Kỉ lục: ${highScore}đ` : 'Chưa thi đấu'}
                </span>

                <button
                  id={`btn-launch-game-${game.id}`}
                  onClick={() => {
                    sound.playClick();
                    onSelectGame(game.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${game.color} hover:brightness-110 text-white text-xs font-extrabold shadow-md transition-all active:scale-95`}
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Bắt Đầu</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
