import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

import { LocalProvider } from 'context/localContext';
import { AuthProvider } from 'context/authContext';
import { HttpProvider } from 'context/httpContext';
import Header from 'components/Header/Header';

const queryClient = new QueryClient();

const App = (props) => {

  const AppProvider = ({ contexts, children }) => contexts.reduce(
    (prev, context) => React.createElement(context, {
      children: prev
    }), 
    children
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider contexts={[AuthProvider, LocalProvider, HttpProvider]}>
        <Header />
        <Outlet />
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App;
