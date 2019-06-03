import React from 'react';
import logo from './logo.svg';
import './App.css';
import Currency from './components/Currency';
import Header from './ui/header';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './route';


class App extends React.Component {
  state = {
    currentCurrency: 'INR'
  };

  updateCurrency(code) {
    console.log('code:', code)
    this.setState({ currentCurrency: code });
  }

  render() {
    return (
      <Router>
        <Header>
          <Currency changeCurrency={(code) => this.updateCurrency(code)} />
        </Header>
        <AppRouter />
      </Router>
    );
  }
}
export default App;
