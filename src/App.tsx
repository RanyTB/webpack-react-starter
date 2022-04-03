import React from 'react';
import { getTime, sayHello } from './utils';

const App = () => {
  sayHello();

  return <div>{getTime()}</div>;
};

export default App;
