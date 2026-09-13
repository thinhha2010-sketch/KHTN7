import { MatchPairItem, VisualQuizItem, CrosswordClue, ScientistBoss, AdventureMission, BadgeInfo } from '../types';

export const MATCH_PAIRS_DATA: MatchPairItem[] = [
  // Hóa học
  { id: 'm1', chapterId: 1, leftText: 'Proton (p)', rightText: 'Hạt mang điện tích dương (+1) trong hạt nhân', category: 'Nguyên tử', discipline: 'chemistry' },
  { id: 'm2', chapterId: 1, leftText: 'Electron (e)', rightText: 'Hạt mang điện tích âm (-1) chuyển động quanh hạt nhân', category: 'Nguyên tử', discipline: 'chemistry' },
  { id: 'm3', chapterId: 1, leftText: 'Neutron (n)', rightText: 'Hạt không mang điện, nằm trong hạt nhân', category: 'Nguyên tử', discipline: 'chemistry' },
  { id: 'm4', chapterId: 1, leftText: 'Nguyên tố Ôxi (Oxygen)', rightText: 'Kí hiệu O, Khối lượng nguyên tử 16 amu', category: 'Nguyên tố', discipline: 'chemistry' },
  { id: 'm5', chapterId: 2, leftText: 'Quy tắc hoá trị', rightText: 'a × x = b × y (với hợp chất AxBy)', category: 'Hoá trị', discipline: 'chemistry' },
  { id: 'm6', chapterId: 2, leftText: 'Liên kết cộng hoá trị', rightText: 'Liên kết hình thành do các cặp electron dùng chung', category: 'Liên kết', discipline: 'chemistry' },
  { id: 'm7', chapterId: 2, leftText: 'Liên kết ion', rightText: 'Lực hút tĩnh điện giữa các ion mang điện tích trái dấu', category: 'Liên kết', discipline: 'chemistry' },

  // Vật lí
  { id: 'm8', chapterId: 3, leftText: 'Công thức tính tốc độ', rightText: 'v = s / t', category: 'Tốc độ', discipline: 'physics' },
  { id: 'm9', chapterId: 3, leftText: 'Đơn vị đo tốc độ chuẩn', rightText: 'm/s hoặc km/h (1 m/s = 3,6 km/h)', category: 'Đơn vị', discipline: 'physics' },
  { id: 'm10', chapterId: 4, leftText: 'Tần số dao động (f)', rightText: 'Số dao động thực hiện được trong 1 giây (Hz)', category: 'Âm thanh', discipline: 'physics' },
  { id: 'm11', chapterId: 4, leftText: 'Biên độ dao động', rightText: 'Độ lệch lớn nhất của vật khỏi vị trí cân bằng (quyết định độ to)', category: 'Âm thanh', discipline: 'physics' },
  { id: 'm12', chapterId: 5, leftText: 'Định luật phản xạ ánh sáng', rightText: 'Góc phản xạ bằng góc tới (i = i\')', category: 'Ánh sáng', discipline: 'physics' },
  { id: 'm13', chapterId: 5, leftText: 'Ảnh tạo bởi gương phẳng', rightText: 'Ảnh ảo, không hứng được trên màn, bằng độ lớn vật', category: 'Ánh sáng', discipline: 'physics' },
  { id: 'm14', chapterId: 6, leftText: 'Tương tác giữa hai cực từ', rightText: 'Cùng cực đẩy nhau, khác cực hút nhau', category: 'Từ học', discipline: 'physics' },
  { id: 'm15', chapterId: 6, leftText: 'Kim nam châm tự do', rightText: 'Cực Bắc (N - màu đỏ) chỉ về hướng Bắc địa lí', category: 'Từ học', discipline: 'physics' },

  // Sinh học
  { id: 'm16', chapterId: 7, leftText: 'Phương trình quang hợp', rightText: 'CO₂ + Nước + Ánh sáng -> Glucose + Khí O₂', category: 'Quang hợp', discipline: 'biology' },
  { id: 'm17', chapterId: 7, leftText: 'Phương trình hô hấp tế bào', rightText: 'Glucose + Khí O₂ -> CO₂ + Nước + Năng lượng (ATP)', category: 'Hô hấp', discipline: 'biology' },
  { id: 'm18', chapterId: 7, leftText: 'Mạch gỗ (Xylem)', rightText: 'Vận chuyển nước và muối khoáng từ rễ lên lá (dòng đi lên)', category: 'Vận chuyển', discipline: 'biology' },
  { id: 'm19', chapterId: 7, leftText: 'Mạch rây (Phloem)', rightText: 'Vận chuyển chất hữu cơ từ lá đến các cơ quan (dòng đi xuống)', category: 'Vận chuyển', discipline: 'biology' },
  { id: 'm20', chapterId: 8, leftText: 'Cảm ứng ở sinh vật', rightText: 'Khả năng cơ thể phản ứng lại kích thích từ môi trường', category: 'Cảm ứng', discipline: 'biology' },
  { id: 'm21', chapterId: 8, leftText: 'Tập tính học được', rightText: 'Hình thành trong đời sống qua học tập và rút kinh nghiệm', category: 'Tập tính', discipline: 'biology' },
  { id: 'm22', chapterId: 9, leftText: 'Mô phân sinh', rightText: 'Nhóm tế bào chưa phân hóa, có khả năng phân chia liên tục', category: 'Sinh trưởng', discipline: 'biology' },
  { id: 'm23', chapterId: 10, leftText: 'Thụ tinh', rightText: 'Sự kết hợp giữa giao tử đực (tinh trùng) và giao tử cái (trứng)', category: 'Sinh sản', discipline: 'biology' }
];

export const VISUAL_QUIZ_DATA: VisualQuizItem[] = [
  {
    id: 'vq1',
    chapterId: 1,
    title: 'Mô hình nguyên tử Rutherford - Bohr',
    imageSvgType: 'atom_structure',
    question: 'Quan sát sơ đồ nguyên tử bên dưới (có 6 proton ở hạt nhân và 6 electron ở 2 lớp vỏ). Đây là nguyên tử của nguyên tố nào?',
    options: [
      'Carbon (C, Z = 6)',
      'Oxygen (O, Z = 8)',
      'Nitrogen (N, Z = 7)',
      'Boron (B, Z = 5)'
    ],
    correctIndex: 0,
    explanation: 'Nguyên tử có 6 proton ở hạt nhân và 6 electron ở vỏ, điện tích hạt nhân là +6, chính là nguyên tố Carbon (C, Z = 6).',
    discipline: 'chemistry'
  },
  {
    id: 'vq2',
    chapterId: 7,
    title: 'Sơ đồ quá trình quang hợp ở lá cây',
    imageSvgType: 'photosynthesis',
    question: 'Trong sơ đồ quang hợp, chất khí đi vào qua khí khổng (mũi tên xanh) và khí thoát ra (mũi tên đỏ) lần lượt là:',
    options: [
      'Khí Carbon dioxide (CO₂) vào; Khí Oxygen (O₂) ra',
      'Khí Oxygen (O₂) vào; Khí Carbon dioxide (CO₂) ra',
      'Khí Nitrogen (N₂) vào; Hơi nước ra',
      'Khí Hydrogen vào; Khí Methane ra'
    ],
    correctIndex: 0,
    explanation: 'Trong quá trình quang hợp dưới ánh sáng mặt trời, lá cây hấp thụ CO₂ từ không khí và thải ra khí O₂.',
    discipline: 'biology'
  },
  {
    id: 'vq3',
    chapterId: 3,
    title: 'Đồ thị quãng đường - thời gian (s - t)',
    imageSvgType: 'speed_graph',
    question: 'Đoạn đồ thị nằm ngang song song với trục thời gian (t) thể hiện trạng thái chuyển động nào của vật?',
    options: [
      'Vật đang đứng yên (tốc độ v = 0)',
      'Vật chuyển động nhanh dần đều',
      'Vật chuyển động lùi lại điểm xuất phát',
      'Vật chuyển động với tốc độ không đổi cực lớn'
    ],
    correctIndex: 0,
    explanation: 'Đoạn đồ thị s-t nằm ngang biểu thị quãng đường không thay đổi theo thời gian, nghĩa là vật đang đứng yên (v = 0).',
    discipline: 'physics'
  },
  {
    id: 'vq4',
    chapterId: 5,
    title: 'Định luật phản xạ ánh sáng trên gương phẳng',
    imageSvgType: 'reflection_ray',
    question: 'Tia sáng SI chiếu tới gương phẳng với góc tới i = 35°. Góc tạo bởi tia phản xạ IR và mặt gương bằng bao nhiêu?',
    options: [
      '55° (vì góc tới i = i\' = 35°, góc với mặt gương là 90° - 35° = 55°)',
      '35°',
      '70°',
      '90°'
    ],
    correctIndex: 0,
    explanation: 'Theo định luật phản xạ ánh sáng: góc phản xạ i\' = i = 35°. Pháp tuyến vuông góc gương (90°), do đó góc giữa tia phản xạ và mặt gương là 90° - 35° = 55°.',
    discipline: 'physics'
  },
  {
    id: 'vq5',
    chapterId: 6,
    title: 'Từ phổ và đường sức từ của thanh nam châm',
    imageSvgType: 'magnetic_lines',
    question: 'Chiều quy ước của đường sức từ bên ngoài thanh nam châm thẳng là gì?',
    options: [
      'Đi ra từ cực Bắc (N) và đi vào cực Nam (S) - "Vào Nam Ra Bắc"',
      'Đi ra từ cực Nam (S) và đi vào cực Bắc (N)',
      'Đi thẳng từ tâm nam châm tỏa đều ra mọi hướng',
      'Luôn chạy theo chiều kim đồng hồ'
    ],
    correctIndex: 0,
    explanation: 'Quy ước chiều đường sức từ: Bên ngoài nam châm, đường sức từ đi ra từ cực Bắc (N) và đi vào cực Nam (S) (Khẩu quyết: "Vào Nam Ra Bắc").',
    discipline: 'physics'
  },
  {
    id: 'vq6',
    chapterId: 4,
    title: 'Đồ thị dao động âm trên màn hình dao động kí',
    imageSvgType: 'sound_waveform',
    question: 'Khi quan sát hai sóng âm A và B trên cùng thang đo thời gian, sóng A có số ngọn sóng nhiều gấp đôi sóng B. Kết luận nào đúng?',
    options: [
      'Âm do nguồn A phát ra có tần số cao hơn và nghe bổng (cao) hơn',
      'Âm do nguồn A phát ra to hơn',
      'Âm do nguồn A phát ra trầm hơn',
      'Hai âm có cùng độ cao và độ to'
    ],
    correctIndex: 0,
    explanation: 'Sóng có nhiều ngọn sóng hơn trong cùng khoảng thời gian nghĩa là thực hiện nhiều dao động hơn -> tần số lớn hơn -> âm phát ra bổng (cao) hơn.',
    discipline: 'physics'
  },
  {
    id: 'vq7',
    chapterId: 7,
    title: 'Cơ chế đóng mở khí khổng ở biểu bì lá',
    imageSvgType: 'stomata_cell',
    question: 'Khi tế bào hạt đậu (tế bào bảo vệ) no nước, thành mỏng dãn nhiều làm thành dày cong theo, dẫn đến hiện tượng gì?',
    options: [
      'Lỗ khí mở ra giúp thoát hơi nước và trao đổi khí',
      'Lỗ khí đóng chặt lại để chống mất nước',
      'Tế bào vỡ ra giải phóng lục lạp',
      'Khí khổng chuyển hóa thành tế bào lông hút'
    ],
    correctIndex: 0,
    explanation: 'Khi tế bào hạt đậu no nước, vách mỏng căng phồng làm vách dày cong theo hình hạt đậu -> lỗ khí khổng mở rộng -> tăng thoát hơi nước.',
    discipline: 'biology'
  }
];

export const CROSSWORD_DATA: CrosswordClue[] = [
  { number: 1, answer: 'PROTON', clue: 'Hạt mang điện tích dương trong hạt nhân nguyên tử (6 chữ cái)', chapterId: 1, direction: 'across', discipline: 'chemistry' },
  { number: 2, answer: 'TOCDO', clue: 'Đại lượng đo bằng quãng đường đi được trong một đơn vị thời gian (5 chữ cái)', chapterId: 3, direction: 'across', discipline: 'physics' },
  { number: 3, answer: 'QUANGHOP', clue: 'Quá trình lá cây chế tạo chất hữu cơ và giải phóng O2 dưới ánh sáng (8 chữ cái)', chapterId: 7, direction: 'across', discipline: 'biology' },
  { number: 4, answer: 'GUONGPHANG', clue: 'Dụng cụ quang học tạo ra ảnh ảo có kích thước bằng vật (10 chữ cái)', chapterId: 5, direction: 'across', discipline: 'physics' },
  { number: 5, answer: 'NAMCHAM', clue: 'Vật thể có từ tính, hút được sắt, niken, coban (7 chữ cái)', chapterId: 6, direction: 'across', discipline: 'physics' },
  { number: 6, answer: 'KHIKHONG', clue: 'Cơ quan trên biểu bì lá điều hòa thoát hơi nước và trao đổi khí (8 chữ cái)', chapterId: 7, direction: 'across', discipline: 'biology' },
  { number: 7, answer: 'HOATRI', clue: 'Con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử khác (6 chữ cái)', chapterId: 2, direction: 'across', discipline: 'chemistry' },
  { number: 8, answer: 'TANSO', clue: 'Số dao động thực hiện được trong 1 giây, đơn vị là Hertz (5 chữ cái)', chapterId: 4, direction: 'across', discipline: 'physics' },
  { number: 9, answer: 'CAMUNG', clue: 'Khả năng sinh vật phản ứng lại các kích thích từ môi trường (6 chữ cái)', chapterId: 8, direction: 'across', discipline: 'biology' }
];

export const SCIENTIST_BOSSES: ScientistBoss[] = [
  {
    id: 'mendeleev',
    name: 'Dmitri Mendeleev',
    title: 'Cha đẻ Bảng tuần hoàn các nguyên tố hóa học',
    avatar: '👨‍🔬',
    era: '1834 – 1907 (Nga)',
    quote: 'Tôi thấy trong một giấc mơ một bảng mà mọi nguyên tố rơi vào đúng vị trí của nó.',
    field: 'Hóa học & Nguyên tử',
    dialogueIntro: 'Chào nhà khoa học trẻ! Ta đã sắp xếp các nguyên tố theo quy luật kỳ diệu. Liệu ngươi có hiểu rõ cấu tạo nguyên tử và bảng tuần hoàn để vượt qua thử thách của ta?',
    dialogueWin: 'Xuất sắc! Ngươi nắm rất vững kiến trúc vi mô của vật chất. Bảng tuần hoàn tự hào có thêm một nhà khoa học tài năng!',
    dialogueLose: 'Đừng nản lòng. Hãy nhớ lại số proton quyết định số thứ tự ô nguyên tố, và chu kì thể hiện số lớp electron nhé!',
    questions: [
      {
        id: 'sb_mend_1',
        chapterId: 1,
        lessonId: 3,
        discipline: 'chemistry',
        question: 'Nguyên tố Sodium (Na) có số hiệu nguyên tử Z = 11, nằm ở chu kì 3, nhóm IA. Nguyên tử Na có bao nhiêu lớp electron và mấy electron lớp ngoài cùng?',
        options: [
          '3 lớp electron, 1 electron lớp ngoài cùng',
          '1 lớp electron, 3 electron lớp ngoài cùng',
          '3 lớp electron, 11 electron lớp ngoài cùng',
          '11 lớp electron, 1 electron lớp ngoài cùng'
        ],
        correctIndex: 0,
        explanation: 'Số thứ tự chu kì = Số lớp electron (Chu kì 3 -> 3 lớp). Số thứ tự nhóm A = Số electron lớp ngoài cùng (Nhóm IA -> 1 electron).',
        difficulty: 'medium'
      },
      {
        id: 'sb_mend_2',
        chapterId: 2,
        lessonId: 6,
        discipline: 'chemistry',
        question: 'Phân tử khí Oxygen gồm 2 nguyên tử O liên kết với nhau bằng cách nào?',
        options: [
          'Mỗi nguyên tử O góp chung 2 electron để tạo 2 cặp electron dùng chung',
          'Một nguyên tử O nhường 2 electron cho nguyên tử O kia',
          'Mỗi nguyên tử O góp 1 electron dùng chung',
          'Hút tĩnh điện giữa ion O²⁺ và O²⁻'
        ],
        correctIndex: 0,
        explanation: 'Nguyên tử Oxi (nhóm VIA) có 6 electron lớp ngoài cùng, cần thêm 2 electron để đạt cấu hình bền vững 8e. Mỗi nguyên tử O góp 2 electron hình thành liên kết đôi O=O.',
        difficulty: 'hard'
      },
      {
        id: 'sb_mend_3',
        chapterId: 2,
        lessonId: 7,
        discipline: 'chemistry',
        question: 'Xác định hoá trị của nguyên tố Fe trong hợp chất Fe₂O₃ (biết O có hoá trị II):',
        options: [
          'Hoá trị III (vì a × 2 = II × 3 => a = VI / 2 = III)',
          'Hoá trị II',
          'Hoá trị I',
          'Hoá trị IV'
        ],
        correctIndex: 0,
        explanation: 'Theo quy tắc hoá trị: a × 2 = II × 3 -> 2a = 6 -> a = 3 (Hoá trị III).',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'newton',
    name: 'Sir Isaac Newton',
    title: 'Bậc thầy Cơ học và Quang học cổ điển',
    avatar: '🍎',
    era: '1643 – 1727 (Anh)',
    quote: 'Nếu tôi nhìn được xa hơn, đó là vì tôi đứng trên vai những người khổng lồ.',
    field: 'Vật lí (Tốc độ, Chuyển động & Ánh sáng)',
    dialogueIntro: 'Hỡi nhà thám hiểm! Tốc độ chuyển động và đường đi của tia sáng là những quy luật vĩnh cửu của vũ trụ. Hãy giải các bài toán của ta!',
    dialogueWin: 'Tuyệt vời! Kiến thức chuyển động và quang học của ngươi vô cùng chuẩn xác. Hãy tiếp tục khám phá!',
    dialogueLose: 'Chú ý nhé: luôn đổi đúng đơn vị đo (km/h sang m/s chia 3.6) và định luật phản xạ ánh sáng i = i\'!',
    questions: [
      {
        id: 'sb_newt_1',
        chapterId: 3,
        lessonId: 8,
        discipline: 'physics',
        question: 'Một xe ô tô chạy trên cao tốc với tốc độ 90 km/h. Đổi sang đơn vị mét trên giây (m/s) là:',
        options: [
          '25 m/s (90 / 3,6 = 25)',
          '32,4 m/s',
          '15 m/s',
          '50 m/s'
        ],
        correctIndex: 0,
        explanation: 'Đổi từ km/h sang m/s: lấy giá trị chia cho 3,6. 90 km/h = 90 / 3,6 = 25 m/s.',
        difficulty: 'medium'
      },
      {
        id: 'sb_newt_2',
        chapterId: 5,
        lessonId: 16,
        discipline: 'physics',
        question: 'Một người đứng cách gương phẳng thẳng đứng 1,5 m. Khoảng cách giữa người đó và ảnh của mình tạo bởi gương là bao nhiêu?',
        options: [
          '3,0 m (vì ảnh cách gương 1,5 m -> người cách ảnh 1,5 + 1,5 = 3,0 m)',
          '1,5 m',
          '0,75 m',
          '4,5 m'
        ],
        correctIndex: 0,
        explanation: 'Ảnh ảo qua gương phẳng đối xứng với vật qua mặt gương: khoảng cách từ ảnh đến gương = khoảng cách từ vật đến gương = 1,5 m. Khoảng cách từ người đến ảnh = 1,5 + 1,5 = 3,0 m.',
        difficulty: 'medium'
      },
      {
        id: 'sb_newt_3',
        chapterId: 4,
        lessonId: 13,
        discipline: 'physics',
        question: 'Âm thanh truyền nhanh nhất trong môi trường nào và hoàn toàn KHÔNG truyền được trong môi trường nào?',
        options: [
          'Nhanh nhất trong Chất rắn; Không truyền được trong Chân không',
          'Nhanh nhất trong Không khí; Không truyền được trong Nước',
          'Nhanh nhất trong Chất lỏng; Không truyền được trong Kim loại',
          'Nhanh như nhau trong mọi môi trường'
        ],
        correctIndex: 0,
        explanation: 'Tốc độ truyền âm: V_rắn > V_lỏng > V_khí. Âm thanh cần môi trường vật chất đàn hồi để lan truyền nên không truyền được trong chân không.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'oersted',
    name: 'Hans Christian Ørsted',
    title: 'Nhà phát minh mối liên hệ Điện - Từ',
    avatar: '🧲',
    era: '1777 – 1851 (Đan Mạch)',
    quote: 'Dòng điện chạy qua dây dẫn làm kim nam châm bị lệch đi!',
    field: 'Từ học & Nam châm điện',
    dialogueIntro: 'Ta là Oersted! Ngươi có biết bí mật về lực hút của từ trường Trái Đất và cách chế tạo nam châm điện siêu mạnh không?',
    dialogueWin: 'Rất thông thái! Ngươi đã làm chủ từ trường và ứng dụng nam châm trong đời sống kỹ thuật!',
    dialogueLose: 'Hãy nhớ: Cùng cực thì đẩy, khác cực thì hút, và tăng dòng điện hoặc số vòng dây sẽ tăng từ tính của nam châm điện!',
    questions: [
      {
        id: 'sb_oers_1',
        chapterId: 6,
        lessonId: 19,
        discipline: 'physics',
        question: 'Khi đưa cực Bắc (N) của một thanh nam châm lại gần cực Bắc (N) của một kim nam châm tự do, hiện tượng xảy ra là gì?',
        options: [
          'Chúng đẩy nhau ra xa',
          'Chúng hút chặt lấy nhau',
          'Không có hiện tượng gì xảy ra',
          'Kim nam châm bị mất hoàn toàn từ tính'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc tương tác giữa hai cực từ: Cùng tên (cùng cực) đẩy nhau, khác tên (khác cực) hút nhau.',
        difficulty: 'easy'
      },
      {
        id: 'sb_oers_2',
        chapterId: 6,
        lessonId: 20,
        discipline: 'physics',
        question: 'Để tăng lực từ của một nam châm điện, ta có thể áp dụng biện pháp nào sau đây?',
        options: [
          'Tăng cường độ dòng điện chạy qua cuộn dây và tăng số vòng dây quấn',
          'Giảm số vòng dây quấn quanh lõi sắt',
          'Rút lõi sắt non ra khỏi cuộn dây',
          'Đảo ngược chiều nam châm vĩnh cửu bên ngoài'
        ],
        correctIndex: 0,
        explanation: 'Lực từ của nam châm điện tỉ lệ thuận với cường độ dòng điện và số vòng dây cuộn, đồng thời tăng vọt khi có lõi sắt non.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'darwin',
    name: 'Charles Darwin',
    title: 'Nhà tự nhiên học vĩ đại & Thuyết tiến hóa',
    avatar: '🌿',
    era: '1809 – 1882 (Anh)',
    quote: 'Trong sự sinh tồn của muôn loài, kẻ thích nghi tốt nhất là kẻ chiến thắng.',
    field: 'Sinh học (Trao đổi chất, Cảm ứng, Sinh sản)',
    dialogueIntro: 'Xin chào! Thế giới sinh vật sống với sự quang hợp, hô hấp, tính hướng sáng và sinh sản vô tính/hữu tính vô cùng kì thú. Ngươi có sẵn sàng chứng minh hiểu biết sinh học 7?',
    dialogueWin: 'Thật tuyệt vời! Ngươi xứng đáng là một Nhà Sinh học tương lai với sự am hiểu sâu sắc về thế giới sống!',
    dialogueLose: 'Ôn lại nhé: Quang hợp diễn ra ở lục lạp tạo Glucose + O2, còn Hô hấp diễn ra ở ty thể giải phóng ATP và CO2!',
    questions: [
      {
        id: 'sb_darw_1',
        chapterId: 7,
        lessonId: 21,
        discipline: 'biology',
        question: 'Bào quan nào trong tế bào thực vật trực tiếp thực hiện quá trình quang hợp?',
        options: [
          'Lục lạp (chứa chất diệp lục hấp thụ ánh sáng)',
          'Nhân tế bào',
          'Không bào trung tâm',
          'Thành tế bào cellulose'
        ],
        correctIndex: 0,
        explanation: 'Lục lạp chứa chất diệp lục có khả năng hấp thụ và chuyển hóa quang năng thành hóa năng trong các liên kết hóa học của Glucose.',
        difficulty: 'easy'
      },
      {
        id: 'sb_darw_2',
        chapterId: 8,
        lessonId: 31,
        discipline: 'biology',
        question: 'Hiện tượng ngọn cây trồng cạnh cửa sổ luôn có xu hướng mọc cong vươn ra phía ngoài ánh sáng là biểu hiện của loại cảm ứng nào?',
        options: [
          'Tính hướng sáng dương (hướng quang)',
          'Tính hướng trọng lực âm',
          'Tính hướng hóa chất',
          'Tính hướng tiếp xúc'
        ],
        correctIndex: 0,
        explanation: 'Tính hướng sáng (hướng quang) giúp thân và lá cây đón nhận được tối đa nguồn năng lượng ánh sáng mặt trời để quang hợp.',
        difficulty: 'medium'
      },
      {
        id: 'sb_darw_3',
        chapterId: 10,
        lessonId: 39,
        discipline: 'biology',
        question: 'Sinh sản vô tính ở sinh vật có đặc điểm cốt lõi nào?',
        options: [
          'Tạo ra cá thể mới chỉ từ một phần cơ thể mẹ, không có sự kết hợp giao tử đực và cái',
          'Luôn luôn cần sự thụ tinh giữa tinh trùng và trứng',
          'Tạo ra thế hệ con có kiểu gen hoàn toàn khác biệt cơ thể gốc',
          'Chỉ xảy ra ở động vật bậc cao'
        ],
        correctIndex: 0,
        explanation: 'Sinh sản vô tính là hình thức sinh sản không có sự kết hợp giữa giao tử đực và giao tử cái; con sinh ra mang đặc điểm di truyền giống hệt mẹ.',
        difficulty: 'medium'
      }
    ]
  }
];

export const ADVENTURE_MISSIONS: AdventureMission[] = [
  {
    id: 'adv_1',
    title: 'Mật Mã Hạt Nhân & Bảng Tuần Hoàn Bí Ẩn',
    chapterId: 1,
    location: 'Viện Nghiên Cứu Lượng Tử',
    story: 'Một thiết bị phân tích vật chất trong phòng thí nghiệm vừa quét được mẫu khoáng sản lạ. Bạn cần giải mã cấu trúc nguyên tử để kích hoạt lò phản ứng an toàn!',
    objective: 'Xác định số hạt cơ bản, chu kì và nhóm của nguyên tố bí ẩn.',
    discipline: 'chemistry',
    rewardExp: 150,
    steps: [
      {
        prompt: 'Cảm biến ghi nhận hạt nhân nguyên tử có 12 proton và 12 neutron. Tổng số hạt mang điện trong nguyên tử này là bao nhiêu?',
        question: 'Tổng số hạt mang điện (proton + electron) của nguyên tử:',
        options: [
          '24 hạt (12 proton + 12 electron)',
          '12 hạt',
          '36 hạt',
          '0 hạt vì nguyên tử trung hòa'
        ],
        correctIndex: 0,
        explanation: 'Nguyên tử trung hòa về điện nên số electron = số proton = 12. Tổng số hạt mang điện = 12 (p) + 12 (e) = 24 hạt (chính là nguyên tố Magnesium - Mg).'
      },
      {
        prompt: 'Thiết bị yêu cầu nhập vị trí của nguyên tố này trong Bảng tuần hoàn.',
        question: 'Magnesium (Z = 12) thuộc chu kì mấy và nhóm mấy?',
        options: [
          'Chu kì 3, nhóm IIA (cấu hình e: 2, 8, 2 -> 3 lớp, 2e ngoài cùng)',
          'Chu kì 2, nhóm IIIA',
          'Chu kì 3, nhóm VIIIA',
          'Chu kì 4, nhóm IA'
        ],
        correctIndex: 0,
        explanation: 'Nguyên tử Mg có 12 electron phân bố 3 lớp: lớp 1 (2e), lớp 2 (8e), lớp 3 (2e) -> Chu kì 3, nhóm IIA.'
      }
    ]
  },
  {
    id: 'adv_2',
    title: 'Điều Tra Hiện Trường An Toàn Giao Thông',
    chapterId: 3,
    location: 'Đoạn Đường Đèo Cao Tốc',
    story: 'Camera hành trình ghi nhận một chiếc xe tải di chuyển trên đoạn đường dài 180 km hết thời gian 2 giờ 30 phút (2,5 giờ). Cảnh sát giao thông cần bạn xác định tốc độ xe có vượt quá quy định 60 km/h không!',
    objective: 'Tính toán tốc độ trung bình và xác định quy tắc khoảng cách an toàn.',
    discipline: 'physics',
    rewardExp: 180,
    steps: [
      {
        prompt: 'Áp dụng công thức v = s / t để tính tốc độ của xe tải:',
        question: 'Tốc độ trung bình của xe tải là bao nhiêu?',
        options: [
          '72 km/h (180 km / 2,5 h = 72 km/h - Vượt quá tốc độ tối đa cho phép 60 km/h)',
          '60 km/h',
          '50 km/h',
          '80 km/h'
        ],
        correctIndex: 0,
        explanation: 'v = s / t = 180 / 2,5 = 72 km/h. Tốc độ này vượt mức giới hạn 60 km/h trên đoạn đường đèo.'
      },
      {
        prompt: 'Khi chạy với tốc độ trên 60 km/h đến 80 km/h trên đường khô ráo, khoảng cách an toàn tối thiểu theo luật giao thông là:',
        question: 'Khoảng cách an toàn tối thiểu quy định:',
        options: [
          '55 mét',
          '35 mét',
          '100 mét',
          '5 mét'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc an toàn giao thông đường bộ: Tốc độ từ 60 - 80 km/h cần giữ khoảng cách tối thiểu 55m với xe phía trước.'
      }
    ]
  },
  {
    id: 'adv_3',
    title: 'Giải Cứu Nhà Kính Sinh Thái',
    chapterId: 7,
    location: 'Trang Trại Công Nghệ Cao Smart Farm',
    story: 'Hệ thống cảm biến nhà kính báo động: cây dâu tây sinh trưởng chậm, lá vàng nhạt do thiếu ánh sáng và nồng độ khí CO2 sụt giảm. Hãy điều chỉnh thông số vi khí hậu!',
    objective: 'Cân bằng điều kiện quang hợp tối ưu và chế độ tưới tiêu.',
    discipline: 'biology',
    rewardExp: 200,
    steps: [
      {
        prompt: 'Để tăng cường cường độ quang hợp tối đa cho cây trồng trong nhà kính vào ban ngày, bạn cần bật bổ sung:',
        question: 'Hệ thống đèn LED nông nghiệp nên phát bức xạ quang phổ nào tối ưu nhất cho chất diệp lục?',
        options: [
          'Ánh sáng xanh dương và đỏ (vùng diệp lục hấp thụ mạnh nhất)',
          'Ánh sáng xanh lá cây',
          'Tia hồng ngoại nhiệt độ cao',
          'Tia X'
        ],
        correctIndex: 0,
        explanation: 'Chất diệp lục hấp thụ mạnh nhất ở dải ánh sáng xanh dương (430-450nm) và đỏ (640-660nm), phản xạ lại màu lục nên lá cây có màu xanh lục.'
      },
      {
        prompt: 'Vào ban đêm không có ánh sáng, các kỹ sư sinh học có nên đóng kín cửa và sục thêm CO2 không?',
        question: 'Tại sao ban đêm không nên sục CO2 và đóng kín nhà kính?',
        options: [
          'Vì ban đêm cây không quang hợp mà chỉ hô hấp tế bào lấy O2 thải CO2, thiếu O2 sẽ làm cây nghẹt thở',
          'Vì ban đêm cây quang hợp mạnh gấp đôi',
          'Vì CO2 ban đêm sẽ bốc cháy',
          'Vì vi khuẩn sẽ chết hết'
        ],
        correctIndex: 0,
        explanation: 'Ban đêm không có ánh sáng, quang hợp dừng lại, thực vật chỉ thực hiện hô hấp tế bào (tiêu thụ O2 và thải CO2). Đóng kín và tăng CO2 sẽ gây ngạt khí cho cây.'
      }
    ]
  },
  {
    id: 'adv_4',
    title: 'Hải Đăng & Tiêu Cự Ánh Sáng Trên Biển',
    chapterId: 5,
    location: 'Ngọn Hải Đăng Đảo Song Tử',
    story: 'Đêm bão giông, hệ thống thấu kính và gương phản xạ của ngọn hải đăng bị lệch trục do va chấn. Bạn cần chỉnh lại góc tia phản xạ để chiếu luồng sáng dẫn đường cho tàu thuyền!',
    objective: 'Căn chỉnh góc tới i và góc phản xạ i\' theo định luật quang học.',
    discipline: 'physics',
    rewardExp: 170,
    steps: [
      {
        prompt: 'Nguồn sáng chiếu tia tới hợp với mặt gương phẳng một góc 40°. Cần tính góc tới i và góc phản xạ i\':',
        question: 'Góc tới i và góc phản xạ i\' có giá trị lần lượt là:',
        options: [
          'i = 50° và i\' = 50° (vì pháp tuyến vuông góc 90°, góc tới i = 90° - 40° = 50°)',
          'i = 40° và i\' = 40°',
          'i = 40° và i\' = 50°',
          'i = 50° và i\' = 40°'
        ],
        correctIndex: 0,
        explanation: 'Góc tới i là góc hợp bởi tia tới SI và pháp tuyến IN (vuông góc mặt gương). i = 90° - 40° = 50°. Theo định luật phản xạ ánh sáng: i\' = i = 50°.'
      }
    ]
  }
];

export const BADGES_DATA: BadgeInfo[] = [
  { id: 'b_first_win', name: 'Khởi Đầu Hoàn Hảo', description: 'Hoàn thành ván đấu đầu tiên đạt 100% điểm số', icon: '🌟', category: 'accuracy' },
  { id: 'b_combo_5', name: 'Chuỗi Lôi Đình', description: 'Đạt chuỗi trả lời đúng liên tiếp 5 câu hỏi (Streak x5)', icon: '⚡', category: 'streak' },
  { id: 'b_atom_master', name: 'Bậc Thầy Nguyên Tử', description: 'Đạt 3 sao tại trạm Nguyên tử & Bảng tuần hoàn', icon: '⚛️', category: 'mastery' },
  { id: 'b_speed_king', name: 'Vua Tốc Độ KHTN', description: 'Hoàn thành Đấu Trường Nhanh với trên 1000 điểm', icon: '🏎️', category: 'streak' },
  { id: 'b_optics_sage', name: 'Nhà Quang Học Nhí', description: 'Giải chính xác bài toán gương phẳng & định luật phản xạ', icon: '🔦', category: 'mastery' },
  { id: 'b_magnet_wizard', name: 'Phù Thủy Từ Trường', description: 'Lắp ráp thành công nam châm điện đạt lực từ tối đa', icon: '🧲', category: 'lab' },
  { id: 'b_bio_explorer', name: 'Nhà Sinh Học Tương Lai', description: 'Vượt qua tất cả thử thách về Quang hợp, Hô hấp và Cảm ứng', icon: '🌱', category: 'mastery' },
  { id: 'b_boss_slayer', name: 'Khuất Phục Nhà Khoa Học', description: 'Đánh bại cả 4 Đại Giáo Sư trong Boss Challenge', icon: '👑', category: 'accuracy' },
  { id: 'b_lab_virtuoso', name: 'Bàn Tay Thực Nghiệm Vàng', description: 'Hoàn tất cả 7 phòng thí nghiệm ảo tương tác', icon: '🧪', category: 'lab' },
  { id: 'b_crossword_guru', name: 'Bậc Thầy Ô Chữ', description: 'Giải mã hoàn chỉnh ô chữ từ khóa KHTN 7', icon: '🔠', category: 'mastery' }
];

export const ACHIEVEMENTS_LIST = BADGES_DATA.map(b => ({
  id: b.id,
  title: b.name,
  description: b.description,
  icon: b.icon,
  category: b.category
}));

export const RANKS = [
  { minExp: 0, title: 'Tập Sự Khoa Học', icon: '🌱', color: 'text-slate-600' },
  { minExp: 300, title: 'Học Giả Trẻ KHTN', icon: '📘', color: 'text-blue-600' },
  { minExp: 800, title: 'Nghiên Cứu Sinh', icon: '🔬', color: 'text-teal-600' },
  { minExp: 1600, title: 'Nhà Khoa Học Tiên Phong', icon: '🚀', color: 'text-indigo-600' },
  { minExp: 3000, title: 'Bậc Thầy Phát Minh', icon: '💡', color: 'text-amber-600' },
  { minExp: 5000, title: 'Viện Sĩ KHTN Xuất Sắc', icon: '👑', color: 'text-emerald-600' }
];
