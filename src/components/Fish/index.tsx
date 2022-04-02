import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {clearInterval, setInterval} from 'timers';

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Fish = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  // Move
  useEffect(() => {
    const interval = setInterval(() => {
      setLeft(left + randomIntFromInterval(-5, 5));
      setTop(top + randomIntFromInterval(-5, 5));
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [left, top]);

  return (
    <div style={{left, top, position: 'absolute'}}>
      <Image
        width={256}
        height={256}
        objectFit="cover"
        src="https://placekitten.com/256/256"
        alt="Fish"
        loader={({width}) => `https://placekitten.com/${width}/${width}`}
        unoptimized
        draggable={false}
      />
    </div>
  );
};

export default Fish;
