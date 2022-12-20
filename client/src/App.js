import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import Header from 'components/Header/Header';
import { TestProvider } from 'context/testContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = (props) => {

  return (
    <QueryClientProvider client={queryClient}>
      <TestProvider>
        <Header />
        <Outlet />
      </TestProvider>
    </QueryClientProvider>
  )
}

export default App;
