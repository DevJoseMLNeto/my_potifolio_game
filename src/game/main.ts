import { Game as MainGame } from './scenes/Game';
import { AUTO, Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 1600,
    height: 1280,
    parent: 'game-container',
    backgroundColor: '#ffffff',
    scene: [
        MainGame
    ],
    physics:{
        default: 'arcade',
        arcade: {
            gravity:{y:0,x:0}
        }
    }
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;
