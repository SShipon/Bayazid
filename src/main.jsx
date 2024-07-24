import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router/Router';
import { ThemeProvider } from './context/ThemeContext';
import AuthProvider from './context/useContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <ThemeProvider>
    <AuthProvider >
    <RouterProvider router={router} />
    </AuthProvider>
   </ThemeProvider>
 
  
  </React.StrictMode>,
)
