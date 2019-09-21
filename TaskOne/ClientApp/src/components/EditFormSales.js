import React from 'react';
import { Form, Button, Header, Message } from 'semantic-ui-react';
import { getData } from './APIData';
import { notEmpty } from './Validator';


//value --- id,,  text name
class EditFormSales extends React.Component  {
   // type  item  submitHandler  cancellHandle
    constructor(props) {
        super(props);
        var  copyItem = Object.assign({}, this.props.item);
        this.state = {
            validationMessage: "All the fields are required, please select the values.",
            validated: true,
            data: copyItem
            
        }
        // getData("/api/" + name).then(jdata => this.setState({ data: jdata, type: name }));
        this.stores = [];
        this.customers = [];
        this.products = [];
        this.storesOriginal = [];
        this.customersOriginal = [];
        this.productsOriginal = [];
        getData("/api/Stores").then(jdata => {
            this.storesOriginal = jdata;
            jdata.forEach(d => {
                this.stores.push({ key: d.id, text: d.name, value: d.id });
            });
        });
        getData("/api/Customers").then(jdata => {
            this.customersOriginal = jdata;
            jdata.forEach(d => {
                this.customers.push({ key: d.id, text: d.name, value: d.id });
            });
        });
        getData("/api/Products").then(jdata => {
            this.productsOriginal = jdata;
            jdata.forEach(d => {
                this.products.push({ key: d.id, text: d.name, value: d.id });
            });
        });

        this.doSubmitSale = this.doSubmitSale.bind(this);
        this.cancellEdit = this.cancellEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    doSubmitSale(event) {
        var validated = true;
        var { data } = this.state;
        validated = validated && notEmpty(data) && notEmpty(data.productId) && notEmpty(data.customerId) && notEmpty(data.storeId);
        if (validated === true) {
            this.setState({ validated: true });
            data.dateSold = new Date().toLocaleString();
            this.props.submitButtonHandler(data);
            event.preventDefault();
        } else if (validated === false) {
            this.setState({ validated: false });
        }
    }

    cancellEdit() {
        this.props.cancellButtonHandler();
    }
    
    handleChange(event, {  name, value }) {
        //value is actually id and the database need id only
        //this is the item structure 
        //{ "id": 1, "productId": 2, "customerId": 2, "storeId": 4, "dateSold": "2019-09-08T00:00:00",
        //"customer": "Hey", "product": "football", "store": "StoreA"
        this.setState(prevState => {
            var newData = prevState.data;
            var indexName = name + "Id";
            newData[indexName] = value;
            var newText = "";
            if (name === 'product') {
                newText = this.productsOriginal.find(function (ele) {
                    return ele.id === value;
                }).name;
            }
            else if (name === 'customer')
                newText = this.customersOriginal.find(function (ele) {
                    return ele.id === value;
                }).name;
            else if(name==='stores')
                newText = this.storesOriginal.find(function (ele) {
                    return ele.id === value;
                }).name;
            newData[name] = newText;
            return {data: newData};
        });
    }
   
    render() {
        const { data } = this.state;
        const textToDisplay = notEmpty(this.props.item)? "Edit Sale":"Add  Sale";
        var defaultProductId = notEmpty(data) ? (notEmpty(data.productId) ? data.productId : null) : null;
        var defaultCustomerId = notEmpty(data) ? (notEmpty(data.customerId) ? data.customerId : null) : null;
        var defaultStoreId = notEmpty(data) ? (notEmpty(data.storeId) ? data.storeId : null) : null;
        var productText = notEmpty(data) ? (notEmpty(data.product) ? data.product : null) : null;
        var customerText = notEmpty(data) ? (notEmpty(data.customer) ? data.customer : null) : null;
        var storeText = notEmpty(data) ? (notEmpty(data.store) ? data.store : null) : null;
        return (
            <div id="parentDisable">
                <div id="popup">
                    <Header as='h2' textAlign='center' className="formHeader">
                        {textToDisplay}
                    </Header>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                label='Product'
                                name='product'
                                options={this.products}
                                placeholder='Choose a product'
                                onChange={this.handleChange}
                                defaultValue={defaultProductId}
                                text={productText}
                            />
   
                            <Form.Select
                                fluid
                                label='Customer'
                                name='customer'
                                options={this.customers}
                                placeholder='Choose a customer'
                                onChange={this.handleChange}
                                defaultValue={defaultCustomerId}
                                text={customerText}
                            />

                            <Form.Select
                                fluid
                                label='Store'
                                name='store'
                                options={this.stores}
                                placeholder='Choose a store'
                                onChange={this.handleChange}
                                defaultValue={defaultStoreId}
                                text={storeText}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Button}
                                onClick={this.doSubmitSale}
                                content="Submit"
                                color='green'
                                id="btn-edit-submit"
                            />
                            <Form.Field
                                control={Button}
                                onClick={this.cancellEdit}
                                content="Cancell"
                                color='grey'
                                id="btn-edit-cancell"
                            />
                        </Form.Group>
                    </Form>
                        {!this.state.validated && <Message
                            error
                            content={this.state.validationMessage}
                        />} 

                </div>
            </div>
        )
    }
    

}

export default EditFormSales
