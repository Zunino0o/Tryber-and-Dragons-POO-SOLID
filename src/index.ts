import { Ranger, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Orc } from './Races';
import defaultInt from './defaultInt';

// Characters
const p1Race = new Dwarf('Zuzu, o Sabio', defaultInt());
export const player1 = new Character(p1Race.name, p1Race);
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const p2Archetype = new Ranger('Ju, a Veloz');
export const player2 = new Character(p2Archetype.name, undefined, p2Archetype);

const p3Race = new Orc('Bellatrix, a Valente', defaultInt());
const p3Archetype = new Warrior(p3Race.name);
export const player3 = new Character(p3Race.name, p3Race, p3Archetype);

// Monsters
export const monster1 = new Monster();
export const monster2 = new Dragon();

// PVP

export const pvp = new PVP(player2, player3);

// PVE

export const pve = new PVE(player1, [monster1, monster2]);

export const runBattles = (battles: Battle[]) => {
  battles.forEach((b) => b.fight());
};
