import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthPage from './pages/AuthPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import TodayPage from './pages/TodayPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/goals',
    element: <TodayPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
