import React, { useState, memo } from 'react';
import { SignInButton } from 'react-gapi-auth2';

import styles from './index.scss';

const GoogleOAthLoginButton = ({ callback }: { callback: (data: any) => void; }) => {
  const [userData, setUserData] = useState(null);

  const getOnSignInData = googleUser => {
    const profile = googleUser.getBasicProfile();

    const newUserData = {
      id: profile.getId(),
      username: profile.getName().includes(' ') ? profile.getName().split(' ')[0] : profile.getName(),
      usersurname: profile.getName().includes(' ') ? profile.getName().split(' ')[1] : '',
      email: profile.getEmail(),
      imagesrc: profile.getImageUrl(),
      token: googleUser.getAuthResponse(true)
    };

    // prevent extensive rerenders
    setUserData(newUserData);

    return newUserData;
  };

  const _createLoginButtonConfig = () => {
    return {
      width: 200,
      height: 50,
      theme: 'light' as 'light',
      onsuccess: data => {
        if (userData) {
          return;
        }

        callback(getOnSignInData(data));
      },
      onfailure: error => console.log(error, 'error')
    };
  };

  return (
    <div className={styles.loginWrap}>
      <SignInButton options={_createLoginButtonConfig()} />
    </div>
  );
};

export default memo(GoogleOAthLoginButton);
