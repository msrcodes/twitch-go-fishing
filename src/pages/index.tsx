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
      <Image
        width={1920}
        height={1080}
        objectFit="cover"
        src="https://placekitten.com/1920/1080"
        alt="Fish"
        loader={({width}) => `https://placekitten.com/${width}/${width}`}
        unoptimized
        layout="fill"
        draggable={false}
      />

      {fishes.map((_fish, i) => (
        <Fish key={i} size={64} />
      ))}
    </main>
  );
};

export default Homepage;
