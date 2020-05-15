import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExploreFunctions from './ExploreFunctions'
import AppList from './AppList'

function App() {
  return (
    <div className="App-content">
      <ExploreFunctions />
      <br/>
      <br/>
      <AppList />
    </div>
  );
}

export default App;
