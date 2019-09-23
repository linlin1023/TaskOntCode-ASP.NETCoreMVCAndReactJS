import React, { Component } from 'react'
import {  Confirm } from 'semantic-ui-react'

class DeleteConfirmMessageBox extends Component {
    //onClose, goDelete(id), item
    handleCancell = () => this.props.onClose();
    handleConfirm = () => this.props.goDelete(this.props.item.id);
    render() {
        return (
            <div id="parentDisable">
            <div id="messageBox001">
                <Confirm
                    open={true}
                    content={"Are you sure to delete the record named "+ this.props.item.name + " ?"}
                    onCancel={this.handleCancell}
                    onConfirm={this.handleConfirm}
                />
                </div>
                </div>
        )
    }
}

export default DeleteConfirmMessageBox;