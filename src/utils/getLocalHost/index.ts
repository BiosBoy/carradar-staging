import isLocalDev from '../isLocalDev';

const LOCAL_FRONTEND_SERVER = 'https://localhost:3000';
const LOCAL_BACKEND_SERVER = 'https://localhost:3002';
const REMOTE_SERVER = 'https://carradar.com.ua';

const getLocalHost = () => {
  const { isLocalBackend, isLocalFrontend } = isLocalDev();

  if (isLocalFrontend) {
    return LOCAL_FRONTEND_SERVER;
  }

  if (isLocalBackend) {
    return LOCAL_BACKEND_SERVER;
  }

  return REMOTE_SERVER;
};

export default getLocalHost;
