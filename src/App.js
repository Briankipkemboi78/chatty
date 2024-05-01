import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming components
    <div className="app">
      <div className="app__body">
        <Sidebar />
        {/*Chats*/}

      </div>

    </div>
  );
}

export default App;
