import React, { Component } from 'react';
import './index.css';
import MainContent from './components/MainContent';
import Header from './components/Header';


export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <div>
              <Header/>
              <MainContent/>
          </div>
    );
  }
}
