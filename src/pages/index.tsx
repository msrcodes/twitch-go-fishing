import Fish from '../components/Fish';
import Image from 'next/image';
import Rod from '../components/Rod';

const Homepage = () => {
  const fishes = new Array(10).fill(0);

  return (
    <main className="w-screen h-screen overflow-hidden">
      <Image
        width={1920}
        height={1080}
        objectFit="cover"
        src="/bg.png"
        alt="Fish"
        loader={({width}) => '/bg.png'}
        unoptimized
        layout="fill"
        draggable={false}
        className="z-20"
      />

      <Rod />

      {fishes.map((_fish, i) => (
        <Fish key={i} size={64} />
      ))}
    </main>
  );
};

export default Homepage;
