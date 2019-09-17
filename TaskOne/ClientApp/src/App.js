import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MenuExampleInvertedSecondary from './components/MenuExampleInvertedSecondary';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <MenuExampleInvertedSecondary></MenuExampleInvertedSecondary>
    );
  }
}
