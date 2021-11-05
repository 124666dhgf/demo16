import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Table from './components/table';
//import Runs from './components/cricket';
//import Goal from './components/goal';
//import Clock from './components/clock';
//import Football from './components/football';
//import Samp from './components/mytable';
import StateData from './components/apptableState';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <Goal isGoal={true} />
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <Runs i={6}/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <Clock/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <Football/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
/*ReactDOM.render(
  <React.StrictMode>
    <Samp/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
ReactDOM.render(
  <React.StrictMode>
    <StateData/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
