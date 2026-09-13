import React, { useState } from 'react';
import { ELEMENTS_20, ChemicalElement } from '../../data/elementsData';
import { Atom, Zap, ShieldAlert, Sparkles, Layers, Info } from 'lucide-react';

export const AtomSimulator: React.FC = () => {
  const [selectedZ, setSelectedZ] = useState<number>(6); // Default Carbon
  const [customMode, setCustomMode] = useState<boolean>(false);
  const [customP, setCustomP] = useState<number>(6);
  const [customN, setCustomN] = useState<number>(6);
  const [customE, setCustomE] = useState<number>(6);

  const currentElement: ChemicalElement = ELEMENTS_20.find(el => el.z === selectedZ) || ELEMENTS_20[5];

  const p = customMode ? customP : currentElement.z;
  const n = customMode ? customN : currentElement.mass - currentElement.z;
  const e = customMode ? customE : currentElement.z;

  // Calculate electron shells distribution (2, 8, 8, 2 for first 20)
  const getShells = (numE: number) => {
    const shells: number[] = [];
    let rem = numE;
    const maxPerShell = [2, 8, 8, 2];
    for (let cap of maxPerShell) {
      if (rem <= 0) break;
      const inShell = Math.min(rem, cap);
      shells.push(inShell);
      rem -= inShell;
    }
    return shells;
  };

  const shells = customMode ? getShells(e) : currentElement.electronConfig;
  const massAmu = p + n;
  const charge = p - e;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Atom className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-slate-800">
              Mô hình nguyên tử Rutherford - Bohr & Bảng 20 nguyên tố
            </h3>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Quan sát cấu trúc hạt nhân (p, n) và các lớp vỏ electron quay theo quỹ đạo tròn đồng tâm
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setCustomMode(false)}
            className={`px-3 py-1.5 rounded-lg transition-all ${!customMode ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            20 Nguyên tố chuẩn
          </button>
          <button
            onClick={() => setCustomMode(true)}
            className={`px-3 py-1.5 rounded-lg transition-all ${customMode ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Tự tạo nguyên tử (Tự do)
          </button>
        </div>
      </div>

      {!customMode ? (
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Chọn nguyên tố (Bảng tuần hoàn Z = 1 đến 20):
          </label>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
            {ELEMENTS_20.map((el) => {
              const isSelected = el.z === selectedZ;
              const typeColor = el.type === 'metal' ? 'border-amber-300 hover:bg-amber-50' : el.type === 'nonmetal' ? 'border-sky-300 hover:bg-sky-50' : 'border-emerald-300 hover:bg-emerald-50';
              const activeColor = el.type === 'metal' ? 'bg-amber-500 text-white shadow-amber-200' : el.type === 'nonmetal' ? 'bg-sky-600 text-white shadow-sky-200' : 'bg-emerald-600 text-white shadow-emerald-200';
              return (
                <button
                  key={el.z}
                  onClick={() => setSelectedZ(el.z)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${isSelected ? `${activeColor} shadow-md scale-105 font-bold` : `bg-slate-50 text-slate-700 ${typeColor}`}`}
                >
                  <span className="text-[10px] opacity-75">{el.z}</span>
                  <span className="text-base font-extrabold">{el.symbol}</span>
                  <span className="text-[9px] truncate w-full">{el.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <div className="flex justify-between text-xs font-bold text-red-600 mb-1">
              <span>Proton (p, +): {customP}</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={customP}
              onChange={(e) => setCustomP(parseInt(e.target.value))}
              className="w-full accent-red-500"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
              <span>Neutron (n, 0): {customN}</span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              value={customN}
              onChange={(e) => setCustomN(parseInt(e.target.value))}
              className="w-full accent-slate-500"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold text-blue-600 mb-1">
              <span>Electron (e, -): {customE}</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={customE}
              onChange={(e) => setCustomE(parseInt(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>
        </div>
      )}

      {/* Main Visualizer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Bohr Atom */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-950 rounded-2xl relative min-h-[340px] shadow-inner overflow-hidden">
          {/* Legend in visualizer */}
          <div className="absolute top-3 left-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-[11px] text-slate-200 p-2 rounded-lg space-y-1 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span>Proton (+) : {p}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
              <span>Neutron (0) : {n}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span>Electron (-) : {e}</span>
            </div>
          </div>

          <svg viewBox="-180 -180 360 360" className="w-full max-w-[320px] h-[320px]">
            {/* Background glow */}
            <circle cx="0" cy="0" r="18" fill="rgba(239, 68, 68, 0.25)" className="animate-pulse" />

            {/* Electron Shells */}
            {shells.map((count, shellIdx) => {
              const radius = 45 + shellIdx * 34;
              return (
                <g key={shellIdx}>
                  {/* Orbit circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r={radius}
                    fill="none"
                    stroke="rgba(148, 163, 184, 0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  {/* Shell Label */}
                  <text
                    x={radius - 4}
                    y="-4"
                    fill="rgba(148, 163, 184, 0.6)"
                    fontSize="9"
                    fontWeight="bold"
                  >
                    Lớp {shellIdx + 1} ({count}e)
                  </text>

                  {/* Electrons on orbit */}
                  {Array.from({ length: count }).map((_, eIdx) => {
                    const angle = (2 * Math.PI * eIdx) / count;
                    const ex = Math.cos(angle) * radius;
                    const ey = Math.sin(angle) * radius;
                    return (
                      <g key={eIdx}>
                        {/* Glow */}
                        <circle cx={ex} cy={ey} r="7" fill="rgba(34, 211, 238, 0.4)" />
                        {/* Electron point */}
                        <circle cx={ex} cy={ey} r="4.5" fill="#22d3ee" stroke="#0891b2" strokeWidth="1" />
                        <text x={ex} y={ey + 2.5} fontSize="7" fill="#0f172a" fontWeight="bold" textAnchor="middle">-</text>
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Nucleus Core */}
            <g>
              <circle cx="0" cy="0" r="22" fill="url(#nucleusGrad)" stroke="#f87171" strokeWidth="1.5" />
              <text x="0" y="-3" fill="#ffffff" fontSize="10" fontWeight="extrabold" textAnchor="middle">
                {customMode ? 'HẠT NHÂN' : currentElement.symbol}
              </text>
              <text x="0" y="8" fill="#fecaca" fontSize="8" textAnchor="middle">
                +{p}
              </text>
            </g>

            <defs>
              <radialGradient id="nucleusGrad" cx="35%" cy="35%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="70%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>
            </defs>
          </svg>

          <div className="text-center text-xs text-cyan-200 mt-2">
            Mô hình cấu trúc: {shells.map((c, i) => `Lớp ${i+1}: ${c}e`).join(' | ')}
          </div>
        </div>

        {/* Details & Physical Properties Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500">Tên nguyên tố</span>
                <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  {customMode ? `Nguyên tử tự do (Z = ${p})` : currentElement.name}
                  {!customMode && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">
                      {currentElement.symbol}
                    </span>
                  )}
                </h4>
              </div>
              {!customMode && (
                <span className={`text-xs px-2.5 py-1 rounded-lg font-bold ${currentElement.type === 'metal' ? 'bg-amber-100 text-amber-800' : currentElement.type === 'nonmetal' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800'}`}>
                  {currentElement.type === 'metal' ? 'Kim loại' : currentElement.type === 'nonmetal' ? 'Phi kim' : 'Khí hiếm'}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white rounded-lg border border-slate-200/80">
                <span className="text-slate-500 block">Số hiệu nguyên tử (Z)</span>
                <span className="text-sm font-bold text-slate-800">{p}</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200/80">
                <span className="text-slate-500 block">Khối lượng nguyên tử</span>
                <span className="text-sm font-bold text-indigo-600">{massAmu} amu</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200/80">
                <span className="text-slate-500 block">Số lớp electron</span>
                <span className="text-sm font-bold text-slate-800">{shells.length} (Chu kì {shells.length})</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200/80">
                <span className="text-slate-500 block">Số e lớp ngoài cùng</span>
                <span className="text-sm font-bold text-slate-800">
                  {shells[shells.length - 1] || 0} (Nhóm {shells[shells.length - 1] || 0}A)
                </span>
              </div>
            </div>

            {/* Charge Balance Check */}
            <div className={`p-2.5 rounded-lg text-xs font-semibold flex items-center justify-between ${charge === 0 ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}`}>
              <div className="flex items-center gap-1.5">
                {charge === 0 ? <Sparkles className="w-4 h-4 text-emerald-600" /> : <ShieldAlert className="w-4 h-4 text-amber-600" />}
                <span>
                  {charge === 0 ? 'Nguyên tử trung hoà về điện (Số p = Số e)' : `Ion mang điện (${charge > 0 ? `+${charge}` : charge})`}
                </span>
              </div>
              <span className="font-mono font-bold">q = {charge === 0 ? '0' : charge > 0 ? `+${charge}` : charge}</span>
            </div>

            {!customMode && currentElement.commonUses && (
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
                <div className="flex items-center gap-1 text-slate-700 font-bold mb-1">
                  <Info className="w-3.5 h-3.5 text-blue-500" />
                  <span>Ứng dụng thực tế:</span>
                </div>
                <p className="italic">{currentElement.commonUses}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
