import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(private _lifePoints = 85, private _strength = 63) {}

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number) { 
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;
