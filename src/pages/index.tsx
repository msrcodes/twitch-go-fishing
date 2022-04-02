import {useEffect} from 'react';
import TwitchClient from '../helpers/twitch/client';

const Homepage = () => {
  useEffect(() => {
    const client = new TwitchClient();
    client.init();
  }, []);

  return (
    <main>
      <h1 className="text-red-500">Hello World!</h1>
    </main>
  );
};

export default Homepage;
