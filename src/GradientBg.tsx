import { useState, useEffect, useCallback, useRef } from 'react';

export default function GraidentBg({ children }) {
  const [scrollRatio, setScrollRatio] = useState(0);
  const [height, setHeight] = useState(0)
  const ref = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollRatio(position / (height - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height, setScrollRatio]);

  useEffect(() => {
    setHeight(ref.current!.clientHeight)
  }, [ref.current])

  return <div
    ref={ref} className="bg-no-repeat bg-fixed overflow-auto"
    style={{
      backgroundImage: 'linear-gradient(160deg, #4A9AC7, #75B2D5, #CBE2EF, #D9AFD9)',
      backgroundSize: '400% 400%',
      backgroundPosition: `${scrollRatio * 100}% ${scrollRatio * 80}%`
    }}
  >
    {children}
  </div>
}