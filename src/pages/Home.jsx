import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Homeinfo from '../components/Homeinfo';
import bird from '../assets/bird.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(bird));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  // Check if the music state exists in localStorage, default to false if not
  const [isPlayingMusic, setIsPlayingMusic] = useState(() => {
    return localStorage.getItem('isPlayingMusic') === 'true';
  });
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    // Save the current music state to localStorage whenever it changes
    localStorage.setItem('isPlayingMusic', isPlayingMusic);

    // Cleanup when component unmounts or when navigating away
    return () => {
      audioRef.current.pause(); // Pause the audio
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 0.0000001, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-16 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />

          <Sky isRotating={isRotating} />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 let-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
