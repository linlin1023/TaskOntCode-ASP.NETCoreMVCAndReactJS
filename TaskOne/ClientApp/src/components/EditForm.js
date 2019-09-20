import React from 'react';
import { Form, Input, Button, Header } from 'semantic-ui-react';
import { getHeader } from './dataSupplier';


const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class EditForm extends React.Component  {

   // type  item  submitHandler  cancellHandler

    constructor(props) {
        super(props);
        // if you want to use props in the constructor function you should pass in  this props as argument
        this.state = {
            data: this.props.item ,
            header : getHeader(this.props.type)
        }
        this.handleChange = this.handleChange.bind(this);
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
            console.log("after set state : " + JSON.stringify({ data: newItem, header }));
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
                                
                                content="Submit"
                                color='green'
                                id="btn-edit-submit"
                            />
                            <Form.Field
                               
                                control={Button}
                                
                                content="Cancell"
                                color='grey'
                                id="btn-edit-cancell"
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
    

}

export default EditForm
