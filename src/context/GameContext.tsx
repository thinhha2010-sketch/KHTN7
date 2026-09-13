import React, { createContext, useContext, useState, useEffect } from 'react';
import { PlayerStats, MainView, GameModeId } from '../types';
import { BADGES_DATA, RANKS } from '../data/gameData';
import { sound } from '../utils/audio';

interface GameContextType {
  stats: PlayerStats;
  currentView: MainView;
  currentGameMode: GameModeId | null;
  selectedChapterId: number | null;
  isMuted: boolean;
  setCurrentView: (view: MainView) => void;
  setCurrentGameMode: (mode: GameModeId | null) => void;
  setSelectedChapterId: (id: number | null) => void;
  addExp: (amount: number, title?: string, type?: string) => void;
  recordAnswer: (isCorrect: boolean, chapterId?: number) => void;
  setChapterStars: (chapterId: number, stars: number) => void;
  recordGameScore: (gameId: string, score: number) => void;
  unlockBadge: (badgeId: string) => void;
  toggleAudio: () => void;
  resetProgress: () => void;
  getCurrentRank: () => { title: string; icon: string; color: string; nextExp?: number; prevExp: number };
}

const STORAGE_KEY = 'khtn7_player_stats_v2';

const defaultStats: PlayerStats = {
  exp: 120,
  level: 1,
  rankTitle: 'Tập Sự Khoa Học',
  stars: 3,
  streak: 0,
  totalAnswered: 5,
  totalCorrect: 4,
  unlockedChapters: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  chapterStars: { 0: 2, 1: 1 },
  completedGameModes: {},
  badges: ['b_first_win'],
  recentActivity: [
    { timestamp: Date.now() - 3600000, title: 'Khám phá Phương pháp Khoa học', score: 100, type: 'map' }
  ]
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<PlayerStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return defaultStats;
  });

  const [currentView, setCurrentView] = useState<MainView>('map');
  const [currentGameMode, setCurrentGameMode] = useState<GameModeId | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(sound.getMuted());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch {
      // ignore
    }
  }, [stats]);

  const getCurrentRank = () => {
    let current = RANKS[0];
    let nextExp: number | undefined = undefined;
    for (let i = 0; i < RANKS.length; i++) {
      if (stats.exp >= RANKS[i].minExp) {
        current = RANKS[i];
        nextExp = RANKS[i + 1]?.minExp;
      }
    }
    return {
      title: current.title,
      icon: current.icon,
      color: current.color,
      nextExp,
      prevExp: current.minExp
    };
  };

  const addExp = (amount: number, title?: string, type?: string) => {
    setStats(prev => {
      const newExp = prev.exp + amount;
      let newLevel = prev.level;
      let rankTitle = prev.rankTitle;

      for (let i = 0; i < RANKS.length; i++) {
        if (newExp >= RANKS[i].minExp) {
          rankTitle = RANKS[i].title;
          newLevel = i + 1;
        }
      }

      if (newLevel > prev.level) {
        sound.playLevelUp();
      }

      const newActivities = title
        ? [{ timestamp: Date.now(), title, score: amount, type: type || 'game' }, ...prev.recentActivity.slice(0, 19)]
        : prev.recentActivity;

      return {
        ...prev,
        exp: newExp,
        level: newLevel,
        rankTitle,
        recentActivity: newActivities
      };
    });
  };

  const recordAnswer = (isCorrect: boolean, chapterId?: number) => {
    setStats(prev => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const newCorrect = prev.totalCorrect + (isCorrect ? 1 : 0);
      const newTotal = prev.totalAnswered + 1;

      // Check badges
      const newBadges = [...prev.badges];
      if (newStreak >= 5 && !newBadges.includes('b_combo_5')) {
        newBadges.push('b_combo_5');
        sound.playLevelUp();
      }

      return {
        ...prev,
        streak: newStreak,
        totalCorrect: newCorrect,
        totalAnswered: newTotal,
        badges: newBadges
      };
    });
  };

  const setChapterStars = (chapterId: number, stars: number) => {
    setStats(prev => {
      const currentStar = prev.chapterStars[chapterId] || 0;
      if (stars > currentStar) {
        const starDiff = stars - currentStar;
        return {
          ...prev,
          stars: prev.stars + starDiff,
          chapterStars: {
            ...prev.chapterStars,
            [chapterId]: stars
          }
        };
      }
      return prev;
    });
  };

  const recordGameScore = (gameId: string, score: number) => {
    setStats(prev => {
      const currentHigh = prev.completedGameModes[gameId] || 0;
      return {
        ...prev,
        completedGameModes: {
          ...prev.completedGameModes,
          [gameId]: Math.max(currentHigh, score)
        }
      };
    });
  };

  const unlockBadge = (badgeId: string) => {
    setStats(prev => {
      if (prev.badges.includes(badgeId)) return prev;
      sound.playLevelUp();
      return {
        ...prev,
        badges: [...prev.badges, badgeId]
      };
    });
  };

  const toggleAudio = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const resetProgress = () => {
    setStats(defaultStats);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <GameContext.Provider
      value={{
        stats,
        currentView,
        currentGameMode,
        selectedChapterId,
        isMuted,
        setCurrentView,
        setCurrentGameMode,
        setSelectedChapterId,
        addExp,
        recordAnswer,
        setChapterStars,
        recordGameScore,
        unlockBadge,
        toggleAudio,
        resetProgress,
        getCurrentRank
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
