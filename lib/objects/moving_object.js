
import Explosion from '../objects/explosion';

class MovingObject {
  constructor(velocityX, velocityY, game) {
    this.game = game;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  hitEnemy(enemy) {
    let x = Math.abs(this.bullet.x - enemy.enemy.x);
    let y = Math.abs(this.bullet.y - enemy.enemy.y);
    if(x < enemy.enemy.image.width && y < enemy.enemy.image.height-35) {
      this.game.stage.removeChild(this.bullet);
      enemy.health -= this.damage;
      if(enemy.health <= 0) {
        Explosion(enemy.enemy.x, enemy.enemy.y, this.game.stage);
        this.game.audio['explosion'].play();
        this.game.stage.removeChild(enemy.enemy);
      }
      return true;
    }
    return false;
  }

  collideIntoPlayer(ship) {
    const x = Math.abs(ship.ship.x-this.enemy.x);
    const y = Math.abs(ship.ship.y-this.enemy.y);
    if(x < 15 && y < 15) {
      this.game.stage.removeChild(ship.ship);
      return true;
    }
    return false;
  }
}

export default MovingObject;