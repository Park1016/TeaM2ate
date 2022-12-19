import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from 'App';
import NotFound from 'pages/NotFound/NotFound';
import Main from 'pages/Main/Main';
import Post from 'pages/Post/Post';
import Mypage from 'pages/Mypage/Mypage';
import Write from 'pages/Post/Write';
import Update from 'pages/Post/Update';
import Login from 'pages/Auth/Login/Login';
import SignUp from 'pages/Auth/SignUp/SignUp';
import Find from 'pages/Auth/Find/Find';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Main />},
      {path: 'login', element: <Login />},
      {path: 'signUp', element: <SignUp />},
      {path: 'find', element: <Find />},
      {path: 'post/:id', element: <Post />},
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
