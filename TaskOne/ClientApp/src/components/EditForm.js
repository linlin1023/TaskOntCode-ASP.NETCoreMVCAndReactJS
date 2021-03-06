﻿import React from 'react';
import { Form, Input, Button, Header, Message } from 'semantic-ui-react';
import { getHeader } from './dataSupplier';
import { notEmpty } from './Validator';

class EditForm extends React.Component  {

   // type  item  submitHandler  cancellHandler

    constructor(props) {
        super(props);
        // if you want to use props in the constructor function you should pass in  this props as argument
        let copyOfItem =  Object.assign({}, this.props.item);
        this.state = {
            data: copyOfItem ,
            header: getHeader(this.props.type),
            validationMessage: "All fields are required and the price field should be numeric valud, please enter all the values and make sure they are valid.",
            validated: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.cancellButtonClickHandler = this.cancellButtonClickHandler.bind(this);
        this.submitButtonClickHandler = this.submitButtonClickHandler.bind(this);
    }

    submitButtonClickHandler(event) {
        const { header, data } = this.state;
        var validated = true;
        header.forEach(h => {
            const indexName = h[0].toLowerCase() + h.slice(1);
            validated = validated && notEmpty(data) && notEmpty(data[indexName]);
            if (indexName === 'price' && notEmpty(data) && isNaN(data[indexName])) {
                validated = false;
            }
        });
        if (validated === true) {
            this.setState({ validated: true });
            this.props.submitButtonHandler(data);
            event.preventDefault();
        } else if (validated === false) {
            this.setState({ validated: false });
        }
        
    }

    cancellButtonClickHandler() {
        this.props.cancellButtonHandler();
    }
    
    handleChange(event) {
        // update the data that save in the state
        const { name, value } = event.target;  
        this.setState((prevState) => {
            var newItem = notEmpty(prevState.data) ? prevState.data : {};
            newItem[name] = value;
            return {data: newItem};
        });
    }

   
    render() {
        const textToDisplay = (notEmpty(this.props.item)? "Edit " :"Add  " )+ this.props.type.substring(0, this.props.type.length - 1);
        var fields = null;
        if (this.props.type !== 'Sales') {
            fields = this.state.header.map((h) => {
                const indexName = h[0].toLowerCase() + h.slice(1);
                const defaultValue = (this.state.data != null && this.state.data[indexName] != null) ? this.state.data[indexName] : "";
            
                return (
                    <Form.Field
                        key={h}
                        control={Input}
                        label={h}
                        placeholder={h}
                        value={defaultValue}
                        name={indexName}
                        onChange={(e) => this.handleChange(e)}
                    />
                )
            });
        }
        
        return (
            <div id="parentDisable">
                <div id="popup">
                    <Header as='h2' textAlign='center' className="formHeader">
                        {textToDisplay}
                    </Header>
                   
                    <Form id="fromEdit">
                        <Form.Group widths='equal'>
                            {fields}
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Button}
                                onClick={this.submitButtonClickHandler}
                                content="Submit"
                                color='green'
                                id="btn-edit-submit"
                            />
                            <Form.Field
                                control={Button}
                                onClick={this.cancellButtonClickHandler}
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

export default EditForm
