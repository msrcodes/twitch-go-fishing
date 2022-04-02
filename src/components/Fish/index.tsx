import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {clearInterval, setInterval} from 'timers';

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

type Coord = [number, number];

const directions: Coord[] = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, -1],
  [1, 1],
];

const MAX_TIME = 100;

interface FishProps {
  size: number;
}

const Fish = ({size = 64}: FishProps) => {
  const [left, setLeft] = useState(400);
  const [top, setTop] = useState(400);

  const [direction, setDirection] = useState(
    directions[randomIntFromInterval(0, directions.length - 1)]
  );
  const [time, setTime] = useState(MAX_TIME);

  // Handle direction
  useEffect(() => {
    if (time < 0) {
      setTime(MAX_TIME);

      setDirection(directions[randomIntFromInterval(0, directions.length - 1)]);
    }
  }, [time]);

  // Move in direction
  useEffect(() => {
    const [toAddLeft, toAddTop] = direction;

    const interval = setInterval(() => {
      setLeft(left + toAddLeft);
      setTop(top + toAddTop);

      setTime(time - 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [left, top, direction]);

  return (
    <div style={{left, top, position: 'absolute'}} className="fish">
      <Image
        width={size}
        height={size}
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
