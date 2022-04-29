import React from 'react';
import { GApiProvider } from 'react-gapi-auth2';

import Logout from './Logout';

import { OATH_CONFIG } from './constants';

const OathWrapper = ({ children }: { children: any }) => {
  return (
    <GApiProvider clientConfig={OATH_CONFIG}>
      <Logout />
      {children}
    </GApiProvider>
  );
};

export default OathWrapper;
