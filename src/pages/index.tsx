/* eslint-disable @typescript-eslint/ban-ts-comment */
import {useEffect} from 'react';

import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {Canvas, useFrame, useLoader} from '@react-three/fiber';

import Fish from '../components/Fish';
import TwitchClient from '../helpers/twitch/client';

const Homepage = () => {
  useEffect(() => {
    const client = new TwitchClient();
    client.init();
  }, []);

  const fishes = new Array(10).fill(0);

  const obj = useLoader(OBJLoader, 'http://localhost:3000/rod.obj');

  useEffect(() => {
    obj.translateY(-1.9);
    obj.rotateY(Math.PI / 16);
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden">
      <Canvas
        className="z-50 border border-red-400"
        style={{position: 'absolute', width: 300, height: 300}}
      >
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
