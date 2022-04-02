import {Canvas, useLoader} from '@react-three/fiber';
import React, {useEffect} from 'react';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

const Rod = () => {
  const obj = useLoader(OBJLoader, 'http://localhost:3000/rod.obj');

  useEffect(() => {
    obj.translateY(-1.9);
    obj.rotateY(Math.PI / 16);
  }, []);

  return (
    <Canvas
      className="z-50 border border-red-400"
      style={{position: 'absolute', width: 300, height: 300}}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={obj} />
    </Canvas>
  );
};

export default Rod;
