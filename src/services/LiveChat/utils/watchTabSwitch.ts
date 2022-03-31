const watchTabSwitch = () => {
  document.addEventListener('visibilitychange', () => {
    const isPageActive = !document.hidden

    if (!isPageActive) {
      const normalizedTitle = document.title.replace(/^(\(1\) )/gi, '')

      // @ts-ignore
      document.title = `${window._chat_new_messages_ ? `(${window._chat_new_messages_})` : ''} ${normalizedTitle}`

      return
    }

    document.title = document.title.replace(/^\(\d\)/i, '')
  })
}

export default watchTabSwitch
