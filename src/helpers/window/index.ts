import {useState, useEffect} from 'react';

interface WindowSize {
  /** The height of the screen, in px */
  height: number;
  /** The width of the screen, in px */
  width: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({height: window.innerHeight, width: window.innerWidth});
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
