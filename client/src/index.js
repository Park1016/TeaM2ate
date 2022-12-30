import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from 'App';
import NotFound from 'pages/NotFound/NotFound';
import Main from 'pages/Main/Main';
import Post from 'pages/Post/Post';
import Mypage from 'pages/Mypage/Mypage';
import WritePost from 'pages/WritePost/WritePost';
import UpdatePost from 'pages/UpdatePost/UpdatePost';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import FindAuth from 'pages/FindAuth/FindAuth';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Main />},
      {path: 'login', element: <Login />},
      {path: 'signup', element: <SignUp />},
      {path: 'find', element: <FindAuth />},
      {path: 'post/:id', element: <Post />},
      {path: 'mypage', element: <Mypage />},
      {path: 'post/write', element: <WritePost />},
      {path: 'post/update/:id', element: <UpdatePost />} 
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
