import { IState } from '../interfaces/IStore';

import isLogged from '../utils/isLogged';

const initialState: IState = {
  locale: 'ua',
  appName: 'CarRadar',
  isLogged: isLogged(),
  error: null,
  success: null,
  subscribeNewsletter: {
    userEmail: null,
    isInProgress: false,
    error: null,
    success: null
  }
};

export default initialState;
