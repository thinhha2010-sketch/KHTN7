import React, { useState } from 'react';
import { Leaf, Sun, Droplets, Wind, Sparkles, Flame, ArrowUp, ArrowDown } from 'lucide-react';

export const BioExplorerSimulator: React.FC = () => {
  const [tab, setTab] = useState<'photosynthesis' | 'stomata' | 'transport'>('photosynthesis');

  // Photosynthesis conditions
  const [lightLux, setLightLux] = useState<number>(75); // 0 to 100%
  const [co2Level, setCo2Level] = useState<number>(60); // 0 to 100%
  const [waterSupply, setWaterSupply] = useState<number>(80); // 0 to 100%
  const [tempC, setTempC] = useState<number>(28); // 10 to 45 deg C

  // Calculate photosynthesis rate score
  // Optimal temp is ~25-35 C
  const tempEfficiency = tempC < 15 ? 0.3 : tempC > 40 ? 0.2 : 1.0;
  const photoRate = Math.min(100, Math.round(((lightLux * 0.4 + co2Level * 0.3 + waterSupply * 0.3) * tempEfficiency)));
  const o2Produced = (photoRate * 0.8).toFixed(1);
  const glucoseProduced = (photoRate * 0.5).toFixed(1);

  // Stomata states
  const [isWaterTurgid, setIsWaterTurgid] = useState<boolean>(true);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
            <Leaf className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Phòng thí nghiệm Sinh học: Quang hợp, Hô hấp & Vận chuyển trong cây
            </h3>
            <p className="text-sm text-slate-500">
              Khảo sát các yếu tố ảnh hưởng tới quang hợp, cơ chế đóng mở khí khổng và dòng mạch gỗ - mạch rây
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setTab('photosynthesis')}
            className={`px-3 py-1.5 rounded-lg transition-all ${tab === 'photosynthesis' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Quang hợp & Hô hấp
          </button>
          <button
            onClick={() => setTab('stomata')}
            className={`px-3 py-1.5 rounded-lg transition-all ${tab === 'stomata' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Đóng mở khí khổng
          </button>
          <button
            onClick={() => setTab('transport')}
            className={`px-3 py-1.5 rounded-lg transition-all ${tab === 'transport' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Mạch gỗ & Mạch rây
          </button>
        </div>
      </div>

      {tab === 'photosynthesis' && (
        <div className="space-y-6">
          {/* Photosynthesis Reaction Formula Equation Banner */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 p-4 rounded-2xl border border-emerald-200">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
              Phương trình tổng quát của Quang hợp (Lục lạp):
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-extrabold text-slate-800">
              <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-blue-700">Nước (H₂O)</span>
              <span>+</span>
              <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700">Carbon dioxide (CO₂)</span>
              <span className="text-amber-600 flex items-center gap-1">
                <Sun className="w-4 h-4" /> [Ánh sáng / Diệp lục] ➔
              </span>
              <span className="bg-emerald-600 text-white px-2.5 py-1 rounded-lg font-mono">Glucose (C₆H₁₂O₆)</span>
              <span>+</span>
              <span className="bg-sky-500 text-white px-2.5 py-1 rounded-lg font-mono">Oxygen (O₂ ↑)</span>
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1"><Sun className="w-3.5 h-3.5 text-amber-500" /> Cường độ sáng:</span>
                <span className="text-amber-600">{lightLux}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={lightLux}
                onChange={(e) => setLightLux(parseInt(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1"><Wind className="w-3.5 h-3.5 text-slate-500" /> Hàm lượng CO₂:</span>
                <span className="text-slate-700">{co2Level}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={co2Level}
                onChange={(e) => setCo2Level(parseInt(e.target.value))}
                className="w-full accent-slate-600"
              />
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1"><Droplets className="w-3.5 h-3.5 text-blue-500" /> Nguồn nước tưới:</span>
                <span className="text-blue-600">{waterSupply}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={waterSupply}
                onChange={(e) => setWaterSupply(parseInt(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-rose-500" /> Nhiệt độ môi trường:</span>
                <span className={tempC < 15 || tempC > 38 ? 'text-rose-600 font-bold' : 'text-emerald-600 font-bold'}>{tempC}°C</span>
              </div>
              <input
                type="range"
                min="10"
                max="45"
                value={tempC}
                onChange={(e) => setTempC(parseInt(e.target.value))}
                className="w-full accent-rose-500"
              />
            </div>
          </div>

          {/* Plant Output Status */}
          <div className="p-5 bg-gradient-to-br from-emerald-900 to-teal-950 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-400 animate-bounce" />
                <h4 className="text-base font-bold">Cường độ Quang hợp của cây xanh</h4>
              </div>
              <p className="text-xs text-emerald-200 max-w-md">
                Nhiệt độ tối ưu cho đa số thực vật là từ <strong>25°C - 35°C</strong>. Nhiệt độ quá lạnh (&lt;10°C) hoặc quá nóng (&gt;40°C) làm enzyme bị ức chế, giảm quang hợp mạnh.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-emerald-800/80 px-4 py-2.5 rounded-xl border border-emerald-700 text-center">
                <span className="text-[10px] text-emerald-300 uppercase font-bold block">Tốc độ quang hợp</span>
                <span className="text-2xl font-black text-emerald-300 font-mono">{photoRate}%</span>
              </div>
              <div className="bg-emerald-800/80 px-4 py-2.5 rounded-xl border border-emerald-700 text-center">
                <span className="text-[10px] text-sky-300 uppercase font-bold block">Khí O₂ thoát ra</span>
                <span className="text-2xl font-black text-sky-300 font-mono">{o2Produced} ml/h</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'stomata' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Stomata Visualizer */}
          <div className="md:col-span-6 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center min-h-[300px] text-center">
            <svg viewBox="0 0 240 240" className="w-[200px] h-[200px]">
              {/* Left Guard Cell (Tế bào hình hạt đậu bên trái) */}
              <path
                d={isWaterTurgid
                  ? "M 100 30 C 50 30, 40 210, 100 210 C 80 160, 80 80, 100 30 Z"
                  : "M 115 30 C 80 30, 80 210, 115 210 C 112 160, 112 80, 115 30 Z"}
                fill="#22c55e"
                stroke="#15803d"
                strokeWidth="3"
              />

              {/* Right Guard Cell (Tế bào hình hạt đậu bên phải) */}
              <path
                d={isWaterTurgid
                  ? "M 140 30 C 190 30, 200 210, 140 210 C 160 160, 160 80, 140 30 Z"
                  : "M 125 30 C 160 30, 160 210, 125 210 C 128 160, 128 80, 125 30 Z"}
                fill="#22c55e"
                stroke="#15803d"
                strokeWidth="3"
              />

              {/* Stomatal Pore Aperture in center */}
              <ellipse
                cx="120"
                cy="120"
                rx={isWaterTurgid ? "18" : "2"}
                ry={isWaterTurgid ? "55" : "50"}
                fill="#0f172a"
              />

              {/* Nucleus points */}
              <circle cx={isWaterTurgid ? "70" : "95"} cy="120" r="6" fill="#166534" />
              <circle cx={isWaterTurgid ? "170" : "145"} cy="120" r="6" fill="#166534" />
            </svg>

            <span className="text-xs font-bold text-emerald-400 mt-2">
              {isWaterTurgid ? 'Khí khổng MỞ RỘNG (Tế bào no nước căng phồng)' : 'Khí khổng ĐÓNG LẠI (Tế bào mất nước, xẹp)'}
            </span>
          </div>

          <div className="md:col-span-6 space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Thao tác mô phỏng tình trạng tế bào khí khổng:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsWaterTurgid(true)}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all ${isWaterTurgid ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border text-slate-700'}`}
                >
                  Đầy đủ nước (No nước)
                </button>
                <button
                  onClick={() => setIsWaterTurgid(false)}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all ${!isWaterTurgid ? 'bg-amber-600 text-white shadow-md' : 'bg-white border text-slate-700'}`}
                >
                  Thiếu nước (Mất nước)
                </button>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-2">
              <span className="font-bold text-emerald-900 block">Cơ chế đóng mở khí khổng:</span>
              <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                <li>Khi tế bào hạt đậu <strong>hút no nước</strong>, thành mỏng phía ngoài dãn nhanh hơn thành dày phía trong làm tế bào cong lại ➔ <strong>Lỗ khí mở ra</strong> giúp thoát hơi nước và trao đổi khí CO₂ / O₂.</li>
                <li>Khi tế bào <strong>mất nước</strong>, thể tích giảm, vách mỏng duỗi thẳng ➔ <strong>Lỗ khí đóng lại</strong> để hạn chế thoát nước cho cây.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {tab === 'transport' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Xylem Box */}
          <div className="p-5 bg-sky-50/70 rounded-2xl border border-sky-200 space-y-3">
            <div className="flex items-center gap-2 text-sky-800 font-bold">
              <div className="p-2 bg-sky-500 text-white rounded-xl">
                <ArrowUp className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h4 className="text-base">Mạch Gỗ (Xylem) - Dòng đi lên</h4>
                <span className="text-xs text-sky-600 font-medium">Từ Rễ ➔ Thân ➔ Lá</span>
              </div>
            </div>

            <div className="text-xs text-slate-700 space-y-2">
              <p>
                <strong>Thành phần vận chuyển:</strong> Nước và các ion muối khoáng hoà tan được rễ hút từ đất.
              </p>
              <p>
                <strong>Đặc điểm cấu tạo:</strong> Gồm các tế bào chết (quản bào và mạch ống) xếp nối tiếp nhau thành ống dài liên tục, thành hoá gỗ dày chịu lực.
              </p>
              <p>
                <strong>Động lực đẩy dòng:</strong> Lực hút của thoát hơi nước ở lá (chính), lực đẩy của áp suất rễ và lực liên kết giữa các phân tử nước.
              </p>
            </div>
          </div>

          {/* Phloem Box */}
          <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold">
              <div className="p-2 bg-amber-500 text-white rounded-xl">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h4 className="text-base">Mạch Rây (Phloem) - Dòng đi xuống</h4>
                <span className="text-xs text-amber-700 font-medium">Từ Lá ➔ Thân ➔ Rễ / Quả / Củ</span>
              </div>
            </div>

            <div className="text-xs text-slate-700 space-y-2">
              <p>
                <strong>Thành phần vận chuyển:</strong> Các chất hữu cơ (chủ yếu là sucrose, acid amin, hormone) được tổng hợp từ quang hợp ở lá.
              </p>
              <p>
                <strong>Đặc điểm cấu tạo:</strong> Gồm các tế bào sống (ống rây và tế bào kèm), đầu nối có các bản rây có nhiều lỗ nhỏ thông với nhau.
              </p>
              <p>
                <strong>Mục đích:</strong> Cung cấp năng lượng cho mọi cơ quan sinh trưởng và dự trữ tại củ, quả, hạt.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
