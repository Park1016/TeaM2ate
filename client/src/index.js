import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from 'App';
import NotFound from 'pages/NotFound';
import Main from 'pages/Main';
import Post from 'pages/Post';
import Login from 'pages/Login';
import Mypage from 'pages/Mypage';
import Write from 'pages/Write';
import Update from 'pages/Update';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Main />},
      {path: 'post/:id', element: <Post />},
      {path: 'login', element: <Login />},
      {path: 'mypage', element: <Mypage />},
      {path: 'post/write', element: <Write />},
      {path: 'post/update/:id', element: <Update />} 
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
