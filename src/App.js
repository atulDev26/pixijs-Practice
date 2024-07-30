
import './App.css';
import AnimatedSpriteJet from './Components/AnimatedSpriteJet';
import ShapesList from './Components/ShapesList';
import { PixiProvider } from './Providers/PixiContext';

function App() {
  return (
    // <PixiProvider>
    // </PixiProvider>
    <>
      <AnimatedSpriteJet />
      <ShapesList />
    </>
  );
}

export default App;
