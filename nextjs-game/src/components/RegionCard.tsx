'use client';

import { Region } from '@/types/game';
import { getFactionById } from '@/data/factions';

interface RegionCardProps {
  region: Region;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function RegionCard({ region, isSelected = false, onClick }: RegionCardProps) {
  const faction = getFactionById(region.controllingFaction);

  const getRegionIcon = (id: string) => {
    switch (id) {
      case 'ravengard': return '🏛️';
      case 'whispering-woods': return '🌲';
      case 'ancient-ruins': return '🏚️';
      case 'snowveil-forest': return '❄️';
      case 'lumisth-glacier': return '🧊';
      case 'lake-eirysa': return '🌊';
      default: return '🗺️';
    }
  };

  const getRegionGradient = (id: string) => {
    switch (id) {
      case 'ravengard': return 'from-blue-900/50 to-slate-900/50';
      case 'whispering-woods': return 'from-green-900/50 to-slate-900/50';
      case 'ancient-ruins': return 'from-purple-900/50 to-slate-900/50';
      case 'snowveil-forest': return 'from-cyan-900/50 to-slate-900/50';
      case 'lumisth-glacier': return 'from-indigo-900/50 to-slate-900/50';
      case 'lake-eirysa': return 'from-teal-900/50 to-slate-900/50';
      default: return 'from-gray-900/50 to-slate-900/50';
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-gradient-to-br ${getRegionGradient(region.id)} 
        rounded-xl border-2 p-5 transition-all duration-300 
        ${isSelected 
          ? 'border-purple-400 shadow-lg shadow-purple-500/30 scale-105' 
          : 'border-slate-600/50 hover:border-purple-500/50 hover:shadow-md'
        }
        ${onClick ? 'cursor-pointer' : ''}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{getRegionIcon(region.id)}</span>
        <div>
          <h3 className="text-lg font-bold text-white">{region.name}</h3>
          {faction && (
            <span 
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${faction.color}30`, color: faction.color }}
            >
              Controlled by {faction.name.split(' ').slice(0, 2).join(' ')}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {region.description}
      </p>

      {/* Atmosphere */}
      <div className="mb-4">
        <span className="text-xs text-purple-400 font-medium">Atmosphere: </span>
        <span className="text-xs text-gray-500 italic">{region.atmosphere}</span>
      </div>

      {/* Sub-locations */}
      <div>
        <h4 className="text-sm font-semibold text-purple-400 mb-2">Notable Locations</h4>
        <div className="flex flex-wrap gap-1.5">
          {region.subLocations.slice(0, 4).map((loc, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-slate-800/80 rounded text-xs text-gray-400 border border-slate-700"
            >
              {loc}
            </span>
          ))}
          {region.subLocations.length > 4 && (
            <span className="px-2 py-1 text-xs text-purple-400">
              +{region.subLocations.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
