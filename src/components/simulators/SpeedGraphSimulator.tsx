import React, { useState, useEffect, useRef } from 'react';
import { Gauge, Play, Pause, RotateCcw, Car, Shield, Activity } from 'lucide-react';

export const SpeedGraphSimulator: React.FC = () => {
  // Speed segments (3 stages of motion)
  const [speed1, setSpeed1] = useState<number>(10); // m/s for first 4s
  const [speed2, setSpeed2] = useState<number>(0);  // m/s for next 3s (rest)
  const [speed3, setSpeed3] = useState<number>(15); // m/s for next 5s

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [vehicleType, setVehicleType] = useState<'car' | 'bike' | 'runner'>('car');

  const maxTotalTime = 12; // 0-4s, 4-7s, 7-12s

  // Distance function
  const getDistanceAtTime = (t: number) => {
    let d = 0;
    if (t <= 4) {
      d = speed1 * t;
    } else if (t <= 7) {
      d = speed1 * 4 + speed2 * (t - 4);
    } else {
      d = speed1 * 4 + speed2 * 3 + speed3 * (t - 7);
    }
    return Math.max(0, d);
  };

  const currentDist = getDistanceAtTime(currentTime);
  const maxDistance = getDistanceAtTime(maxTotalTime) || 120;

  // Animation Loop
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      const animate = (time: number) => {
        if (lastTimeRef.current != null) {
          const delta = (time - lastTimeRef.current) / 1000;
          setCurrentTime(prev => {
            const next = prev + delta;
            if (next >= maxTotalTime) {
              setIsRunning(false);
              return maxTotalTime;
            }
            return next;
          });
        }
        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
      };
      requestRef.current = requestAnimationFrame(animate);
    } else {
      lastTimeRef.current = null;
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setCurrentTime(0);
  };

  // Convert speed
  const speedKmh = ((speed1 * 3.6)).toFixed(1);
  const currentSpeed = currentTime <= 4 ? speed1 : currentTime <= 7 ? speed2 : speed3;
  const safeDist3s = (currentSpeed * 3).toFixed(1);

  // SVG dimensions for s-t graph
  const svgWidth = 460;
  const svgHeight = 220;
  const padL = 45;
  const padR = 20;
  const padT = 20;
  const padB = 35;

  const graphW = svgWidth - padL - padR;
  const graphH = svgHeight - padT - padB;

  const timeToX = (t: number) => padL + (t / maxTotalTime) * graphW;
  const distToY = (d: number) => padT + graphH - (d / (maxDistance || 1)) * graphH;

  // Key points
  const p0 = { x: timeToX(0), y: distToY(0) };
  const p1 = { x: timeToX(4), y: distToY(getDistanceAtTime(4)) };
  const p2 = { x: timeToX(7), y: distToY(getDistanceAtTime(7)) };
  const p3 = { x: timeToX(12), y: distToY(getDistanceAtTime(12)) };

  const currentX = timeToX(currentTime);
  const currentY = distToY(currentDist);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-amber-50 text-amber-600 rounded-xl">
            <Gauge className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Mô phỏng Chuyển động & Vẽ Đồ thị Quãng đường - Thời gian (s - t)
            </h3>
            <p className="text-sm text-slate-500">
              Khảo sát tốc độ $v = s/t$, đồ thị chuyển động thẳng đều & đứng yên, quy tắc an toàn 3 giây
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${isRunning ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
          >
            {isRunning ? <><Pause className="w-4 h-4" /> Tạm dừng</> : <><Play className="w-4 h-4" /> Bắt đầu chạy</>}
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all"
            title="Làm lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Vehicle selection & track animation */}
      <div className="bg-slate-900 rounded-2xl p-5 text-white space-y-4 shadow-inner relative overflow-hidden">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Phương tiện:</span>
            <div className="flex gap-1 bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setVehicleType('car')}
                className={`px-2.5 py-1 rounded text-[11px] font-bold ${vehicleType === 'car' ? 'bg-amber-500 text-slate-900' : 'text-slate-300'}`}
              >
                Ô tô
              </button>
              <button
                onClick={() => setVehicleType('bike')}
                className={`px-2.5 py-1 rounded text-[11px] font-bold ${vehicleType === 'bike' ? 'bg-amber-500 text-slate-900' : 'text-slate-300'}`}
              >
                Xe đạp
              </button>
              <button
                onClick={() => setVehicleType('runner')}
                className={`px-2.5 py-1 rounded text-[11px] font-bold ${vehicleType === 'runner' ? 'bg-amber-500 text-slate-900' : 'text-slate-300'}`}
              >
                Người chạy
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono font-bold text-amber-300">
            <span>Thời gian t: {currentTime.toFixed(1)}s / {maxTotalTime}s</span>
            <span>Quãng đường s: {currentDist.toFixed(1)}m</span>
          </div>
        </div>

        {/* Road track */}
        <div className="relative h-14 bg-slate-800 rounded-xl border border-slate-700 flex items-center px-4 overflow-hidden">
          {/* Road dashed center line */}
          <div className="absolute inset-x-0 h-0.5 border-b border-dashed border-slate-600 top-1/2 -translate-y-1/2" />

          {/* Vehicle icon moving */}
          <div
            className="absolute transition-transform duration-75 flex flex-col items-center"
            style={{
              left: `calc(16px + ${(currentDist / (maxDistance || 1)) * 88}%)`,
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="p-2 bg-amber-500 text-slate-950 rounded-xl shadow-lg shadow-amber-500/40 animate-pulse">
              <Car className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-amber-300 whitespace-nowrap bg-slate-950/80 px-1.5 py-0.2 rounded mt-0.5">
              v = {currentSpeed} m/s ({(currentSpeed * 3.6).toFixed(0)} km/h)
            </span>
          </div>
        </div>
      </div>

      {/* Speed Configuration & Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders for the 3 stages */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Cài đặt tốc độ từng giai đoạn:
          </h4>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Giai đoạn 1 (0s - 4s): Chuyển động</span>
              <span className="text-blue-600 font-mono">{speed1} m/s ({(speed1 * 3.6).toFixed(0)} km/h)</span>
            </div>
            <input
              type="range"
              min="2"
              max="25"
              value={speed1}
              onChange={(e) => setSpeed1(parseInt(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Giai đoạn 2 (4s - 7s): Nghỉ / Đứng yên</span>
              <span className="text-amber-600 font-mono">{speed2} m/s ({speed2 === 0 ? 'Dừng hẳn' : `${(speed2 * 3.6).toFixed(0)} km/h`})</span>
            </div>
            <input
              type="range"
              min="0"
              max="15"
              value={speed2}
              onChange={(e) => setSpeed2(parseInt(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Giai đoạn 3 (7s - 12s): Tăng tốc</span>
              <span className="text-emerald-600 font-mono">{speed3} m/s ({(speed3 * 3.6).toFixed(0)} km/h)</span>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              value={speed3}
              onChange={(e) => setSpeed3(parseInt(e.target.value))}
              className="w-full accent-emerald-600"
            />
          </div>

          {/* Safety Rule Box */}
          <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-600 shrink-0" />
              <div>
                <span className="font-bold text-sky-900 block">Quy tắc 3 giây an toàn</span>
                <span className="text-sky-700 text-[11px]">s = v (m/s) × 3 (s)</span>
              </div>
            </div>
            <span className="text-sm font-mono font-extrabold text-sky-800 bg-white px-2.5 py-1 rounded-lg border border-sky-300">
              {safeDist3s} mét
            </span>
          </div>
        </div>

        {/* Real-time SVG s - t Plot */}
        <div className="lg:col-span-7 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Đồ thị quãng đường - thời gian (s - t)
            </span>
            <span className="text-[11px] text-slate-500">
              Trục Os (m) / Trục Ot (s)
            </span>
          </div>

          <div className="w-full overflow-x-auto flex justify-center">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full max-w-[460px] h-[210px] bg-white rounded-lg border border-slate-200 shadow-xs">
              {/* Grid Lines */}
              {[0, 2, 4, 6, 8, 10, 12].map(t => (
                <line
                  key={t}
                  x1={timeToX(t)}
                  y1={padT}
                  x2={timeToX(t)}
                  y2={svgHeight - padB}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              ))}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => (
                <line
                  key={idx}
                  x1={padL}
                  y1={padT + graphH * (1 - ratio)}
                  x2={svgWidth - padR}
                  y2={padT + graphH * (1 - ratio)}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              ))}

              {/* Axes */}
              <line x1={padL} y1={padT} x2={padL} y2={svgHeight - padB} stroke="#475569" strokeWidth="2" />
              <line x1={padL} y1={svgHeight - padB} x2={svgWidth - padR} y2={svgHeight - padB} stroke="#475569" strokeWidth="2" />

              {/* Axis Labels */}
              <text x={padL - 6} y={padT + 4} textAnchor="end" fontSize="10" fontWeight="bold" fill="#334155">s(m)</text>
              <text x={svgWidth - padR} y={svgHeight - padB + 14} textAnchor="end" fontSize="10" fontWeight="bold" fill="#334155">t(s)</text>

              {/* Time tick labels */}
              {[0, 4, 7, 12].map(t => (
                <text key={t} x={timeToX(t)} y={svgHeight - padB + 16} fontSize="9" textAnchor="middle" fill="#64748b" fontWeight="bold">
                  {t}
                </text>
              ))}

              {/* Max dist label */}
              <text x={padL - 6} y={distToY(maxDistance) + 3} textAnchor="end" fontSize="8" fill="#64748b" fontWeight="bold">
                {maxDistance.toFixed(0)}
              </text>

              {/* Planned Motion Line */}
              <polyline
                points={`${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`}
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2.5"
                strokeDasharray="4 3"
              />

              {/* Real-time Traveled Path */}
              {currentTime > 0 && (
                <path
                  d={`M ${p0.x} ${p0.y} ${currentTime >= 4 ? `L ${p1.x} ${p1.y}` : `L ${currentX} ${currentY}`} ${currentTime > 4 && currentTime >= 7 ? `L ${p2.x} ${p2.y}` : currentTime > 4 ? `L ${currentX} ${currentY}` : ''} ${currentTime > 7 ? `L ${currentX} ${currentY}` : ''}`}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              )}

              {/* Current position marker */}
              <circle cx={currentX} cy={currentY} r="5.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />

              {/* Segment Annotations */}
              <text x={(p0.x + p1.x) / 2} y={(p0.y + p1.y) / 2 - 8} fontSize="9" fill="#2563eb" fontWeight="bold" textAnchor="middle">
                Chuyển động
              </text>
              <text x={(p1.x + p2.x) / 2} y={p1.y - 8} fontSize="9" fill="#d97706" fontWeight="bold" textAnchor="middle">
                Đứng yên (s không đổi)
              </text>
              <text x={(p2.x + p3.x) / 2} y={(p2.y + p3.y) / 2 - 8} fontSize="9" fill="#059669" fontWeight="bold" textAnchor="middle">
                Tăng tốc
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
