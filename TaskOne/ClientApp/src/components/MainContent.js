import React from 'react';
import ButtonAdd from './ButtonAdd';
import TableContent from './TableContent';
import PaginationExampleShorthand from './PaginationExampleShorthand';
import { getHeader } from './dataSupplier';
import EditForm from './EditForm';

class MainContent extends React.Component {
    //{ items, type, addFunction }
    constructor() {
        super();
        this.state = {
               editing: false
        };
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }
    handleAddButtonClick() {
        this.setState({
            editing: true,
            item: {}
        });
    }



    render() {
        var header = getHeader(this.props.type); //cutomer as default
        return (
            <div>
                <div className="tableContainer">
                    <ButtonAdd clickHandler={this.handleAddButtonClick}/>
                    <TableContent items={this.props.items} type={this.props.type} header={header} />
                    <PaginationExampleShorthand />
                </div>
                {this.state.editing && <EditForm type={this.props.type} item={this.state.item}
                    />}
            </div>
        );
    }
}

export default MainContent;