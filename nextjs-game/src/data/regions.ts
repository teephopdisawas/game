// 🗺️ Regions Data - Based on world_data/lore.md
import { Region } from '@/types/game';

export const regions: Region[] = [
  {
    id: 'ravengard',
    name: 'Ravengard',
    description: 'The Institute capital - a city of towering archives, Memory Engines, and codified knowledge. Urban and structured, where scholars walk stone corridors filled with etched glyphs.',
    controllingFaction: 'institute',
    subLocations: [
      'Grand Archive',
      'Memory Engine Chamber',
      'Enforcement Quarters',
      'Scholar\'s District',
      'The Codex Vault'
    ],
    atmosphere: 'Academic, controlled, echoing with whispered translations'
  },
  {
    id: 'whispering-woods',
    name: 'Whispering Woods',
    description: 'The heartland of the Clans, where ancient trees carry Ellidric carved into their bark. Oral traditions flow like streams through this mystical forest.',
    controllingFaction: 'clans',
    subLocations: [
      'Storykeeper\'s Grove',
      'The Living Library',
      'Elder\'s Clearing',
      'Root Maze',
      'Song Circle'
    ],
    atmosphere: 'Mystical, organic, filled with whispered stories'
  },
  {
    id: 'ancient-ruins',
    name: 'Ancient Ruins',
    description: 'The birthplace of Ellidric glyphs, claimed by the mysterious Echoborn. Crumbling structures hold the oldest known inscriptions, humming with latent power.',
    controllingFaction: 'echoborn',
    subLocations: [
      'First Speaker\'s Sanctum',
      'Glyph Origin Chamber',
      'Echo Amphitheater',
      'Shattered Observatory',
      'Memory Well'
    ],
    atmosphere: 'Ancient, otherworldly, resonating with primordial energy'
  },
  {
    id: 'snowveil-forest',
    name: 'Snowveil Forest',
    description: 'A borderland forest where Clan influence meets the frozen Fringe. Snow-laden trees carry protective glyphs, and language flows like winter wind.',
    controllingFaction: 'clans',
    subLocations: [
      'Frost Sanctuary',
      'Border Watch',
      'Winter\'s Voice Cave',
      'Ice Glyph Garden',
      'Wanderer\'s Rest'
    ],
    atmosphere: 'Cold, transitional, where voices carry far through still air'
  },
  {
    id: 'lumisth-glacier',
    name: 'Lumisth Glacier',
    description: 'The frozen Fringe where Echoborn walk most freely. Crystal formations capture and refract glyph-light, revealing hidden meanings in the ice.',
    controllingFaction: 'echoborn',
    subLocations: [
      'Crystal Caverns',
      'Glacier Heart',
      'Light-Shift Temple',
      'Frozen Echo Chamber',
      'Prophecy Ice'
    ],
    atmosphere: 'Ethereal, crystalline, where time seems frozen'
  },
  {
    id: 'lake-eirysa',
    name: 'Lake Eirysa',
    description: 'Neutral waters where all factions meet for diplomacy. The lake\'s surface reflects glyphs from the sky, and the island at its center hosts the Concordat Hall.',
    controllingFaction: 'neutral',
    subLocations: [
      'Concordat Hall',
      'Reflection Isle',
      'Merchant Docks',
      'Polyglot Plaza',
      'Diplomatic Quarter'
    ],
    atmosphere: 'Peaceful, reflective, where words carry diplomatic weight'
  }
];

export const getRegionById = (id: string): Region | undefined => {
  return regions.find(r => r.id === id);
};

export const getRegionsByFaction = (faction: string): Region[] => {
  return regions.filter(r => r.controllingFaction === faction);
};
