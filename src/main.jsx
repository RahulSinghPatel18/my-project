import React from 'react';
import App from './App.jsx';
import './index.css';
import ReactDOM from "react-dom/client"; // Corrected "form" to "from"
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import ShopContextProvider from './context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </BrowserRouter>
);
