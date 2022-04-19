import { useEffect } from 'react';
import { useGoogleAuth } from 'react-gapi-auth2';

import isLogged from '../../utils/isLogged';

const Logout = () => {
  const { googleAuth } = useGoogleAuth();

  useEffect(() => {
    if (isLogged()) {
      googleAuth && googleAuth.signOut();
    }
  }, []);

  return null;
};

export default Logout;
