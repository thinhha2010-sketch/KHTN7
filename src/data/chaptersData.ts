import { Chapter } from '../types';

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 0,
    romanNumber: "MỞ ĐẦU",
    title: "Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
    description: "Nắm vững tiến trình nghiên cứu khoa học 5 bước, các kĩ năng thực hành, sử dụng cổng quang điện và đồng hồ hiện số.",
    discipline: "method",
    color: "from-emerald-500 to-teal-700",
    badge: "Kĩ năng khoa học",
    iconName: "Compass",
    lessons: [
      {
        id: 1,
        chapterId: 0,
        lessonNumber: 1,
        title: "Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
        pageSGK: 6,
        pageSBT: 4,
        discipline: "method",
        summary: [
          "1. Phương pháp tìm hiểu tự nhiên gồm 5 bước: (1) Đề xuất vấn đề cần tìm hiểu -> (2) Đưa ra dự đoán khoa học -> (3) Lập kế hoạch kiểm tra dự đoán -> (4) Thực hiện kế hoạch kiểm tra dự đoán -> (5) Viết báo cáo, thảo luận và kết luận.",
          "2. Các kĩ năng tiến trình: Kĩ năng quan sát, phân loại, liên kết, đo, dự báo (định tính hoặc định lượng).",
          "3. Dụng cụ đo hiện đại môn KHTN 7: Cổng quang điện (cảm biến hồng ngoại D1, D2 đóng/mở mạch) kết nối với Đồng hồ đo thời gian hiện số (Đo thời gian chính xác tới 0,001 s).",
          "4. Báo cáo thực hành & thuyết trình: Cấu trúc gồm Mục đích, Chuẩn bị, Các bước tiến hành, Kết quả và Trả lời câu hỏi."
        ],
        keyFormulas: [
          { label: "Sai số & Giá trị trung bình", formula: "X_{tb} = \\frac{X_1 + X_2 + X_3}{3}", note: "Thực hiện phép đo lặp lại 3 lần để lấy giá trị trung bình chính xác." }
        ],
        coreTakeaways: [
          "Năm bước cần thực hiện khi áp dụng phương pháp tìm hiểu khoa học tự nhiên.",
          "Các kĩ năng cần thiết: quan sát, phân loại, liên kết, dự báo, đo lường.",
          "Cấu tạo và cách sử dụng cổng quang điện và đồng hồ đo thời gian hiện số (chế độ MODE A ↔ B)."
        ],
        canApply: [
          "Vận dụng phương pháp khoa học để giải quyết vấn đề thực tiễn (ví dụ: tìm hiểu nguyên nhân lũ lụt và đề xuất giải pháp bảo vệ rừng).",
          "Sử dụng thước kẹp, cân điện tử, cổng quang điện để đo đạc chính xác."
        ],
        exercises: [
          {
            id: "1.1",
            source: "SBT",
            code: "Bài 1.1",
            question: "Khẳng định: 'Kĩ năng dự báo là kĩ năng không cần thiết của người làm nghiên cứu' là Đúng hay Sai?",
            type: "true_false",
            correctAnswer: "Sai",
            explanation: "Khẳng định này Sai. Dự báo là kĩ năng quan trọng giúp nhà khoa học đề xuất giả thuyết và định hướng kế hoạch nghiên cứu."
          },
          {
            id: "1.4",
            source: "SBT",
            code: "Bài 1.4",
            question: "Con người có thể định lượng được các sự vật và hiện tượng tự nhiên dựa trên kĩ năng nào?",
            type: "multiple_choice",
            options: [
              "A. Kĩ năng quan sát, phân loại.",
              "B. Kĩ năng liên kết tri thức.",
              "C. Kĩ năng dự báo.",
              "D. Kĩ năng đo."
            ],
            correctAnswer: "D",
            explanation: "Kĩ năng đo cho phép xác định độ lớn, kích thước, khối lượng, thời gian... bằng số liệu định lượng cụ thể."
          },
          {
            id: "1.11",
            source: "SBT",
            code: "Bài 1.11",
            question: "Để đo thời gian một viên bi lăn giữa 2 cổng quang điện A và B trên máng nghiêng, cần chọn MODE nào trên đồng hồ đo hiện số?",
            type: "multiple_choice",
            options: [
              "A. MODE A ↔ B",
              "B. MODE A",
              "C. MODE B",
              "D. MODE RESET"
            ],
            correctAnswer: "A",
            explanation: "MODE A ↔ B cho phép đồng hồ bắt đầu đếm khi vật qua cổng quang A và dừng đếm khi vật qua cổng quang B."
          }
        ]
      }
    ]
  },
  {
    id: 1,
    romanNumber: "CHƯƠNG I",
    title: "Nguyên tử - Sơ lược về Bảng tuần hoàn các nguyên tố hoá học",
    description: "Cấu tạo nguyên tử (Rutherford - Bohr), các hạt p, n, e, khối lượng amu và nguyên tắc sắp xếp 118 nguyên tố trong Bảng tuần hoàn.",
    discipline: "chemistry",
    color: "from-blue-500 to-indigo-700",
    badge: "Hoá học đại cương",
    iconName: "Atom",
    lessons: [
      {
        id: 2,
        chapterId: 1,
        lessonNumber: 2,
        title: "Bài 2: Nguyên tử",
        pageSGK: 14,
        pageSBT: 7,
        discipline: "chemistry",
        interactiveSimType: "atom",
        summary: [
          "1. Nguyên tử là hạt vô cùng nhỏ bé và trung hoà về điện, cấu tạo nên các chất.",
          "2. Mô hình Rutherford - Bohr: Nguyên tử có cấu tạo rỗng, gồm hạt nhân ở tâm mang điện tích dương và các electron mang điện tích âm chuyển động xung quanh hạt nhân thành từng lớp xác định.",
          "3. Cấu tạo hạt: Proton (p, điện tích +1, khối lượng 1 amu), Neutron (n, không mang điện, khối lượng 1 amu), Electron (e, điện tích -1, khối lượng ~0,00055 amu).",
          "4. Số proton = Số electron (nguyên tử trung hoà về điện). Điện tích hạt nhân = +Z.",
          "5. Khối lượng nguyên tử = tổng khối lượng p + n + e ≈ khối lượng hạt nhân (p + n) vì electron có khối lượng không đáng kể."
        ],
        keyFormulas: [
          { label: "Trung hoà điện", formula: "\\text{Số } p = \\text{Số } e = Z", note: "Số proton luôn bằng số electron trong một nguyên tử trung hoà điện." },
          { label: "Khối lượng nguyên tử", formula: "M \\approx \\text{Số } p + \\text{Số } n \\text{ (amu)}", note: "Khối lượng tập trung hầu hết ở hạt nhân nguyên tử." }
        ],
        coreTakeaways: [
          "Nguyên tử trung hoà về điện, gồm hạt nhân mang điện dương và vỏ electron mang điện âm.",
          "Hạt nhân gồm hạt proton (mang điện dương) và hạt neutron (không mang điện).",
          "Vỏ nguyên tử gồm các electron sắp xếp thành từng lớp (lớp 1: tối đa 2e, lớp 2: tối đa 8e,...).",
          "Khối lượng nguyên tử tập trung ở hạt nhân, đo bằng đơn vị amu."
        ],
        canApply: [
          "Xây dựng mô hình nguyên tử của các nguyên tố như H, He, C, N, O, Na,...",
          "Tính khối lượng nguyên tử và số lượng các hạt p, n, e."
        ],
        exercises: [
          {
            id: "2.1",
            source: "SBT",
            code: "Bài 2.1",
            question: "Phát biểu nào sau đây KHÔNG mô tả đúng mô hình nguyên tử của Rutherford - Bohr?",
            type: "multiple_choice",
            options: [
              "A. Nguyên tử có cấu tạo rỗng, gồm hạt nhân ở tâm và các electron ở vỏ.",
              "B. Nguyên tử có cấu tạo đặc khít, gồm hạt nhân nguyên tử và các electron.",
              "C. Electron chuyển động xung quanh hạt nhân theo những quỹ đạo xác định tạo thành các lớp electron.",
              "D. Hạt nhân nguyên tử mang điện tích dương, electron mang điện tích âm."
            ],
            correctAnswer: "B",
            explanation: "Nguyên tử có cấu tạo RỖNG, không phải đặc khít. Hạt nhân rất nhỏ nằm ở tâm, phần lớn không gian là vỏ electron."
          },
          {
            id: "2.13",
            source: "SBT",
            code: "Bài 2.13",
            question: "Trong một nguyên tử có số proton bằng 5 (Boron). Số electron trong các lớp của vỏ nguyên tử, viết từ lớp trong ra lớp ngoài lần lượt là:",
            type: "multiple_choice",
            options: [
              "A. 1, 8, 2.",
              "B. 2, 8, 1.",
              "C. 2, 3.",
              "D. 3, 2."
            ],
            correctAnswer: "C",
            explanation: "Tổng số e = 5. Lớp trong cùng (lớp thứ nhất) chứa tối đa 2e, lớp thứ hai chứa 5 - 2 = 3e. Vậy cách sắp xếp là 2, 3."
          },
          {
            id: "2.21",
            source: "SBT",
            code: "Bài 2.21",
            question: "Hạt nhân một nguyên tử fluorine có 9 proton và 10 neutron. Khối lượng của nguyên tử fluorine xấp xỉ bằng bao nhiêu?",
            type: "multiple_choice",
            options: [
              "A. 9 amu.",
              "B. 10 amu.",
              "C. 19 amu.",
              "D. 28 amu."
            ],
            correctAnswer: "C",
            explanation: "Khối lượng nguyên tử ≈ số p + số n = 9 + 10 = 19 (amu)."
          }
        ]
      },
      {
        id: 3,
        chapterId: 1,
        lessonNumber: 3,
        title: "Bài 3: Nguyên tố hoá học",
        pageSGK: 19,
        pageSBT: 11,
        discipline: "chemistry",
        summary: [
          "1. Nguyên tố hoá học là tập hợp các nguyên tử có cùng số proton trong hạt nhân (cùng số hiệu nguyên tử Z).",
          "2. Hiện nay đã tìm ra 118 nguyên tố hoá học.",
          "3. Tên gọi theo danh pháp quốc tế IUPAC (như hydrogen, helium, sodium, potassium, iron, copper,...).",
          "4. Kí hiệu hoá học gồm 1 hoặc 2 chữ cái (chữ đầu in hoa, chữ sau in thường: H, He, C, Na, Ca, Fe,...).",
          "5. Bốn nguyên tố chính chiếm khoảng 96% trọng lượng cơ thể người: C (18.5%), O (65%), H (9.5%), N (3%)."
        ],
        coreTakeaways: [
          "Những nguyên tử có cùng số proton thuộc cùng một nguyên tố hoá học.",
          "Mỗi nguyên tố có một kí hiệu hoá học và tên gọi quốc tế IUPAC riêng.",
          "Ghi nhớ 20 nguyên tố đầu tiên trong Bảng tuần hoàn cùng khối lượng nguyên tử (amu)."
        ],
        canApply: [
          "Nhận biết các nguyên tố hoá học trên nhãn mác thực phẩm, thuốc uống (Ca, Fe, I, Zn,...).",
          "Tra cứu kí hiệu hoá học và tên gọi IUPAC."
        ],
        exercises: [
          {
            id: "3.2",
            source: "SBT",
            code: "Bài 3.2",
            question: "Kí hiệu nào sau đây là kí hiệu hoá học của nguyên tố magnesium?",
            type: "multiple_choice",
            options: [
              "A. MG",
              "B. Mg",
              "C. mg",
              "D. mG"
            ],
            correctAnswer: "B",
            explanation: "Quy tắc viết kí hiệu hoá học: chữ cái đầu viết HOA, chữ cái thứ hai viết thường -> Mg."
          },
          {
            id: "3.4",
            source: "SBT",
            code: "Bài 3.4",
            question: "Vàng và carbon có tính chất khác nhau vì vàng là nguyên tố kim loại còn carbon là nguyên tố:",
            type: "multiple_choice",
            options: [
              "A. phi kim.",
              "B. đơn chất.",
              "C. hợp chất.",
              "D. khí hiếm."
            ],
            correctAnswer: "A",
            explanation: "Vàng (Au) là nguyên tố kim loại, còn Carbon (C) là nguyên tố phi kim."
          }
        ]
      },
      {
        id: 4,
        chapterId: 1,
        lessonNumber: 4,
        title: "Bài 4: Sơ lược về Bảng tuần hoàn các nguyên tố hoá học",
        pageSGK: 23,
        pageSBT: 14,
        discipline: "chemistry",
        interactiveSimType: "atom",
        summary: [
          "1. Nhà bác học Mendeleev xây dựng bảng tuần hoàn năm 1869.",
          "2. Nguyên tắc sắp xếp: (1) Theo chiều tăng dần điện tích hạt nhân; (2) Các nguyên tố cùng hàng (Chu kì) có cùng số lớp electron; (3) Các nguyên tố cùng cột (Nhóm) có tính chất gần giống nhau và cùng số electron lớp ngoài cùng.",
          "3. Cấu tạo bảng tuần hoàn: Ô nguyên tố (cho biết Số hiệu Z, KHHH, Tên, Khối lượng nguyên tử), Chu kì (7 chu kì; CK 1, 2, 3 là chu kì nhỏ, CK 4, 5, 6, 7 là chu kì lớn), Nhóm (8 nhóm A từ IA đến VIIIA, 8 nhóm B).",
          "4. Phân loại nguyên tố: Kim loại (hơn 90 nguyên tố, màu xanh bên trái và giữa), Phi kim (chưa đến 20 nguyên tố, màu hồng góc trên bên phải), Khí hiếm (7 nguyên tố nhóm VIIIA, màu vàng, lớp ngoài cùng bền vững 8e, He có 2e)."
        ],
        coreTakeaways: [
          "Số thứ tự chu kì = số lớp electron của nguyên tử.",
          "Số thứ tự nhóm A = số electron ở lớp ngoài cùng của nguyên tử.",
          "Vị trí các nhóm kim loại, phi kim và khí hiếm trong bảng tuần hoàn."
        ],
        canApply: [
          "Xác định vị trí (ô, chu kì, nhóm) và tính chất kim loại/phi kim/khí hiếm của một nguyên tố bất kì từ Bảng tuần hoàn."
        ],
        exercises: [
          {
            id: "4.6",
            source: "SBT",
            code: "Bài 4.6",
            question: "Phát biểu nào sau đây KHÔNG đúng về Bảng tuần hoàn?",
            type: "multiple_choice",
            options: [
              "A. Bảng tuần hoàn gồm 3 chu kì nhỏ và 4 chu kì lớn.",
              "B. Số thứ tự của chu kì bằng số electron ở lớp ngoài cùng của nguyên tử các nguyên tố thuộc chu kì đó.",
              "C. Số thứ tự của chu kì bằng số lớp electron của nguyên tử các nguyên tố thuộc chu kì đó.",
              "D. Các nguyên tố trong cùng chu kì được sắp xếp theo chiều điện tích hạt nhân tăng dần."
            ],
            correctAnswer: "B",
            explanation: "Phát biểu B sai. Số thứ tự chu kì bằng SỐ LỚP ELECTRON, còn số electron lớp ngoài cùng (nhóm A) quyết định SỐ THỨ TỰ NHÓM."
          },
          {
            id: "4.12",
            source: "SBT",
            code: "Bài 4.12",
            question: "Hãy cho biết tên và kí hiệu hoá học của nguyên tố ở nhóm VA, chu kì 3 và nguyên tố ở nhóm VIIIA chu kì 2?",
            type: "essay",
            explanation: "Nhóm VA, chu kì 3: Phosphorus (P). Nhóm VIIIA, chu kì 2: Neon (Ne)."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    romanNumber: "CHƯƠNG II",
    title: "Phân tử - Liên kết hoá học",
    description: "Khái niệm đơn chất, hợp chất, phân tử, liên kết ion, liên kết cộng hoá trị, quy tắc hoá trị và cách lập công thức hoá học.",
    discipline: "chemistry",
    color: "from-sky-500 to-cyan-700",
    badge: "Liên kết & Cấu trúc",
    iconName: "Share2",
    lessons: [
      {
        id: 5,
        chapterId: 2,
        lessonNumber: 5,
        title: "Bài 5: Phân tử - Đơn chất - Hợp chất",
        pageSGK: 32,
        pageSBT: 19,
        discipline: "chemistry",
        interactiveSimType: "formula",
        summary: [
          "1. Đơn chất là chất được tạo nên từ 1 nguyên tố hoá học (kim loại Cu, Fe; phi kim O₂, N₂, C; khí hiếm He, Ne).",
          "2. Hợp chất là chất được tạo nên từ 2 hay nhiều nguyên tố hoá học (vô cơ: H₂O, NaCl, CO₂, CaCO₃; hữu cơ: CH₄, glucose C₆H₁₂O₆, saccharose C₁₂H₂₂O₁₁).",
          "3. Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học.",
          "4. Khối lượng phân tử bằng tổng khối lượng của các nguyên tử trong phân tử chất đó (đơn vị amu)."
        ],
        keyFormulas: [
          { label: "Khối lượng phân tử", formula: "M_{A_x B_y} = x \\cdot M_A + y \\cdot M_B \\text{ (amu)}", note: "Ví dụ: M_{H_2O} = 2 \\cdot 1 + 16 = 18 \\text{ amu}." }
        ],
        coreTakeaways: [
          "Phân biệt rõ đơn chất (1 nguyên tố) và hợp chất (từ 2 nguyên tố trở lên).",
          "Cách tính khối lượng phân tử theo đơn vị amu."
        ],
        canApply: [
          "Giải thích sự khuếch tán và lan toả của các chất (mùi thơm, màu sắc) do sự chuyển động của các phân tử."
        ],
        exercises: [
          {
            id: "5.1",
            source: "SBT",
            code: "Bài 5.1",
            question: "Một phân tử nước chứa hai nguyên tử hydrogen và một nguyên tử oxygen. Nước là:",
            type: "multiple_choice",
            options: [
              "A. một hợp chất.",
              "B. một đơn chất.",
              "C. một hỗn hợp.",
              "D. một nguyên tố hoá học."
            ],
            correctAnswer: "A",
            explanation: "Nước tạo bởi 2 nguyên tố khác nhau (H và O) nên là một HỢP CHẤT."
          },
          {
            id: "5.8",
            source: "SBT",
            code: "Bài 5.8",
            question: "Có bao nhiêu nguyên tử trong mỗi phân tử sau: N₂, CO₂, O₃, CH₄, SO₂, C₂H₄?",
            type: "essay",
            explanation: "N₂: 2; CO₂: 3 (1 C + 2 O); O₃: 3; CH₄: 5 (1 C + 4 H); SO₂: 3 (1 S + 2 O); C₂H₄: 6 (2 C + 4 H)."
          }
        ]
      },
      {
        id: 6,
        chapterId: 2,
        lessonNumber: 6,
        title: "Bài 6: Giới thiệu về liên kết hoá học",
        pageSGK: 36,
        pageSBT: 23,
        discipline: "chemistry",
        interactiveSimType: "formula",
        summary: [
          "1. Khí hiếm có cấu trúc electron lớp ngoài cùng bền vững (8e, He có 2e), khó tham gia phản ứng.",
          "2. Các nguyên tử khác có xu hướng liên kết để đạt cấu trúc bền giống khí hiếm bằng cách nhường, nhận hoặc góp chung electron.",
          "3. Liên kết ion: Hình thành do lực hút tĩnh điện giữa các ion mang điện trái dấu (Kim loại nhường e tạo ion dương, phi kim nhận e tạo ion âm). Ví dụ: Na⁺ + Cl⁻ -> NaCl, Mg²⁺ + O²⁻ -> MgO. Hợp chất ion thường là chất rắn, nhiệt độ nóng chảy cao, dẫn điện khi tan trong nước.",
          "4. Liên kết cộng hoá trị: Hình thành bằng sự dùng chung một hay nhiều cặp electron giữa các nguyên tử phi kim. Ví dụ: H₂, O₂, N₂, H₂O, CH₄, CO₂. Hợp chất cộng hoá trị có nhiệt độ nóng chảy và sôi thấp, khó hoặc không dẫn điện."
        ],
        coreTakeaways: [
          "Nguyên tắc cho - nhận electron tạo liên kết ion.",
          "Nguyên tắc góp chung electron tạo liên kết cộng hoá trị.",
          "So sánh tính chất vật lí giữa hợp chất ion và hợp chất cộng hoá trị."
        ],
        canApply: [
          "Giải thích vì sao muối ăn (NaCl) khó nóng chảy, dẫn điện khi tan trong nước, còn nước đá hay đường ăn lại dễ tan và dễ nóng chảy."
        ],
        exercises: [
          {
            id: "6.4",
            source: "SBT",
            code: "Bài 6.4",
            question: "Phân tử methane gồm một nguyên tử carbon liên kết với bốn nguyên tử hydrogen. Khi hình thành liên kết, nguyên tử carbon đã góp chung bao nhiêu electron với mỗi nguyên tử hydrogen?",
            type: "multiple_choice",
            options: [
              "A. Carbon góp chung 1 electron với mỗi nguyên tử hydrogen.",
              "B. Carbon góp chung 2 electron với mỗi nguyên tử hydrogen.",
              "C. Carbon góp chung 3 electron với mỗi nguyên tử hydrogen.",
              "D. Carbon góp chung 4 electron với mỗi nguyên tử hydrogen."
            ],
            correctAnswer: "A",
            explanation: "Carbon có 4e ngoài cùng, góp chung 1e với mỗi nguyên tử H (H có 1e), tạo thành 4 cặp electron dùng chung (tổng cộng 4 liên kết đơn C-H)."
          },
          {
            id: "6.5",
            source: "SBT",
            code: "Bài 6.5",
            question: "Liên kết giữa các nguyên tử trong phân tử nước là liên kết gì?",
            type: "multiple_choice",
            options: [
              "A. Cộng hoá trị.",
              "B. Ion.",
              "C. Kim loại.",
              "D. Phi kim."
            ],
            correctAnswer: "A",
            explanation: "Trong phân tử H₂O, nguyên tử Oxygen dùng chung các cặp electron với 2 nguyên tử Hydrogen -> Liên kết cộng hoá trị."
          }
        ]
      },
      {
        id: 7,
        chapterId: 2,
        lessonNumber: 7,
        title: "Bài 7: Hoá trị và công thức hoá học",
        pageSGK: 40,
        pageSBT: 26,
        discipline: "chemistry",
        interactiveSimType: "formula",
        summary: [
          "1. Hoá trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Quy ước: H luôn có hoá trị I, O luôn có hoá trị II.",
          "2. Quy tắc hoá trị: Với hợp chất AxBy có hoá trị tương ứng là a và b: a · x = b · y => x/y = b/a.",
          "3. Tính phần trăm khối lượng nguyên tố trong hợp chất: %A = (Khối lượng nguyên tử A · số nguyên tử A · 100%) / Khối lượng phân tử.",
          "4. Lập CTHH dựa vào hoá trị và dựa vào phần trăm khối lượng."
        ],
        keyFormulas: [
          { label: "Quy tắc hoá trị", formula: "a \\cdot x = b \\cdot y \\implies \\frac{x}{y} = \\frac{b}{a}", note: "Rút gọn phân số b/a thành tỉ lệ số nguyên tối giản." },
          { label: "Phần trăm khối lượng", formula: "\\% A = \\frac{M_A \\cdot x}{M_{\\text{hợp chất}}} \\cdot 100\\%", note: "Tổng % của tất cả các nguyên tố luôn bằng 100%." }
        ],
        coreTakeaways: [
          "Quy tắc hoá trị và bảng hoá trị của các nguyên tố thường gặp (H, O, C, N, Na, Mg, Al, Ca, Fe, Cu, S, Cl, P, K).",
          "Cách lập CTHH và tính % khối lượng của từng nguyên tố."
        ],
        canApply: [
          "Tính toán hàm lượng dinh dưỡng ghi trên bao bì phân bón (ví dụ %N trong đạm urea, %K trong kali clorua)."
        ],
        exercises: [
          {
            id: "7.2",
            source: "SBT",
            code: "Bài 7.2",
            question: "Một phân tử của hợp chất carbon dioxide chứa một nguyên tử carbon và hai nguyên tử oxygen. Công thức hoá học đúng là:",
            type: "multiple_choice",
            options: [
              "A. CO₂",
              "B. CO²",
              "C. CO2",
              "D. Co₂"
            ],
            correctAnswer: "A",
            explanation: "KHHH của Carbon là C, Oxygen là O, chỉ số 2 ghi ở chân phía dưới bên phải -> CO₂."
          },
          {
            id: "7.14a",
            source: "SBT",
            code: "Bài 7.14a",
            question: "Lập công thức hoá học và tính khối lượng phân tử của hợp chất tạo bởi K (hoá trị I) và nhóm SO₄ (hoá trị II):",
            type: "essay",
            explanation: "Theo quy tắc hoá trị: K_x(SO₄)_y có I · x = II · y => x/y = 2/1 => CTHH: K₂SO₄. Khối lượng phân tử M = 2 · 39 + 32 + 4 · 16 = 174 amu."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    romanNumber: "CHƯƠNG III",
    title: "Tốc độ",
    description: "Đại lượng tốc độ v = s/t, các phương pháp đo tốc độ (thước + đồng hồ bấm giây, cổng quang điện, súng bắn tốc độ), đồ thị s - t và an toàn giao thông.",
    discipline: "physics",
    color: "from-amber-500 to-orange-700",
    badge: "Cơ học & Tốc độ",
    iconName: "Gauge",
    lessons: [
      {
        id: 8,
        chapterId: 3,
        lessonNumber: 8,
        title: "Bài 8: Tốc độ chuyển động",
        pageSGK: 45,
        pageSBT: 29,
        discipline: "physics",
        interactiveSimType: "speed",
        summary: [
          "1. Thương số s/t đặc trưng cho sự nhanh hay chậm của chuyển động được gọi là tốc độ chuyển động: v = s / t.",
          "2. Đơn vị đo tốc độ thường dùng: m/s (mét trên giây) và km/h (kilômét trên giờ).",
          "3. Đổi đơn vị: 1 m/s = 3,6 km/h. Ngược lại: 1 km/h = 1/3,6 m/s ≈ 0,28 m/s.",
          "4. Mối quan hệ giữa 3 đại lượng: v = s/t, s = v · t, t = s/v."
        ],
        keyFormulas: [
          { label: "Công thức tính tốc độ", formula: "v = \\frac{s}{t}", note: "s là quãng đường đi được, t là thời gian đi hết quãng đường đó." },
          { label: "Đổi đơn vị vận tốc", formula: "1 \\text{ m/s} = 3,6 \\text{ km/h}", note: "Từ km/h sang m/s: chia cho 3,6. Từ m/s sang km/h: nhân với 3,6." }
        ],
        coreTakeaways: [
          "Ý nghĩa vật lí của tốc độ: Quãng đường vật đi được trong một đơn vị thời gian.",
          "Thuộc lòng công thức v = s/t và quy đổi thành thạo giữa m/s và km/h."
        ],
        canApply: [
          "Tính thời gian đi học, tính vận tốc chạy bộ, so sánh tốc độ của các phương tiện giao thông và các loài sinh vật."
        ],
        exercises: [
          {
            id: "8.3a",
            source: "SBT",
            code: "Bài 8.3a",
            question: "Đổi đơn vị tốc độ: 10 m/s bằng bao nhiêu km/h?",
            type: "multiple_choice",
            options: [
              "A. 10 km/h",
              "B. 3,6 km/h",
              "C. 36 km/h",
              "D. 360 km/h"
            ],
            correctAnswer: "C",
            explanation: "10 m/s = 10 · 3,6 = 36 km/h."
          },
          {
            id: "8.6",
            source: "SBT",
            code: "Bài 8.6",
            question: "Đường sắt Hà Nội - Đà Nẵng dài khoảng 880 km. Nếu tốc độ trung bình của một tàu hoả là 55 km/h thì thời gian tàu chạy từ Hà Nội đến Đà Nẵng là:",
            type: "multiple_choice",
            options: [
              "A. 8 h.",
              "B. 16 h.",
              "C. 24 h.",
              "D. 32 h."
            ],
            correctAnswer: "B",
            explanation: "Thời gian t = s / v = 880 / 55 = 16 giờ."
          }
        ]
      },
      {
        id: 9,
        chapterId: 3,
        lessonNumber: 9,
        title: "Bài 9: Đo tốc độ",
        pageSGK: 49,
        pageSBT: 31,
        discipline: "physics",
        interactiveSimType: "speed",
        summary: [
          "1. Để xác định tốc độ chuyển động cần đo 2 đại lượng: Quãng đường s (thước đo) và Thời gian t (đồng hồ).",
          "2. Cách 1: Đo bằng đồng hồ bấm giây (thao tác thủ công, sai số lớn do phản xạ người bấm).",
          "3. Cách 2: Đo bằng cổng quang điện kết nối đồng hồ hiện số (độ chính xác cao, tự động ghi nhận khi vật chắn tia sáng).",
          "4. Thiết bị bắn tốc độ (CSGT): Kết hợp camera ghi hình và máy tính/radar để tính thời gian xe chạy qua hai vạch mốc cách nhau xác định."
        ],
        coreTakeaways: [
          "Nguyên lí hoạt động của thiết bị bắn tốc độ trong kiểm tra an toàn giao thông.",
          "Cách bố trí và thực hiện phép đo tốc độ trong phòng thí nghiệm."
        ],
        canApply: [
          "Đo tốc độ chạy cự li 60m trong môn Giáo dục thể chất bằng đồng hồ bấm giây."
        ],
        exercises: [
          {
            id: "9.3",
            source: "SBT",
            code: "Bài 9.3",
            question: "Camera của thiết bị bắn tốc độ ghi được thời gian một ô tô chạy từ vạch mốc 1 sang vạch mốc 2 cách nhau 10 m là 0,50 s. Hỏi ô tô có vượt quá tốc độ cho phép là 60 km/h không?",
            type: "essay",
            explanation: "Tốc độ của ô tô là v = s / t = 10 / 0,50 = 20 m/s = 20 · 3,6 = 72 km/h. Vì 72 km/h > 60 km/h nên ô tô đã vượt quá tốc độ giới hạn cho phép."
          }
        ]
      },
      {
        id: 10,
        chapterId: 3,
        lessonNumber: 10,
        title: "Bài 10: Đồ thị quãng đường - thời gian",
        pageSGK: 53,
        pageSBT: 32,
        discipline: "physics",
        interactiveSimType: "speed",
        summary: [
          "1. Đồ thị quãng đường - thời gian (đồ thị s - t) mô tả mối quan hệ giữa quãng đường đi được và thời gian chuyển động.",
          "2. Trục tung (thẳng đứng) Os biểu diễn quãng đường; Trục hoành (nằm ngang) Ot biểu diễn thời gian.",
          "3. Đoạn thẳng nghiêng lên: vật chuyển động với tốc độ không đổi (chuyển động thẳng đều). Độ dốc càng lớn thì tốc độ càng nhanh.",
          "4. Đoạn thẳng nằm ngang song song với trục thời gian Ot: vật đứng yên (s không đổi theo thời gian)."
        ],
        coreTakeaways: [
          "Vẽ được đồ thị s - t từ bảng số liệu.",
          "Từ đồ thị s - t xác định được vị trí, quãng đường, thời gian và tốc độ của vật."
        ],
        canApply: [
          "Phân tích hành trình di chuyển của xe khách, tàu hoả qua đồ thị quãng đường - thời gian."
        ],
        exercises: [
          {
            id: "10.2a",
            source: "SBT",
            code: "Bài 10.2a",
            question: "Từ đồ thị s - t qua gốc O đi qua điểm (t = 2 s, s = 4 m) và (t = 6 s, s = 12 m). Tốc độ của vật là:",
            type: "multiple_choice",
            options: [
              "A. 2 m/s",
              "B. 4 m/s",
              "C. 6 m/s",
              "D. 12 m/s"
            ],
            correctAnswer: "A",
            explanation: "Tốc độ v = s / t = 4 / 2 = 12 / 6 = 2 m/s."
          }
        ]
      },
      {
        id: 11,
        chapterId: 3,
        lessonNumber: 11,
        title: "Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
        pageSGK: 56,
        pageSBT: 35,
        discipline: "physics",
        summary: [
          "1. Tốc độ cao làm tăng quãng đường phanh và giảm thời gian phản xạ của người lái xe khi gặp chướng ngại vật.",
          "2. Biển báo tốc độ: Quy định tốc độ tối đa cho phép trên từng đoạn đường, cho từng loại phương tiện và điều kiện thời tiết (mưa gió giảm tốc độ).",
          "3. Quy tắc '3 giây' trên đường cao tốc: Khoảng cách an toàn tối thiểu (m) = Tốc độ (m/s) · 3 (s).",
          "4. Ý thức chấp hành luật an toàn giao thông: Không phóng nhanh, vượt ẩu, giữ khoảng cách an toàn tối thiểu theo quy định."
        ],
        keyFormulas: [
          { label: "Quy tắc 3 giây", formula: "s_{\\text{an toàn}} (\\text{m}) = v (\\text{m/s}) \\times 3 (\\text{s})", note: "Ví dụ: ở tốc độ 70 km/h ≈ 19.4 m/s => khoảng cách an toàn ≈ 58.2 m." }
        ],
        coreTakeaways: [
          "Mối quan hệ giữa tốc độ và khoảng cách dừng xe an toàn.",
          "Ý nghĩa các biển báo tốc độ và khoảng cách trên đường bộ, đường cao tốc."
        ],
        canApply: [
          "Tính toán khoảng cách an toàn khi tham gia giao thông trên đường cao tốc."
        ],
        exercises: [
          {
            id: "11.2",
            source: "SBT",
            code: "Bài 11.2",
            question: "Biển báo trên đường cao tốc ghi: Tốc độ tối đa khi không mưa là 120 km/h, khi có mưa là 100 km/h. Ô tô chạy với tốc độ nào sau đây là an toàn khi trời mưa?",
            type: "multiple_choice",
            options: [
              "A. 110 km/h",
              "B. 90 km/h",
              "C. 105 km/h",
              "D. 125 km/h"
            ],
            correctAnswer: "B",
            explanation: "Khi trời mưa tốc độ tối đa là 100 km/h, nên chạy 90 km/h (< 100 km/h) là an toàn và tuân thủ luật."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    romanNumber: "CHƯƠNG IV",
    title: "Âm thanh",
    description: "Bản chất sóng âm, dao động nguồn âm, độ to (biên độ), độ cao (tần số Hz), phản xạ âm, tiếng vang và biện pháp chống ô nhiễm tiếng ồn.",
    discipline: "physics",
    color: "from-rose-500 to-pink-700",
    badge: "Sóng & Dao động",
    iconName: "Volume2",
    lessons: [
      {
        id: 12,
        chapterId: 4,
        lessonNumber: 12,
        title: "Bài 12: Sóng âm",
        pageSGK: 60,
        pageSBT: 37,
        discipline: "physics",
        interactiveSimType: "sound",
        summary: [
          "1. Dao động là sự chuyển động qua lại quanh một vị trí cân bằng.",
          "2. Sóng là sự lan truyền dao động trong môi trường.",
          "3. Các nguồn âm đều dao động khi phát ra âm thanh (mặt trống rung, dây đàn rung, thanh kim loại dao động).",
          "4. Sóng âm truyền được trong các môi trường chất rắn, chất lỏng, chất khí.",
          "5. Sóng âm KHÔNG truyền được trong chân không (vì không có các hạt vật chất để truyền dao động).",
          "6. Tốc độ truyền âm: V_rắn > V_lỏng > V_khí (Thép ~6100 m/s, Nước ~1500 m/s, Không khí ~340 m/s)."
        ],
        coreTakeaways: [
          "Nguồn âm phát ra âm thanh khi nó dao động.",
          "Sóng âm truyền qua rắn, lỏng, khí nhưng không truyền được trong chân không."
        ],
        canApply: [
          "Giải thích hiện tượng áp tai xuống đất nghe tiếng vó ngựa từ xa, hay áp tai vào đường ray nghe tiếng tàu hoả đến sớm hơn trong không khí."
        ],
        exercises: [
          {
            id: "12.2",
            source: "SBT",
            code: "Bài 12.2",
            question: "Âm thanh KHÔNG THỂ truyền trong môi trường nào sau đây?",
            type: "multiple_choice",
            options: [
              "A. Chất lỏng.",
              "B. Chất rắn.",
              "C. Chất khí.",
              "D. Chân không."
            ],
            correctAnswer: "D",
            explanation: "Chân không không có các phân tử/nguyên tử vật chất để truyền dao động cơ học nên âm thanh không thể truyền qua."
          },
          {
            id: "12.8",
            source: "SBT",
            code: "Bài 12.8",
            question: "Một người nhìn thấy tia chớp trước khi nghe tiếng sấm 5 s. Biết tốc độ truyền âm trong không khí là 340 m/s. Nơi phát ra tiếng sét cách người đó khoảng bao nhiêu?",
            type: "multiple_choice",
            options: [
              "A. 1,7 km.",
              "B. 68 km.",
              "C. 850 m.",
              "D. 68 m."
            ],
            correctAnswer: "A",
            explanation: "Khoảng cách s = v · t = 340 · 5 = 1700 m = 1,7 km."
          }
        ]
      },
      {
        id: 13,
        chapterId: 4,
        lessonNumber: 13,
        title: "Bài 13: Độ to và độ cao của âm",
        pageSGK: 64,
        pageSBT: 38,
        discipline: "physics",
        interactiveSimType: "sound",
        summary: [
          "1. Biên độ dao động: Độ lệch lớn nhất của vật so với vị trí cân bằng. Biên độ càng lớn -> Âm phát ra càng TO.",
          "2. Tần số: Số dao động mà vật thực hiện được trong một giây. Đơn vị là héc (Hz). Tần số càng lớn -> Âm phát ra càng CAO (bổng); tần số càng nhỏ -> âm càng TRẦM.",
          "3. Giới hạn thính giác con người: Nghe được âm từ 20 Hz đến 20 000 Hz. Hạ âm: < 20 Hz. Siêu âm: > 20 000 Hz.",
          "4. Dây đàn càng căng, càng ngắn, càng mảnh -> dao động càng nhanh (tần số lớn) -> âm phát ra càng bổng."
        ],
        keyFormulas: [
          { label: "Tần số dao động", formula: "f = \\frac{N}{t} \\text{ (Hz)}", note: "N là số dao động thực hiện được trong thời gian t giây." }
        ],
        coreTakeaways: [
          "Phân biệt rõ: Biên độ quyết định Độ to (to/nhỏ); Tần số quyết định Độ cao (trầm/bổng).",
          "Tai người bình thường nghe được âm thanh trong dải tần 20 Hz - 20 000 Hz."
        ],
        canApply: [
          "Chỉnh dây đàn ghita: vặn căng dây để tăng tần số (âm cao hơn).",
          "Giải thích vì sao tiếng muỗi vỗ cánh kêu vo ve the thé (f ~ 600 Hz) còn cánh chim vỗ chậm ta không nghe thấy tiếng vút cao."
        ],
        exercises: [
          {
            id: "13.4",
            source: "SBT",
            code: "Bài 13.4",
            question: "Biên độ dao động là gì?",
            type: "multiple_choice",
            options: [
              "A. Số dao động trong một giây.",
              "B. Độ lệch so với vị trí ban đầu của vật trong một giây.",
              "C. Độ lệch lớn nhất so với vị trí cân bằng khi vật dao động.",
              "D. Khoảng cách lớn nhất giữa hai vị trí mà vật dao động thực hiện được."
            ],
            correctAnswer: "C",
            explanation: "Biên độ dao động là độ lệch lớn nhất của vật so với vị trí cân bằng."
          },
          {
            id: "13.7",
            source: "SBT",
            code: "Bài 13.7",
            question: "Vật nào sau đây dao động với tần số lớn nhất?",
            type: "multiple_choice",
            options: [
              "A. Trong 30 s, con lắc thực hiện được 1 500 dao động.",
              "B. Trong 10 s, mặt trống thực hiện được 1 000 dao động.",
              "C. Trong 2 s, dây đàn thực hiện được 988 dao động.",
              "D. Trong 15 s, dây cao su thực hiện được 1 900 dao động."
            ],
            correctAnswer: "C",
            explanation: "Tần số f = N/t: A: 1500/30 = 50 Hz; B: 1000/10 = 100 Hz; C: 988/2 = 494 Hz; D: 1900/15 ≈ 126.7 Hz. Vậy C có tần số lớn nhất (494 Hz)."
          }
        ]
      },
      {
        id: 14,
        chapterId: 4,
        lessonNumber: 14,
        title: "Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn",
        pageSGK: 68,
        pageSBT: 41,
        discipline: "physics",
        summary: [
          "1. Âm phản xạ là âm dội lại khi gặp một mặt chắn.",
          "2. Tiếng vang: Khi âm phản xạ truyền đến tai ta chậm hơn âm truyền trực tiếp một khoảng thời gian ít nhất 1/15 giây (~0,067 s).",
          "3. Vật phản xạ âm tốt (hấp thụ âm kém): Vật liệu cứng, có bề mặt nhẵn bóng (mặt gương, đá hoa, kim loại, tường gạch).",
          "4. Vật phản xạ âm kém (hấp thụ âm tốt): Vật liệu mềm, xốp, có bề mặt sần sùi (rèm nhung, xốp mút, dạ, tường sần sùi).",
          "5. Ứng dụng: Thiết bị định vị sóng siêu âm (sonar) đo độ sâu đáy biển, dò cá: h = (v · t) / 2.",
          "6. Chống ô nhiễm tiếng ồn: Hạn chế nguồn gây ồn, phân tán tiếng ồn trên đường truyền (trồng cây xanh, tường cách âm), ngăn chặn âm truyền đến tai (đeo chụp tai bảo hộ)."
        ],
        keyFormulas: [
          { label: "Độ sâu đáy biển bằng siêu âm", formula: "h = \\frac{v \\cdot t}{2}", note: "Thời gian t là tổng thời gian siêu âm đi xuống đáy biển và phản xạ trở lại tàu." }
        ],
        coreTakeaways: [
          "Điều kiện xuất hiện tiếng vang (độ trễ ≥ 1/15 giây).",
          "Các loại vật liệu cách âm, hút âm và các biện pháp giảm thiểu ô nhiễm tiếng ồn."
        ],
        canApply: [
          "Thiết kế phòng thu âm, rạp chiếu phim với tường sần sùi và rèm nhung để triệt tiêu tiếng vang khó chịu."
        ],
        exercises: [
          {
            id: "14.4",
            source: "SBT",
            code: "Bài 14.4",
            question: "Những vật nào sau đây phản xạ âm tốt?",
            type: "multiple_choice",
            options: [
              "A. Gạch, gỗ, vải.",
              "B. Thép, vải, xốp.",
              "C. Vải nhung, gốm.",
              "D. Sắt, thép, đá."
            ],
            correctAnswer: "D",
            explanation: "Sắt, thép, đá là các vật liệu cứng và có bề mặt nhẵn phẳng, phản xạ âm tốt."
          },
          {
            id: "14.8",
            source: "SBT",
            code: "Bài 14.8",
            question: "Tàu phát siêu âm xuống đáy biển và thu được tín hiệu phản xạ sau 1,2 s. Biết tốc độ truyền âm trong nước biển là 1 500 m/s. Độ sâu của đáy biển là:",
            type: "multiple_choice",
            options: [
              "A. 1 800 m.",
              "B. 900 m.",
              "C. 3 000 m.",
              "D. 750 m."
            ],
            correctAnswer: "B",
            explanation: "Độ sâu h = (v · t) / 2 = (1500 · 1,2) / 2 = 900 m."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    romanNumber: "CHƯƠNG V",
    title: "Ánh sáng",
    description: "Năng lượng ánh sáng, tia sáng & chùm sáng, vùng tối, định luật phản xạ ánh sáng (i' = i) và tính chất ảnh qua gương phẳng.",
    discipline: "physics",
    color: "from-yellow-500 to-amber-700",
    badge: "Quang học",
    iconName: "Sun",
    lessons: [
      {
        id: 15,
        chapterId: 5,
        lessonNumber: 15,
        title: "Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối",
        pageSGK: 72,
        pageSBT: 44,
        discipline: "physics",
        interactiveSimType: "light",
        summary: [
          "1. Ánh sáng là một dạng năng lượng (quang năng). Ánh sáng có thể chuyển hoá thành điện năng (pin mặt trời) hoặc nhiệt năng (bình nước nóng mặt trời).",
          "2. Chùm sáng: Tập hợp các tia sáng, gồm 3 loại: Chùm sáng song song, Chùm sáng hội tụ, Chùm sáng phân kì.",
          "3. Tia sáng: Đường truyền của ánh sáng biểu diễn bằng một đường thẳng có mũi tên chỉ chiều truyền.",
          "4. Vùng tối và vùng nửa tối: Phía sau vật cản sáng, vùng hoàn toàn không nhận được ánh sáng từ nguồn là Vùng tối; vùng chỉ nhận được một phần ánh sáng từ nguồn sáng rộng là Vùng nửa tối.",
          "5. Nhật thực & Nguyệt thực: Nhật thực xảy ra khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất; Nguyệt thực xảy ra khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng."
        ],
        coreTakeaways: [
          "Ánh sáng là một dạng năng lượng và truyền theo đường thẳng trong môi trường trong suốt đồng tính.",
          "Mô hình tia sáng và 3 loại chùm sáng.",
          "Giải thích sự tạo thành bóng tối, bóng nửa tối, nhật thực và nguyệt thực."
        ],
        canApply: [
          "Ứng dụng ngắm thẳng hàng trong xếp hàng chào cờ, cắm cọc đo đạc, căn góc thẳng."
        ],
        exercises: [
          {
            id: "15.2",
            source: "SBT",
            code: "Bài 15.2",
            question: "Máy tính cầm tay sử dụng năng lượng mặt trời đã chuyển hoá năng lượng ánh sáng thành:",
            type: "multiple_choice",
            options: [
              "A. điện năng.",
              "B. nhiệt năng.",
              "C. hoá năng.",
              "D. cơ năng."
            ],
            correctAnswer: "A",
            explanation: "Tấm pin quang điện trên máy tính biến đổi trực tiếp quang năng thành điện năng để máy hoạt động."
          }
        ]
      },
      {
        id: 16,
        chapterId: 5,
        lessonNumber: 16,
        title: "Bài 16: Sự phản xạ ánh sáng",
        pageSGK: 78,
        pageSBT: 46,
        discipline: "physics",
        interactiveSimType: "light",
        summary: [
          "1. Hiện tượng phản xạ ánh sáng: Hiện tượng tia sáng bị hắt trở lại môi trường cũ khi gặp một bề mặt nhẵn bóng.",
          "2. Các đại lượng: Gương phẳng G, Điểm tới I, Tia tới SI, Pháp tuyến IN (vuông góc với gương tại I), Tia phản xạ IR, Góc tới i (góc SIN), Góc phản xạ i' (góc NIR).",
          "3. Định luật phản xạ ánh sáng: (1) Tia sáng phản xạ nằm trong mặt phẳng tới (mặt phẳng chứa tia tới SI và pháp tuyến IN); (2) Góc phản xạ bằng góc tới: i' = i.",
          "4. Phân loại phản xạ: Phản xạ gương (mặt phẳng nhẵn bóng, các tia tới song song cho chùm phản xạ song song, nhìn thấy ảnh rõ nét) và Phản xạ khuếch tán/tán xạ (mặt gồ ghề ráp, các tia phản xạ theo mọi hướng, không nhìn thấy ảnh)."
        ],
        keyFormulas: [
          { label: "Định luật phản xạ", formula: "i' = i", note: "Góc phản xạ i' (tạo bởi tia phản xạ và pháp tuyến) luôn bằng góc tới i (tạo bởi tia tới và pháp tuyến)." }
        ],
        coreTakeaways: [
          "Định luật phản xạ ánh sáng (i' = i).",
          "Phân biệt phản xạ gương (mặt hồ phẳng lặng) và phản xạ khuếch tán (mặt hồ gợn sóng)."
        ],
        canApply: [
          "Bố trí gương phẳng để chiếu ánh sáng vào nơi thiếu sáng hoặc thiết kế góc phản xạ."
        ],
        exercises: [
          {
            id: "16.3",
            source: "SBT",
            code: "Bài 16.3",
            question: "Chiếu một tia sáng tới chếch một góc 20° so với mặt gương phẳng. Góc tạo bởi tia sáng tới và tia sáng phản xạ là:",
            type: "multiple_choice",
            options: [
              "A. 40°",
              "B. 70°",
              "C. 80°",
              "D. 140°"
            ],
            correctAnswer: "D",
            explanation: "Góc hợp bởi tia tới và mặt gương là 20° => Góc tới i = 90° - 20° = 70°. Góc phản xạ i' = i = 70°. Góc hợp bởi tia tới và tia phản xạ là i + i' = 70° + 70° = 140°."
          }
        ]
      },
      {
        id: 17,
        chapterId: 5,
        lessonNumber: 17,
        title: "Bài 17: Ảnh của vật qua gương phẳng",
        pageSGK: 82,
        pageSBT: 47,
        discipline: "physics",
        interactiveSimType: "light",
        summary: [
          "1. Ảnh tạo bởi gương phẳng là ảnh ảo (không hứng được trên màn chắn).",
          "2. Tính chất của ảnh qua gương phẳng: (1) Độ lớn của ảnh bằng độ lớn của vật; (2) Khoảng cách từ một điểm của vật đến gương bằng khoảng cách từ ảnh của điểm đó đến gương; (3) Ảnh và vật đối xứng nhau qua mặt phẳng gương.",
          "3. Cách dựng ảnh: Dựa vào định luật phản xạ ánh sáng (kéo dài các tia phản xạ cắt nhau tại ảnh ảo S') hoặc dựa vào tính chất đối xứng.",
          "4. Ứng dụng: Gương soi hàng ngày, gương trang điểm, chế tạo kính tiềm vọng (periscope) gồm 2 gương phẳng đặt nghiêng 45°."
        ],
        coreTakeaways: [
          "Tính chất ảnh ảo qua gương phẳng (cùng kích thước, cách gương khoảng bằng vật, đối xứng).",
          "Dựng ảnh điểm sáng và vật sáng AB qua gương phẳng."
        ],
        canApply: [
          "Giải thích vì sao chữ 'AMBULANCE' trên đầu xe cứu thương lại được in ngược (để tài xế xe phía trước nhìn qua gương chiếu hậu thấy chữ xuôi).",
          "Chế tạo kính tiềm vọng đơn giản từ bìa các-tông và 2 gương phẳng."
        ],
        exercises: [
          {
            id: "17.1",
            source: "SBT",
            code: "Bài 17.1",
            question: "Chỉ ra phát biểu SAI về ảnh của vật qua gương phẳng:",
            type: "multiple_choice",
            options: [
              "A. Là ảnh ảo, kích thước luôn bằng kích thước của vật.",
              "B. Là ảnh ảo, kích thước càng lớn khi vật càng gần gương phẳng.",
              "C. Là ảnh ảo, đối xứng với vật qua gương phẳng.",
              "D. Là ảnh ảo, khoảng cách từ ảnh tới gương phẳng bằng khoảng cách từ vật tới gương phẳng."
            ],
            correctAnswer: "B",
            explanation: "Kích thước ảnh qua gương phẳng LUÔN BẰNG kích thước vật, không thay đổi khi dịch chuyển vật lại gần hay ra xa gương."
          },
          {
            id: "17.4b",
            source: "SGK",
            code: "SGK Tr.83",
            question: "Bạn A đứng cách bức tường có gắn gương phẳng 4 m. Để khoảng cách giữa bạn A và ảnh của mình là 2 m thì bạn A phải dịch chuyển về phía nào một khoảng bao nhiêu?",
            type: "essay",
            explanation: "Khoảng cách giữa người và ảnh là 2 m => Khoảng cách từ người đến gương là 2 / 2 = 1 m. Ban đầu người cách gương 4 m, do đó bạn A phải tiến lại gần gương một đoạn: 4 m - 1 m = 3 m."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    romanNumber: "CHƯƠNG VI",
    title: "Từ",
    description: "Nam châm vĩnh cửu, hai cực N - S, từ trường và từ phổ (đường sức từ ra Bắc vào Nam), từ trường Trái Đất, nam châm điện và ứng dụng rơ-le, chuông điện.",
    discipline: "physics",
    color: "from-purple-500 to-indigo-700",
    badge: "Từ học & Điện từ",
    iconName: "Magnet",
    lessons: [
      {
        id: 18,
        chapterId: 6,
        lessonNumber: 18,
        title: "Bài 18: Nam châm",
        pageSGK: 86,
        pageSBT: 48,
        discipline: "physics",
        interactiveSimType: "magnet",
        summary: [
          "1. Nam châm là vật có từ tính: Hút được các vật bằng sắt, thép, cobalt, nickel. Vật liệu bị nam châm hút gọi là vật liệu có tính chất từ.",
          "2. Mỗi nam châm luôn có hai cực từ: Cực Bắc (N - North, thường sơn màu đỏ) và Cực Nam (S - South, thường sơn màu xanh/trắng). Lực từ mạnh nhất ở hai đầu cực.",
          "3. Tương tác giữa 2 nam châm: Khi đưa 2 cực của 2 nam châm lại gần nhau: Cùng tên thì ĐẨY nhau, Khác tên thì HÚT nhau.",
          "4. Kim nam châm tự do luôn định hướng theo phương Bắc - Nam địa lí."
        ],
        coreTakeaways: [
          "Hai cực của nam châm (Bắc N và Nam S).",
          "Quy tắc tương tác: Cùng cực đẩy nhau, khác cực hút nhau."
        ],
        canApply: [
          "Ứng dụng của nam châm trong đời sống: lưới nam châm lọc sắt vụn trong chế biến thực phẩm, lấy mạt sắt ra khỏi mắt bệnh nhân trong y tế, thẻ từ."
        ],
        exercises: [
          {
            id: "18.3",
            source: "SBT",
            code: "Bài 18.3",
            question: "Mạt sắt đặt ở chỗ nào trên thanh nam châm thì bị hút mạnh nhất?",
            type: "multiple_choice",
            options: [
              "A. Ở phần giữa của thanh.",
              "B. Chỉ ở đầu cực Bắc của thanh nam châm.",
              "C. Chỉ ở đầu cực Nam của thanh nam châm.",
              "D. Ở cả hai đầu cực Bắc và cực Nam của thanh nam châm."
            ],
            correctAnswer: "D",
            explanation: "Lực từ của nam châm tập trung mạnh nhất ở cả hai đầu cực Bắc và Nam."
          },
          {
            id: "18.5",
            source: "SBT",
            code: "Bài 18.5",
            question: "Một thanh nam châm bị gãy làm hai nửa thì:",
            type: "multiple_choice",
            options: [
              "A. Một nửa là cực Bắc, một nửa là cực Nam.",
              "B. Cả hai nửa đều mất từ tính.",
              "C. Mỗi nửa đều là một nam châm có hai cực Bắc - Nam.",
              "D. Mỗi nửa đều là một nam châm và cực của mỗi nửa ở chỗ đứt gãy cùng tên."
            ],
            correctAnswer: "C",
            explanation: "Khi cắt rời hoặc bẻ gãy nam châm, mỗi phần nhỏ vẫn luôn tồn tại đầy đủ cả hai cực Bắc (N) và Nam (S)."
          }
        ]
      },
      {
        id: 19,
        chapterId: 6,
        lessonNumber: 19,
        title: "Bài 19: Từ trường",
        pageSGK: 90,
        pageSBT: 49,
        discipline: "physics",
        interactiveSimType: "magnet",
        summary: [
          "1. Khái niệm từ trường: Vùng không gian bao quanh nam châm hoặc dây dẫn mang dòng điện có khả năng tác dụng lực từ lên kim nam châm đặt trong nó.",
          "2. Thí nghiệm Oersted (1820): Dòng điện chạy qua dây dẫn làm lệch kim nam châm, chứng minh xung quanh dòng điện có từ trường.",
          "3. Từ phổ: Hình ảnh các đường mạt sắt sắp xếp xung quanh nam châm. Nơi mạt sắt xếp dày thì từ trường mạnh, xếp thưa thì từ trường yếu.",
          "4. Đường sức từ: Đường cong có hướng, quy ước chiều ở bên ngoài nam châm: Đi RA từ cực Bắc (N) và Đi VÀO cực Nam (S) (Khẩu quyết: 'Vào Nam - Ra Bắc').",
          "5. Từ trường Trái Đất: Trái Đất là một nam châm khổng lồ. Cực Bắc địa từ nằm ở gần cực Nam địa lí, Cực Nam địa từ nằm ở gần cực Bắc địa lí (hai trục không trùng khít nhau, lệch góc ~11°)."
        ],
        coreTakeaways: [
          "Nhận biết sự tồn tại của từ trường bằng kim nam châm thử.",
          "Quy ước chiều đường sức từ: 'Ra Bắc, Vào Nam'.",
          "Cấu tạo và cách sử dụng la bàn định hướng địa lí."
        ],
        canApply: [
          "Sử dụng la bàn xác định hướng đi khi dã ngoại, thám hiểm rừng; tự chế tạo la bàn mini bằng kim khâu nổi trên mặt nước."
        ],
        exercises: [
          {
            id: "19.1",
            source: "SBT",
            code: "Bài 19.1",
            question: "Trong thí nghiệm Oersted, khi cho dòng điện chạy qua đoạn dây dẫn AB thì kim nam châm đặt gần đó quay lệch đi vì:",
            type: "essay",
            explanation: "Xung quanh dòng điện tồn tại từ trường. Từ trường này tác dụng lực từ lên kim nam châm làm kim quay lệch khỏi vị trí ban đầu."
          },
          {
            id: "19.8",
            source: "SBT",
            code: "Bài 19.8",
            question: "Đường sức từ ở bên ngoài thanh nam châm có chiều như thế nào?",
            type: "multiple_choice",
            options: [
              "A. Đi ra từ cực Nam, đi vào cực Bắc.",
              "B. Đi ra từ cực Bắc, đi vào cực Nam.",
              "C. Đi từ giữa nam châm ra hai đầu.",
              "D. Đi vòng tròn không có chiều xác định."
            ],
            correctAnswer: "B",
            explanation: "Quy ước: Đường sức từ ở bên ngoài nam châm có chiều đi ra từ cực Bắc (N) và đi vào cực Nam (S)."
          }
        ]
      },
      {
        id: 20,
        chapterId: 6,
        lessonNumber: 20,
        title: "Bài 20: Chế tạo nam châm điện đơn giản",
        pageSGK: 96,
        pageSBT: 51,
        discipline: "physics",
        interactiveSimType: "magnet",
        summary: [
          "1. Cấu tạo nam châm điện: Gồm một ống dây dẫn, một thỏi sắt non lồng trong lòng ống dây, nguồn điện và khoá K.",
          "2. Nguyên lí: Khi đóng khoá K, dòng điện chạy qua cuộn dây làm lõi sắt non trở thành nam châm điện có từ tính mạnh. Khi ngắt dòng điện, lõi sắt non mất hết từ tính ngay lập tức.",
          "3. Cách làm tăng lực từ của nam châm điện: (1) Tăng cường độ dòng điện (tăng số pin/nguồn); (2) Tăng số vòng dây quấn quanh ống.",
          "4. Đổi chiều cực từ: Đổi chiều dòng điện nối với nguồn thì cực từ của nam châm điện cũng đổi chiều.",
          "5. Ứng dụng: Cần cẩu dọn rác kim loại nặng hàng trăm kg, rơ-le điện từ bảo vệ mạch, chuông điện báo động, máy phát điện và động cơ điện."
        ],
        coreTakeaways: [
          "Nam châm điện chỉ có từ tính khi có dòng điện chạy qua.",
          "Các yếu tố làm thay đổi độ mạnh yếu và chiều cực từ của nam châm điện."
        ],
        canApply: [
          "Tự chế tạo nam châm điện từ một chiếc đinh sắt dài quấn dây đồng cách điện và pin tiểu 1.5V."
        ],
        exercises: [
          {
            id: "20.1",
            source: "SBT",
            code: "Bài 20.1",
            question: "Làm thế nào để thay đổi cực từ của một nam châm điện?",
            type: "multiple_choice",
            options: [
              "A. Tăng số vòng dây quấn.",
              "B. Tăng số pin của nguồn điện.",
              "C. Thay đổi chiều dòng điện chạy vào cuộn dây (đổi cực nguồn điện).",
              "D. Thay đổi lõi sắt non bằng lõi thép."
            ],
            correctAnswer: "C",
            explanation: "Muốn đổi cực từ của nam châm điện ta chỉ cần đổi cực của nguồn điện (đổi chiều dòng điện chạy qua ống dây)."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    romanNumber: "CHƯƠNG VII",
    title: "Trao đổi chất và chuyển hoá năng lượng ở sinh vật",
    description: "Quang hợp ở thực vật, hô hấp tế bào, trao đổi khí, trao đổi nước & chất dinh dưỡng ở thực vật (mạch gỗ, mạch rây) và động vật (vòng tuần hoàn).",
    discipline: "biology",
    color: "from-emerald-600 to-green-800",
    badge: "Sinh học cơ thể",
    iconName: "Leaf",
    lessons: [
      {
        id: 21,
        chapterId: 7,
        lessonNumber: 21,
        title: "Bài 21: Khái quát về trao đổi chất và chuyển hoá năng lượng",
        pageSGK: 99,
        pageSBT: 53,
        discipline: "biology",
        interactiveSimType: "biology",
        summary: [
          "1. Trao đổi chất là quá trình cơ thể lấy các chất từ môi trường (thức ăn, nước, khí O₂/CO₂), biến đổi chúng thành các chất cần thiết và thải chất cặn bã ra ngoài.",
          "2. Chuyển hoá năng lượng là sự biến đổi năng lượng từ dạng này sang dạng khác (Quang năng -> Hoá năng tích luỹ trong chất hữu cơ -> Nhiệt năng, cơ năng, ATP).",
          "3. Mối quan hệ: Trao đổi chất và chuyển hoá năng lượng luôn gắn liền và diễn ra đồng thời với nhau.",
          "4. Vai trò: Giúp sinh vật tồn tại, sinh trưởng, phát triển, cảm ứng, vận động và sinh sản."
        ],
        coreTakeaways: [
          "Khái niệm trao đổi chất và chuyển hoá năng lượng ở sinh vật.",
          "Vai trò sống còn của trao đổi chất đối với cơ thể sống."
        ],
        canApply: [
          "Giải thích vì sao khi vận động nặng lâu thì cơ thể nóng lên, toát nhiều mồ hôi, thở dốc và nhanh đói/khát."
        ],
        exercises: [
          {
            id: "21.5",
            source: "SBT",
            code: "Bài 21.5",
            question: "Trao đổi chất và chuyển hoá năng lượng có vai trò quan trọng đối với:",
            type: "multiple_choice",
            options: [
              "A. sự chuyển hoá của sinh vật.",
              "B. sự biến đổi các chất.",
              "C. sự trao đổi năng lượng.",
              "D. sự sống của sinh vật."
            ],
            correctAnswer: "D",
            explanation: "Trao đổi chất và chuyển hoá năng lượng là đặc trưng cơ bản quyết định sự tồn tại và phát triển của sự sống."
          }
        ]
      },
      {
        id: 22,
        chapterId: 7,
        lessonNumber: 22,
        title: "Bài 22: Quang hợp ở thực vật",
        pageSGK: 101,
        pageSBT: 54,
        discipline: "biology",
        interactiveSimType: "biology",
        summary: [
          "1. Khái niệm: Quang hợp là quá trình lá cây sử dụng nước (H₂O) và khí carbon dioxide (CO₂) nhờ năng lượng ánh sáng do diệp lục hấp thụ để tổng hợp chất hữu cơ (glucose, tinh bột) và giải phóng khí oxygen (O₂).",
          "2. Phương trình chữ: Nước + Carbon dioxide --(Ánh sáng, Diệp lục)--> Glucose + Oxygen.",
          "3. Bào quan thực hiện: Lục lạp chứa chất diệp lục (chlorophyll).",
          "4. Đặc điểm thích nghi của lá: Phiến lá mỏng diện tích bề mặt lớn thu nhận nhiều ánh sáng; Gân lá vận chuyển nguyên liệu/sản phẩm; Khí khổng mở cho CO₂ đi vào và O₂ thoát ra."
        ],
        keyFormulas: [
          { label: "Phương trình quang hợp", formula: "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{Ánh sáng, Diệp lục}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2", note: "Quang năng chuyển hoá thành hoá năng tích luỹ trong liên kết hoá học của chất hữu cơ." }
        ],
        coreTakeaways: [
          "Phương trình tổng quát quang hợp và nguyên liệu (H₂O, CO₂), sản phẩm (Glucose, O₂).",
          "Cấu tạo ngoài và giải phẫu lá thích nghi với chức năng quang hợp."
        ],
        canApply: [
          "Giải thích vì sao trồng nhiều cây xanh trong sân trường và phòng khách giúp không khí trong lành, mát mẻ."
        ],
        exercises: [
          {
            id: "22.2",
            source: "SBT",
            code: "Bài 22.2",
            question: "Sản phẩm của quá trình quang hợp ở cây xanh là:",
            type: "multiple_choice",
            options: [
              "A. Nước, carbon dioxide.",
              "B. Ánh sáng, diệp lục.",
              "C. Oxygen, glucose (tinh bột).",
              "D. Glucose, nước."
            ],
            correctAnswer: "C",
            explanation: "Quang hợp tạo ra chất hữu cơ (glucose/tinh bột) và giải phóng khí oxygen."
          }
        ]
      },
      {
        id: 23,
        chapterId: 7,
        lessonNumber: 23,
        title: "Bài 23: Một số yếu tố ảnh hưởng đến quang hợp",
        pageSGK: 104,
        pageSBT: 56,
        discipline: "biology",
        summary: [
          "1. Ánh sáng: Cường độ ánh sáng tăng thì hiệu quả quang hợp tăng (đến điểm bão hoà). Cây ưa sáng (ngô, phi lao, lúa) cần ánh sáng mạnh; Cây ưa bóng (lá lốt, trầu bà, lan ý) quang hợp tốt ở nơi râm mát.",
          "2. Nước: Vừa là nguyên liệu vừa điều tiết độ mở khí khổng để trao đổi khí.",
          "3. Nồng độ CO₂: Bình thường ~0,03%. Tăng nồng độ CO₂ giúp tăng quang hợp, nhưng nếu vượt quá 0,2% cây sẽ bị ngộ độc chết.",
          "4. Nhiệt độ: Thuận lợi nhất từ 25°C đến 35°C. Nhiệt độ quá cao (>40°C) hoặc quá thấp (<10°C) làm ngừng trệ quang hợp.",
          "5. Ứng dụng: Trồng cây đúng mật độ, luân canh, che nắng hoặc ủ ấm chống rét."
        ],
        coreTakeaways: [
          "Bốn yếu tố chủ yếu: Ánh sáng, Nước, Nồng độ CO₂, Nhiệt độ.",
          "Vận dụng hiểu biết về quang hợp trong trồng trọt và bảo vệ rừng, cây xanh đô thị."
        ],
        canApply: [
          "Giải thích hiện tượng tỉa thưa cây cải mọc quá dày để cây đón đủ ánh sáng và chất dinh dưỡng."
        ],
        exercises: [
          {
            id: "23.2",
            source: "SBT",
            code: "Bài 23.2",
            question: "Chọn đáp án đúng khi nói về nhu cầu ánh sáng của cây ưa sáng và cây ưa bóng:",
            type: "multiple_choice",
            options: [
              "A. Cây ưa sáng không cần nhiều ánh sáng mạnh, cây ưa bóng không cần nhiều ánh sáng.",
              "B. Cây ưa sáng cần nhiều ánh sáng mạnh, cây ưa bóng không cần nhiều ánh sáng.",
              "C. Cây ưa sáng cần nhiều ánh sáng mạnh, cây ưa bóng không cần ánh sáng.",
              "D. Cây ưa sáng không cần ánh sáng, cây ưa bóng cần ánh sáng mạnh."
            ],
            correctAnswer: "B",
            explanation: "Cây ưa sáng cần cường độ chiếu sáng mạnh, cây ưa bóng sinh trưởng tốt dưới tán cây khác hoặc nơi râm mát."
          }
        ]
      },
      {
        id: 24,
        chapterId: 7,
        lessonNumber: 24,
        title: "Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh",
        pageSGK: 108,
        pageSBT: 57,
        discipline: "biology",
        summary: [
          "1. Thí nghiệm 1: Chứng minh tinh bột tạo thành trong quang hợp: Để cây trong tối 2 ngày -> Bịt băng giấy đen 1 phần lá -> Đem ra nắng 4-6h -> Đun lá trong cồn 90° cách thuỷ (tẩy sạch diệp lục) -> Rửa nước ấm -> Nhúng dung dịch Iodine. Phần tiếp xúc ánh sáng hoá màu xanh tím (có tinh bột), phần bịt giấy đen giữ màu vàng nhạt.",
          "2. Thí nghiệm 2: Chứng minh giải phóng khí Oxygen: Cho rong đuôi chó vào 2 ống nghiệm chứa đầy nước úp ngược vào cốc nước. Cốc A để chỗ tối, Cốc B để ngoài nắng. Sau 6 giờ, bọt khí tụ lại ở đỉnh ống B. Đưa que đóm còn tàn đỏ vào miệng ống B thì bùng cháy sáng, chứng minh chất khí là Oxygen."
        ],
        coreTakeaways: [
          "Dung dịch Iodine là thuốc thử đặc trưng nhận biết tinh bột (chuyển sang màu xanh tím).",
          "Khí oxygen sinh ra từ quang hợp duy trì sự cháy làm que đóm bùng cháy."
        ],
        canApply: [
          "Giải thích vì sao khi nuôi cá cảnh trong bể kính nên thả thêm cành rong và cây thuỷ sinh (để quang hợp cung cấp thêm dưỡng khí oxygen cho cá)."
        ],
        exercises: [
          {
            id: "24.4",
            source: "SBT",
            code: "Bài 24.4",
            question: "Vì sao trong thí nghiệm chứng minh tinh bột được tạo thành trong quang hợp lại sử dụng dung dịch iodine làm thuốc thử?",
            type: "multiple_choice",
            options: [
              "A. Dung dịch iodine phản ứng với tinh bột tạo màu xanh tím đặc trưng.",
              "B. Chỉ có dung dịch iodine mới tác dụng với tinh bột.",
              "C. Dung dịch iodine dễ tìm.",
              "D. Dung dịch iodine phản ứng với tinh bột tạo màu đỏ đặc trưng."
            ],
            correctAnswer: "A",
            explanation: "Iodine tác dụng đặc trưng với tinh bột tạo hợp chất màu xanh tím, giúp nhận biết rõ khu vực lá có quang hợp."
          }
        ]
      },
      {
        id: 25,
        chapterId: 7,
        lessonNumber: 25,
        title: "Bài 25: Hô hấp tế bào",
        pageSGK: 111,
        pageSBT: 59,
        discipline: "biology",
        interactiveSimType: "biology",
        summary: [
          "1. Khái niệm: Hô hấp tế bào là quá trình phân giải chất hữu cơ (chủ yếu là glucose) với sự tham gia của khí oxygen tạo thành carbon dioxide, nước và giải phóng năng lượng ATP cho các hoạt động sống.",
          "2. Phương trình chữ: Glucose + Oxygen -> Carbon dioxide + Nước + Năng lượng (ATP + Nhiệt).",
          "3. Nơi diễn ra: Diễn ra ở TI THỂ (bào quan nhà máy năng lượng của tế bào nhân thực).",
          "4. Mối quan hệ giữa quang hợp và hô hấp: Hai quá trình trái ngược nhau nhưng phụ thuộc mật thiết và thống nhất (Quang hợp tổng hợp chất hữu cơ tích luỹ năng lượng; Hô hấp phân giải chất hữu cơ giải phóng năng lượng)."
        ],
        keyFormulas: [
          { label: "Phương trình hô hấp tế bào", formula: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\xrightarrow{\\text{Enzyme ở Ti thể}} 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{ATP} + Q", note: "Khoảng 40% năng lượng tích luỹ trong ATP, phần còn lại toả nhiệt duy trì thân nhiệt." }
        ],
        coreTakeaways: [
          "Bản chất, phương trình và vị trí diễn ra hô hấp tế bào (ti thể).",
          "Sự thống nhất và đối lập giữa quá trình tổng hợp (quang hợp) và phân giải (hô hấp)."
        ],
        canApply: [
          "Giải thích vì sao khi ở trên đỉnh núi cao không khí loãng thiếu O₂, con người phải thở nhanh và sâu hơn."
        ],
        exercises: [
          {
            id: "25.5",
            source: "SBT",
            code: "Bài 25.5",
            question: "Trong tế bào của hầu hết các sinh vật nhân thực, quá trình hô hấp xảy ra trong loại bào quan nào?",
            type: "multiple_choice",
            options: [
              "A. Không bào.",
              "B. Lục lạp.",
              "C. Ti thể.",
              "D. Nhân tế bào."
            ],
            correctAnswer: "C",
            explanation: "Ti thể là bào quan chuyên trách thực hiện quá trình hô hấp tế bào, giải phóng ATP."
          }
        ]
      },
      {
        id: 26,
        chapterId: 7,
        lessonNumber: 26,
        title: "Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào",
        pageSGK: 113,
        pageSBT: 61,
        discipline: "biology",
        summary: [
          "1. Nước: Là dung môi và môi trường diễn ra phản ứng hô hấp. Hàm lượng nước càng cao thì cường độ hô hấp càng mạnh.",
          "2. Khí Oxygen: Là nguyên liệu trực tiếp. Nồng độ O₂ giảm dưới 5% thì hô hấp giảm sút.",
          "3. Khí Carbon dioxide: Nồng độ CO₂ ngoài môi trường từ 3% - 5% đã gây ức chế hô hấp tế bào.",
          "4. Nhiệt độ: Nhiệt độ tối ưu khoảng 30°C - 35°C. Nhiệt độ quá thấp hoặc trên 40°C làm giảm hoạt tính enzyme hô hấp.",
          "5. Bảo quản nông sản: Mục tiêu là giảm cường độ hô hấp đến mức tối thiểu bằng các biện pháp: Bảo quản khô (phơi sấy hạt lúa, đậu độ ẩm 13-16%), Bảo quản lạnh (rau củ quả trong tủ lạnh 1-6°C), Bảo quản trong điều kiện nồng độ CO₂ cao / hút chân không."
        ],
        coreTakeaways: [
          "Các yếu tố điều hoà hô hấp: Nước, O₂, CO₂, Nhiệt độ.",
          "Nguyên lí và các phương pháp bảo quản nông sản sau thu hoạch."
        ],
        canApply: [
          "Giải thích vì sao không nên để nhiều hoa hoặc cây xanh trong phòng ngủ kín vào ban đêm (vì ban đêm cây chỉ hô hấp lấy O₂ và thải CO₂ gây ngạt thở)."
        ],
        exercises: [
          {
            id: "26.1",
            source: "SBT",
            code: "Bài 26.1",
            question: "Cây xanh hô hấp vào thời gian nào trong ngày?",
            type: "multiple_choice",
            options: [
              "A. Ban đêm.",
              "B. Buổi sáng.",
              "C. Cả ngày và đêm.",
              "D. Ban ngày."
            ],
            correctAnswer: "C",
            explanation: "Hô hấp tế bào diễn ra liên tục cả ngày lẫn đêm để duy trì năng lượng sống cho mọi tế bào của cây."
          }
        ]
      },
      {
        id: 27,
        chapterId: 7,
        lessonNumber: 27,
        title: "Bài 27: Thực hành: Hô hấp ở thực vật",
        pageSGK: 116,
        pageSBT: 62,
        discipline: "biology",
        summary: [
          "1. Mục tiêu: Tiến hành thí nghiệm phát hiện khí CO₂ và sự toả nhiệt do hạt nảy mầm hô hấp tạo ra.",
          "2. Chuẩn bị: Hạt đậu xanh/lạc ngâm nước ấm 40°C trong 2 giờ, ủ ẩm trong đĩa Petri đến khi nhú mầm.",
          "3. Thí nghiệm chuông thuỷ tinh: Chuông A đặt đĩa hạt nảy mầm + cốc nước vôi trong Ca(OH)₂. Chuông B chỉ đặt cốc nước vôi trong. Sau 1 giờ, cốc nước vôi trong ở chuông A bị đục và xuất hiện lớp váng CaCO₃ dày trên bề mặt, chứng minh hạt hô hấp thải khí CO₂."
        ],
        coreTakeaways: [
          "Khí CO₂ phản ứng với Ca(OH)₂ tạo kết tủa trắng CaCO₃ làm đục nước vôi trong.",
          "Hạt nảy mầm có cường độ hô hấp tế bào rất mạnh."
        ],
        canApply: [
          "Giải thích quy trình ủ giá đỗ tại nhà và tại sao túi hạt giống nảy mầm lại thấy nóng ấm lên."
        ],
        exercises: [
          {
            id: "27.6",
            source: "SBT",
            code: "Bài 27.6",
            question: "Váng đục trong cốc nước vôi trong ở thí nghiệm hạt nảy mầm được tạo thành do phản ứng giữa chất nào với nhau?",
            type: "essay",
            explanation: "Váng đục là kết tủa CaCO₃ được tạo thành do phản ứng giữa khí CO₂ sinh ra từ quá trình hô hấp của hạt với dung dịch nước vôi trong Ca(OH)₂: CO₂ + Ca(OH)₂ -> CaCO₃↓ + H₂O."
          }
        ]
      },
      {
        id: 28,
        chapterId: 7,
        lessonNumber: 28,
        title: "Bài 28: Trao đổi khí ở sinh vật",
        pageSGK: 118,
        pageSBT: 64,
        discipline: "biology",
        summary: [
          "1. Cơ chế trao đổi khí: Diễn ra theo cơ chế khuếch tán từ nơi có phân áp/nồng độ cao đến nơi có phân áp/nồng độ thấp.",
          "2. Ở thực vật: Trao đổi khí chủ yếu qua KHÍ KHỔNG ở bề mặt lá. Tế bào khí khổng hình hạt đậu, mép trong dày, mép ngoài mỏng. Khi no nước, thành mỏng căng làm thành dày cong theo -> khí khổng mở rộng; khi mất nước -> khí khổng khép lại.",
          "3. Ở động vật: Cơ quan trao đổi khí đa dạng: Qua bề mặt da ẩm ướt (giun đất, ếch), qua hệ thống ống khí (côn trùng: châu chấu, ong), qua mang (cá, tôm), qua phổi (bò sát, chim, động vật có vú, người).",
          "4. Đường dẫn khí ở người: Mũi -> Hầu -> Thanh quản -> Khí quản -> Phế quản -> Phế nang ở phổi (nơi trao đổi O₂ và CO₂ với mao mạch máu)."
        ],
        coreTakeaways: [
          "Cấu tạo và hoạt động đóng mở của tế bào khí khổng ở lá cây.",
          "Các hình thức trao đổi khí ở các nhóm động vật khác nhau."
        ],
        canApply: [
          "Giải thích tại sao đốt than củi sưởi ấm trong phòng kín vào mùa đông có thể gây ngạt thở và tử vong do tích tụ khí độc CO và CO₂ chiếm chỗ O₂ gắn với hemoglobin."
        ],
        exercises: [
          {
            id: "28.1",
            source: "SBT",
            code: "Bài 28.1",
            question: "Trao đổi khí ở sinh vật là quá trình:",
            type: "multiple_choice",
            options: [
              "A. Lấy O₂ từ môi trường vào cơ thể và thải khí CO₂ từ cơ thể ra môi trường.",
              "B. Lấy CO₂ từ môi trường vào cơ thể và thải khí O₂ từ cơ thể ra môi trường.",
              "C. Lấy O₂ hoặc CO₂ từ môi trường vào cơ thể, đồng thời thải khí CO₂ hoặc O₂ từ cơ thể ra môi trường.",
              "D. Lấy khí CO₂ từ môi trường vào cơ thể, đồng thời thải khí O₂ và CO₂ ra ngoài môi trường."
            ],
            correctAnswer: "C",
            explanation: "Ở thực vật lấy CO₂ thải O₂ (quang hợp) và lấy O₂ thải CO₂ (hô hấp). Ở động vật lấy O₂ thải CO₂ (hô hấp). Do đó C là đáp án đầy đủ nhất."
          }
        ]
      },
      {
        id: 29,
        chapterId: 7,
        lessonNumber: 29,
        title: "Bài 29: Vai trò của nước và chất dinh dưỡng đối với sinh vật",
        pageSGK: 122,
        pageSBT: 65,
        discipline: "biology",
        summary: [
          "1. Nước: Phân tử phân cực, là dung môi hoà tan nhiều chất, chiếm khoảng 70% - 90% khối lượng cơ thể sinh vật. Tham gia vận chuyển các chất và điều hoà thân nhiệt.",
          "2. Dinh dưỡng ở thực vật: Cần các nguyên tố đa lượng (N, P, K) và vi lượng (Cu, Fe, Zn, Mo, B,...). Thiếu N cây còi cọc lá vàng; thiếu P rễ kém phát triển; thiếu K cây yếu dễ đổ ngã và giảm năng suất.",
          "3. Dinh dưỡng ở động vật: 4 nhóm dưỡng chất thiết yếu: Protein (chất đạm), Carbohydrate (chất bột đường), Lipid (chất béo), Vitamin và khoáng chất.",
          "4. Nhu cầu nước: Trẻ vị thành niên cần bổ sung khoảng 40 mL nước/1 kg thể trọng mỗi ngày."
        ],
        coreTakeaways: [
          "Cấu trúc phân cực của nước và vai trò dung môi sống.",
          "Nhu cầu dinh dưỡng cân bằng để cơ thể sinh trưởng khoẻ mạnh."
        ],
        canApply: [
          "Tính lượng nước cần uống mỗi ngày cho bản thân (ví dụ 45 kg x 40 mL = 1,8 lít nước/ngày)."
        ],
        exercises: [
          {
            id: "29.1",
            source: "SBT",
            code: "Bài 29.1",
            question: "Nước là dung môi hoà tan nhiều chất trong cơ thể sống vì phân tử nước có:",
            type: "multiple_choice",
            options: [
              "A. nhiệt dung riêng cao.",
              "B. liên kết hydrogen giữa các phân tử.",
              "C. nhiệt bay hơi cao.",
              "D. tính phân cực."
            ],
            correctAnswer: "D",
            explanation: "Do tính phân cực (đầu O tích điện âm nhẹ, 2 đầu H tích điện dương nhẹ), nước dễ dàng hút và làm tan các phân tử ion hoặc phân cực khác."
          }
        ]
      },
      {
        id: 30,
        chapterId: 7,
        lessonNumber: 30,
        title: "Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật",
        pageSGK: 127,
        pageSBT: 68,
        discipline: "biology",
        summary: [
          "1. Hấp thụ nước & khoáng: Tế bào lông hút ở rễ hấp thụ nước và khoáng từ đất theo cơ chế thẩm thấu/khuếch tán.",
          "2. Vận chuyển trong cây: Mạch gỗ (xylem) vận chuyển dòng đi lên gồm Nước và Muối khoáng hoà tan từ rễ lên thân và lá; Mạch rây (phloem) vận chuyển dòng đi xuống gồm Chất hữu cơ tổng hợp từ lá đến các cơ quan sử dụng và cơ quan dự trữ (rễ, củ, hạt, quả).",
          "3. Thoát hơi nước ở lá: Chủ yếu qua khí khổng, tạo lực hút kéo dòng nước và muối khoáng trong mạch gỗ đi lên, đồng thời làm mát bề mặt lá và giúp khí CO₂ khuếch tán vào lá."
        ],
        coreTakeaways: [
          "Phân biệt rõ: Mạch gỗ (dòng đi lên) vs Mạch rây (dòng đi xuống).",
          "Ý nghĩa của sự thoát hơi nước đối với đời sống thực vật."
        ],
        canApply: [
          "Giải thích vì sao khi bứng cây chuyển đi trồng nơi khác phải cắt tỉa bớt cành và lá (để giảm thoát hơi nước, tránh cho cây bị héo chết khi rễ chưa bén đất)."
        ],
        exercises: [
          {
            id: "30.4",
            source: "SBT",
            code: "Bài 30.4",
            question: "Hiện tượng nào dưới đây cho thấy sự vận chuyển chất hữu cơ theo mạch rây từ lá đến các bộ phận khác của cây?",
            type: "multiple_choice",
            options: [
              "A. Mép lá có các giọt nước nhỏ vào những ngày độ ẩm không khí cao.",
              "B. Khi cắt bỏ một khoanh vỏ ở thân cây thì sau một thời gian, phần mép vỏ phía trên bị phình to.",
              "C. Lá cây bị héo quắt do Mặt Trời đốt nóng.",
              "D. Nhựa rỉ ra từ gốc cây bị chặt bỏ thân."
            ],
            correctAnswer: "B",
            explanation: "Mạch rây nằm ở phần vỏ thân. Cắt bỏ khoanh vỏ làm tắc dòng chất hữu cơ từ lá đi xuống, chất dinh dưỡng ứ đọng lại ở mép trên vết cắt làm nó phình to ra."
          }
        ]
      },
      {
        id: 31,
        chapterId: 7,
        lessonNumber: 31,
        title: "Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật",
        pageSGK: 131,
        pageSBT: 71,
        discipline: "biology",
        summary: [
          "1. Con đường tiêu hoá: Thức ăn được đưa vào Miệng (nhai, nuốt, tiêu hoá tinh bột chín) -> Dạ dày (co bóp, tiêu hoá protein) -> Ruột non (tiêu hoá triệt để và hấp thụ chất dinh dưỡng vào máu) -> Ruột già (hấp thụ lại nước, tạo phân) -> Hậu môn.",
          "2. Hệ tuần hoàn ở người: Gồm tim và hệ thống mạch máu (động mạch, mao mạch, tĩnh mạch).",
          "3. Hai vòng tuần hoàn: Vòng tuần hoàn nhỏ (đưa máu đỏ thẫm nghèo O₂ từ tim đến phổi nhận O₂ thải CO₂ trở thành máu đỏ tươi về tim); Vòng tuần hoàn lớn (đưa máu đỏ tươi giàu O₂ và dưỡng chất từ tim đi nuôi tất cả các tế bào trong cơ thể, nhận chất thải và CO₂ trở thành máu đỏ thẫm về tim).",
          "4. Bài tiết: Thận lọc máu tạo nước tiểu, da bài tiết mồ hôi, phổi thải CO₂."
        ],
        coreTakeaways: [
          "Các giai đoạn tiêu hoá thức ăn trong ống tiêu hoá của người.",
          "Sơ đồ hoạt động của 2 vòng tuần hoàn máu (vòng nhỏ phổi và vòng lớn cơ thể)."
        ],
        canApply: [
          "Xây dựng chế độ dinh dưỡng hợp lí và tập thể dục thể thao đều đặn để phòng tránh bệnh xơ vữa động mạch, tim mạch và béo phì."
        ],
        exercises: [
          {
            id: "31.2",
            source: "SBT",
            code: "Bài 31.2",
            question: "Theo khuyến nghị của Viện Dinh dưỡng Quốc gia (40 mL/kg/ngày), một học sinh có cân nặng 50 kg cần uống bao nhiêu nước mỗi ngày?",
            type: "multiple_choice",
            options: [
              "A. 2 000 mL (2 lít).",
              "B. 1 500 mL.",
              "C. 1 000 mL.",
              "D. 3 000 mL."
            ],
            correctAnswer: "A",
            explanation: "Lượng nước cần uống = 50 kg · 40 mL/kg = 2 000 mL = 2 lít nước mỗi ngày."
          }
        ]
      },
      {
        id: 32,
        chapterId: 7,
        lessonNumber: 32,
        title: "Bài 32: Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước",
        pageSGK: 136,
        pageSBT: 73,
        discipline: "biology",
        summary: [
          "1. Thí nghiệm 1: Chứng minh thân vận chuyển nước: Cắm cành cần tây vào cốc nước pha màu đỏ/tím. Sau 30-60 phút, cắt ngang cuống lá quan sát dưới kính lúp thấy các bó mạch gỗ bị nhuộm màu đỏ/tím, chứng minh mạch gỗ vận chuyển nước từ dưới lên lá.",
          "2. Thí nghiệm 2: Chứng minh lá thoát hơi nước: Chuẩn bị 2 chậu cây A (ngắt sạch lá) và B (giữ nguyên lá). Trùm túi nylon kín lên phần thân lá của mỗi chậu và đặt ra ngoài sáng. Sau 30-60 phút, mặt trong túi chậu B đọng nhiều giọt nước li ti, còn chậu A không có hoặc rất ít, chứng minh lá cây là cơ quan thoát hơi nước."
        ],
        coreTakeaways: [
          "Mạch gỗ trong thân đảm nhận vận chuyển nước và muối khoáng.",
          "Thoát hơi nước diễn ra chủ yếu qua bề mặt lá."
        ],
        canApply: [
          "Giải thích cách giữ hoa tươi lâu bằng cách cắm vào nước sạch và cắt vát gốc cành hoa dưới nước."
        ],
        exercises: [
          {
            id: "32.1",
            source: "SBT",
            code: "Bài 32.1",
            question: "Cắt một cành hoa hồng trắng rồi cắm vào cốc nước pha màu tím. Sau một thời gian, cánh hoa sẽ có màu gì?",
            type: "multiple_choice",
            options: [
              "A. Màu trắng.",
              "B. Không màu.",
              "C. Màu tím.",
              "D. Màu vàng."
            ],
            correctAnswer: "C",
            explanation: "Mạch gỗ của cuống hoa hút và vận chuyển nước pha màu tím lên các cánh hoa, làm cánh hoa chuyển sang màu tím."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    romanNumber: "CHƯƠNG VIII",
    title: "Cảm ứng ở sinh vật",
    description: "Khái niệm cảm ứng ở thực vật (hướng sáng, hướng nước, hướng tiếp xúc), tập tính động vật (bẩm sinh và học được) và ứng dụng thực tế.",
    discipline: "biology",
    color: "from-teal-500 to-emerald-800",
    badge: "Cảm ứng & Tập tính",
    iconName: "Activity",
    lessons: [
      {
        id: 33,
        chapterId: 8,
        lessonNumber: 33,
        title: "Bài 33: Cảm ứng ở sinh vật và tập tính ở động vật",
        pageSGK: 138,
        pageSBT: 76,
        discipline: "biology",
        summary: [
          "1. Cảm ứng ở sinh vật là phản ứng của cơ thể đối với các kích thích từ môi trường ngoài hoặc môi trường trong, giúp sinh vật thích nghi và tồn tại.",
          "2. Cảm ứng ở thực vật: Diễn ra chậm, gồm Tính hướng sáng (ngọn cây hướng về phía có ánh sáng), Tính hướng nước và hướng hoá (rễ cây vươn tới nguồn nước và phân bón), Tính hướng tiếp xúc (thân leo quấn quanh giàn). Cây trinh nữ cụp lá khi va chạm.",
          "3. Tập tính ở động vật: Chuỗi phản ứng trả lời kích thích của môi trường.",
          "4. Phân loại tập tính: Tập tính bẩm sinh (sinh ra đã có, mang tính bản năng di truyền: nhện giăng tơ, chim ấp trứng, bú mẹ) và Tập tính học được (hình thành qua học tập và trải nghiệm sống: khỉ biết dùng que khều thức ăn, người dừng xe khi gặp đèn đỏ)."
        ],
        coreTakeaways: [
          "Khái niệm cảm ứng và các dạng hướng động ở thực vật.",
          "Phân biệt tập tính bẩm sinh và tập tính học được ở động vật."
        ],
        canApply: [
          "Rèn luyện các thói quen tốt cho bản thân (đọc sách, tập thể dục, đi ngủ đúng giờ) dựa trên quy luật hình thành tập tính học được."
        ],
        exercises: [
          {
            id: "33.2",
            source: "SBT",
            code: "Bài 33.2",
            question: "Các tác nhân của môi trường tác động tới cơ thể sinh vật được gọi là gì?",
            type: "multiple_choice",
            options: [
              "A. Các nhận biết.",
              "B. Các kích thích.",
              "C. Các cảm ứng.",
              "D. Các phản ứng."
            ],
            correctAnswer: "B",
            explanation: "Tác nhân từ môi trường (ánh sáng, nhiệt độ, nước, va chạm, âm thanh...) tác động lên cơ thể được gọi là các kích thích."
          }
        ]
      },
      {
        id: 34,
        chapterId: 8,
        lessonNumber: 34,
        title: "Bài 34: Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn",
        pageSGK: 141,
        pageSBT: 78,
        discipline: "biology",
        summary: [
          "1. Trong trồng trọt: Làm giàn cho cây thân leo (mướp, bầu, bí, hồ tiêu); Thắp đèn ban đêm để kích thích cây thanh long ra hoa trái vụ; Dùng bù nhìn, bẫy đèn tiêu diệt sâu bướm hại mùa màng.",
          "2. Trong chăn nuôi: Huấn luyện vật nuôi hình thành tập tính tốt: Nghe hiệu lệnh tiếng còi, tiếng gõ máng để về chuồng ăn đúng giờ; Huấn luyện chó chăn cừu, chó nghiệp vụ đánh hơi.",
          "3. Trong đời sống con người: Tạo lập các phản xạ có điều kiện lành mạnh, tuân thủ tín hiệu đèn giao thông."
        ],
        coreTakeaways: [
          "Ứng dụng cảm ứng thực vật để tăng năng suất cây trồng.",
          "Ứng dụng tập tính học được để huấn luyện gia súc, gia cầm."
        ],
        canApply: [
          "Giải thích vì sao người nông dân trồng cây thanh long ở Bình Thuận thường thắp đèn vàng vào ban đêm vào mùa đông."
        ],
        exercises: [
          {
            id: "34.1",
            source: "SBT",
            code: "Bài 34.1",
            question: "Ghép hiện tượng cảm ứng: 'Nghe hiệu lệnh là về chuồng' có lợi ích gì với người chăn nuôi?",
            type: "multiple_choice",
            options: [
              "A. Giảm công sức kêu gọi, tránh lãng phí thức ăn.",
              "B. Giúp vật nuôi hình thành thói quen vệ sinh.",
              "C. Giúp người chăn nuôi giảm công sức lùa vật nuôi về chuồng.",
              "D. Tăng sản lượng sữa."
            ],
            correctAnswer: "C",
            explanation: "Tập tính nghe hiệu lệnh về chuồng giúp người nuôi quản lí đàn gia súc dễ dàng mà không tốn công đi lùa từng con."
          }
        ]
      },
      {
        id: 35,
        chapterId: 8,
        lessonNumber: 35,
        title: "Bài 35: Thực hành: Cảm ứng ở sinh vật",
        pageSGK: 145,
        pageSBT: 79,
        discipline: "biology",
        summary: [
          "1. Thí nghiệm chứng minh tính hướng sáng: Đặt 2 chậu cây con vào 2 hộp carton. Hộp 1 khoét lỗ phía trên đỉnh, Hộp 2 khoét lỗ ở một bên hông. Sau 3-5 ngày, thân cây ở hộp 2 cong hẳn về phía lỗ khoét bên hông.",
          "2. Thí nghiệm chứng minh tính hướng nước: Chậu thí nghiệm có đặt một cốc nước đục lỗ rỉ nước ở một góc. Sau vài ngày, rễ cây sinh trưởng lệch hẳn và tập trung dày đặc về phía nguồn nước.",
          "3. Tập tính ở vật nuôi: Gõ kẻng/vỗ tay kết hợp cho gà/cá ăn lặp lại trong 7-10 ngày, sau đó chỉ cần phát âm thanh là đàn vật nuôi tự động tụ lại."
        ],
        coreTakeaways: [
          "Kĩ năng thiết kế thí nghiệm đối chứng chứng minh tính hướng sáng, hướng nước.",
          "Quy trình tạo lập phản xạ/tập tính có điều kiện ở vật nuôi."
        ],
        canApply: [
          "Bố trí chậu cây cảnh cạnh cửa sổ để quan sát cây nghiêng về phía ánh sáng mặt trời."
        ],
        exercises: [
          {
            id: "35.1",
            source: "SBT",
            code: "Bài 35.1",
            question: "Trong thí nghiệm chứng minh tính hướng nước của rễ cây, tại sao cần bố trí chậu đối chứng tưới nước đều khắp chậu?",
            type: "essay",
            explanation: "Để so sánh: ở chậu đối chứng rễ mọc toả đều khắp chậu, còn ở chậu thí nghiệm rễ chỉ uốn cong và hướng về phía nguồn nước rỉ, qua đó khẳng định rễ cây có tính hướng nước."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    romanNumber: "CHƯƠNG IX",
    title: "Sinh trưởng và phát triển ở sinh vật",
    description: "Khái niệm sinh trưởng & phát triển, mô phân sinh đỉnh (chiều dài) & mô phân sinh bên (chiều ngang), các nhân tố ảnh hưởng và ứng dụng tiêu diệt ấu trùng sâu hại.",
    discipline: "biology",
    color: "from-lime-600 to-emerald-900",
    badge: "Phát triển cá thể",
    iconName: "TrendingUp",
    lessons: [
      {
        id: 36,
        chapterId: 9,
        lessonNumber: 36,
        title: "Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật",
        pageSGK: 148,
        pageSBT: 81,
        discipline: "biology",
        summary: [
          "1. Sinh trưởng là sự tăng về kích thước và khối lượng của cơ thể do tăng số lượng và kích thước của tế bào.",
          "2. Phát triển bao gồm sinh trưởng, phân hoá tế bào, phát sinh hình thái cơ quan và cơ thể (ví dụ: hạt nảy mầm -> cây con -> cây ra hoa, tạo quả).",
          "3. Mô phân sinh ở thực vật: Nhóm tế bào chưa phân hoá có khả năng phân chia liên tục. Gồm Mô phân sinh đỉnh (ở đỉnh ngọn thân và đỉnh rễ, giúp thân cành rễ tăng chiều dài) và Mô phân sinh bên (nằm ở tầng sinh vỏ và tầng sinh trụ của cây Hai lá mầm, giúp thân rễ tăng đường kính, to ra).",
          "4. Thực vật Một lá mầm (tre, ngô, lúa) có thêm Mô phân sinh lóng giúp thân cây cao vổng rất nhanh."
        ],
        coreTakeaways: [
          "Phân biệt Sinh trưởng (tăng lượng) và Phát triển (biến đổi chất/chức năng).",
          "Vị trí và vai trò của mô phân sinh đỉnh và mô phân sinh bên."
        ],
        canApply: [
          "Giải thích vì sao thân cây cau, cây dừa (Một lá mầm) không to ra theo thời gian như cây bàng, cây phượng (Hai lá mầm)."
        ],
        exercises: [
          {
            id: "36.3",
            source: "SBT",
            code: "Bài 36.3",
            question: "Ở thực vật Hai lá mầm, mô phân sinh bên có vai trò gì?",
            type: "multiple_choice",
            options: [
              "A. Giúp thân, cành và rễ tăng lên về chiều ngang (đường kính).",
              "B. Giúp thân, cành và rễ tăng lên về chiều dài.",
              "C. Giúp cây ra hoa và tạo quả.",
              "D. Giúp lá quang hợp tốt hơn."
            ],
            correctAnswer: "A",
            explanation: "Mô phân sinh bên phân chia tạo ra các lớp tế bào mới làm tăng đường kính thân và rễ (tăng chiều ngang)."
          }
        ]
      },
      {
        id: 37,
        chapterId: 9,
        lessonNumber: 37,
        title: "Bài 37: Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn",
        pageSGK: 151,
        pageSBT: 82,
        discipline: "biology",
        summary: [
          "1. Các nhân tố ảnh hưởng: Nhiệt độ, ánh sáng, nước, chất dinh dưỡng, hormone sinh trưởng.",
          "2. Điều khiển sinh trưởng cây trồng: Sử dụng chất kích thích sinh trưởng (làm cây vươn cao, thúc hạt nảy mầm, tạo quả không hạt) hoặc chất ức chế sinh trưởng (kìm hãm mọc mầm của hành, tỏi, khoai tây khi bảo quản).",
          "3. Trong chăn nuôi: Chiếu sáng kích thích gà đẻ trứng, giữ ấm mùa đông tránh còi cọc.",
          "4. Phòng trừ sâu hại: Nắm rõ vòng đời của côn trùng: Bướm (Trứng -> Sâu bướm/Ấu trùng cắn phá lá -> Nhộng -> Bướm trưởng thành); Muỗi (Trứng -> Bọ gậy/Lăng quăng -> Cung quăng -> Muỗi). Tiêu diệt ở giai đoạn ấu trùng/bọ gậy hoặc loại bỏ vũng nước đọng đem lại hiệu quả cao nhất."
        ],
        coreTakeaways: [
          "Ứng dụng hormone và điều chỉnh điều kiện ngoại cảnh để tối ưu hoá năng suất.",
          "Cắt đứt vòng đời sâu bệnh tại giai đoạn dễ tác động nhất (ấu trùng, lăng quăng)."
        ],
        canApply: [
          "Thực hiện vệ sinh môi trường, đậy kín lu chứa nước, thả cá bảy màu ăn bọ gậy để phòng ngừa bệnh sốt xuất huyết."
        ],
        exercises: [
          {
            id: "37.8",
            source: "SBT",
            code: "Bài 37.8",
            question: "Giai đoạn nào trong vòng đời của loài bướm gây hại nặng nề nhất đối với cây trồng nông nghiệp?",
            type: "multiple_choice",
            options: [
              "A. Giai đoạn trứng.",
              "B. Giai đoạn sâu non (ấu trùng).",
              "C. Giai đoạn nhộng.",
              "D. Giai đoạn bướm trưởng thành."
            ],
            correctAnswer: "B",
            explanation: "Sâu non (ấu trùng) có hàm khoẻ, ăn rất nhiều lá cây để tích luỹ dinh dưỡng chuẩn bị hoá nhộng nên gây thiệt hại mùa màng nặng nề nhất."
          }
        ]
      },
      {
        id: 38,
        chapterId: 9,
        lessonNumber: 38,
        title: "Bài 38: Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật",
        pageSGK: 156,
        pageSBT: 84,
        discipline: "biology",
        summary: [
          "1. Mục tiêu: Theo dõi và ghi chép sự nảy mầm, tăng chiều cao, số lá của cây đậu qua các ngày 1, 2, 3, 4, 5.",
          "2. Quan sát vòng đời động vật: So sánh vòng đời không qua biến thái (Gà: Trứng -> Gà con -> Gà trưởng thành) và vòng đời biến thái hoàn toàn (Bướm: Trứng -> Ấu trùng -> Nhộng -> Bướm)."
        ],
        coreTakeaways: [
          "Kĩ năng lập bảng theo dõi chỉ tiêu sinh trưởng (chiều cao cm, số lá).",
          "Mô tả các biến đổi hình thái trong vòng đời sinh vật."
        ],
        canApply: [
          "Gieo trồng và theo dõi nhật kí phát triển của một chậu cây cảnh tại gia đình."
        ],
        exercises: [
          {
            id: "38.2",
            source: "SBT",
            code: "Bài 38.2",
            question: "Tại sao trước khi gieo hạt nên ngâm hạt trong nước ấm từ 35°C đến 40°C?",
            type: "essay",
            explanation: "Ngâm nước ấm cung cấp độ ẩm và nhiệt độ thích hợp làm mềm vỏ hạt, kích thích các enzyme hô hấp tế bào hoạt động mạnh mẽ, phá vỡ trạng thái ngủ nghỉ giúp hạt nảy mầm nhanh và đồng đều."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    romanNumber: "CHƯƠNG X",
    title: "Sinh sản ở sinh vật",
    description: "Sinh sản vô tính (giâm/chiết/ghép cành, nuôi cấy mô, nảy chồi, phân mảnh), sinh sản hữu tính (hoa, thụ phấn, thụ tinh, đẻ con/trứng) và cơ thể là một thể thống nhất.",
    discipline: "biology",
    color: "from-fuchsia-600 to-purple-900",
    badge: "Duy trì nòi giống",
    iconName: "HeartHandshake",
    lessons: [
      {
        id: 39,
        chapterId: 10,
        lessonNumber: 39,
        title: "Bài 39: Sinh sản vô tính ở sinh vật",
        pageSGK: 158,
        pageSBT: 86,
        discipline: "biology",
        summary: [
          "1. Khái niệm: Sinh sản vô tính là hình thức sinh sản KHÔNG có sự kết hợp của giao tử đực và giao tử cái; cơ thể con được tạo thành từ một phần của cơ thể mẹ, có đặc điểm giống hệt cơ thể mẹ.",
          "2. Sinh sản sinh dưỡng ở thực vật: Tự nhiên (từ rễ củ như khoai lang, thân củ như khoai tây, thân rễ như gừng/cỏ gấu, thân bò như rau má/dâu tây, lá như lá bỏng/thuốc bỏng). Nhân tạo (Giâm cành: sắn, mía, rau ngót, hoa hồng; Chiết cành: cam, bưởi, ổi; Ghép mắt/ghép cành: xoài, bơ, táo; Nuôi cấy mô tế bào invitro sạch bệnh quy mô công nghiệp).",
          "3. Sinh sản vô tính ở động vật: Phân đôi (trùng roi, trùng giày), Nảy chồi (thuỷ tức, san hô), Phân mảnh (sao biển, giun dẹp), Trinh sản (ong chúa đẻ trứng không thụ tinh nở ra ong đực, rệp)."
        ],
        coreTakeaways: [
          "Đặc trưng của sinh sản vô tính: Con sinh ra đồng nhất về mặt di truyền với mẹ.",
          "Các phương pháp nhân giống vô tính ở thực vật và vai trò kinh tế."
        ],
        canApply: [
          "Thực hiện kĩ thuật giâm cành rau muống, rau ngót hoặc chiết cành cây ăn quả trong vườn nhà."
        ],
        exercises: [
          {
            id: "39.3",
            source: "SBT",
            code: "Bài 39.3",
            question: "Vì sao khi nhân giống các loại cây ăn quả lâu năm như cam, chanh, bưởi người ta thường dùng phương pháp chiết cành mà không dùng giâm cành?",
            type: "multiple_choice",
            options: [
              "A. Thời gian ra rễ của các cây này khi giâm rất chậm hoặc khó ra rễ.",
              "B. Những cây đó có giá trị kinh tế cao.",
              "C. Cành của các cây đó quá to nên không giâm cành được.",
              "D. Khả năng vận chuyển các chất dinh dưỡng của các cây này kém."
            ],
            correctAnswer: "A",
            explanation: "Thân gỗ của cây có múi khó tạo rễ bất định khi giâm trực tiếp xuống đất. Chiết cành giúp cành được nuôi dưỡng từ cây mẹ trong khi ra rễ, tỉ lệ sống sót gần 100% và nhanh cho quả."
          }
        ]
      },
      {
        id: 40,
        chapterId: 10,
        lessonNumber: 40,
        title: "Bài 40: Sinh sản hữu tính ở sinh vật",
        pageSGK: 164,
        pageSBT: 88,
        discipline: "biology",
        summary: [
          "1. Khái niệm: Sinh sản hữu tính là hình thức sinh sản luôn có sự kết hợp giữa giao tử đực (tinh trùng/hạt phấn) và giao tử cái (trứng/noãn) tạo thành HỢP TỬ. Hợp tử phát triển thành cơ thể mới mang đặc điểm của cả bố và mẹ, tạo tính đa dạng di truyền phong phú.",
          "2. Ở thực vật có hoa: Hoa là cơ quan sinh sản. Hoa lưỡng tính (có cả nhị và nhuỵ: bưởi, cải, hoa hồng, huệ); Hoa đơn tính (chỉ có nhị - hoa đực, hoặc chỉ có nhuỵ - hoa cái: mướp, bầu, bí, dưa chuột, ngô).",
          "3. Tiến trình: Thụ phấn (hạt phấn rơi vào đầu nhuỵ) -> Thụ tinh (tinh tử kết hợp với noãn tạo hợp tử) -> Bầu nhuỵ phát triển thành Quả, Noãn đã thụ tinh phát triển thành Hạt (chứa phôi).",
          "4. Ở động vật: Thụ tinh ngoài (cá chép, ếch nhái - đẻ trứng trong nước) vs Thụ tinh trong (chim, thú, người - thụ tinh trong cơ quan sinh dục cái). Đẻ trứng vs Đẻ con (nuôi phôi trong tử cung mẹ và nuôi con bằng sữa mẹ - hình thức tiến hoá nhất)."
        ],
        coreTakeaways: [
          "Cấu tạo hoa và tiến trình Thụ phấn -> Thụ tinh -> Tạo quả & hạt.",
          "Ưu điểm tiến hoá của hình thức mang thai và đẻ con ở động vật có vú."
        ],
        canApply: [
          "Thực hiện thụ phấn nhân tạo bổ sung cho hoa bầu, bí hoặc ngô để tăng tỉ lệ đậu quả."
        ],
        exercises: [
          {
            id: "40.1",
            source: "SBT",
            code: "Bài 40.1",
            question: "Sinh sản hữu tính ở sinh vật là quá trình:",
            type: "multiple_choice",
            options: [
              "A. Tạo ra cơ thể mới từ một phần của cơ thể mẹ hoặc bố.",
              "B. Tạo ra cơ thể mới từ sự kết hợp giữa cơ thể mẹ và cơ thể bố.",
              "C. Hợp nhất giữa giao tử đực và giao tử cái tạo thành hợp tử, hợp tử phát triển thành cơ thể mới.",
              "D. Tạo ra cơ thể mới từ cơ quan sinh dưỡng của cơ thể mẹ."
            ],
            correctAnswer: "C",
            explanation: "Bản chất của sinh sản hữu tính là sự hợp nhất của giao tử đực và giao tử cái tạo hợp tử."
          }
        ]
      },
      {
        id: 41,
        chapterId: 10,
        lessonNumber: 41,
        title: "Bài 41: Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật",
        pageSGK: 169,
        pageSBT: 89,
        discipline: "biology",
        summary: [
          "1. Yếu tố ảnh hưởng: Bên trong (di truyền, hormone, độ tuổi); Bên ngoài (nhiệt độ, ánh sáng, độ ẩm, chế độ dinh dưỡng).",
          "2. Điều hoà & điều khiển sinh sản ở cây trồng: Điều khiển ra hoa trái vụ (thắp đèn thanh long, khống chế nước tưới cho cam quýt ra hoa đồng loạt); Thụ phấn nhân tạo; Sử dụng chất kích thích tạo quả không hạt (dưa hấu, nho, chanh không hạt).",
          "3. Trong chăn nuôi: Tiêm hormone kích thích cá đẻ trứng đồng loạt; Thụ tinh nhân tạo (tách tinh trùng đực/cái theo ý muốn: bò sữa lấy cái, bò thịt lấy đực); Nuôi cấy và chuyển cấy phôi ở bò.",
          "4. Ở người: Kế hoạch hoá gia đình (sử dụng biện pháp tránh thai an toàn), hỗ trợ các cặp vợ chồng hiếm muộn bằng thụ tinh trong ống nghiệm (IVF)."
        ],
        coreTakeaways: [
          "Cơ chế điều khiển sinh sản bằng các biện pháp sinh học và kĩ thuật canh tác.",
          "Ý nghĩa bảo vệ các loài côn trùng thụ phấn tự nhiên (ong mật, bướm)."
        ],
        canApply: [
          "Giải thích vì sao cấm tuyệt đối việc lựa chọn giới tính thai nhi dưới mọi hình thức."
        ],
        exercises: [
          {
            id: "41.1",
            source: "SBT",
            code: "Bài 41.1",
            question: "Trong điều khiển sinh sản ở động vật, biện pháp nào thúc đẩy trứng chín nhanh và chín hàng loạt?",
            type: "multiple_choice",
            options: [
              "A. Sử dụng hormone hoặc thay đổi yếu tố môi trường.",
              "B. Nuôi cấy phôi, thụ tinh nhân tạo.",
              "C. Nuôi cấy phôi, thay đổi các yếu tố môi trường.",
              "D. Chỉ sử dụng hormone đơn thuần."
            ],
            correctAnswer: "A",
            explanation: "Kết hợp sử dụng hormone sinh sản và điều chỉnh các yếu tố môi trường (nhiệt độ, ánh sáng, dinh dưỡng) kích thích trứng chín đồng loạt."
          }
        ]
      },
      {
        id: 42,
        chapterId: 10,
        lessonNumber: 42,
        title: "Bài 42: Cơ thể sinh vật là một thể thống nhất",
        pageSGK: 173,
        pageSBT: 91,
        discipline: "biology",
        summary: [
          "1. Mối quan hệ giữa Tế bào - Cơ thể - Môi trường: Cơ thể lấy chất dinh dưỡng, nước, O₂ từ môi trường cung cấp cho tế bào thực hiện trao đổi chất, lớn lên và phân chia. Hoạt động của tế bào là cơ sở cho hoạt động sống của cơ thể.",
          "2. Mối quan hệ thống nhất giữa các hoạt động sống: Trao đổi chất & chuyển hoá năng lượng cung cấp vật chất và ATP cho sinh trưởng, phát triển, cảm ứng và sinh sản. Ngược lại, các quá trình này đảm bảo cho cơ thể tồn tại và tương tác nhịp nhàng với môi trường.",
          "3. Nếu một cơ quan bị tổn thương hoặc rối loạn (ví dụ suy tim, viêm phổi), toàn bộ quá trình trao đổi chất của tế bào và cơ thể sẽ bị ảnh hưởng nghiêm trọng."
        ],
        coreTakeaways: [
          "Mọi hoạt động sống trong cơ thể đa bào đều có mối liên hệ mật thiết, tác động qua lại chặt chẽ.",
          "Cơ thể sinh vật hoạt động như một chỉnh thể thống nhất toàn vẹn."
        ],
        canApply: [
          "Thực hiện lối sống điều độ: dinh dưỡng cân bằng, uống đủ nước, ngủ đúng giờ, thể dục thể thao để giữ gìn cơ thể khoẻ mạnh toàn diện."
        ],
        exercises: [
          {
            id: "42.1",
            source: "SBT",
            code: "Bài 42.1",
            question: "Nêu vai trò của tế bào trong cơ thể và mô tả mối quan hệ giữa tế bào và cơ thể?",
            type: "essay",
            explanation: "Tế bào là đơn vị cấu trúc và chức năng của cơ thể. Tế bào thực hiện trao đổi chất và chuyển hoá năng lượng, sinh trưởng và phân chia tạo nền tảng cho cơ thể hoạt động. Ngược lại, các hệ cơ quan của cơ thể lấy và vận chuyển dưỡng chất từ môi trường nuôi tế bào."
          }
        ]
      }
    ]
  }
];
