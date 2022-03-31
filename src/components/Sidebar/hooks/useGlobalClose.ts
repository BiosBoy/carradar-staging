import { useEffect } from 'react'

const useGlobalClose = (isOpen: boolean, onClickClose: () => void) => {
  const _handleGlobalCloseClick = (e: any) => {
    if (isOpen && e.target.id === 'sidebarBlock') {
      onClickClose()
    }
  }

  useEffect(() => {
    window.addEventListener('click', _handleGlobalCloseClick)

    return () => window.removeEventListener('click', _handleGlobalCloseClick)
  }, [isOpen])
}

export default useGlobalClose
