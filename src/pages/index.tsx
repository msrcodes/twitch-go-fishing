import {useEffect} from 'react';
import Fish from '../components/Fish';
import TwitchClient from '../helpers/twitch/client';

const Homepage = () => {
  useEffect(() => {
    const client = new TwitchClient();
    client.init();
  }, []);

  const fishes = new Array(10).fill(0);

  return (
    <main className="w-screen h-screen overflow-hidden">
      {fishes.map(() => (
        <Fish />
      ))}
    </main>
  );
};

export default Homepage;
