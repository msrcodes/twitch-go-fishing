import Fish from '../components/Fish';
import Image from 'next/image';
import Rod from '../components/Rod';
import {useState} from 'react';

const Homepage = () => {
  const fishes = new Array(20).fill(0);

  const [score, setScore] = useState(0);

  const addScore = () => {
    setScore(score + 1);
  };

  return (
    <main className="w-screen h-screen overflow-hidden">
      <div className="z-40 absolute text-3xl top-8 left-8 font-extrabold text-white">
        Fish Caught: {score}
      </div>

      <Image
        objectFit="cover"
        src="/bg.png"
        alt="Fish"
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        loader={({width}) => '/bg.png'}
        unoptimized
        layout="fill"
        draggable={false}
        className="z-20"
      />

      <Rod addScore={addScore} />

      {fishes.map((_fish, i) => (
        <Fish key={i} size={64} />
      ))}
    </main>
  );
};

export default Homepage;
