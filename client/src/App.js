import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import NotFound from 'pages/NotFound';

const App = (props) => {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App;
