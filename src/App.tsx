import React from 'react';
import { getTime, sayHello } from './utils';
import ReactLogo from './assets/react-logo.svg';

const App = () => {
  sayHello();

  return (
    <div>
      <img src={ReactLogo} alt="React Logo" />
      {getTime()}
    </div>
  );
};

export default App;
