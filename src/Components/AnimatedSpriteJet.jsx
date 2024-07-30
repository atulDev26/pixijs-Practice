import { Application, Assets, AnimatedSprite, Texture } from 'pixi.js'
import React, { useEffect, useRef } from 'react'

const AnimatedSpriteJet = () => {
    const pixiContainer = useRef(null);

    useEffect(() => {
        // Create a new application

        const app = new Application({
            backgroundColor: 0x1099bb,
            resizeTo: window,
            antialias: true
        });

        // Append the application canvas to the container
        app.view.style.position = 'absolute';
        pixiContainer.current.appendChild(app.view);

        const loadAssets = async () => {
            // Load the animation sprite sheet
            try {
                await Assets.load('https://pixijs.com/assets/spritesheet/fighter.json');
                const frames = [];

                for (let i = 0; i < 30; i++) {
                    const val = i < 10 ? `0${i}` : i;
                    frames.push(Texture.from(`rollSequence00${val}.png`));
                }

                const anim = new AnimatedSprite(frames);
                anim.x = app.screen.width / 2;
                anim.y = app.screen.height / 2;
                anim.anchor.set(0.5);
                anim.animationSpeed = 0.5;
                anim.play();
                app.stage.addChild(anim);

                // Animate the rotation
                app.ticker.add(() => {
                    anim.rotation += 0.01;
                });
            } catch (error) {
                console.log(error)
            }
        };

        loadAssets();
        // Cleanup function to remove the app on component unmount
        return () => {
            app.destroy(true, true);
        };
    }, [])
    return <div ref={pixiContainer} style={{ width: '100%', height: '100vh' }} />
}

export default AnimatedSpriteJet

// import { Application, Assets, AnimatedSprite, Texture } from 'pixi.js'
// import React, { useEffect, useRef } from 'react'
// import { usePixiApp } from '../Providers/PixiContext';

// const AnimatedSpriteJet = () => {
//     const pixiContainer = useRef(null);
//     const app = usePixiApp();
//     useEffect(() => {
//         pixiContainer.current.appendChild(app?.view);
//         // Create a new application



//         // Append the application canvas to the container

//         const loadAssets = async () => {
//             // Load the animation sprite sheet
//             try {
//                 await Assets.load('https://pixijs.com/assets/spritesheet/fighter.json');
//                 const frames = [];

//                 for (let i = 0; i < 30; i++) {
//                     const val = i < 10 ? `0${i}` : i;
//                     frames.push(Texture.from(`rollSequence00${val}.png`));
//                 }

//                 const anim = new AnimatedSprite(frames);
//                 anim.x = app.screen.width / 2;
//                 anim.y = app.screen.height / 2;
//                 anim.anchor.set(0.5);
//                 anim.animationSpeed = 0.5;
//                 anim.play();
//                 app.stage.addChild(anim);

//                 // Animate the rotation
//                 app.ticker.add(() => {
//                     anim.rotation += 0.01;
//                 });
//             } catch (error) {
//                 console.log(error)
//             }
//         };

//         loadAssets();
//         // Cleanup function to remove the app on component unmount
//         return () => {
//             app?.destroy(true, true);
//         };
//     }, [app])
//     return <div ref={pixiContainer} style={{ width: '100%', height: '100vh' }} />
// }

// export default AnimatedSpriteJet