import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './Routes/Home/App.jsx'
import Welcome from './Components/Welcome/Welcome.jsx'


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <App />,
        children: [
          {
            index: true,
            element: <Welcome />
          }
        ]
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
