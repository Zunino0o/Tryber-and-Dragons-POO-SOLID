import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, protected player2: Fighter) {
    super(player);
  }

  fight(): number {
    for (let i = 0; i < 100; i += 1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
      if (this.player.lifePoints === -1 || this.player2.lifePoints === -1) {
        break;
      }
    }
    return super.fight();
  }
}

export default PVP;
