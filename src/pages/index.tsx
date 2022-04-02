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
        src="https://placekitten.com/1920/1080"
        alt="Fish"
        loader={({width}) => `https://placekitten.com/${width}/${width}`}
        unoptimized
        layout="fill"
        draggable={false}
      />

      <Rod />

      {fishes.map((_fish, i) => (
        <Fish key={i} size={64} />
      ))}
    </main>
  );
};

export default Homepage;
