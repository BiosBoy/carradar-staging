import { useEffect } from 'react';

const useGlobalClose = (isOpen: boolean, onClickClose: () => void) => {
  const _handleGlobalCloseClick = (e) => {
    console.log(e.target.id, 'e.target.id');
    if (isOpen && document.getElementById('sidebarBlock').contains(e.target)) {
      onClickClose();
    }
  };

  useEffect(() => {
    window.addEventListener('click', _handleGlobalCloseClick);

    return () => {
      window.removeEventListener('click', _handleGlobalCloseClick);
    };
  }, [isOpen]);
};

export default useGlobalClose;
