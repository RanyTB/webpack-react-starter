import React from 'react';
import { getTime, sayHello } from './utils';
import ReactLogo from './assets/react-logo.svg';
import TestLogo from './assets/test.png';

const App = () => {
  sayHello();

  return (
    <div>
      <div>
        <img src={ReactLogo} alt="React Logo" />
      </div>
      <div>
        <img
          style={{ height: '48px', width: '48px' }}
          src={TestLogo}
          alt="React Logo"
        />
      </div>
      {getTime()}
    </div>
  );
};

export default App;
