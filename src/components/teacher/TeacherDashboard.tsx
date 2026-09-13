import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizDatabase';
import { CHAPTERS_DATA } from '../../data/chaptersData';
import { QuizQuestion, Discipline } from '../../types';
import { sound } from '../../utils/audio';
import {
  GraduationCap,
  BookOpen,
  Filter,
  Search,
  Printer,
  FileText,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Sliders,
  Maximize,
  Download,
  Eye,
  EyeOff
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bank' | 'builder' | 'stats'>('bank');

  // Filter state for question bank
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>('all');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Test Generator configuration
  const [testConfig, setTestConfig] = useState({
    title: 'BÀI KIỂM TRA ĐÁNH GIÁ ĐỊNH KỲ KHTN 7',
    durationMinutes: 15,
    totalQuestions: 10,
    discipline: 'all' as Discipline,
    easyCount: 4,
    mediumCount: 4,
    hardCount: 2
  });

  const [generatedTest, setGeneratedTest] = useState<QuizQuestion[] | null>(null);
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);

  // Filter questions for the question bank
  const filteredQuestions = QUIZ_QUESTIONS.filter(q => {
    const matchDiscipline = selectedDiscipline === 'all' || q.discipline === selectedDiscipline;
    const matchChapter = selectedChapter === 'all' || q.chapterId === selectedChapter;
    const matchDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    const matchSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchQuery.toLowerCase());

    return matchDiscipline && matchChapter && matchDifficulty && matchSearch;
  });

  // Handle generating a standardized test
  const handleGenerateTest = () => {
    sound.playClick();
    let pool = [...QUIZ_QUESTIONS];
    if (testConfig.discipline !== 'all') {
      pool = pool.filter(q => q.discipline === testConfig.discipline);
    }

    const easyPool = pool.filter(q => q.difficulty === 'easy').sort(() => 0.5 - Math.random());
    const medPool = pool.filter(q => q.difficulty === 'medium').sort(() => 0.5 - Math.random());
    const hardPool = pool.filter(q => q.difficulty === 'hard').sort(() => 0.5 - Math.random());

    const result: QuizQuestion[] = [
      ...easyPool.slice(0, testConfig.easyCount),
      ...medPool.slice(0, testConfig.mediumCount),
      ...hardPool.slice(0, testConfig.hardCount)
    ];

    setGeneratedTest(result);
    sound.playLevelUp();
  };

  const handlePrintTest = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              Không Gian Nghiệp Vụ Sư Phạm KHTN 7
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Trung Tâm Điều Khiển Giáo Viên
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Ngân hàng chuẩn hơn 100+ câu hỏi GDPT 2018, công cụ tạo đề kiểm tra 5p/15p/45p tự động, ma trận đề chuẩn và xuất bản in bài thi A4.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-700 p-1.5 rounded-2xl">
            <button
              id="tab-teacher-bank"
              onClick={() => {
                sound.playClick();
                setActiveTab('bank');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'bank'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Ngân Hàng Câu Hỏi</span>
            </button>

            <button
              id="tab-teacher-builder"
              onClick={() => {
                sound.playClick();
                setActiveTab('builder');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'builder'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Tạo Đề Thi</span>
            </button>

            <button
              id="tab-teacher-stats"
              onClick={() => {
                sound.playClick();
                setActiveTab('stats');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'stats'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Ma Trận & Thống Kê</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: QUESTION BANK */}
      {activeTab === 'bank' && (
        <div className="space-y-6 animate-fade-in">
          {/* Filters Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Discipline filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                  Phân môn
                </label>
                <select
                  id="select-filter-discipline"
                  value={selectedDiscipline}
                  onChange={e => setSelectedDiscipline(e.target.value as Discipline)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="all">Tất cả phân môn</option>
                  <option value="method">🔬 Phương pháp & Kĩ năng</option>
                  <option value="chemistry">🧪 Hóa học (Nguyên tử, Phân tử)</option>
                  <option value="physics">⚡ Vật lí (Tốc độ, Âm, Sáng, Từ)</option>
                  <option value="biology">🌱 Sinh học (Quang hợp, Cảm ứng, Sinh sản)</option>
                </select>
              </div>

              {/* Chapter filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                  Chương / Chủ đề
                </label>
                <select
                  id="select-filter-chapter"
                  value={selectedChapter}
                  onChange={e => setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="all">Tất cả các chương (0-10)</option>
                  {CHAPTERS_DATA.map(c => (
                    <option key={c.id} value={c.id}>
                      Trạm {c.id}: {c.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                  Mức độ nhận thức
                </label>
                <select
                  id="select-filter-difficulty"
                  value={selectedDifficulty}
                  onChange={e => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="all">Tất cả mức độ</option>
                  <option value="easy">Nhận biết (Dễ)</option>
                  <option value="medium">Thông hiểu (Trung bình)</option>
                  <option value="hard">Vận dụng (Khó)</option>
                </select>
              </div>

              {/* Search query */}
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                  Tìm kiếm nội dung
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    id="teacher-search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Từ khóa câu hỏi..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span>Tìm thấy <strong>{filteredQuestions.length}</strong> câu hỏi phù hợp tiêu chí</span>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => (
              <div
                key={q.id || idx}
                id={`teacher-question-card-${idx}`}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-teal-400 uppercase font-['Space_Grotesk']">
                      CÂU #{idx + 1}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold border border-slate-700">
                      {q.discipline === 'chemistry' ? '🧪 Hóa học' : q.discipline === 'physics' ? '⚡ Vật lí' : q.discipline === 'biology' ? '🌱 Sinh học' : '🔬 Kĩ năng'}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      q.difficulty === 'easy'
                        ? 'bg-emerald-950 text-emerald-400'
                        : q.difficulty === 'medium'
                        ? 'bg-amber-950 text-amber-400'
                        : 'bg-rose-950 text-rose-400'
                    }`}>
                      {q.difficulty === 'easy' ? 'Nhận biết' : q.difficulty === 'medium' ? 'Thông hiểu' : 'Vận dụng'}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-500 font-mono">Trạm {q.chapterId}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  {q.question}
                </h3>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isCorrect = optIdx === q.correctIndex;
                    return (
                      <div
                        key={optIdx}
                        className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                          isCorrect
                            ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-300 font-bold'
                            : 'bg-slate-800/60 border-slate-700/60 text-slate-300'
                        }`}
                      >
                        <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />}
                      </div>
                    );
                  })}
                </div>

                {/* Pedagogical Explanation */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-teal-400 text-[11px]">Hướng dẫn giải & Nhận xét sư phạm:</div>
                  <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: TEST BUILDER & EXPORT */}
      {activeTab === 'builder' && (
        <div className="space-y-6 animate-fade-in">
          {/* Builder Controls */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-teal-400" />
              <span>Thiết Lập Ma Trận & Thời Lượng Đề Kiểm Tra</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">Tiêu đề bài kiểm tra</label>
                <input
                  type="text"
                  value={testConfig.title}
                  onChange={e => setTestConfig({ ...testConfig, title: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">Thời gian làm bài</label>
                <select
                  value={testConfig.durationMinutes}
                  onChange={e => setTestConfig({ ...testConfig, durationMinutes: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                >
                  <option value={5}>5 Phút (Khởi động / Đánh giá nhanh)</option>
                  <option value={15}>15 Phút (Kiểm tra thường xuyên)</option>
                  <option value={45}>45 Phút (Kiểm tra định kì 1 tiết)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1.5">Phạm vi phân môn</label>
                <select
                  value={testConfig.discipline}
                  onChange={e => setTestConfig({ ...testConfig, discipline: e.target.value as Discipline })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="all">Toàn bộ KHTN 7 (Tổng hợp)</option>
                  <option value="chemistry">Chỉ Hóa học (Chương I - II)</option>
                  <option value="physics">Chỉ Vật lí (Chương III - VI)</option>
                  <option value="biology">Chỉ Sinh học (Chương VII - X)</option>
                </select>
              </div>
            </div>

            {/* Matrix Ratio */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-800">
              <div>
                <label className="text-xs font-bold text-emerald-400 block mb-1">Nhận biết (Dễ)</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={testConfig.easyCount}
                  onChange={e => setTestConfig({ ...testConfig, easyCount: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-amber-400 block mb-1">Thông hiểu (Vừa)</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={testConfig.mediumCount}
                  onChange={e => setTestConfig({ ...testConfig, mediumCount: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-rose-400 block mb-1">Vận dụng (Khó)</label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  value={testConfig.hardCount}
                  onChange={e => setTestConfig({ ...testConfig, hardCount: Number(e.target.value) })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-bold"
                />
              </div>
            </div>

            <button
              id="btn-generate-test"
              onClick={handleGenerateTest}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Tạo Bộ Đề Tự Động ({testConfig.easyCount + testConfig.mediumCount + testConfig.hardCount} Câu)</span>
            </button>
          </div>

          {/* Generated Test View */}
          {generatedTest && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Test Header & Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-white font-['Space_Grotesk']">
                    {testConfig.title}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Thời gian: {testConfig.durationMinutes} phút • Số lượng: {generatedTest.length} câu trắc nghiệm khách quan 4 lựa chọn
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAnswerKey(!showAnswerKey)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-semibold border border-slate-700"
                  >
                    {showAnswerKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{showAnswerKey ? 'Ẩn Đáp Án' : 'Hiện Đáp Án'}</span>
                  </button>

                  <button
                    onClick={handlePrintTest}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-md"
                  >
                    <Printer className="w-4 h-4" />
                    <span>In / Xuất PDF</span>
                  </button>
                </div>
              </div>

              {/* Printable Question List */}
              <div className="space-y-6">
                {generatedTest.map((q, idx) => (
                  <div key={idx} className="space-y-2 pb-4 border-b border-slate-800/60 last:border-none">
                    <p className="text-sm font-bold text-white leading-relaxed">
                      <strong>Câu {idx + 1}:</strong> {q.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                      {q.options.map((opt, optIdx) => {
                        const isCorrect = optIdx === q.correctIndex;
                        return (
                          <div
                            key={optIdx}
                            className={`text-xs p-2 rounded-lg ${
                              showAnswerKey && isCorrect
                                ? 'bg-emerald-950/80 text-emerald-300 font-bold border border-emerald-600'
                                : 'text-slate-300'
                            }`}
                          >
                            <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>
      )}

      {/* TAB 3: STATS & MASTERY MATRIX */}
      {activeTab === 'stats' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-teal-400" />
              <span>Ma Trận Kiến Thức Toàn Diện KHTN 7 (GDPT 2018)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 space-y-2">
                <div className="text-cyan-400 font-bold text-xs uppercase">🧪 Phân môn Hóa Học</div>
                <div className="text-2xl font-black text-white font-['Space_Grotesk']">Chương I - II</div>
                <p className="text-xs text-slate-300">Nguyên tử, Bảng tuần hoàn 118 nguyên tố, Phân tử, Liên kết ion & cộng hoá trị, Hoá trị.</p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-2">
                <div className="text-amber-400 font-bold text-xs uppercase">⚡ Phân môn Vật Lí</div>
                <div className="text-2xl font-black text-white font-['Space_Grotesk']">Chương III - VI</div>
                <p className="text-xs text-slate-300">Tốc độ v = s/t, Đồ thị s-t, Sóng âm & Tần số dao động, Phản xạ ánh sáng & Gương phẳng, Từ trường & Nam châm điện.</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 space-y-2">
                <div className="text-emerald-400 font-bold text-xs uppercase">🌱 Phân môn Sinh Học</div>
                <div className="text-2xl font-black text-white font-['Space_Grotesk']">Chương VII - X</div>
                <p className="text-xs text-slate-300">Quang hợp & Hô hấp tế bào, Thoát hơi nước qua khí khổng, Cảm ứng & Tập tính, Sinh trưởng mô phân sinh, Sinh sản vô tính & hữu tính.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
