import React, {useEffect, useState} from 'react';
import TwitchClient from '../../helpers/twitch/client';
import useWindowSize from '../../helpers/window';

const Rod = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const {height, width} = useWindowSize();

  useEffect(() => {
    const client = new TwitchClient(
      posX,
      posY,
      setPosX,
      setPosY,
      width,
      height
    );
    client.init();
  }, [height, width]);

  const SIZE = 64;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="z-20 absolute border-4 border-red-500 rounded-lg p-2"
        style={{
          top: posY + height / 2 - SIZE / 2,
          left: posX + width / 2 - SIZE / 2,
        }}
        src="/rod.png"
        width={128}
        height={128}
      />
    </>
  );
};

export default Rod;
