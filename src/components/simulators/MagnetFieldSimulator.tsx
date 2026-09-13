import React, { useState } from 'react';
import { Compass, Zap, RotateCw, Sparkles, Activity } from 'lucide-react';

export const MagnetFieldSimulator: React.FC = () => {
  const [magnetType, setMagnetType] = useState<'bar' | 'electromagnet'>('bar');
  const [coilTurns, setCoilTurns] = useState<number>(30); // 10 to 60 turns
  const [currentAmp, setCurrentAmp] = useState<number>(2.0); // 0 to 5 Amperes
  const [isCurrentOn, setIsCurrentOn] = useState<boolean>(true);
  const [hasIronCore, setHasIronCore] = useState<boolean>(true);

  // Magnetic force score calculated
  const magneticStrength = isCurrentOn
    ? ((coilTurns * currentAmp * (hasIronCore ? 4 : 1)) / 10).toFixed(1)
    : "0.0";
  const attractedPins = isCurrentOn ? Math.round(Number(magneticStrength) * 1.5) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <Compass className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Mô phỏng Từ trường & Thí nghiệm Nam châm điện
            </h3>
            <p className="text-sm text-slate-500">
              Đường sức từ 'Vào Nam - Ra Bắc', kim nam châm định hướng, và cấu tạo nam châm điện
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setMagnetType('bar')}
            className={`px-3 py-1.5 rounded-lg transition-all ${magnetType === 'bar' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Nam châm thẳng (Từ trường)
          </button>
          <button
            onClick={() => setMagnetType('electromagnet')}
            className={`px-3 py-1.5 rounded-lg transition-all ${magnetType === 'electromagnet' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Nam châm điện (Tự chỉnh lực)
          </button>
        </div>
      </div>

      {magnetType === 'bar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Bar Magnet Magnetic Lines SVG */}
          <div className="lg:col-span-7 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative min-h-[340px] shadow-inner">
            <svg viewBox="0 0 440 280" className="w-full max-w-[420px] h-[260px]">
              {/* Magnetic Field Lines Curves with Arrows */}
              {/* Top loop 1 */}
              <path d="M 170 120 C 170 30, 270 30, 270 120" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Top loop 2 */}
              <path d="M 150 120 C 150 -10, 290 -10, 290 120" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />
              {/* Bottom loop 1 */}
              <path d="M 170 160 C 170 250, 270 250, 270 160" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Bottom loop 2 */}
              <path d="M 150 160 C 150 290, 290 290, 290 160" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Central horizontal exit lines */}
              <line x1="290" y1="140" x2="420" y2="140" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="20" y1="140" x2="150" y2="140" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Arrow Heads indicating Direction: Out from North (Right), Into South (Left) */}
              <polygon points="350,136 360,140 350,144" fill="#38bdf8" />
              <polygon points="90,136 80,140 90,144" fill="#38bdf8" />
              <polygon points="215,28 225,28 220,24" fill="#38bdf8" />
              <polygon points="225,252 215,252 220,256" fill="#38bdf8" />

              {/* Bar Magnet Body */}
              <g>
                {/* South Pole (S - Blue) */}
                <rect x="150" y="115" width="70" height="50" rx="4" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
                <text x="185" y="146" fill="#ffffff" fontSize="16" fontWeight="extrabold" textAnchor="middle">
                  S (Nam)
                </text>

                {/* North Pole (N - Red) */}
                <rect x="220" y="115" width="70" height="50" rx="4" fill="#dc2626" stroke="#b91c1c" strokeWidth="2" />
                <text x="255" y="146" fill="#ffffff" fontSize="16" fontWeight="extrabold" textAnchor="middle">
                  N (Bắc)
                </text>
              </g>

              {/* Compass Needles oriented around */}
              {/* Compass 1 Top */}
              <g transform="translate(220, 40) rotate(180)">
                <polygon points="0,-12 4,0 -4,0" fill="#dc2626" />
                <polygon points="0,12 4,0 -4,0" fill="#2563eb" />
                <circle cx="0" cy="0" r="2" fill="#ffffff" />
              </g>

              {/* Compass 2 Right */}
              <g transform="translate(380, 140) rotate(90)">
                <polygon points="0,-12 4,0 -4,0" fill="#dc2626" />
                <polygon points="0,12 4,0 -4,0" fill="#2563eb" />
                <circle cx="0" cy="0" r="2" fill="#ffffff" />
              </g>

              {/* Compass 3 Left */}
              <g transform="translate(60, 140) rotate(90)">
                <polygon points="0,-12 4,0 -4,0" fill="#dc2626" />
                <polygon points="0,12 4,0 -4,0" fill="#2563eb" />
                <circle cx="0" cy="0" r="2" fill="#ffffff" />
              </g>
            </svg>
            <span className="text-xs text-slate-400 mt-2">
              Quy ước chiều đường sức từ: <strong className="text-cyan-300">VÀO CỰC NAM (S) - RA CỰC BẮC (N)</strong>
            </span>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <h4 className="font-bold text-slate-800 text-sm">Từ trường & Đường sức từ</h4>
              <p className="text-slate-600 leading-relaxed">
                Không gian xung quanh nam châm có <strong>từ trường</strong>. Từ trường tác dụng lực từ lên kim nam châm hoặc vật liệu từ (sắt, niken, coban) đặt trong nó.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Ở bên ngoài nam châm, đường sức từ đi ra từ cực Bắc (N) và đi vào cực Nam (S).</li>
                <li>Nơi nào đường sức từ mau (dày) thì từ trường mạnh (ở 2 cực); nơi nào thưa thì từ trường yếu.</li>
              </ul>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs space-y-1">
              <span className="font-bold text-amber-900 block">Địa từ trường Trái Đất:</span>
              <p className="text-amber-800">
                Trái Đất là một nam châm khổng lồ. Cực từ Bắc của Trái Đất nằm gần Cực Nam địa lí, và Cực từ Nam nằm gần Cực Bắc địa lí. Nhờ đó kim la bàn cực Bắc luôn chỉ hướng Bắc địa lí!
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Electromagnet interactive tool */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Switch button */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
              <span className="text-xs font-bold text-slate-600">Khoá K (Dòng điện):</span>
              <button
                onClick={() => setIsCurrentOn(!isCurrentOn)}
                className={`w-full py-2 rounded-lg font-bold text-xs mt-2 transition-all ${isCurrentOn ? 'bg-emerald-600 text-white shadow-sm' : 'bg-red-500 text-white'}`}
              >
                {isCurrentOn ? 'ĐANG BẬT ĐIỆN (Đóng khoá K)' : 'ĐANG TẮT ĐIỆN (Mở khoá K)'}
              </button>
            </div>

            {/* Coil Turns Slider */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Số vòng dây quấn (n):</span>
                <span className="text-indigo-600 font-mono">{coilTurns} vòng</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                step="5"
                value={coilTurns}
                onChange={(e) => setCoilTurns(parseInt(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            {/* Current Intensity Slider */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Cường độ dòng điện (I):</span>
                <span className="text-amber-600 font-mono">{currentAmp} A</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={currentAmp}
                onChange={(e) => setCurrentAmp(parseFloat(e.target.value))}
                className="w-full accent-amber-600"
              />
            </div>
          </div>

          {/* Electromagnet Result Card */}
          <div className="p-5 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Zap className={`w-5 h-5 ${isCurrentOn ? 'text-amber-400 animate-bounce' : 'text-slate-600'}`} />
                <h4 className="text-base font-bold">
                  {isCurrentOn ? 'Nam châm điện đang hoạt động' : 'Không có từ tính (Đã ngắt điện)'}
                </h4>
              </div>
              <p className="text-xs text-slate-300 max-w-md">
                Độ mạnh của nam châm điện tăng khi: <strong>(1) Tăng cường độ dòng điện (I)</strong>, <strong>(2) Tăng số vòng cuộn dây (n)</strong>, và <strong>(3) Có lõi sắt non</strong>.
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-slate-800/80 px-4 py-3 rounded-xl border border-slate-700 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Lực từ sinh ra</span>
                <span className="text-2xl font-black text-amber-400 font-mono">{magneticStrength} B</span>
              </div>
              <div className="bg-slate-800/80 px-4 py-3 rounded-xl border border-slate-700 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Số ghim sắt hút được</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">{attractedPins} cái</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
