import isLocalhost from '../utils/isLocalhost';

const WSS_END_POINT = isLocalhost() ? 'wss://localhost:3002' : 'wss://carradar.com.ua';

export { WSS_END_POINT };
