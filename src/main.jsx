import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import router from './allRoutes/Router.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './auth/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
