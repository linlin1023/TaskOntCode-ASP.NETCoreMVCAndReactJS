import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MenuExampleInvertedSecondary from './components/MenuExampleInvertedSecondary';
import TableContent from './components/TableContent';
import ButtonAdd from './components/ButtonAdd';
import PaginationExampleShorthand from './components/PaginationExampleShorthand';
import './index.css';


export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <div>
              <MenuExampleInvertedSecondary></MenuExampleInvertedSecondary>
              <div className="tableContainer">
                  <ButtonAdd />
                  <div className= "rawTableDiv">
                      <TableContent></TableContent>
                  </div> 
                  <div className = "paginationBarDiv">
                      <PaginationExampleShorthand/>
                  </div>
              </div>
          </div>
    );
  }
}
