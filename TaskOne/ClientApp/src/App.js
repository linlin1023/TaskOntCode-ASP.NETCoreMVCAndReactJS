import React, { Component } from 'react';
import './index.css';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { postData, deleteData, putData } from './components/APIData';
import { notEmpty } from './components/Validator';
import  MessageBox  from './components/MessageBox';

export default class App extends Component {
  displayName = App.name

    constructor() {
        super();
        this.state = {
            data: [],
            item: {},
            type: "Customers" //default,
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onClose = this.onClose.bind(this);
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
        this.forceUpdate();
    }

   

    addItem(itemNew) { //post 
        const { type } = this.state;
        if (itemNew == null) {
            return;
        }
        var url = "/api/" + type; //post
        postData(url, itemNew)
            .then(data => console.log(data)) // JSON from `response.json()` call
            .catch(error => {
                this.setState({
                    errorMessage:
                        "Sorry Add new data failed, please contact tech support for helping."
                });
                console.error(error);
                
            })
        this.handleMenuClick(type);
        this.forceUpdate();
    }
    editItem(itemEdited) {
        const { type } = this.state;
        if (itemEdited === null || itemEdited === undefined || itemEdited.id === undefined || itemEdited.id === null) {
            this.setState({
                errorMessage:
                    "The data you submitted is not valid"
            });
        } else {
            //alert("go edit");
            const url = "/api/" + type + "/" + itemEdited.id;
            putData(url, itemEdited).then(data => {
                alert(data);
                if (data) {
                    this.handleMenuClick(type);
                    this.forceUpdate();
                }  
                else if (!data)
                    this.setState({
                        errorMessage:
                            "Sorry, edit data failed, please contact tech support for helping."
                    });
            }
            ).catch(error => {
                this.setState({
                    errorMessage:
                        "Sorry, edit data failed, please contact tech support for helping."
                });
                console.error(error);
            });
        }
    }

    deleteItem(id) {   
        if (!notEmpty(id))
            return;
        const { type } = this.state;
        var url = "/api/" + type + "/" + id; //delete api/Customers/5
        deleteData(url)
            .then(data => {
                if(data === null)
                    this.setState({
                        errorMessage:
                            "Delete failed, the data may probably link to other data, please check in other tabs if it has relationships."
                    });
            }) // JSON from `response.json()` call
            .catch(error => console.error(error));
        this.handleMenuClick(type);//reload
        this.forceUpdate();
    }

    onClose() {
        this.setState({ errorMessage: null });
    }

    render() {
      return (
          <div>
            
              <Header clickHandler={this.handleMenuClick} />
              <MainContent
                  items={this.state.data}
                  type={this.state.type}
                  editItem={this.editItem}
                  addItem={this.addItem}
                  deleteItem={this.deleteItem}
                  editItem={this.editItem}/>

              {this.state.errorMessage ? <MessageBox message={this.state.errorMessage ? this.state.errorMessage : ""} onClose={this.onClose} /> : null}
          </div>
    );
  }
}
