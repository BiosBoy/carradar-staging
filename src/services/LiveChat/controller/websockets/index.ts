import { WSS_END_POINT } from '../../../../constants/api';
import websocketsHelpers from '../../../../controller/websockets/parser';

import { addToStore } from '../helpers/localStorage';
import scrollToEnd from '../../utils/scrollToEnd';
import { receiveMessage } from '../actions';

const runWebsockets = (dispatch) => {
  if (typeof WebSocket === 'undefined') {
    return null;
  }

  const socket = new WebSocket(WSS_END_POINT);

  socket.onopen = () => {
    console.log('websocket is open!');
  };

  socket.onmessage = (event: MessageEvent<any> & { user: string; message: string; }) => {
    console.log(event, 'EVENT@');

    const { receiveData } = websocketsHelpers();

    if (event.user === 'User') {
      return;
    }

    dispatch(receiveMessage({ text: event.message, timestamp: Date.now() }));
    addToStore({ storeKey: 'chat-data', storeData: { type: 'agent', text: event.message, timestamp: Date.now() } });
    scrollToEnd({ withDelay: true, isSmooth: true });

    console.log('Data is received:', receiveData(event));
  };

  socket.onclose = () => {
    console.log('websocket is closed!');
  };

  return socket;
};

export default runWebsockets;
