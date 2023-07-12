import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import defaultInt from './defaultInt';
// import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _level = 1;

  constructor(private _name: string, race?: Race, archetype?: Archetype) {
    this._strength = defaultInt();
    this._defense = defaultInt();
    this._dexterity = defaultInt();

    const characterRace = new Elf(this._name, this._dexterity);
    this._race = race || characterRace;

    const characterArchetype = new Mage(this._name);
    this._archetype = archetype || characterArchetype;

    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: defaultInt(),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  get level(): number {
    return this._level;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp() {
    this._level += 1;
    const lvlUpHP = this._maxLifePoints + defaultInt();
    if (lvlUpHP > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = lvlUpHP;
    }
    this._strength += defaultInt();
    this._dexterity += defaultInt();
    this._defense += defaultInt();
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special?(enemy: Fighter): void;
}

export default Character;
