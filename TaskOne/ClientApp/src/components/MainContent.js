import React from 'react';
import ButtonAdd from './ButtonAdd';
import TableContent from './TableContent';
import PaginationExampleShorthand from './PaginationExampleShorthand';
import { getHeader } from './dataSupplier';
import EditForm from './EditForm';
import EditFormSales from './EditFormSales';
import { notEmpty } from './Validator';
class MainContent extends React.Component {
    //{ items, type, editItem, addItem }
    constructor() {
        super();
        this.state = {
            editing: false,
            editingSale: false
        };
        this.handleAddAndEditButtonClick = this.handleAddAndEditButtonClick.bind(this);
        this.cancellEdit = this.cancellEdit.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    handleAddAndEditButtonClick(item) {
        this.setState({
            editing: this.props.type === 'Sales' ? false : true,
            editingSale: this.props.type === 'Sales' ? true : false,
            item: item
        });
    }



    cancellEdit() {
        this.setState({
            editing: false,
            editingSale: false,
            item: {}
        })
    }

    submitEdit(itemEdited) {
        this.setState({
            editing: false,
            editingSale: false
        });
        if (notEmpty(itemEdited) && notEmpty(itemEdited.id)) {//true edit 
            this.props.editItem(itemEdited)
        } else {
            this.props.addItem(itemEdited);
        }
    }

  
    render() {
        var header = getHeader(this.props.type); //cutomer as default
        return (
            <div>
                <div className="tableContainer">
                    <ButtonAdd clickHandler={this.handleAddAndEditButtonClick}/>
                    <TableContent items={this.props.items}
                        header={header}
                        deleteItem={this.props.deleteItem}
                        clickHandler={this.handleAddAndEditButtonClick} 
                    />
                    <PaginationExampleShorthand />
                </div>
                {this.state.editing && <EditForm type={this.props.type} item={this.state.item} 
                    cancellButtonHandler={this.cancellEdit}
                    submitButtonHandler={this.submitEdit}
                />}

                {this.state.editingSale && <EditFormSales type={this.props.type} item={this.state.item}
                    cancellButtonHandler={this.cancellEdit}
                    submitButtonHandler={this.submitEdit}
                /> }
            </div>
        );
    }
}

export default MainContent;