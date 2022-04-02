import React, {useEffect, useState} from 'react';
import TwitchClient from '../../helpers/twitch/client';

const Rod = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const client = new TwitchClient(posX, posY, setPosX, setPosY);
    client.init();
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="z-20 absolute"
        style={{top: posY, left: posX}}
        src="/rod.png"
        width={64}
        height={64}
      />
    </>
  );
};

export default Rod;
