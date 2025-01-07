import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import { createPlayer, loadSprites } from './player';


export class Game extends Scene{

    constructor(player: any)
    {   
        super('Game');
    }

   

    preload() 
    {
        this.load.image("housesIMG", "../../assets/map/houses/Exterrior/ready_to_use_houses.png");
        this.load.image("decorativeIMG", "../../assets/map/houses/Exterrior/floor_and_deoratives.png");
        this.load.image("baseIMG", "../../assets/map/Sprites2Back.png");
        this.load.image("treeIMG", "../../assets/map/Sprites2Back.png");
        this.load.image("placaIMG", "../../assets/map/Game Boy Advance - Pokemon Emerald - Petalburg Woods.png");
        this.load.tilemapTiledJSON("map", "../../assets/map/mapa.json")
        loadSprites(this)
    }

    create()
    {   
    
        const map = this.make.tilemap({key: "map"})
        map.addTilesetImage("Sprites2Back", "baseIMG")
        map.addTilesetImage("Sprites2Back", "treeIMG")
        map.addTilesetImage("ready_to_use_houses", "housesIMG")
        map.addTilesetImage("floor_and_deoratives", "decorativeIMG")
        map.addTilesetImage("Game Boy Advance - Pokemon Emerald - Petalburg Woods", "placaIMG")
        map.createLayer("base", "Sprites2Back", 0,0 )
        map.createLayer("decoratives", "floor_and_deoratives", 0,0 )
        map.createLayer("trees1", "Sprites2Back", 0,0 )
        map.createLayer("trees2", "Sprites2Back", 0,0 )
        map.createLayer("placa", "Game Boy Advance - Pokemon Emerald - Petalburg Woods", 0,0 )
        map.createLayer("houses", "ready_to_use_houses", 0,0 )
        let player = createPlayer(this, 783.33, 685.33)
        player.anims.play('ashWalk', true)

    }
}
