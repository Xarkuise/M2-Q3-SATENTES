import bootScene from './scenes/bootScene.js';
import mainMenuScene from './scenes/mainMenuScene.js';
import gameBootScene1 from './scenes/gameBootScene1.js';
import GameScene from './scenes/gameScene.js';
import winningScene from './scenes/winningScene.js';
import gameOverScene from './scenes/gameOverScene.js';



var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    pixelArt: true,

    scene: [bootScene, mainMenuScene, gameBootScene1, GameScene, winningScene, gameOverScene]
    
};

new Phaser.Game(config);