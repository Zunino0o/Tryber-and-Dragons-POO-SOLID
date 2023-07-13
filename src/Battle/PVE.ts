import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: SimpleFighter, protected monsters: SimpleFighter[]) {
    super(player);
  }

  private fightOne(oponent: SimpleFighter) {
    for (let index = 0; index < 1000; index += 1) {
      this.player.attack(oponent);
      oponent.attack(this.player);
      if (this.player.lifePoints === -1 || oponent.lifePoints === -1) {
        break;
      }
    }
  }

  fight(): number {
    for (let i = 0; i < this.monsters.length; i += 1) {
      this.fightOne(this.monsters[i]);
      if (super.fight() === -1) break;
    }
    return super.fight();
  }
}

export default PVE;
