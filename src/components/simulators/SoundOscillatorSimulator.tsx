import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Radio, Sparkles, Activity, ShieldAlert } from 'lucide-react';

export const SoundOscillatorSimulator: React.FC = () => {
  const [frequency, setFrequency] = useState<number>(440); // Standard A note (440 Hz)
  const [amplitude, setAmplitude] = useState<number>(50);  // 0 - 100%
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedMedium, setSelectedMedium] = useState<'solid' | 'liquid' | 'gas' | 'vacuum'>('gas');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Web Audio Playback
  const toggleSound = () => {
    if (isPlaying) {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
      }
      setIsPlaying(false);
    } else {
      try {
        const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtxClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        gain.gain.setValueAtTime(amplitude / 200, ctx.currentTime); // scaled volume

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  useEffect(() => {
    if (isPlaying && oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.setValueAtTime(frequency, audioCtxRef.current.currentTime);
    }
  }, [frequency, isPlaying]);

  useEffect(() => {
    if (isPlaying && gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setValueAtTime(amplitude / 200, audioCtxRef.current.currentTime);
    }
  }, [amplitude, isPlaying]);

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
        } catch (e) {}
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  // Medium properties
  const mediumData = {
    solid: { name: "Chất rắn (Thép)", speed: 6100, desc: "Các phân tử xếp đặc khít, truyền dao động cực nhanh.", unit: "m/s" },
    liquid: { name: "Chất lỏng (Nước)", speed: 1500, desc: "Phân tử liên kết lỏng lẻo hơn, truyền âm trung bình.", unit: "m/s" },
    gas: { name: "Chất khí (Không khí)", speed: 340, desc: "Phân tử chuyển động tự do xa nhau, truyền âm chậm nhất.", unit: "m/s" },
    vacuum: { name: "Chân không", speed: 0, desc: "Không có hạt vật chất để truyền dao động -> KHÔNG truyền được âm!", unit: "m/s" }
  };

  const currentMediumInfo = mediumData[selectedMedium];

  // Frequency Classification
  const pitchType = frequency < 20 ? "Hạ âm (< 20 Hz, tai người không nghe thấy)" : frequency <= 20000 ? (frequency < 250 ? "Âm trầm (Bass)" : frequency < 2000 ? "Âm trung (Mid)" : "Âm cao / bổng (Treble)") : "Siêu âm (> 20.000 Hz, dơi/cá heo sử dụng)";

  // SVG Waveform generation
  const svgWidth = 460;
  const svgHeight = 140;
  const centerY = svgHeight / 2;

  // Normalized wave cycles
  const cycles = Math.max(1, Math.min(18, frequency / 60));
  const waveAmplitude = (amplitude / 100) * 50;

  const points: string[] = [];
  for (let x = 0; x <= svgWidth; x += 3) {
    const angle = (x / svgWidth) * cycles * 2 * Math.PI;
    const y = centerY - Math.sin(angle) * waveAmplitude;
    points.push(`${x},${y}`);
  }
  const polylineStr = points.join(' ');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-rose-50 text-rose-600 rounded-xl">
            <Radio className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Phòng thí nghiệm Sóng âm & Máy phát dao động (Oscilloscope)
            </h3>
            <p className="text-sm text-slate-500">
              Trực quan hoá Biên độ (Độ to) và Tần số (Độ cao / bổng / trầm), nghe âm thanh thực tế với Web Audio
            </p>
          </div>
        </div>

        <button
          onClick={toggleSound}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${isPlaying ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
        >
          {isPlaying ? <><VolumeX className="w-4 h-4" /> Tắt âm thanh thử nghiệm</> : <><Volume2 className="w-4 h-4 text-rose-400" /> Bật âm thanh thử nghiệm (Nghe)</>}
        </button>
      </div>

      {/* Real-time Oscilloscope Screen */}
      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-cyan-400 font-mono relative overflow-hidden shadow-inner">
        <div className="flex justify-between items-center text-xs mb-2 border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-bold">DAO ĐỘNG KÍ ĐIỆN TỬ</span>
          </div>
          <span className="text-slate-400 text-[11px]">
            f = <strong className="text-cyan-300 font-bold">{frequency} Hz</strong> | Biên độ A = <strong className="text-pink-300 font-bold">{amplitude}%</strong>
          </span>
        </div>

        {/* SVG Sine wave */}
        <div className="relative py-2">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-[140px]">
            {/* Oscilloscope Grid */}
            {[0.25, 0.5, 0.75].map((r, i) => (
              <line key={i} x1="0" y1={svgHeight * r} x2={svgWidth} y2={svgHeight * r} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
            ))}
            {[0.2, 0.4, 0.6, 0.8].map((r, i) => (
              <line key={i} x1={svgWidth * r} y1="0" x2={svgWidth * r} y2={svgHeight} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
            ))}
            {/* Center zero line */}
            <line x1="0" y1={centerY} x2={svgWidth} y2={centerY} stroke="#334155" strokeWidth="1.5" />

            {/* Glowing Sine Wave */}
            <polyline
              points={polylineStr}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isPlaying ? 'animate-pulse' : ''}
            />
          </svg>
        </div>

        <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1">
          <span>Tần số càng cao → Các đường sóng càng sát nhau</span>
          <span className="text-emerald-400 font-bold">Phân loại: {pitchType}</span>
        </div>
      </div>

      {/* Sliders Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-700">Tần số dao động (Độ cao):</span>
            <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              {frequency} Hz
            </span>
          </div>
          <input
            type="range"
            min="50"
            max="1200"
            step="10"
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-bold">
            <span>50 Hz (Âm trầm, trống)</span>
            <span>440 Hz (Nốt La chuẩn)</span>
            <span>1200 Hz (Âm bổng, sáo/ve sầu)</span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-700">Biên độ dao động (Độ to):</span>
            <span className="font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              {amplitude}%
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            value={amplitude}
            onChange={(e) => setAmplitude(parseInt(e.target.value))}
            className="w-full accent-rose-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-bold">
            <span>Yếu / Nhỏ</span>
            <span>Vừa phải</span>
            <span>Mạnh / To cực đại</span>
          </div>
        </div>
      </div>

      {/* Part 2: Medium Transmission Comparison */}
      <div className="border-t border-slate-100 pt-5 space-y-3">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Môi trường truyền âm (So sánh tốc độ v):
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(['solid', 'liquid', 'gas', 'vacuum'] as const).map((med) => {
            const isSel = selectedMedium === med;
            return (
              <button
                key={med}
                onClick={() => setSelectedMedium(med)}
                className={`p-3 rounded-xl border text-left transition-all ${isSel ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100 scale-102' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
              >
                <span className="text-xs font-bold block">{mediumData[med].name.split(' ')[0]}</span>
                <span className="text-base font-extrabold font-mono">{mediumData[med].speed} {mediumData[med].unit}</span>
              </button>
            );
          })}
        </div>

        <div className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${selectedMedium === 'vacuum' ? 'bg-red-50 border-red-200 text-red-900' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
          {selectedMedium === 'vacuum' ? (
            <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          ) : (
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          )}
          <div>
            <strong className="block font-bold mb-0.5">{currentMediumInfo.name} - Tốc độ: {currentMediumInfo.speed} m/s</strong>
            <span>{currentMediumInfo.desc}</span>
            <p className="mt-1 font-semibold text-slate-500">
              Quy tắc tốc độ truyền âm: <strong className="text-slate-800">V_rắn (6100 m/s) &gt; V_lỏng (1500 m/s) &gt; V_khí (340 m/s) &gt; V_chân không (0 m/s)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
