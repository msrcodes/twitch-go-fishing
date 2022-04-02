/* eslint-disable @typescript-eslint/ban-ts-comment */
import {useEffect} from 'react';

import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {Canvas, useLoader} from '@react-three/fiber';

import Fish from '../components/Fish';
import TwitchClient from '../helpers/twitch/client';

const Homepage = () => {
  useEffect(() => {
    const client = new TwitchClient();
    client.init();
  }, []);

  const fishes = new Array(10).fill(0);

  // TODO: this is hacky eks dee
  const obj = useLoader(OBJLoader, 'http://localhost:3000/rod.obj');

  return (
    <main className="w-screen h-screen overflow-hidden">
      <Canvas className="z-50">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <primitive object={obj} />
      </Canvas>
      {fishes.map(() => (
        <Fish size={64} />
      ))}
    </main>
  );
};

export default Homepage;
