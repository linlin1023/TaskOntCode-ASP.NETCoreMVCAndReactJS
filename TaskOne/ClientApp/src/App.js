import React, { Component } from 'react';
import './index.css';
import MainContent from './components/MainContent';
import Header from './components/Header';


export default class App extends Component {
  displayName = App.name

    constructor() {
        super();
        this.state = {
            data: [],
            type: ""
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleNewButtonClick = this.handleNewButtonClick(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick(this);
        this.handleEditButtonClick = this.handleEditButtonClick(this);
    }


    handleMenuClick(name) {
        if (name === 'Customers') {
            fetch("/api/Customers").then(response => response.json()).
                then(jdata => {
                    this.setState({ data: jdata, type: name });
                });
            
        } else if (name === 'Products') {

        } else if (name === 'Stores') {

        } else if (name === 'Sales') {

        }
    }

    handleNewButtonClick(type) {
        console.log("new");
    }

    handleDeleteButtonClick(type) {
        console.log("delete");
    }

    handleEditButtonClick(type) {
        console.log("edit");
    }
    render() {
        console.log(this.handleNewButtonClick);
      return (
          <div>
              <Header clickHandler={this.handleMenuClick} />
              <MainContent
                  items={this.state.data}
                  type={this.state.type}
                  handleNew={this.handleNewButtonClick}
                  handleDelete={this.handleDeleteButtonClick}
                  handleEdit={this.handleEditButtonClick}/>
          </div>
    );
  }
}
