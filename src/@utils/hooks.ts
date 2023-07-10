import { useEffect, useMemo, useState } from 'react';

export function useIsInViewport(ref, defaultValue = false) {
  const [isIntersecting, setIsIntersecting] = useState(defaultValue);

  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), []);

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
