import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Alert } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Alert message="Please click the button" type="info" />

      </header>
    </div>
  );
}

export default App;
