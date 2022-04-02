import {useEffect} from 'react';
import Fish from '../components/Fish';
import TwitchClient from '../helpers/twitch/client';
import Image from 'next/image';

const Homepage = () => {
  useEffect(() => {
    const client = new TwitchClient();
    client.init();
  }, []);

  const fishes = new Array(10).fill(0);

  return (
    <main className="w-screen h-screen overflow-hidden">
    <img 
        src='https://placekitten.com/1920/973'
        className="z-0 ...">
      </img>
      {fishes.map(() => (
        <Fish size={64} />
      ))}
    </main>
  );
};

export default Homepage;
