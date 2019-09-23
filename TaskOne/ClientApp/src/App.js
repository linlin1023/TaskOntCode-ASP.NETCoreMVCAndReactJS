import React, { Component } from 'react';
import './index.css';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { postData, deleteData, putData, getData} from './components/APIData';
import { notEmpty } from './components/Validator';
import  MessageBox  from './components/MessageBox';

export default class App extends Component {
  displayName = App.name

    constructor() {
        super();
        this.state = {
            data: [],
            item: {},
            type: "Customers", //default,
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
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
        getData("/api/" + name).then(jdata => this.setState({ data: jdata, type: name, totalItems: jdata.length, currentPage:1 }));
       // this.forceUpdate();
    }

    addItem(itemNew) { //post 
        const { type } = this.state;
        if (itemNew === null || itemNew === undefined) {
            this.setState({
                errorMessage:
                    "The data you submitted is not valid"
            });
            return;
        }
        if (this.state.type === 'Sales') {
            var newItem = {
                productId: itemNew.productId,
                storeId: itemNew.storeId,
                customerId: itemNew.customerId,
                dateSold: itemNew.dateSold
            };
            itemNew = newItem;
        }
        var url = "/api/" + type; //post
        postData(url, itemNew)
            .then(data => { console.log(data); this.handleMenuClick(type);}) // JSON from `response.json()` call
            .catch(error => {
                this.setState({
                    errorMessage:
                        "Sorry Add new data failed, please contact tech support for helping."
                });
                console.error(error);
            })
        
    }
    editItem(itemEdited) {
        const { type } = this.state;
        if (itemEdited === null || itemEdited === undefined || itemEdited.id === undefined || itemEdited.id === null) {
            this.setState({
                errorMessage:
                    "The data you submitted is not valid"
            });
        } else {
            if (this.state.type === 'Sales') {
                var newItem = {
                    id: itemEdited.id,
                    productId: itemEdited.productId,
                    storeId: itemEdited.storeId,
                    customerId: itemEdited.customerId,
                    dateSold: itemEdited.dateSold
                };
                itemEdited = newItem;
            }
            const url = "/api/" + type + "/" + itemEdited.id;
            putData(url, itemEdited).then(data => {
                if (data) {
                    this.handleMenuClick(type);
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
                if (data === null)
                    this.setState({
                        errorMessage:
                            "Delete failed, the data may probably link to other data, please check in other tabs if it has relationships."
                    });
                this.handleMenuClick(type);//reload
            }) // JSON from `response.json()` call
            .catch(error => console.error(error));
    }

    onClose() {
        this.setState({ errorMessage: null });
    }

    paginate = (num) => {
        this.setState({
            currentPage: num
        });
    };

 
render() {
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const itemsCurrentPage = this.state.data.slice(indexOfFirstItem, indexOfLastItem);
   // alert("in APP current page : " + this.state.currentPage)
    return (
          <div>
              <Header clickHandler={this.handleMenuClick} />
              <MainContent
                  
                type={this.state.type}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                editItem={this.editItem}

                items={itemsCurrentPage}
                paginate={this.paginate}
                itemsPerPage={this.state.itemsPerPage}
                totalItems={this.state.totalItems}
                currentPage={this.state.currentPage}
                  //paginate={this.props.paginate} totalItems={this.props.data} itemsPerPage={this.props.itemPerPage}
              />

              {this.state.errorMessage ? <MessageBox message={this.state.errorMessage ? this.state.errorMessage : ""} onClose={this.onClose} /> : null}
          </div>
    );
  }
}
