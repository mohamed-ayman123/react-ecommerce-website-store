// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import ReactDOM from 'react-dom/client'
// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// // import CartProvidert from './components/context/CartContext.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename='/'>
//     <CartProvidert>
//     <App />
//     </CartProvidert>
//     </BrowserRouter>
//   </React.StrictMode>,
// )
///////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import CartProvider from "./components/context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider>
                <App />
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
);