import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import ReactNotification from 'react-notifications-component'
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
