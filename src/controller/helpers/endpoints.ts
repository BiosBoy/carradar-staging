import getLocalHost from '../../utils/getLocalHost';

// const LOCAL_FRONTEND_SERVER = 'https://localhost:3000'
// const LOCAL_BACKEND_SERVER = 'https://localhost:3002'
// const REMOTE_SERVER = 'https://carradar.com.ua'

const getServerURL = () => getLocalHost();

export default getServerURL;
