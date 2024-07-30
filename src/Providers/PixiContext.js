// import { Application } from 'pixi.js';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// const PixiContext = createContext(null);

// export const usePixiApp = () => useContext(PixiContext);

// export const PixiProvider = ({ children }) => {
//     const [app, setApp] = useState(null);

//     useEffect(() => {
//         const pixiApp = new Application({
//             backgroundColor: 0xc2c2c3,
//             resizeTo: window,
//         });
//         setApp(pixiApp);
//         console.log(pixiApp);

//         // Cleanup function to remove the app on component unmount
//         return () => {
//             pixiApp.destroy(true, true);
//         };
//     }, [app]);

//     return (
//         <PixiContext.Provider value={app}>
//             {children}
//         </PixiContext.Provider>
//     );
// };
