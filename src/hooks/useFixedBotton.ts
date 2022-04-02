import { useLayoutEffect } from 'react';

const useFixedBottom = (elemID) => {
  useLayoutEffect(() => {
    const elem = document.getElementById(elemID);

    const _handleScroll = () => {
      if (!elem) {
        return;
      }

      const cookieRefHeight = elem.getBoundingClientRect().height;

      elem.style.top = `${window.innerHeight - cookieRefHeight}px`;
    };

    window.addEventListener('scroll', _handleScroll);
    window.addEventListener('resize', _handleScroll);

    return () => {
      window.removeEventListener('scroll', _handleScroll);
      window.removeEventListener('resize', _handleScroll);
    };
  }, []);
};

export default useFixedBottom;
