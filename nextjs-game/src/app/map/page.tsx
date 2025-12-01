'use client';

import { useState } from 'react';
import RegionCard from '@/components/RegionCard';
import { regions } from '@/data/regions';
import { Region } from '@/types/game';

export default function MapPage() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">🗺️</span>
          <h1 className="text-4xl font-bold text-white mb-3">World of Valdaren</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A frost-bound realm where language shapes reality. Each region reflects the philosophy 
            of those who dwell there — explore to discover their secrets.
          </p>
        </div>

        {/* Map visualization */}
        <div className="mb-10 p-6 bg-slate-900/50 rounded-xl border border-purple-500/20">
          <div className="relative aspect-[16/9] max-h-[400px] flex items-center justify-center">
            {/* Simplified map representation */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
              {/* Top row */}
              <div 
                onClick={() => setSelectedRegion(regions.find(r => r.id === 'lumisth-glacier') || null)}
                className={`h-24 rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center
                  ${selectedRegion?.id === 'lumisth-glacier' 
                    ? 'bg-indigo-600/40 border-2 border-indigo-400 scale-105' 
                    : 'bg-indigo-900/30 border border-indigo-500/30 hover:bg-indigo-800/40'}`}
              >
                <span className="text-2xl">🧊</span>
                <span className="text-xs text-gray-300 mt-1">Lumisth Glacier</span>
              </div>
              <div 
                onClick={() => setSelectedRegion(regions.find(r => r.id === 'snowveil-forest') || null)}
                className={`h-24 rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center
                  ${selectedRegion?.id === 'snowveil-forest' 
                    ? 'bg-cyan-600/40 border-2 border-cyan-400 scale-105' 
                    : 'bg-cyan-900/30 border border-cyan-500/30 hover:bg-cyan-800/40'}`}
              >
                <span className="text-2xl">❄️</span>
                <span className="text-xs text-gray-300 mt-1">Snowveil Forest</span>
              </div>
              <div 
                onClick={() => setSelectedRegion(regions.find(r => r.id === 'ancient-ruins') || null)}
                className={`h-24 rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center
                  ${selectedRegion?.id === 'ancient-ruins' 
                    ? 'bg-purple-600/40 border-2 border-purple-400 scale-105' 
                    : 'bg-purple-900/30 border border-purple-500/30 hover:bg-purple-800/40'}`}
              >
                <span className="text-2xl">🏚️</span>
                <span className="text-xs text-gray-300 mt-1">Ancient Ruins</span>
              </div>

              {/* Middle row */}
              <div 
                onClick={() => setSelectedRegion(regions.find(r => r.id === 'whispering-woods') || null)}
                className={`h-24 rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center
                  ${selectedRegion?.id === 'whispering-woods' 
                    ? 'bg-green-600/40 border-2 border-green-400 scale-105' 
                    : 'bg-green-900/30 border border-green-500/30 hover:bg-green-800/40'}`}
              >
                <span className="text-2xl">🌲</span>
                <span className="text-xs text-gray-300 mt-1">Whispering Woods</span>
              </div>
              <div 
                onClick={() => setSelectedRegion(regions.find(r => r.id === 'lake-eirysa') || null)}
                className={`h-24 rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center
                  ${selectedRegion?.id === 'lake-eirysa' 
                    ? 'bg-teal-600/40 border-2 border-teal-400 scale-105' 
                    : 'bg-teal-900/30 border border-teal-500/30 hover:bg-teal-800/40'}`}
              >
                <span className="text-2xl">🌊</span>
                <span className="text-xs text-gray-300 mt-1">Lake Eirysa</span>
              </div>
              <div 
                onClick={() => setSelectedRegion(regions.find(r => r.id === 'ravengard') || null)}
                className={`h-24 rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center
                  ${selectedRegion?.id === 'ravengard' 
                    ? 'bg-blue-600/40 border-2 border-blue-400 scale-105' 
                    : 'bg-blue-900/30 border border-blue-500/30 hover:bg-blue-800/40'}`}
              >
                <span className="text-2xl">🏛️</span>
                <span className="text-xs text-gray-300 mt-1">Ravengard</span>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">Click a region to view details</p>
        </div>

        {/* Selected region detail */}
        {selectedRegion && (
          <div className="mb-10 animate-fade-in">
            <RegionCard region={selectedRegion} isSelected />
          </div>
        )}

        {/* All regions grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🏔️</span>
            All Regions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <RegionCard 
                key={region.id} 
                region={region}
                isSelected={selectedRegion?.id === region.id}
                onClick={() => setSelectedRegion(region)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
