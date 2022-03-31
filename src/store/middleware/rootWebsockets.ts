import { WSS_END_POINT } from '../../constants/api'
import { WS_CONNECTED, WS_DISCONNECTED, WS_SEND_MESSAGE } from '../../constants'

import { requestError } from '../../controller/actions'

const socketMiddleware = (store) => {
  const socket = new WebSocket(WSS_END_POINT)

  // We dispatch the actions for further handling here:
  socket.onopen = () => store.dispatch({ type: WS_CONNECTED })
  socket.onclose = () => store.dispatch({ type: WS_DISCONNECTED })
  socket.onmessage = (payload) => {
    if (payload.data === 'pong') {
      return
    }

    const data = JSON.parse(payload.data)

    if (!data || data.error) {
      store.dispatch(requestError((payload as any)?.error))

      return
    }

    store.dispatch({ type: data.type, payload: data.data })
  }

  setInterval(() => {
    socket.send('ping')
  }, 10000)

  return (next: (action: any) => void) => (action: any) => {
    // We're acting on an action with type of WS_SEND_MESSAGE.
    // Don't forget to check if the socket is in readyState == 1.
    // Other readyStates may result in an exception being thrown.

    if (action.type && action.type === WS_SEND_MESSAGE && socket.readyState === 1) {
      socket.send(JSON.stringify(action.payload))
    }

    return next(action)
  }
}

export default socketMiddleware
