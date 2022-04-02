import { IBrowser } from 'redux-responsive';

import { IStore as IHome } from '../routes/Home/interfaces/IStore';
import { IStore as IRegistration } from '../routes/Registration/interfaces/IStore';
import { IStore as ILogin } from '../routes/Login/interfaces/IStore';
import { IStore as ILogout } from '../routes/Logout/interfaces/IStore';
import { IStore as IProfile } from '../routes/Profile/interfaces/IStore';
import { IStore as IChat } from '../services/LiveChat/interfaces/IStore';
import { IStore as ICookie } from '../services/CookiePanel/interfaces/IStore';

export type TLanguages = 'en' | 'ru' | 'ua';

export interface IAsyncReducersStore {
  asyncReducers: object;
}

export interface IState {
  locale: TLanguages;
  appName: string;
  error: string;
  isLogged: boolean;
  isDarkMode: boolean;
  success: string;
  subscribeNewsletter: {
    userEmail: null;
    isInProgress: false;
    error: boolean;
    success: boolean;
  };
}

export interface IStore {
  app: IState;
  home?: IHome;
  registration?: IRegistration;
  login?: ILogin;
  logout?: ILogout;
  profile?: IProfile;
  browser?: IBrowser & any;
  chat?: IChat;
  cookie?: ICookie;
}
