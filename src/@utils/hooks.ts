import { useLocale } from '@lang';
import dayjs from 'dayjs';
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

export function useDayJs(date: Date, format?: string) {
  const { locale } = useLocale();
  const output = useMemo(() => {
    let obj = dayjs(date).locale(locale);
    if (format) return obj.format(format);
    return obj;
  }, [locale, date, format]);

  return output;
}
