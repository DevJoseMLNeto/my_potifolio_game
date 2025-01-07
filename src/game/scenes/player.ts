export const createPlayer = (scene: Phaser.Scene, x: integer, y:integer) => {
    const player = scene.physics.add.sprite(x,y, 'ash')
    createAnimations(scene)
    return player
}


export const loadSprites = (scene: Phaser.Scene): void => {


    scene.load.spritesheet('ash','../../assets/map/ashdown.png',{
        frameWidth: 29,
        frameHeight: 32,
        spacing:14
    })

    scene.load.spritesheet('ashWalk','../../assets/map/ashdown.png',{
        frameWidth: 28.75,
        frameHeight: 32,
        spacing:0,
    })

} 

export const createAnimations = (scene : Phaser.Scene)=>{
    scene.anims.create({
        key: 'ashWalk',
        frames: scene.anims.generateFrameNames('ashWalk',{
            start: 0,
            end: 3
        }),
        frameRate: 28.75,
        repeat: -1,
        yoyo: true
        
    })
}
