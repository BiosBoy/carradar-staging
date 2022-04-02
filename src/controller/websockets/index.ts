import { WSS_END_POINT } from '../../constants/api';

import websocketsHelpers from './parser';

// @ts-ignore
const setupSocket = ({ _getState, _dispatch }) => {
  if (typeof WebSocket === 'undefined') {
    return null;
  }

  const socket = new WebSocket(WSS_END_POINT);

  socket.onopen = () => {
    console.log('websocket is open!');
  };

  socket.onmessage = (event) => {
    const { receiveData } = websocketsHelpers();

    console.log('Data is received:', receiveData(event));
  };

  socket.onclose = () => {
    console.log('websocket is closed!');
  };

  return socket;
};

export default setupSocket;
