import 'pixi'
import 'p2'
import Phaser from 'phaser'

import GameState from './states/Game'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    super('100', '100', Phaser.AUTO, 'content', null);

    this.state.add('Game', GameState, false);

    this.state.start('Game')
  }
}

window.game = new Game();
