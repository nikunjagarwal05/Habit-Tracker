import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Homepage from './components/Homepage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/kaisen',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
