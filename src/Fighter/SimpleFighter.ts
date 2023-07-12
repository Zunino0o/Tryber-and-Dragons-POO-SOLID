interface SimpleFighter {
  lifePoints: number;
  strangth: number;

  attack(enemy: SimpleFighter): void;
  
  receiveDamage(attackPoints: number): number;
}

export default SimpleFighter;
