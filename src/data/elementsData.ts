export interface ChemicalElement {
  z: number;
  symbol: string;
  name: string;
  latinName?: string;
  mass: number; // in amu
  period: number;
  group: string;
  type: 'metal' | 'nonmetal' | 'noble_gas';
  electronConfig: number[]; // e.g. [2, 8, 1]
  valence: string;
  commonUses: string;
}

export const ELEMENTS_20: ChemicalElement[] = [
  {
    z: 1,
    symbol: "H",
    name: "Hydrogen",
    latinName: "Hydrogenium",
    mass: 1,
    period: 1,
    group: "IA",
    type: "nonmetal",
    electronConfig: [1],
    valence: "I",
    commonUses: "Nhiên liệu sạch tương lai, bơm khinh khí cầu, tổng hợp ammonia."
  },
  {
    z: 2,
    symbol: "He",
    name: "Helium",
    latinName: "Helium",
    mass: 4,
    period: 1,
    group: "VIIIA",
    type: "noble_gas",
    electronConfig: [2],
    valence: "0",
    commonUses: "Khí trơ an toàn bơm bóng bay, làm mát máy chụp MRI."
  },
  {
    z: 3,
    symbol: "Li",
    name: "Lithium",
    latinName: "Lithium",
    mass: 7,
    period: 2,
    group: "IA",
    type: "metal",
    electronConfig: [2, 1],
    valence: "I",
    commonUses: "Pin Lithium-ion cho điện thoại, xe điện, máy tính."
  },
  {
    z: 4,
    symbol: "Be",
    name: "Beryllium",
    latinName: "Beryllium",
    mass: 9,
    period: 2,
    group: "IIA",
    type: "metal",
    electronConfig: [2, 2],
    valence: "II",
    commonUses: "Hợp kim siêu nhẹ bền cho hàng không vũ trụ, gương viễn vọng không gian."
  },
  {
    z: 5,
    symbol: "B",
    name: "Boron",
    latinName: "Borium",
    mass: 11,
    period: 2,
    group: "IIIA",
    type: "nonmetal",
    electronConfig: [2, 3],
    valence: "III",
    commonUses: "Thuỷ tinh chịu nhiệt Pyrex, phân bón vi lượng cho cây trồng."
  },
  {
    z: 6,
    symbol: "C",
    name: "Carbon",
    latinName: "Carboneum",
    mass: 12,
    period: 2,
    group: "IVA",
    type: "nonmetal",
    electronConfig: [2, 4],
    valence: "II, IV",
    commonUses: "Than chì làm ruột bút chì, kim cương làm đồ trang sức/mũi khoan, sợi carbon siêu bền."
  },
  {
    z: 7,
    symbol: "N",
    name: "Nitrogen",
    latinName: "Nitrogenium",
    mass: 14,
    period: 2,
    group: "VA",
    type: "nonmetal",
    electronConfig: [2, 5],
    valence: "I, II, III, IV, V",
    commonUses: "Bảo quản thực phẩm, sản xuất phân đạm (urea), chiếm 78% thể tích không khí."
  },
  {
    z: 8,
    symbol: "O",
    name: "Oxygen",
    latinName: "Oxygenium",
    mass: 16,
    period: 2,
    group: "VIA",
    type: "nonmetal",
    electronConfig: [2, 6],
    valence: "II",
    commonUses: "Duy trì sự sống và sự cháy, dưỡng khí y tế trong bệnh viện."
  },
  {
    z: 9,
    symbol: "F",
    name: "Fluorine",
    latinName: "Fluorum",
    mass: 19,
    period: 2,
    group: "VIIA",
    type: "nonmetal",
    electronConfig: [2, 7],
    valence: "I",
    commonUses: "Hợp chất fluoride trong kem đánh răng ngừa sâu răng, chất chống dính Teflon."
  },
  {
    z: 10,
    symbol: "Ne",
    name: "Neon",
    latinName: "Neon",
    mass: 20,
    period: 2,
    group: "VIIIA",
    type: "noble_gas",
    electronConfig: [2, 8],
    valence: "0",
    commonUses: "Đèn quảng cáo neon phát ánh sáng đỏ cam rực rỡ."
  },
  {
    z: 11,
    symbol: "Na",
    name: "Sodium (Natri)",
    latinName: "Natrium",
    mass: 23,
    period: 3,
    group: "IA",
    type: "metal",
    electronConfig: [2, 8, 1],
    valence: "I",
    commonUses: "Thành phần của muối ăn (NaCl), xà phòng hoá, truyền xung thần kinh."
  },
  {
    z: 12,
    symbol: "Mg",
    name: "Magnesium",
    latinName: "Magnesium",
    mass: 24,
    period: 3,
    group: "IIA",
    type: "metal",
    electronConfig: [2, 8, 2],
    valence: "II",
    commonUses: "Thành phần trung tâm của phân tử diệp lục ở lá cây, hợp kim làm vỏ máy bay."
  },
  {
    z: 13,
    symbol: "Al",
    name: "Aluminium (Nhôm)",
    latinName: "Aluminium",
    mass: 27,
    period: 3,
    group: "IIIA",
    type: "metal",
    electronConfig: [2, 8, 3],
    valence: "III",
    commonUses: "Màng bọc thực phẩm, xoong nồi, cửa nhôm kính, vỏ máy bay."
  },
  {
    z: 14,
    symbol: "Si",
    name: "Silicon",
    latinName: "Silicium",
    mass: 28,
    period: 3,
    group: "IVA",
    type: "nonmetal",
    electronConfig: [2, 8, 4],
    valence: "IV",
    commonUses: "Chế tạo chip bán dẫn máy tính, pin mặt trời, cát thạch anh làm thuỷ tinh."
  },
  {
    z: 15,
    symbol: "P",
    name: "Phosphorus (Phốt pho)",
    latinName: "Phosphorus",
    mass: 31,
    period: 3,
    group: "VA",
    type: "nonmetal",
    electronConfig: [2, 8, 5],
    valence: "III, V",
    commonUses: "Sản xuất phân lân bón cây, diêm quẹt, cấu tạo ADN và xương răng."
  },
  {
    z: 16,
    symbol: "S",
    name: "Sulfur (Lưu huỳnh)",
    latinName: "Sulfur",
    mass: 32,
    period: 3,
    group: "VIA",
    type: "nonmetal",
    electronConfig: [2, 8, 6],
    valence: "II, IV, VI",
    commonUses: "Sản xuất sulfuric acid (H₂SO₄), lưu hoá cao su làm lốp xe, thuốc pháo."
  },
  {
    z: 17,
    symbol: "Cl",
    name: "Chlorine",
    latinName: "Chlorum",
    mass: 35.5,
    period: 3,
    group: "VIIA",
    type: "nonmetal",
    electronConfig: [2, 8, 7],
    valence: "I, III, V, VII",
    commonUses: "Khử trùng nước sinh hoạt, bể bơi, sản xuất nhựa PVC, muối ăn (NaCl)."
  },
  {
    z: 18,
    symbol: "Ar",
    name: "Argon",
    latinName: "Argon",
    mass: 40,
    period: 3,
    group: "VIIIA",
    type: "noble_gas",
    electronConfig: [2, 8, 8],
    valence: "0",
    commonUses: "Khí bảo vệ trong hàn kim loại, bơm trong bóng đèn dây tóc để chống cháy tim đèn."
  },
  {
    z: 19,
    symbol: "K",
    name: "Potassium (Kali)",
    latinName: "Kalium",
    mass: 39,
    period: 4,
    group: "IA",
    type: "metal",
    electronConfig: [2, 8, 8, 1],
    valence: "I",
    commonUses: "Sản xuất phân kali bón cây giúp chống rét/chịu hạn, điều hoà huyết áp người."
  },
  {
    z: 20,
    symbol: "Ca",
    name: "Calcium",
    latinName: "Calcium",
    mass: 40,
    period: 4,
    group: "IIA",
    type: "metal",
    electronConfig: [2, 8, 8, 2],
    valence: "II",
    commonUses: "Cấu tạo xương và răng chắc khoẻ, vôi tôi xây dựng, khử chua đất trồng."
  }
];

export const OTHER_COMMON_ELEMENTS = [
  { z: 26, symbol: "Fe", name: "Iron (Sắt)", mass: 56, valence: "II, III", type: "metal", commonUses: "Xây dựng cầu đường, máy móc, thành phần tạo hemoglobin trong máu." },
  { z: 29, symbol: "Cu", name: "Copper (Đồng)", mass: 64, valence: "I, II", type: "metal", commonUses: "Lõi dây điện dẫn điện tốt, đúc tượng, ống nước." },
  { z: 30, symbol: "Zn", name: "Zinc (Kẽm)", mass: 65, valence: "II", type: "metal", commonUses: "Mạ tôn chống gỉ, vi lượng tăng cường miễn dịch." },
  { z: 35, symbol: "Br", name: "Bromine", mass: 80, valence: "I", type: "nonmetal", commonUses: "Dung dịch khử trùng, chất chống cháy." },
  { z: 47, symbol: "Ag", name: "Silver (Bạc)", mass: 108, valence: "I", type: "metal", commonUses: "Đồ trang sức, dẫn điện/nhiệt tốt nhất, tráng gương." },
  { z: 53, symbol: "I", name: "Iodine (I-ốt)", mass: 127, valence: "I", type: "nonmetal", commonUses: "Phòng ngừa bệnh bướu cổ, thuốc sát trùng, thử tinh bột." },
  { z: 79, symbol: "Au", name: "Gold (Vàng)", mass: 197, valence: "III", type: "metal", commonUses: "Kim loại quý làm trang sức, vi mạch điện tử cao cấp." },
  { z: 80, symbol: "Hg", name: "Mercury (Thuỷ ngân)", mass: 201, valence: "I, II", type: "metal", commonUses: "Kim loại duy nhất ở thể lỏng ở nhiệt độ phòng, trong nhiệt kế." },
  { z: 82, symbol: "Pb", name: "Lead (Chì)", mass: 207, valence: "II, IV", type: "metal", commonUses: "Ắc quy xe máy/ô tô, tấm chắn bức xạ tia X." }
];
