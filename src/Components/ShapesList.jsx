import { Application, Graphics, Sprite, Text, TextStyle, Texture } from 'pixi.js';
import React, { useEffect, useRef } from 'react'
import download from "../assets/download.jpg"

const ShapesList = () => {
    const shapes = useRef(null);
    useEffect(() => {
        const app = new Application({
            backgroundColor: 0xc2c2c3,
            resizeTo: window,
        });
        shapes.current.appendChild(app.view);
        const rectangle = new Graphics();
        rectangle.beginFill(0x66CCFF);
        rectangle.drawRect(250, 300, 200, 150);
        rectangle.endFill();
        app.stage.addChild(rectangle);

        const style = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fill: '#ffcc00',
        })

        const myText = new Text('Hello world', style);
        app.stage.addChild(myText);
        myText.text = 'text Change';

        // app.ticker.add(delta => loop(delta));

        // function loop(delta) {
        //     const rect = new Graphics();
        //     rect.beginFill(0xffcc00);
        //     rect.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 250, 10);
        //     rect.endFill();
        //     app.stage.addChild(rect);
        // }

        const texture = Texture.from(download);
        const sprite1 = new Sprite(texture);
        app.stage.addChild(sprite1);

        return () => {
            app.destroy(true, true);
        };
    }, [])

    return (
        <div ref={shapes} style={{ width: '100%', height: '100vh' }} />
    )
}

export default ShapesList


// src/components/ShapesList.js
// import { Graphics } from 'pixi.js';
// import React, { useEffect, useRef } from 'react';
// import { usePixiApp } from '../Providers/PixiContext';

// const ShapesList = () => {
//     const shapes = useRef(null);
//     const app = usePixiApp()
//     console.dir(app);
//     useEffect(() => {
//         if (app) {
//             shapes?.current?.appendChild(app?.view);
//             const rectangle = new Graphics();
//             rectangle.beginFill(0x66CCFF);
//             rectangle.drawRect(250, 300, 200, 150);
//             rectangle.endFill();
//             app?.stage?.addChild(rectangle);

//             return () => {
//                 app?.stage?.removeChild(rectangle);
//                 rectangle?.destroy();
//             };
//         }
//     }, [app]);

//     return <div ref={shapes} style={{ width: '100%', height: '100vh' }} />;
// };

// export default ShapesList;

