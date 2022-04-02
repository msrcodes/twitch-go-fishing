import {useEffect} from 'react';
import TwitchClient from '../helpers/twitch/client';
import Image from 'next/image';

const Homepage = () => {
  useEffect(() => {
    const client = new TwitchClient();
    client.init();
  }, []);

  return (
    <main>
      {/* <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}
      
      <img 
        src='https://placekitten.com/1920/973'
        className="z-0 ...">
      </img>
      {/* <Image
        width={1920}
        height={400}
        objectFit="cover"
        src="https://placekitten.com/256/256"
        alt="Fish"
        loader={() => 'https://placekitten.com/1000/500'}
      /> */}
    </main>
  );
};

export default Homepage;
