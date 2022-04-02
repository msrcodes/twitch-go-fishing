/* eslint-disable @typescript-eslint/ban-ts-comment */
import {useEffect} from 'react';

import Fish from '../components/Fish';
import TwitchClient from '../helpers/twitch/client';
import Rod from '../components/Rod';

const Homepage = () => {
  useEffect(() => {
    const client = new TwitchClient();
    client.init();
  }, []);

  const fishes = new Array(10).fill(0);

  return (
    <main className="w-screen h-screen overflow-hidden">
      <Rod />
      {fishes.map((_fish, i) => (
        <Fish key={i} size={64} />
      ))}
    </main>
  );
};

export default Homepage;
