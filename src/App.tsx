import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { Navbar } from './components/Navbar';
import { ScienceMap } from './components/ScienceMap';
import { GameLauncher } from './components/GameLauncher';
import { SpeedArena } from './components/games/SpeedArena';
import { ChallengeLadder } from './components/games/ChallengeLadder';
import { ScienceAdventure } from './components/games/ScienceAdventure';
import { VisualQuiz } from './components/games/VisualQuiz';
import { MatchPairsGame } from './components/games/MatchPairsGame';
import { TrueFalseBlitz } from './components/games/TrueFalseBlitz';
import { ScienceCrossword } from './components/games/ScienceCrossword';
import { LabChallenge } from './components/games/LabChallenge';
import { BossScientist } from './components/games/BossScientist';
import { TeamBattle } from './components/classroom/TeamBattle';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { ProfileView } from './components/profile/ProfileView';
import { GameModeType, Chapter } from './types';
import { sound } from './utils/audio';
import {
  X,
  Play,
  FlaskConical,
  BookOpen,
  Award,
  Sparkles,
  Zap,
  Target,
  ArrowRight
} from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { currentView, setCurrentView } = useGame();

  const [activeGameMode, setActiveGameMode] = useState<GameModeType | null>(null);
  const [activeLabSim, setActiveLabSim] = useState<string | null>(null);
  const [selectedChapterModal, setSelectedChapterModal] = useState<Chapter | null>(null);

  // Handle launching a game mode
  const handleLaunchGame = (gameId: GameModeType, chapterId?: number) => {
    sound.playClick();
    setSelectedChapterModal(null);
    if (gameId === 'lab_challenge') {
      setCurrentView('lab');
      setActiveGameMode(null);
    } else {
      setActiveGameMode(gameId);
    }
  };

  // Handle opening chapter modal from map
  const handleOpenChapterModal = (chapter: Chapter) => {
    sound.playClick();
    setSelectedChapterModal(chapter);
  };

  // Handle starting a lab simulator directly from chapter modal
  const handleStartChapterLab = (simType: string) => {
    sound.playClick();
    setSelectedChapterModal(null);
    setActiveLabSim(simType);
    setCurrentView('lab');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Be_Vietnam_Pro'] antialiased selection:bg-teal-500/30 selection:text-teal-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Render Selected Game Mode */}
        {activeGameMode ? (
          <div>
            {activeGameMode === 'speed_arena' && (
              <SpeedArena onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'challenge_ladder' && (
              <ChallengeLadder onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'adventure' && (
              <ScienceAdventure onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'visual_quiz' && (
              <VisualQuiz onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'match_pairs' && (
              <MatchPairsGame onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'true_false' && (
              <TrueFalseBlitz onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'crossword' && (
              <ScienceCrossword onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'boss_scientist' && (
              <BossScientist onBack={() => setActiveGameMode(null)} />
            )}
            {activeGameMode === 'team_battle' && (
              <TeamBattle />
            )}
          </div>
        ) : (
          /* Render Main Views */
          <div>
            {currentView === 'map' && (
              <ScienceMap
                onSelectChapter={handleOpenChapterModal}
                onLaunchGame={handleLaunchGame}
              />
            )}

            {currentView === 'games' && (
              <GameLauncher onSelectGame={handleLaunchGame} />
            )}

            {currentView === 'battle' && (
              <TeamBattle />
            )}

            {currentView === 'lab' && (
              <LabChallenge
                initialSimType={activeLabSim}
                onBack={() => {
                  setActiveLabSim(null);
                  setCurrentView('map');
                }}
              />
            )}

            {currentView === 'quiz_bank' && (
              <TeacherDashboard />
            )}

            {currentView === 'teacher' && (
              <TeacherDashboard />
            )}

            {currentView === 'profile' && (
              <ProfileView />
            )}
          </div>
        )}
      </main>

      {/* Chapter Information & Station Modal */}
      {selectedChapterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedChapterModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedChapterModal.icon}</span>
                <span className="text-xs font-black text-teal-400 uppercase tracking-wider font-['Space_Grotesk']">
                  TRẠM #{selectedChapterModal.id} • {selectedChapterModal.discipline.toUpperCase()}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk']">
                {selectedChapterModal.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedChapterModal.description}
              </p>
            </div>

            {/* Key Concepts Tags */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Khái niệm trọng tâm:</span>
              <div className="flex flex-wrap gap-2">
                {selectedChapterModal.keyConcepts.map((concept, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-medium text-teal-200"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Practice, Lab, Duel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              <button
                id="btn-modal-speed-quiz"
                onClick={() => handleLaunchGame('speed_arena', selectedChapterModal.id)}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-extrabold text-xs shadow-lg transition-all active:scale-95"
              >
                <Zap className="w-4 h-4" />
                <span>Luyện Trắc Nghiệm Trạm #{selectedChapterModal.id}</span>
              </button>

              {selectedChapterModal.simulatorType ? (
                <button
                  id="btn-modal-open-lab"
                  onClick={() => handleStartChapterLab(selectedChapterModal.simulatorType!)}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-750 text-teal-300 font-extrabold text-xs border border-teal-500/40 transition-all active:scale-95"
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Vào Phòng Thí Nghiệm Trạm</span>
                </button>
              ) : (
                <button
                  onClick={() => handleLaunchGame('challenge_ladder')}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-750 text-amber-300 font-extrabold text-xs border border-slate-700 transition-all active:scale-95"
                >
                  <Target className="w-4 h-4" />
                  <span>Chinh Phục Tháp Thử Thách</span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Subtle Footer */}
      <footer className="border-t border-slate-900 mt-16 py-6 text-center text-xs text-slate-400">
        <p>KHTN 7 – Hành Trình Chinh Phục Khoa Học • Chương trình GDPT 2018</p>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <GameProvider>
      <MainAppContent />
    </GameProvider>
  );
}
