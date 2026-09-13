import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

interface PresetCompound {
  formula: string;
  name: string;
  elements: { symbol: string; mass: number; count: number; name: string }[];
  note: string;
}

const PRESET_COMPOUNDS: PresetCompound[] = [
  {
    formula: "H₂O",
    name: "Nước (Chất lỏng sống)",
    elements: [
      { symbol: "H", mass: 1, count: 2, name: "Hydrogen" },
      { symbol: "O", mass: 16, count: 1, name: "Oxygen" }
    ],
    note: "Chiếm >70% cơ thể người, liên kết cộng hoá trị phân cực."
  },
  {
    formula: "CO₂",
    name: "Khí Carbon dioxide",
    elements: [
      { symbol: "C", mass: 12, count: 1, name: "Carbon" },
      { symbol: "O", mass: 16, count: 2, name: "Oxygen" }
    ],
    note: "Nguyên liệu quang hợp của thực vật, sản phẩm của hô hấp tế bào."
  },
  {
    formula: "CH₄",
    name: "Khí Methane",
    elements: [
      { symbol: "C", mass: 12, count: 1, name: "Carbon" },
      { symbol: "H", mass: 1, count: 4, name: "Hydrogen" }
    ],
    note: "Thành phần chính của khí thiên nhiên và khí biogas."
  },
  {
    formula: "NaCl",
    name: "Muối ăn (Sodium chloride)",
    elements: [
      { symbol: "Na", mass: 23, count: 1, name: "Sodium" },
      { symbol: "Cl", mass: 35.5, count: 1, name: "Chlorine" }
    ],
    note: "Hợp chất ion dạng tinh thể rắn, duy trì cân bằng điện giải cơ thể."
  },
  {
    formula: "CaCO₃",
    name: "Calcium carbonate (Đá vôi)",
    elements: [
      { symbol: "Ca", mass: 40, count: 1, name: "Calcium" },
      { symbol: "C", mass: 12, count: 1, name: "Carbon" },
      { symbol: "O", mass: 16, count: 3, name: "Oxygen" }
    ],
    note: "Thành phần chính của đá vôi, vỏ sò, váng đục trong nước vôi trong."
  },
  {
    formula: "KNO₃",
    name: "Potassium nitrate (Phân bón NPK)",
    elements: [
      { symbol: "K", mass: 39, count: 1, name: "Potassium" },
      { symbol: "N", mass: 14, count: 1, name: "Nitrogen" },
      { symbol: "O", mass: 16, count: 3, name: "Oxygen" }
    ],
    note: "Cung cấp đồng thời đạm (N) và kali (K) giúp cây tăng trưởng khoẻ."
  },
  {
    formula: "C₆H₁₂O₆",
    name: "Glucose (Đường đơn)",
    elements: [
      { symbol: "C", mass: 12, count: 6, name: "Carbon" },
      { symbol: "H", mass: 1, count: 12, name: "Hydrogen" },
      { symbol: "O", mass: 16, count: 6, name: "Oxygen" }
    ],
    note: "Sản phẩm trực tiếp của quang hợp, nguyên liệu đầu vào của hô hấp tế bào tạo ATP."
  },
  {
    formula: "Al₂(SO₄)₃",
    name: "Aluminium sulfate (Phèn nhôm)",
    elements: [
      { symbol: "Al", mass: 27, count: 2, name: "Aluminium" },
      { symbol: "S", mass: 32, count: 3, name: "Sulfur" },
      { symbol: "O", mass: 16, count: 12, name: "Oxygen" }
    ],
    note: "Dùng làm chất keo lắng lọc trong nước sinh hoạt."
  }
];

export const FormulaCalculator: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const currentCompound = PRESET_COMPOUNDS[selectedIdx];

  // Custom Valence Rule Practice Tool
  const [elemA, setElemA] = useState({ symbol: "Al", valence: 3, mass: 27 });
  const [elemB, setElemB] = useState({ symbol: "O", valence: 2, mass: 16 });

  // Calculate gcd for valence
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const commonDiv = gcd(elemA.valence, elemB.valence);
  const subA = elemB.valence / commonDiv;
  const subB = elemA.valence / commonDiv;

  const resultingFormula = `${elemA.symbol}${subA > 1 ? subA : ''}${elemB.symbol}${subB > 1 ? subB : ''}`;
  const totalM = subA * elemA.mass + subB * elemB.mass;
  const percentA = ((subA * elemA.mass) / totalM) * 100;
  const percentB = 100 - percentA;

  // Preset Compound math
  const totalMolecularMass = currentCompound.elements.reduce((acc, el) => acc + el.mass * el.count, 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <Calculator className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              Bộ tính Hoá trị & Khối lượng phân tử (amu, %)
            </h3>
            <p className="text-sm text-slate-500">
              Lập công thức hoá học theo quy tắc hoá trị ($a \cdot x = b \cdot y$) và tính % khối lượng các nguyên tố
            </p>
          </div>
        </div>
      </div>

      {/* Part 1: Preset Compound Inspector */}
      <div className="space-y-4">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Chọn hợp chất KHTN 7 tiêu biểu để phân tích:
        </label>
        <div className="flex flex-wrap gap-2">
          {PRESET_COMPOUNDS.map((comp, idx) => (
            <button
              key={comp.formula}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${selectedIdx === idx ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100 scale-105' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {comp.formula} <span className="opacity-80 font-normal">({comp.name.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-50/70 via-slate-50 to-blue-50/50 p-5 rounded-2xl border border-indigo-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100/60 pb-3">
            <div>
              <span className="text-xs text-indigo-700 font-bold uppercase tracking-wider">Công thức hoá học</span>
              <div className="text-3xl font-black text-slate-900 tracking-wide font-mono mt-0.5">
                {currentCompound.formula}
              </div>
              <p className="text-sm font-semibold text-slate-700 mt-1">{currentCompound.name}</p>
            </div>
            <div className="bg-white px-4 py-2.5 rounded-xl border border-indigo-200/80 text-right shadow-sm">
              <span className="text-xs text-slate-500 block font-medium">Khối lượng phân tử (M)</span>
              <span className="text-2xl font-extrabold text-indigo-600 font-mono">{totalMolecularMass} amu</span>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Thành phần phần trăm khối lượng (%):
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {currentCompound.elements.map((el) => {
                const elementMassTotal = el.mass * el.count;
                const percentage = ((elementMassTotal / totalMolecularMass) * 100).toFixed(1);
                return (
                  <div key={el.symbol} className="bg-white p-3 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-800">
                        {el.name} ({el.symbol})
                      </span>
                      <span className="font-mono text-slate-500">{el.count} × {el.mass} = {elementMassTotal} amu</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-xs font-extrabold">
                      <span className="text-slate-500 font-medium">Tỉ lệ khối lượng</span>
                      <span className="text-indigo-600 font-mono">{percentage}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-500 italic mt-2">
              💡 Ghi chú: {currentCompound.note}
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive Valence Rule Balancer */}
      <div className="border-t border-slate-100 pt-6 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <h4 className="text-base font-bold text-slate-800">
            Thực hành: Lập công thức hoá học tự động theo quy tắc hoá trị
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-600 block">Nguyên tố / Nhóm A:</span>
            <div className="flex gap-2">
              <select
                value={elemA.symbol}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "Al") setElemA({ symbol: "Al", valence: 3, mass: 27 });
                  else if (val === "Na") setElemA({ symbol: "Na", valence: 1, mass: 23 });
                  else if (val === "Mg") setElemA({ symbol: "Mg", valence: 2, mass: 24 });
                  else if (val === "Fe(III)") setElemA({ symbol: "Fe", valence: 3, mass: 56 });
                  else if (val === "Fe(II)") setElemA({ symbol: "Fe", valence: 2, mass: 56 });
                  else if (val === "C") setElemA({ symbol: "C", valence: 4, mass: 12 });
                  else if (val === "P(V)") setElemA({ symbol: "P", valence: 5, mass: 31 });
                  else if (val === "H") setElemA({ symbol: "H", valence: 1, mass: 1 });
                  else if (val === "Ca") setElemA({ symbol: "Ca", valence: 2, mass: 40 });
                }}
                className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 flex-1"
              >
                <option value="Al">Aluminium (Al - Hoá trị III)</option>
                <option value="Na">Sodium (Na - Hoá trị I)</option>
                <option value="Mg">Magnesium (Mg - Hoá trị II)</option>
                <option value="Ca">Calcium (Ca - Hoá trị II)</option>
                <option value="Fe(III)">Iron (Fe - Hoá trị III)</option>
                <option value="Fe(II)">Iron (Fe - Hoá trị II)</option>
                <option value="C">Carbon (C - Hoá trị IV)</option>
                <option value="P(V)">Phosphorus (P - Hoá trị V)</option>
                <option value="H">Hydrogen (H - Hoá trị I)</option>
              </select>
            </div>
            <div className="text-[11px] text-slate-500 flex justify-between">
              <span>Hoá trị: <strong className="text-indigo-600">{elemA.valence}</strong></span>
              <span>NTK: <strong className="text-slate-700">{elemA.mass} amu</strong></span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-600 block">Nguyên tố / Nhóm B:</span>
            <div className="flex gap-2">
              <select
                value={elemB.symbol}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === "O") setElemB({ symbol: "O", valence: 2, mass: 16 });
                  else if (val === "Cl") setElemB({ symbol: "Cl", valence: 1, mass: 35.5 });
                  else if (val === "S") setElemB({ symbol: "S", valence: 2, mass: 32 });
                  else if (val === "SO4") setElemB({ symbol: "(SO₄)", valence: 2, mass: 96 });
                  else if (val === "OH") setElemB({ symbol: "(OH)", valence: 1, mass: 17 });
                  else if (val === "NO3") setElemB({ symbol: "(NO₃)", valence: 1, mass: 62 });
                  else if (val === "CO3") setElemB({ symbol: "(CO₃)", valence: 2, mass: 60 });
                  else if (val === "PO4") setElemB({ symbol: "(PO₄)", valence: 3, mass: 95 });
                }}
                className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 flex-1"
              >
                <option value="O">Oxygen (O - Hoá trị II)</option>
                <option value="Cl">Chlorine (Cl - Hoá trị I)</option>
                <option value="S">Sulfur (S - Hoá trị II)</option>
                <option value="SO4">Nhóm Sulfate (SO₄ - Hoá trị II)</option>
                <option value="OH">Nhóm Hydroxyl (OH - Hoá trị I)</option>
                <option value="NO3">Nhóm Nitrate (NO₃ - Hoá trị I)</option>
                <option value="CO3">Nhóm Carbonate (CO₃ - Hoá trị II)</option>
                <option value="PO4">Nhóm Phosphate (PO₄ - Hoá trị III)</option>
              </select>
            </div>
            <div className="text-[11px] text-slate-500 flex justify-between">
              <span>Hoá trị: <strong className="text-indigo-600">{elemB.valence}</strong></span>
              <span>NTK: <strong className="text-slate-700">{elemB.mass} amu</strong></span>
            </div>
          </div>
        </div>

        {/* Calculated Formula Result */}
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Biến đổi: a · x = b · y ⇒ x/y = {elemB.valence}/{elemA.valence} = {subA}/{subB}</span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Công thức tạo thành: <strong className="text-sm font-mono text-slate-900 bg-white px-2 py-0.5 rounded border border-emerald-300">{resultingFormula}</strong>
            </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-500 block">Khối lượng phân tử</span>
            <span className="text-xl font-extrabold text-emerald-700 font-mono">{totalM.toFixed(1)} amu</span>
          </div>
        </div>
      </div>
    </div>
  );
};
