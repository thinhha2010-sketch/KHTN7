import React, { useState } from 'react';
import { Sun, Eye, Sparkles, Compass, Shield } from 'lucide-react';

export const LightReflectionSimulator: React.FC = () => {
  const [angleI, setAngleI] = useState<number>(45); // Incident angle 0 to 80 deg
  const [mode, setMode] = useState<'reflection' | 'mirror_image' | 'periscope'>('reflection');
  const [objectDist, setObjectDist] = useState<number>(60); // Distance from mirror in mm/px

  const mirrorX = 220; // center mirror line
  const mirrorY = 220;
  const rayLength = 160;

  // Calculate ray coordinates for standard reflection
  const radI = (angleI * Math.PI) / 180;
  // Incident ray comes from top-left to mirror point (mirrorX, mirrorY)
  const incidentStartX = mirrorX - Math.sin(radI) * rayLength;
  const incidentStartY = mirrorY - Math.cos(radI) * rayLength;

  // Reflected ray goes from (mirrorX, mirrorY) to top-right
  const reflectedEndX = mirrorX + Math.sin(radI) * rayLength;
  const reflectedEndY = mirrorY - Math.cos(radI) * rayLength;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-amber-50 text-amber-600 rounded-xl">
            <Sun className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Mô phỏng Phản xạ Ánh sáng & Gương phẳng
            </h3>
            <p className="text-sm text-slate-500">
              Định luật phản xạ ($i = i'$), tính chất ảnh ảo đối xứng qua gương, và kính tiềm vọng
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setMode('reflection')}
            className={`px-3 py-1.5 rounded-lg transition-all ${mode === 'reflection' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Tia phản xạ ($i = i'$)
          </button>
          <button
            onClick={() => setMode('mirror_image')}
            className={`px-3 py-1.5 rounded-lg transition-all ${mode === 'mirror_image' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Ảnh ảo qua gương
          </button>
          <button
            onClick={() => setMode('periscope')}
            className={`px-3 py-1.5 rounded-lg transition-all ${mode === 'periscope' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Kính tiềm vọng
          </button>
        </div>
      </div>

      {mode === 'reflection' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Laser Reflection Visualizer */}
          <div className="lg:col-span-7 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative min-h-[340px] shadow-inner">
            <svg viewBox="0 0 440 280" className="w-full max-w-[420px] h-[260px]">
              {/* Mirror horizontal line at Y = 220 */}
              <line x1="30" y1="220" x2="410" y2="220" stroke="#38bdf8" strokeWidth="4" />
              {/* Mirror hatched back */}
              {Array.from({ length: 25 }).map((_, idx) => {
                const x = 35 + idx * 15;
                return (
                  <line key={idx} x1={x} y1="220" x2={x - 8} y2="232" stroke="#64748b" strokeWidth="1.5" />
                );
              })}
              <text x="410" y="240" fontSize="9" fill="#94a3b8" textAnchor="end">Mặt phản xạ gương phẳng</text>

              {/* Normal Line (Pháp tuyến NN' perpendicular to mirror) */}
              <line x1={mirrorX} y1="40" x2={mirrorX} y2="220" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
              <text x={mirrorX} y="30" fontSize="10" fill="#94a3b8" textAnchor="middle" fontWeight="bold">Pháp tuyến N</text>

              {/* Point of Incidence I */}
              <circle cx={mirrorX} cy="220" r="4.5" fill="#f59e0b" />
              <text x={mirrorX} y="238" fontSize="11" fill="#f59e0b" textAnchor="middle" fontWeight="bold">Điểm tới I</text>

              {/* Incident Ray SI (Laser beam in Red) */}
              <line
                x1={incidentStartX}
                y1={incidentStartY}
                x2={mirrorX}
                y2="220"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx={incidentStartX} cy={incidentStartY} r="5" fill="#ef4444" className="animate-pulse" />
              <text x={incidentStartX - 10} y={incidentStartY - 5} fontSize="10" fill="#f87171" fontWeight="bold">
                Tia tới S
              </text>

              {/* Reflected Ray IR (Laser beam in Green) */}
              <line
                x1={mirrorX}
                y1="220"
                x2={reflectedEndX}
                y2={reflectedEndY}
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx={reflectedEndX} cy={reflectedEndY} r="5" fill="#10b981" className="animate-pulse" />
              <text x={reflectedEndX + 10} y={reflectedEndY - 5} fontSize="10" fill="#34d399" fontWeight="bold">
                Tia phản xạ R
              </text>

              {/* Angle of incidence arc (i) */}
              <path
                d={`M ${mirrorX} 140 A 80 80 0 0 0 ${mirrorX - 80 * Math.sin(radI)} ${220 - 80 * Math.cos(radI)}`}
                fill="none"
                stroke="#f87171"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <text x={mirrorX - 25} y="150" fontSize="11" fill="#fca5a5" fontWeight="bold">i = {angleI}°</text>

              {/* Angle of reflection arc (i') */}
              <path
                d={`M ${mirrorX + 80 * Math.sin(radI)} ${220 - 80 * Math.cos(radI)} A 80 80 0 0 0 ${mirrorX} 140`}
                fill="none"
                stroke="#34d399"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <text x={mirrorX + 25} y="150" fontSize="11" fill="#6ee7b7" fontWeight="bold">i' = {angleI}°</text>
            </svg>
          </div>

          {/* Controls & Law Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Điều chỉnh Góc tới (i):</span>
                <span className="text-sm font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  i = {angleI}°
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                value={angleI}
                onChange={(e) => setAngleI(parseInt(e.target.value))}
                className="w-full accent-red-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>0° (Chiếu vuông góc)</span>
                <span>45°</span>
                <span>80° (Chiếu là là mặt gương)</span>
              </div>
            </div>

            {/* Scientific Rule Box */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Nội dung Định luật phản xạ ánh sáng:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                <li>Tia phản xạ nằm trong <strong>mặt phẳng tới</strong> (mặt phẳng chứa tia tới và pháp tuyến tại điểm tới).</li>
                <li>Góc phản xạ luôn bằng góc tới: <strong className="text-emerald-700 font-mono text-sm font-bold">i' = i = {angleI}°</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {mode === 'mirror_image' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Plane Mirror Object & Virtual Image Visualizer */}
          <div className="lg:col-span-7 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative min-h-[340px]">
            <svg viewBox="0 0 440 260" className="w-full max-w-[420px] h-[240px]">
              {/* Vertical Plane Mirror at X = 220 */}
              <line x1="220" y1="20" x2="220" y2="240" stroke="#38bdf8" strokeWidth="4" />
              {/* Mirror hatched back (right side) */}
              {Array.from({ length: 15 }).map((_, idx) => {
                const y = 30 + idx * 14;
                return (
                  <line key={idx} x1="220" y1={y} x2="232" y2={y + 8} stroke="#64748b" strokeWidth="1.5" />
                );
              })}
              <text x="220" y="15" fontSize="9" fill="#38bdf8" textAnchor="middle" fontWeight="bold">Gương phẳng</text>

              {/* Real Object S on the left */}
              <g>
                <circle cx={220 - objectDist} cy="130" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                <text x={220 - objectDist} y="110" fontSize="11" fill="#fde047" fontWeight="bold" textAnchor="middle">
                  Vật sáng S
                </text>
                {/* Distance line S to mirror */}
                <line x1={220 - objectDist} y1="130" x2="220" y2="130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x={220 - objectDist / 2} y="145" fontSize="9" fill="#f59e0b" textAnchor="middle">d = {objectDist}cm</text>
              </g>

              {/* Virtual Image S' behind mirror (on the right) */}
              <g>
                <circle cx={220 + objectDist} cy="130" r="8" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="2 2" />
                <text x={220 + objectDist} y="110" fontSize="11" fill="#67e8f9" fontWeight="bold" textAnchor="middle">
                  Ảnh ảo S'
                </text>
                {/* Distance line mirror to S' */}
                <line x1="220" y1="130" x2={220 + objectDist} y2="130" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x={220 + objectDist / 2} y="145" fontSize="9" fill="#22d3ee" textAnchor="middle">d' = {objectDist}cm</text>
              </g>

              {/* Symmetry note */}
              <text x="220" y="250" fontSize="10" fill="#94a3b8" textAnchor="middle">
                Ảnh S' đối xứng với vật S qua mặt phẳng gương (d = d')
              </text>
            </svg>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700">Khoảng cách vật tới gương (d):</span>
                <span className="text-sm font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {objectDist} cm
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                value={objectDist}
                onChange={(e) => setObjectDist(parseInt(e.target.value))}
                className="w-full accent-amber-500"
              />
              <p className="text-xs text-slate-500">
                Khoảng cách từ vật S đến ảnh ảo S' là: <strong className="text-slate-800 font-mono">{objectDist * 2} cm</strong>
              </p>
            </div>

            <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-sky-900">
                <Eye className="w-4 h-4 text-sky-600" />
                <span>3 Tính chất quan trọng của ảnh tạo bởi gương phẳng:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                <li><strong>Ảnh ảo</strong>, không hứng được trên màn chắn.</li>
                <li><strong>Độ lớn của ảnh bằng độ lớn của vật</strong> ($h' = h$).</li>
                <li>Khoảng cách từ một điểm của vật đến gương <strong>bằng</strong> khoảng cách từ ảnh của điểm đó đến gương ($d' = d$).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {mode === 'periscope' && (
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-white space-y-4">
          <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-3">
            <h4 className="font-bold text-amber-400">Nguyên lý Kính tiềm vọng (Periscope)</h4>
            <span className="text-slate-400">Ứng dụng 2 gương phẳng đặt song song nghiêng 45°</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <svg viewBox="0 0 360 220" className="w-full max-w-[340px] h-[200px]">
              {/* Periscope Tube Body */}
              <path
                d="M 50 40 L 160 40 L 160 160 L 270 160 L 270 200 L 120 200 L 120 80 L 50 80 Z"
                fill="#1e293b"
                stroke="#475569"
                strokeWidth="2"
              />

              {/* Mirror 1 at (120,40)-(160,80) 45 deg */}
              <line x1="120" y1="40" x2="160" y2="80" stroke="#38bdf8" strokeWidth="4" />
              <text x="170" y="55" fontSize="9" fill="#38bdf8" fontWeight="bold">Gương 1 (45°)</text>

              {/* Mirror 2 at (120,160)-(160,200) 45 deg */}
              <line x1="120" y1="160" x2="160" y2="200" stroke="#38bdf8" strokeWidth="4" />
              <text x="170" y="195" fontSize="9" fill="#38bdf8" fontWeight="bold">Gương 2 (45°)</text>

              {/* Light beam through tube */}
              <path
                d="M 20 60 L 140 60 L 140 180 L 310 180"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeDasharray="5 3"
              />
              <text x="25" y="45" fontSize="10" fill="#ef4444" fontWeight="bold">Tia sáng ngoài vật</text>
              <text x="270" y="170" fontSize="10" fill="#34d399" fontWeight="bold">Tới mắt quan sát</text>
            </svg>

            <div className="text-xs text-slate-300 space-y-2 flex-1">
              <p>
                <strong>Kính tiềm vọng</strong> cho phép người ngồi trong tàu ngầm hoặc dưới hào công sự quan sát được các vật thể ở trên mặt nước hoặc trên cao mà không cần nhô đầu lên.
              </p>
              <p className="text-slate-400">
                Ánh sáng từ vật đi vào gương thứ nhất, phản xạ 90° xuống gương thứ hai, rồi lại phản xạ tiếp 90° đi thẳng vào mắt người quan sát.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
