import Phaser from 'phaser';

class Game extends Phaser.Game {

    constructor() {

        super({
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: preload,
                create: create
            }
        });
    }
}

window.game = new Game;