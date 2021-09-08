import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterComponent  from './components/CounterComponent';
import DiceComponent from './components/DiceComponent';
import InvestmentComponent from './components/InvestmentComponent';
import InvestmentCountComponent from './components/InvestmentCountComponent';


const MyCustomComponent = function() {
  return(
    <div><h3>This is Custom Component</h3></div>
  );
}

class CustomCompA extends React.Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return(
      <h4>THis is CustomCompA</h4>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
  
    <App />
    <CounterComponent/>
    <DiceComponent />
  {/* <CustomCompA/> */}
  <br/>
  {/* <InvestmentComponent/> */}
  <InvestmentCountComponent />

  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <h1>THis is a heading</h1>,
//   document.getElementById('gts')
// );
