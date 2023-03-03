import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedLayout from './components/ProtectedLayout';
import TokenProvider from './components/TokenProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      }
    ]
  },
  {
    path: "/s",
    element: <ProtectedLayout/>,
    children: [
      {
        path: "/profile",
        element: <Profile/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
