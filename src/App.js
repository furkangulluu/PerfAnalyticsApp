import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardContextProvider from './Context/DashboardContext';

function App() {
  return (
    <div>
      <DashboardContextProvider>
        <Dashboard />
      </DashboardContextProvider>
    </div>
  );
}

export default App;
