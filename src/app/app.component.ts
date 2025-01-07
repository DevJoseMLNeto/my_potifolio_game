import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhaserGame } from '../game/phaser-game.component';
import { CommonModule } from '@angular/common';
import { EventBus } from '../game/EventBus';
import Phaser from 'phaser';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, PhaserGame],
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit
{

    public spritePosition = { x: 0, y: 0 };

    // This is a reference from the PhaserGame component
    @ViewChild(PhaserGame) phaserRef!: PhaserGame;

    ngAfterViewInit()
    {

        EventBus.on('current-scene-ready', (scene: Phaser.Scene) => {
            console.log('Scene ready:', scene.scene.key);
        });

    }

    public addSprite()
    {

        if (this.phaserRef.scene)
        {

            const scene = this.phaserRef.scene;
            
            // Add a new sprite to the current scene at a random position
            const x = Phaser.Math.Between(64, scene.scale.width - 64);
            const y = Phaser.Math.Between(64, scene.scale.height - 64);

            //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
            scene.add.sprite(x, y, 'star');

        }

    }

}
