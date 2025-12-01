'use client';

import { Quest } from '@/types/game';
import { useGame } from '@/lib/GameContext';

interface QuestCardProps {
  quest: Quest;
  onActivate?: () => void;
}

export default function QuestCard({ quest, onActivate }: QuestCardProps) {
  const { gameState } = useGame();
  
  const isCompleted = gameState.questsCompleted.includes(quest.id);
  const isActive = gameState.activeQuests.includes(quest.id);
  const completedObjectives = quest.objectives.filter(o => o.completed).length;
  const progress = (completedObjectives / quest.objectives.length) * 100;

  const getStatusColor = () => {
    if (isCompleted) return 'border-green-500/50 bg-green-900/20';
    if (isActive) return 'border-purple-500/50 bg-purple-900/20';
    if (quest.status === 'available') return 'border-cyan-500/50 bg-cyan-900/20';
    return 'border-gray-600/50 bg-gray-900/20';
  };

  const getStatusBadge = () => {
    if (isCompleted) return { text: 'Completed', color: 'bg-green-600/30 text-green-300' };
    if (isActive) return { text: 'Active', color: 'bg-purple-600/30 text-purple-300' };
    if (quest.status === 'available') return { text: 'Available', color: 'bg-cyan-600/30 text-cyan-300' };
    return { text: 'Locked', color: 'bg-gray-600/30 text-gray-400' };
  };

  const status = getStatusBadge();

  return (
    <div className={`rounded-xl border-2 p-5 transition-all duration-300 hover:shadow-lg ${getStatusColor()}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs text-gray-500 font-medium">Act {quest.act}</span>
          <h3 className="text-lg font-bold text-white">{quest.title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
          {status.text}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {quest.description}
      </p>

      {/* Progress Bar (for active quests) */}
      {(isActive || isCompleted) && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500">Progress</span>
            <span className="text-xs text-purple-400">{completedObjectives}/{quest.objectives.length}</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-purple-500'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Objectives */}
      {(isActive || quest.status === 'available') && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Objectives</h4>
          <ul className="space-y-2">
            {quest.objectives.map((objective) => (
              <li 
                key={objective.id} 
                className={`flex items-start gap-2 text-sm ${objective.completed ? 'text-green-400' : 'text-gray-400'}`}
              >
                <span className="mt-0.5">
                  {objective.completed ? '✓' : '○'}
                </span>
                <span className={objective.completed ? 'line-through opacity-70' : ''}>
                  {objective.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Rewards */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-purple-400 mb-2">Rewards</h4>
        <div className="flex flex-wrap gap-2">
          {quest.rewards.map((reward, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-amber-900/30 text-amber-300 rounded text-xs border border-amber-500/30"
            >
              🎁 {reward}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      {quest.status === 'available' && !isActive && !isCompleted && onActivate && (
        <button
          onClick={onActivate}
          className="w-full py-2 bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 rounded-lg transition-colors text-sm font-medium border border-cyan-500/50"
        >
          Begin Quest
        </button>
      )}

      {/* Locked Prerequisites */}
      {quest.status === 'locked' && quest.prerequisites.length > 0 && (
        <div className="text-xs text-gray-500 mt-2">
          <span className="text-gray-600">🔒 Requires: </span>
          {quest.prerequisites.join(', ')}
        </div>
      )}
    </div>
  );
}
