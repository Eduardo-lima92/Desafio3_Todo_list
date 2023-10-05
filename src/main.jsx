import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './global.scss';
import { DB } from './mock/task.mock.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Organizacao } from './componentes/Organizacao/Organizacao.jsx';


const router = createBrowserRouter([

  {
    path:"/",
    element: <App data={DB}/>
  },

  {
    path:"/Organizacao",
    element: <Organizacao/>
  }





]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
