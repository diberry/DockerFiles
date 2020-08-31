import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getServerStatus } from './server-status';

function App() {

  const [status, setStatus] = useState(null);

  const initializeApp = async () => {

    const status = await getServerStatus();

    setStatus(status.toString());
    return;
  }
  useEffect(() => {

    initializeApp().then(() => {
      console.log("app initialized")
    }).catch(err => {
      console.log(`app init error ${err}`)
    })
  }, []);

   return (



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Is app loaded? {status}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
