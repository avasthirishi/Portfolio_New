import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// **This is where your global styles belong!**
import './index.css' // Your Tailwind and global styles
import '@fontsource/roboto/400.css' // Global fonts (best option)
import '@fontsource/roboto/700.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
