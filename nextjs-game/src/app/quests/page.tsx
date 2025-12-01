'use client';

import QuestCard from '@/components/QuestCard';
import { quests, getQuestsByAct } from '@/data/quests';
import { useGame } from '@/lib/GameContext';
import { useState } from 'react';

const actLabels = [
  { act: 1, title: 'Act I: Awakening', icon: '🌅' },
  { act: 2, title: 'Act II: Divergence', icon: '🔀' },
  { act: 3, title: 'Act III: Revelation', icon: '💡' },
  { act: 4, title: 'Act IV: Convergence', icon: '🌟' },
];

export default function QuestsPage() {
  const { gameState, activateQuest } = useGame();
  const [selectedAct, setSelectedAct] = useState<number | 'all'>('all');

  const filteredQuests = selectedAct === 'all' 
    ? quests 
    : getQuestsByAct(selectedAct);

  const completedCount = gameState.questsCompleted.length;
  const activeCount = gameState.activeQuests.length;
  const totalCount = quests.length;

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">📜</span>
          <h1 className="text-4xl font-bold text-white mb-3">Quest Journal</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your journey through Valdaren unfolds across four acts. Complete quests to unlock 
            new story branches, gain faction reputation, and master Ellidric.
          </p>
        </div>

        {/* Progress overview */}
        <div className="mb-10 p-6 bg-slate-900/50 rounded-xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📊</span>
            Quest Progress
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-green-900/30 rounded-lg border border-green-500/30">
              <div className="text-3xl font-bold text-green-400">{completedCount}</div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="text-center p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400">{activeCount}</div>
              <div className="text-sm text-gray-400">Active</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-600/30">
              <div className="text-3xl font-bold text-gray-400">{totalCount - completedCount - activeCount}</div>
              <div className="text-sm text-gray-400">Remaining</div>
            </div>
          </div>
          
          {/* Overall progress bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Overall Progress</span>
              <span className="text-sm text-purple-400">{Math.round((completedCount / totalCount) * 100)}%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-green-500 transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Act filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedAct('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedAct === 'all'
                ? 'bg-purple-600/50 text-white border border-purple-400'
                : 'bg-slate-800/50 text-gray-400 border border-slate-600 hover:bg-slate-700/50 hover:text-white'
            }`}
          >
            📋 All Quests
          </button>
          {actLabels.map(({ act, title, icon }) => (
            <button
              key={act}
              onClick={() => setSelectedAct(act)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedAct === act
                  ? 'bg-purple-600/50 text-white border border-purple-400'
                  : 'bg-slate-800/50 text-gray-400 border border-slate-600 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {icon} {title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Quest count */}
        <div className="text-center mb-6">
          <span className="text-gray-500 text-sm">
            Showing {filteredQuests.length} quest{filteredQuests.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Quests by act */}
        {selectedAct === 'all' ? (
          actLabels.map(({ act, title, icon }) => {
            const actQuests = getQuestsByAct(act);
            return (
              <div key={act} className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-purple-500/20">
                  <span>{icon}</span>
                  {title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {actQuests.map((quest) => (
                    <QuestCard 
                      key={quest.id} 
                      quest={quest}
                      onActivate={() => activateQuest(quest.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuests.map((quest) => (
              <QuestCard 
                key={quest.id} 
                quest={quest}
                onActivate={() => activateQuest(quest.id)}
              />
            ))}
          </div>
        )}

        {/* Quest mechanics info */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900/80 to-purple-900/40 rounded-xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-purple-400 mb-4">💡 Quest Mechanics</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">🔓 Prerequisites</h3>
              <p className="text-gray-400 text-sm">Some quests require completing others first. Check the locked requirements to plan your path.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">🔀 Branching Paths</h3>
              <p className="text-gray-400 text-sm">Act II introduces faction-specific questlines. Your choices determine which paths open.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">🎁 Rewards</h3>
              <p className="text-gray-400 text-sm">Completing quests grants glyph unlocks, dialect progress, faction reputation, and story access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
