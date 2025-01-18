import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  function callback(event: any) {
    setMatches(event?.matches);
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList?.addEventListener('change', callback);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList?.removeEventListener('change', callback);
    };
  }, [query]);

  return matches;
};
