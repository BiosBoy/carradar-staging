const setErrorMessage = (messages) =>
  messages.map((msg, inx) => {
    return inx === messages.length - 1
      ? {
          ...msg,
          error: true
        }
      : msg
  })

export default setErrorMessage
