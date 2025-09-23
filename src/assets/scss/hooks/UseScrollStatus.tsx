import { useEffect, useRef, useCallback } from 'react';

type ScrollDirection = 'up' | 'down' | null;

const UseScrollStatus = () => {
  const scrollEndTimeRef = useRef<number | null>(null);
  const oldScrTopRef = useRef(0);
  const lastDirectionRef = useRef<ScrollDirection>(null);

  const updateBodyClasses = useCallback(
    (
      isScrollFirst: boolean,
      isScrollLast: boolean,
      isScrollActive: boolean,
      isScrollStopped: boolean,
      direction: ScrollDirection
    ) => {
      document.body.classList.toggle('is-scroll-first', isScrollFirst);
      document.body.classList.toggle('is-scroll-last', isScrollLast);
      document.body.classList.toggle('is-scrolled', !isScrollFirst);

      document.body.classList.toggle('is-scroll-active', isScrollActive);
      document.body.classList.toggle('is-scroll-stoped', isScrollStopped);

      if (direction === 'up') {
        document.body.classList.add('is-scroll-up');
        document.body.classList.remove('is-scroll-down');
      } else if (direction === 'down') {
        document.body.classList.add('is-scroll-down');
        document.body.classList.remove('is-scroll-up');
      } else {
        document.body.classList.remove('is-scroll-up', 'is-scroll-down');
      }
    },
    []
  );

  useEffect(() => {
    const initialScrollY = window.scrollY;
    const initialIsFirst = initialScrollY === 0;
    const initialIsLast = Math.ceil(initialScrollY + window.innerHeight) >= document.documentElement.scrollHeight;
    oldScrTopRef.current = initialScrollY;

    updateBodyClasses(initialIsFirst, initialIsLast, false, true, null);

    const handleScroll = () => {
      const curScrTop = window.scrollY;

      if (oldScrTopRef.current > curScrTop && lastDirectionRef.current !== 'up') {
        lastDirectionRef.current = 'up';
      } else if (oldScrTopRef.current < curScrTop && lastDirectionRef.current !== 'down') {
        lastDirectionRef.current = 'down';
      }
      oldScrTopRef.current = curScrTop;

      document.body.classList.add('is-scroll-active');
      document.body.classList.remove('is-scroll-stoped');

      if (scrollEndTimeRef.current !== null) {
        clearTimeout(scrollEndTimeRef.current);
      }

      scrollEndTimeRef.current = window.setTimeout(() => {
        document.body.classList.remove('is-scroll-active');
        document.body.classList.add('is-scroll-stoped');
      }, 100);

      const isScrFirst = curScrTop === 0;
      const isScrLast = Math.ceil(curScrTop + window.innerHeight) >= document.documentElement.scrollHeight;

      updateBodyClasses(isScrFirst, isScrLast, true, false, lastDirectionRef.current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollEndTimeRef.current !== null) {
        clearTimeout(scrollEndTimeRef.current);
      }
    };
  }, [updateBodyClasses]);
};

export default UseScrollStatus;