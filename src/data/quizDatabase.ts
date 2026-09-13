import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // PHƯƠNG PHÁP & KĨ NĂNG
  {
    id: "q_method_1",
    chapterId: 0,
    lessonId: 1,
    discipline: "method",
    question: "Phương pháp tìm hiểu tự nhiên được tiến hành theo thứ tự 5 bước nào?",
    options: [
      "Đề xuất vấn đề -> Dự đoán -> Lập kế hoạch -> Thực hiện kế hoạch -> Viết báo cáo, thảo luận",
      "Dự đoán -> Đề xuất vấn đề -> Thực hiện kế hoạch -> Lập kế hoạch -> Viết báo cáo",
      "Lập kế hoạch -> Đề xuất vấn đề -> Dự đoán -> Thực hiện kế hoạch -> Kết luận",
      "Quan sát -> Đo đạc -> Lập báo cáo -> Dự đoán -> Thảo luận"
    ],
    correctIndex: 0,
    explanation: "Quy trình khoa học chuẩn: (1) Đề xuất vấn đề -> (2) Đưa ra dự đoán -> (3) Lập kế hoạch -> (4) Thực hiện kế hoạch kiểm tra -> (5) Viết báo cáo, thảo luận.",
    difficulty: "easy"
  },
  {
    id: "q_method_2",
    chapterId: 0,
    lessonId: 1,
    discipline: "method",
    question: "Để đo chính xác thời gian một viên bi chuyển động giữa hai cổng quang điện A và B, ta cần đặt đồng hồ hiện số ở chế độ nào?",
    options: [
      "MODE A",
      "MODE B",
      "MODE A ↔ B",
      "MODE RESET"
    ],
    correctIndex: 2,
    explanation: "MODE A ↔ B dùng để đo khoảng thời gian vật đi từ cổng quang điện A đến cổng quang điện B.",
    difficulty: "medium"
  },

  // CHƯƠNG I: NGUYÊN TỬ & BẢNG TUẦN HOÀN
  {
    id: "q_atom_1",
    chapterId: 1,
    lessonId: 2,
    discipline: "chemistry",
    question: "Trong nguyên tử, các hạt mang điện tích dương là gì?",
    options: [
      "Electron (e)",
      "Proton (p)",
      "Neutron (n)",
      "Proton và Electron"
    ],
    correctIndex: 1,
    explanation: "Proton mang điện tích +1, nằm trong hạt nhân; Electron mang điện tích -1 ở vỏ; Neutron không mang điện.",
    difficulty: "easy"
  },
  {
    id: "q_atom_2",
    chapterId: 1,
    lessonId: 2,
    discipline: "chemistry",
    question: "Khối lượng của nguyên tử hầu như tập trung ở đâu?",
    options: [
      "Ở lớp vỏ electron",
      "Ở hạt nhân nguyên tử",
      "Phân bố đều khắp nguyên tử",
      "Ở các hạt electron lớp ngoài cùng"
    ],
    correctIndex: 1,
    explanation: "Vì electron có khối lượng rất nhỏ (~0,00055 amu) không đáng kể so với proton (1 amu) và neutron (1 amu), nên khối lượng nguyên tử tập trung ở hạt nhân.",
    difficulty: "easy"
  },
  {
    id: "q_atom_3",
    chapterId: 1,
    lessonId: 4,
    discipline: "chemistry",
    question: "Trong bảng tuần hoàn, các nguyên tố trong cùng một chu kì có đặc điểm nào chung?",
    options: [
      "Cùng số proton trong hạt nhân",
      "Cùng số electron ở lớp ngoài cùng",
      "Cùng số lớp electron trong nguyên tử",
      "Cùng tính chất hoá học"
    ],
    correctIndex: 2,
    explanation: "Số thứ tự của chu kì bằng số lớp electron của nguyên tử các nguyên tố thuộc chu kì đó.",
    difficulty: "easy"
  },
  {
    id: "q_atom_4",
    chapterId: 1,
    lessonId: 4,
    discipline: "chemistry",
    question: "Các nguyên tố khí hiếm thuộc nhóm nào trong bảng tuần hoàn?",
    options: [
      "Nhóm IA",
      "Nhóm IIA",
      "Nhóm VIIA",
      "Nhóm VIIIA"
    ],
    correctIndex: 3,
    explanation: "Nhóm VIIIA gồm 7 nguyên tố khí hiếm (He, Ne, Ar, Kr, Xe, Rn, Og) có lớp vỏ ngoài cùng bền vững (8e, riêng He có 2e).",
    difficulty: "easy"
  },

  // CHƯƠNG II: PHÂN TỬ & LIÊN KẾT
  {
    id: "q_bond_1",
    chapterId: 2,
    lessonId: 5,
    discipline: "chemistry",
    question: "Chất nào sau đây là hợp chất?",
    options: [
      "Khí oxygen (O₂)",
      "Kim loại đồng (Cu)",
      "Muối ăn (NaCl)",
      "Than chì (C)"
    ],
    correctIndex: 2,
    explanation: "NaCl được cấu tạo từ 2 nguyên tố hoá học khác nhau (Na và Cl) nên là một hợp chất.",
    difficulty: "easy"
  },
  {
    id: "q_bond_2",
    chapterId: 2,
    lessonId: 6,
    discipline: "chemistry",
    question: "Liên kết ion được hình thành do:",
    options: [
      "Lực hút tĩnh điện giữa các ion mang điện tích trái dấu",
      "Sự dùng chung các cặp electron giữa 2 nguyên tử phi kim",
      "Sự chia sẻ proton giữa các hạt nhân",
      "Lực liên kết kim loại giữa các hạt mang điện"
    ],
    correctIndex: 0,
    explanation: "Kim loại nhường e tạo ion dương, phi kim nhận e tạo ion âm; lực hút tĩnh điện giữa cation và anion tạo thành liên kết ion.",
    difficulty: "medium"
  },
  {
    id: "q_bond_3",
    chapterId: 2,
    lessonId: 7,
    discipline: "chemistry",
    question: "Theo quy tắc hoá trị, trong hợp chất hai nguyên tố AxBy với hoá trị tương ứng a và b, biểu thức nào sau đây là đúng?",
    options: [
      "a · b = x · y",
      "a · x = b · y",
      "a / x = b / y",
      "a + x = b + y"
    ],
    correctIndex: 1,
    explanation: "Tích chỉ số và hoá trị của nguyên tố này bằng tích chỉ số và hoá trị của nguyên tố kia: a · x = b · y.",
    difficulty: "easy"
  },

  // CHƯƠNG III: TỐC ĐỘ
  {
    id: "q_speed_1",
    chapterId: 3,
    lessonId: 8,
    discipline: "physics",
    question: "Tốc độ 15 m/s tương ứng với bao nhiêu km/h?",
    options: [
      "4,17 km/h",
      "15 km/h",
      "54 km/h",
      "150 km/h"
    ],
    correctIndex: 2,
    explanation: "15 m/s = 15 · 3,6 = 54 km/h.",
    difficulty: "easy"
  },
  {
    id: "q_speed_2",
    chapterId: 3,
    lessonId: 10,
    discipline: "physics",
    question: "Trên đồ thị quãng đường - thời gian (s - t), đoạn đồ thị nằm ngang song song với trục thời gian cho biết vật đang:",
    options: [
      "Chuyển động thẳng đều rất nhanh",
      "Đang dừng lại (đứng yên)",
      "Đang tăng tốc độ",
      "Đang chuyển động lùi lại"
    ],
    correctIndex: 1,
    explanation: "Đoạn thẳng song song với trục Ot nghĩa là quãng đường s không thay đổi theo thời gian => vật đang đứng yên.",
    difficulty: "medium"
  },
  {
    id: "q_speed_3",
    chapterId: 3,
    lessonId: 11,
    discipline: "physics",
    question: "Theo quy tắc '3 giây' trên đường cao tốc, nếu xe chạy với tốc độ 20 m/s (72 km/h) thì khoảng cách an toàn tối thiểu với xe phía trước là:",
    options: [
      "20 m",
      "40 m",
      "60 m",
      "80 m"
    ],
    correctIndex: 2,
    explanation: "Khoảng cách an toàn s = v · 3 = 20 · 3 = 60 m.",
    difficulty: "medium"
  },

  // CHƯƠNG IV: ÂM THANH
  {
    id: "q_sound_1",
    chapterId: 4,
    lessonId: 12,
    discipline: "physics",
    question: "Âm thanh truyền nhanh nhất trong môi trường nào và không truyền được trong môi trường nào?",
    options: [
      "Nhanh nhất trong chất khí, không truyền được trong chất rắn",
      "Nhanh nhất trong chất rắn, không truyền được trong chân không",
      "Nhanh nhất trong chất lỏng, không truyền được trong chất khí",
      "Nhanh nhất trong chân không, không truyền được trong chất rắn"
    ],
    correctIndex: 1,
    explanation: "V_rắn > V_lỏng > V_khí và sóng âm hoàn toàn không truyền được trong môi trường chân không.",
    difficulty: "easy"
  },
  {
    id: "q_sound_2",
    chapterId: 4,
    lessonId: 13,
    discipline: "physics",
    question: "Độ to của âm phụ thuộc vào yếu tố nào, độ cao (bổng/trầm) của âm phụ thuộc vào yếu tố nào?",
    options: [
      "Độ to phụ thuộc vào tần số; Độ cao phụ thuộc vào biên độ",
      "Độ to phụ thuộc vào biên độ dao động; Độ cao phụ thuộc vào tần số dao động",
      "Cả hai đều phụ thuộc vào vận tốc truyền sóng",
      "Độ to phụ thuộc vào môi trường; Độ cao phụ thuộc vào khoảng cách"
    ],
    correctIndex: 1,
    explanation: "Biên độ càng lớn -> Âm càng to; Tần số dao động (Hz) càng lớn -> Âm càng cao (bổng).",
    difficulty: "easy"
  },
  {
    id: "q_sound_3",
    chapterId: 4,
    lessonId: 14,
    discipline: "physics",
    question: "Ta nghe được tiếng vang khi âm phản xạ đến tai chậm hơn âm trực tiếp một khoảng thời gian ít nhất là:",
    options: [
      "1/5 giây",
      "1/10 giây",
      "1/15 giây",
      "1/30 giây"
    ],
    correctIndex: 2,
    explanation: "Để tai phân biệt được âm trực tiếp và âm phản xạ thành tiếng vang riêng biệt, khoảng trễ phải ≥ 1/15 giây (~0,067 s).",
    difficulty: "medium"
  },

  // CHƯƠNG V: ÁNH SÁNG
  {
    id: "q_light_1",
    chapterId: 5,
    lessonId: 16,
    discipline: "physics",
    question: "Định luật phản xạ ánh sáng phát biểu rằng góc phản xạ i' và góc tới i có mối quan hệ:",
    options: [
      "Góc phản xạ lớn gấp đôi góc tới (i' = 2i)",
      "Góc phản xạ bằng góc tới (i' = i)",
      "Góc phản xạ phụ thuộc vào chất liệu gương",
      "Góc phản xạ luôn bằng 90° - i"
    ],
    correctIndex: 1,
    explanation: "Định luật phản xạ ánh sáng: Tia phản xạ nằm trong mặt phẳng tới và góc phản xạ luôn bằng góc tới (i' = i).",
    difficulty: "easy"
  },
  {
    id: "q_light_2",
    chapterId: 5,
    lessonId: 17,
    discipline: "physics",
    question: "Ảnh của một vật tạo bởi gương phẳng có tính chất nào sau đây?",
    options: [
      "Ảnh thật, hứng được trên màn chắn, nhỏ hơn vật",
      "Ảnh ảo, không hứng được trên màn, lớn hơn vật",
      "Ảnh ảo, không hứng được trên màn, kích thước bằng vật và đối xứng với vật qua gương",
      "Ảnh thật, ngược chiều với vật"
    ],
    correctIndex: 2,
    explanation: "Ảnh qua gương phẳng luôn là ảnh ảo, cùng độ lớn với vật và cách gương khoảng cách bằng khoảng cách từ vật tới gương.",
    difficulty: "easy"
  },

  // CHƯƠNG VI: TỪ
  {
    id: "q_magnet_1",
    chapterId: 6,
    lessonId: 19,
    discipline: "physics",
    question: "Quy ước chiều của đường sức từ ở bên ngoài thanh nam châm thẳng là:",
    options: [
      "Đi ra từ cực Nam, đi vào cực Bắc",
      "Đi ra từ cực Bắc (N), đi vào cực Nam (S)",
      "Đi từ tâm nam châm toả tròn ra xung quanh",
      "Không có chiều cố định"
    ],
    correctIndex: 1,
    explanation: "Quy ước: Đường sức từ bên ngoài nam châm có chiều 'Vào Nam - Ra Bắc' (ra cực Bắc N, vào cực Nam S).",
    difficulty: "easy"
  },
  {
    id: "q_magnet_2",
    chapterId: 6,
    lessonId: 20,
    discipline: "physics",
    question: "Nam châm điện có ưu điểm vượt trội nào so với nam châm vĩnh cửu?",
    options: [
      "Không bao giờ mất từ tính",
      "Có thể tăng giảm lực từ linh hoạt và ngắt từ tính tức thì khi ngắt dòng điện",
      "Không cần dùng kim loại để chế tạo",
      "Chỉ hút được vàng bạc"
    ],
    correctIndex: 1,
    explanation: "Nam châm điện có thể điều chỉnh độ mạnh yếu (tăng số vòng dây, tăng dòng điện), đảo cực từ và ngắt từ tính lập tức khi tắt điện.",
    difficulty: "medium"
  },

  // CHƯƠNG VII: TRAO ĐỔI CHẤT & NĂNG LƯỢNG
  {
    id: "q_bio_1",
    chapterId: 7,
    lessonId: 22,
    discipline: "biology",
    question: "Bào quan nào trực tiếp thực hiện quá trình quang hợp ở tế bào thực vật?",
    options: [
      "Ti thể",
      "Lục lạp",
      "Không bào",
      "Nhân tế bào"
    ],
    correctIndex: 1,
    explanation: "Lục lạp chứa chất diệp lục hấp thụ quang năng để tổng hợp glucose và giải phóng oxygen.",
    difficulty: "easy"
  },
  {
    id: "q_bio_2",
    chapterId: 7,
    lessonId: 25,
    discipline: "biology",
    question: "Hô hấp tế bào là quá trình phân giải chất hữu cơ nhằm mục đích chính là gì?",
    options: [
      "Tổng hợp tinh bột dự trữ",
      "Giải phóng năng lượng (ATP) cung cấp cho các hoạt động sống",
      "Thải nhiều khí oxygen ra môi trường",
      "Tăng kích thước lục lạp"
    ],
    correctIndex: 1,
    explanation: "Hô hấp tế bào phân giải glucose giải phóng năng lượng ATP để tế bào duy trì mọi hoạt động sống.",
    difficulty: "easy"
  },
  {
    id: "q_bio_3",
    chapterId: 7,
    lessonId: 30,
    discipline: "biology",
    question: "Mạch gỗ và mạch rây trong thân cây có chức năng vận chuyển lần lượt là:",
    options: [
      "Mạch gỗ vận chuyển chất hữu cơ đi xuống; Mạch rây vận chuyển nước và khoáng đi lên",
      "Mạch gỗ vận chuyển nước và muối khoáng đi lên; Mạch rây vận chuyển chất hữu cơ đi xuống",
      "Cả hai mạch đều chỉ vận chuyển nước từ rễ lên lá",
      "Mạch gỗ vận chuyển khí CO₂; Mạch rây vận chuyển khí O₂"
    ],
    correctIndex: 1,
    explanation: "Mạch gỗ (xylem) dẫn dòng đi lên (nước + muối khoáng từ rễ); Mạch rây (phloem) dẫn dòng đi xuống (chất hữu cơ từ lá).",
    difficulty: "medium"
  },

  // CHƯƠNG VIII & IX & X: CẢM ỨNG, SINH TRƯỞNG, SINH SẢN
  {
    id: "q_bio_4",
    chapterId: 8,
    lessonId: 33,
    discipline: "biology",
    question: "Hiện tượng ngọn cây vươn về phía có ánh sáng chiếu vào được gọi là:",
    options: [
      "Tính hướng tiếp xúc",
      "Tính hướng nước",
      "Tính hướng sáng",
      "Tính hướng hoá"
    ],
    correctIndex: 2,
    explanation: "Thực vật có tính hướng sáng dương, chồi ngọn uốn cong và vươn về phía nguồn sáng để hấp thụ tối đa ánh sáng quang hợp.",
    difficulty: "easy"
  },
  {
    id: "q_bio_5",
    chapterId: 9,
    lessonId: 36,
    discipline: "biology",
    question: "Mô phân sinh đỉnh ở thực vật có vị trí và chức năng là:",
    options: [
      "Ở tầng sinh vỏ giúp thân cây to ra",
      "Ở đỉnh ngọn thân và đỉnh rễ giúp thân, cành và rễ tăng chiều dài",
      "Ở phiến lá giúp lá quang hợp",
      "Ở trong hoa giúp hoa nở to"
    ],
    correctIndex: 1,
    explanation: "Mô phân sinh đỉnh nằm ở chóp rễ và đỉnh ngọn, phân chia tế bào giúp cây dài ra theo trục dọc.",
    difficulty: "easy"
  },
  {
    id: "q_bio_6",
    chapterId: 10,
    lessonId: 40,
    discipline: "biology",
    question: "Ở thực vật có hoa, sau khi thụ tinh xảy ra, bầu nhuỵ sẽ phát triển thành ... và noãn đã thụ tinh sẽ phát triển thành ...?",
    options: [
      "Hạt / Quả",
      "Quả / Hạt",
      "Hoa / Lá",
      "Rễ / Thân"
    ],
    correctIndex: 1,
    explanation: "Sau thụ tinh: Bầu nhuỵ phình to phát triển thành QUẢ (chứa thịt quả), còn Noãn đã thụ tinh phát triển thành HẠT (chứa phôi cơ thể mới).",
    difficulty: "medium"
  }
];
