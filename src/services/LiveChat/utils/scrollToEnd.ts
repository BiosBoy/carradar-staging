const scrollToEnd = ({
  isSmooth,
  withDelay,
  isPreventSmartScroll
}: { isSmooth?: boolean; withDelay?: boolean; isPreventSmartScroll?: boolean } = {}) => {
  const elem = document.querySelector('#messages');
  const isSmallOffset = elem.scrollHeight - elem.scrollTop < 500;

  if (isPreventSmartScroll && !isSmallOffset) {
    return;
  }

  const scroll = () =>
    elem.scroll({
      top: 100000,
      behavior: isSmooth || isSmallOffset ? 'smooth' : 'auto'
    });

  if (withDelay) {
    setTimeout(() => scroll(), 100);

    return;
  }

  scroll();
};

export default scrollToEnd;
