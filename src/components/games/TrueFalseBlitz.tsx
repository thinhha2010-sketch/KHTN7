import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../../context/GameContext';
import { sound } from '../../utils/audio';
import {
  CheckCircle2,
  XCircle,
  ChevronLeft,
  Timer,
  Flame,
  RotateCcw,
  Trophy,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TrueFalseItem {
  id: string;
  statement: string;
  isCorrect: boolean;
  discipline: string;
  explanation: string;
}

const TF_DATA: TrueFalseItem[] = [
  {
    id: 'tf1',
    statement: 'Âm thanh có thể truyền qua môi trường chân không với tốc độ 340 m/s.',
    isCorrect: false,
    discipline: 'Vật lí',
    explanation: 'Sai. Âm thanh cần các hạt môi trường vật chất (rắn, lỏng, khí) dao động để lan truyền nên HOÀN TOÀN KHÔNG truyền được trong chân không.'
  },
  {
    id: 'tf2',
    statement: 'Theo định luật phản xạ ánh sáng, góc phản xạ luôn luôn bằng góc tới (i\' = i).',
    isCorrect: true,
    discipline: 'Vật lí',
    explanation: 'Đúng. Định luật phản xạ ánh sáng khẳng định tia phản xạ nằm trong mặt phẳng tới và góc phản xạ bằng góc tới.'
  },
  {
    id: 'tf3',
    statement: 'Trong hạt nhân nguyên tử, các hạt proton mang điện tích âm, còn electron mang điện tích dương.',
    isCorrect: false,
    discipline: 'Hóa học',
    explanation: 'Sai. Proton mang điện tích dương (+1), Electron mang điện tích âm (-1) ở vỏ nguyên tử.'
  },
  {
    id: 'tf4',
    statement: 'Đổi tốc độ: 1 m/s tương đương với 3,6 km/h.',
    isCorrect: true,
    discipline: 'Vật lí',
    explanation: 'Đúng. 1 m/s = (1/1000 km) / (1/3600 h) = 3,6 km/h.'
  },
  {
    id: 'tf5',
    statement: 'Quá trình quang hợp ở thực vật diễn ra tại bào quan Ty thể và giải phóng khí CO₂.',
    isCorrect: false,
    discipline: 'Sinh học',
    explanation: 'Sai. Quang hợp diễn ra tại Lục lạp hấp thụ CO₂ và giải phóng khí O₂; Hô hấp tế bào mới diễn ra tại Ty thể.'
  },
  {
    id: 'tf6',
    statement: 'Hai cực từ cùng tên (cùng cực Bắc hoặc cùng cực Nam) của nam châm khi đặt gần nhau sẽ đẩy nhau.',
    isCorrect: true,
    discipline: 'Vật lí',
    explanation: 'Đúng. Quy tắc tương tác từ: Các cực cùng tên thì đẩy nhau, các cực khác tên thì hút nhau.'
  },
  {
    id: 'tf7',
    statement: 'Mạch rây trong thân cây có chức năng vận chuyển nước và muối khoáng từ rễ lên lá.',
    isCorrect: false,
    discipline: 'Sinh học',
    explanation: 'Sai. Mạch gỗ (xylem) mới vận chuyển nước và muối khoáng đi lên; Mạch rây (phloem) vận chuyển chất hữu cơ từ lá xuống.'
  },
  {
    id: 'tf8',
    statement: 'Nguyên tử của tất cả các nguyên tố trong cùng một chu kì của Bảng tuần hoàn đều có số lớp electron bằng nhau.',
    isCorrect: true,
    discipline: 'Hóa học',
    explanation: 'Đúng. Số thứ tự chu kì chính là số lớp electron của nguyên tử các nguyên tố trong chu kì đó.'
  },
  {
    id: 'tf9',
    statement: 'Khí khổng ở biểu bì lá cây chỉ có chức năng quang hợp chứ không tham gia thoát hơi nước.',
    isCorrect: false,
    discipline: 'Sinh học',
    explanation: 'Sai. Khí khổng là cơ quan chính điều hòa sự thoát hơi nước (chiếm 90%) và trao đổi khí CO₂ / O₂.'
  },
  {
    id: 'tf10',
    statement: 'Ảnh của một vật tạo bởi gương phẳng là ảnh ảo, không hứng được trên màn chắn và có kích thước bằng vật.',
    isCorrect: true,
    discipline: 'Vật lí',
    explanation: 'Đúng. Tính chất ảnh tạo bởi gương phẳng: ảnh ảo, cùng chiều, kích thước bằng vật, cách gương một khoảng bằng khoảng cách từ vật đến gương.'
  }
];

interface TrueFalseBlitzProps {
  onBack: () => void;
}

export const TrueFalseBlitz: React.FC<TrueFalseBlitzProps> = ({ onBack }) => {
  const { addExp, recordAnswer, recordGameScore } = useGame();

  const [questions, setQuestions] = useState<TrueFalseItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const shuffled = [...TF_DATA].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setIsGameOver(false);
    setUserChoice(null);
    setIsAnswered(false);
    setTimeLeft(7);
  }, []);

  useEffect(() => {
    if (isGameOver || isAnswered || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeout();
          return 0;
        }
        if (prev <= 3) {
          sound.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAnswered, isGameOver, questions]);

  const handleTimeout = () => {
    setIsAnswered(true);
    setUserChoice(null);
    sound.playWrong();
    setStreak(0);
    recordAnswer(false);
  };

  const handleChoice = (choice: boolean) => {
    if (isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setUserChoice(choice);
    setIsAnswered(true);

    const currentItem = questions[currentIndex];
    const isCorrect = choice === currentItem.isCorrect;

    if (isCorrect) {
      sound.playCorrect();
      const points = 50 + timeLeft * 10 + streak * 20;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      recordAnswer(true);
    } else {
      sound.playWrong();
      setStreak(0);
      recordAnswer(false);
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setUserChoice(null);
      setIsAnswered(false);
      setTimeLeft(7);
    } else {
      // Complete
      sound.playLevelUp();
      setIsGameOver(true);
      const earnedExp = Math.round(score / 5);
      addExp(earnedExp, 'Đúng / Sai Thần Tốc KHTN 7', 'true_false');
      recordGameScore('true_false', score);
    }
  };

  const handleRestart = () => {
    sound.playClick();
    const shuffled = [...TF_DATA].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setIsGameOver(false);
    setUserChoice(null);
    setIsAnswered(false);
    setTimeLeft(7);
  };

  if (questions.length === 0) return null;

  const currentItem = questions[currentIndex];

  if (isGameOver) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center text-white shadow-xl">
            <Trophy className="w-10 h-10 text-amber-300" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
              Hoàn Thành Đợt Blitz
            </span>
            <h2 className="text-3xl font-black text-white font-['Space_Grotesk']">
              Kết Quả Đúng / Sai Thần Tốc
            </h2>
          </div>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 max-w-sm mx-auto">
            <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk']">
              {score} Điểm (+{Math.round(score / 5)} EXP)
            </div>
            <div className="text-xs text-slate-400 font-semibold uppercase mt-1">Khả năng phản xạ & phán đoán khoa học</div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Về Danh Sách Trò Chơi
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-extrabold text-xs shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi Lại Blitz</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const timerPercent = (timeLeft / 7) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-5 pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Danh Sách Trò Chơi</span>
        </button>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-orange-400 font-black bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            <Flame className="w-4 h-4 fill-orange-500" />
            <span>x{streak}</span>
          </div>
          <div className="text-rose-400 font-bold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            {score} Điểm
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Counter and Timer */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400 uppercase">
              CÂU {currentIndex + 1} / {questions.length} • {currentItem.discipline}
            </span>
            <span className={`flex items-center gap-1.5 ${timeLeft <= 3 ? 'text-rose-400 font-black animate-pulse' : 'text-slate-300'}`}>
              <Timer className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </span>
          </div>

          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft > 4 ? 'bg-teal-400' : timeLeft > 2 ? 'bg-amber-400' : 'bg-rose-500'
              }`}
              style={{ width: `${timerPercent}%` }}
            />
          </div>
        </div>

        {/* Statement Box */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 text-center space-y-2 min-h-[140px] flex flex-col justify-center">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Khẳng định khoa học:
          </span>
          <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
            "{currentItem.statement}"
          </p>
        </div>

        {/* Big True / False Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            id="btn-tf-true"
            disabled={isAnswered}
            onClick={() => handleChoice(true)}
            className={`py-5 rounded-2xl border flex flex-col items-center justify-center gap-2 font-black text-sm transition-all ${
              isAnswered
                ? currentItem.isCorrect
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/50'
                  : userChoice === true
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                  : 'bg-slate-800/40 border-slate-800 text-slate-600'
                : 'bg-emerald-950/40 hover:bg-emerald-900/60 border-emerald-700/60 text-emerald-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg'
            }`}
          >
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            <span>✅ ĐÚNG</span>
          </button>

          <button
            id="btn-tf-false"
            disabled={isAnswered}
            onClick={() => handleChoice(false)}
            className={`py-5 rounded-2xl border flex flex-col items-center justify-center gap-2 font-black text-sm transition-all ${
              isAnswered
                ? !currentItem.isCorrect
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/50'
                  : userChoice === false
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                  : 'bg-slate-800/40 border-slate-800 text-slate-600'
                : 'bg-rose-950/40 hover:bg-rose-900/60 border-rose-700/60 text-rose-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg'
            }`}
          >
            <XCircle className="w-8 h-8 text-rose-400" />
            <span>❌ SAI</span>
          </button>
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
              <Sparkles className="w-4 h-4" />
              <span>Chân lý khoa học:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentItem.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              id="btn-tf-next"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white text-xs font-black shadow-lg transition-all active:scale-95"
            >
              <span>{currentIndex + 1 < questions.length ? 'Câu Tiếp Theo' : 'Xem Tổng Kết'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
