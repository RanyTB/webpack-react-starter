import React from 'react';
import * as ReactDom from 'react-dom/client';
import App from './App.jsx';
import "./global_styles.css"

const rootElement = document.getElementById('app');
 
const root = ReactDom.createRoot(rootElement);
root.render(<App />);
