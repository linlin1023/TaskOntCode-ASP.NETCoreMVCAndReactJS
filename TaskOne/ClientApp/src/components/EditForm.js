import React from 'react';
import { Form, Input, Button, Header, Message } from 'semantic-ui-react';
import { getHeader } from './dataSupplier';
import { notEmpty } from './Validator';

class EditForm extends React.Component  {

   // type  item  submitHandler  cancellHandler

    constructor(props) {
        super(props);
        // if you want to use props in the constructor function you should pass in  this props as argument
        this.state = {
            data: this.props.item ,
            header: getHeader(this.props.type),
            validationMessage: "All fields are required, please enter the values",
            validated:true
        }
        this.handleChange = this.handleChange.bind(this);
        this.cancellButtonClickHandler = this.cancellButtonClickHandler.bind(this);
        this.submitButtonClickHandler = this.submitButtonClickHandler.bind(this);
    }

    submitButtonClickHandler(event) {
        const { header, data } = this.state;
        var validated = true;
        header.forEach(h => {
            validated = validated && notEmpty(data[h]);
        });
        if (validated === true) {
            this.props.submitButtonHandler(data);
            event.preventDefault();
        } else if (validated === false) {
            this.setState(() => {
            console.log("validation : " + JSON.stringify(this.state));
            return { validated: false }; });
        }
        
    }

    cancellButtonClickHandler() {
        this.props.cancellButtonHandler();
    }
    
    handleChange(event) {
        // update the data that save in the state
        const { name, value } = event.target;
        const { header,data } = this.state;
        var newItem = data;
        this.setState(() => {
            header.forEach(
                h => {
                    if (name === h) {
                        newItem[h] = value;
                    }
                }
            )
            return {data: newItem, header};
        });
    }

   
    render() {
        const textToDisplay = "Add New " + this.props.type.substring(0, this.props.type.length - 1);
        var fields = null;
        if (this.props.type !== 'Sales') {
             fields = this.state.header.map((h) => (
                <Form.Field
                     key={h}
                     control={Input}
                     label={h}
                     placeholder={h}
                     value={this.state.data[h]||""}
                     name={h}
                     onChange={this.handleChange}                    
                />
            ));
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
