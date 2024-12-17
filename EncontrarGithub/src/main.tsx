import './index.css';
import App from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Páginas
import Home from './routes/Home.tsx';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação correta do createRoot

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
