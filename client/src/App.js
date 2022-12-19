import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import Header from 'components/Header/Header';
import { TestProvider } from 'context/testContext';

const App = (props) => {

  return (
    <TestProvider>
      <Header />
      <Outlet />
    </TestProvider>
  )
}

export default App;
