import React, { Component } from 'react';
import './index.css';
import MainContent from './components/MainContent';
import Header from './components/Header';
import EditForm from './components/EditForm';

export default class App extends Component {
  displayName = App.name

    constructor() {
        super();
        this.state = {
            data: [],
            type: ""
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
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

    addNewItem(newItem, type) { //post 
        if (newItem == null) {
            return;
        }
        var url = "/api/" + type; //post
        console.log(url);
    }

    render() {
        console.log("method : " + this.addNewItem);
      return (
          <div>
              <Header clickHandler={this.handleMenuClick} />
              <MainContent
                  items={this.state.data}
                  type={this.state.type}
                  addFunction={this.addNewItem}
              />
              <EditForm/>
          </div>
    );
  }
}
