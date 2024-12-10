import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import WrappedTestView from "./components/test-view/TestView";
import { TestViewAuth } from "./components/test-view-auth/TestViewAuth";
import ClientsList from "./components/clients-list/ClientsList";
import { OrmcoMainComponent } from './components/OrmcoInterview/OrmcoMainComponent'
// import { withAdditionalState } from "./app/hocs/withAdditionalState";

function App() {
  const [appTimer, setAppTimer] = useState(0);
  // const [testViewData, setTestViewData] = useState({
  const [testViewData] = useState({
    data: ['5', '6'],
    x: 'xxxxx',
    y: 'yyyyyyy'
  });
  // data={['5', '6']} x={'xxxxx'} y={'yyyyyyy'}

  useEffect(() => {
      console.log('App render');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> AppTimer: {appTimer}</div>
        <button onClick={() => setAppTimer((appTimer + 1))}>AppTimer</button>

        <TestViewAuth />
        <WrappedTestView {...testViewData} />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <div>
        <ClientsList />
      </div>
      <div>
        <h5> Ormco Main Component</h5>
        <div>
          <OrmcoMainComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
