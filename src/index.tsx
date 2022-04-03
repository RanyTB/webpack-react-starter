import React from 'react';
import * as ReactDom from 'react-dom/client';
import App from './App';
import './global_styles.css';

const rootElement = document.getElementById('app') as HTMLElement;

const root = ReactDom.createRoot(rootElement);
root.render(<App />);
