import React, { Component } from 'react';
import './index.css';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { postData } from './components/PostData';

export default class App extends Component {
  displayName = App.name

    constructor() {
        super();
        this.state = {
            data: [],
            item: {},
            type: "Customers" //default
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    componentDidMount(){
        this.handleMenuClick(this.state.type);
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

    addItem(itemNew) { //post 
        const { type } = this.state;
        if (itemNew == null) {
            return;
        }
        var url = "/api/" + type; //post
        console.log("app : " + url);
        console.log("data : " + JSON.stringify(itemNew));
        postData(url, itemNew)
            .then(data => console.log(data)) // JSON from `response.json()` call
            .catch(error => console.error(error))
    }
    editItem(itemEdited) {

    }

    render() {
      return (
          <div>
              <Header clickHandler={this.handleMenuClick} />
              <MainContent
                  items={this.state.data}
                  type={this.state.type}
                  editItem={this.editItem}
                  addItem={this.addItem} />
          </div>
    );
  }
}
