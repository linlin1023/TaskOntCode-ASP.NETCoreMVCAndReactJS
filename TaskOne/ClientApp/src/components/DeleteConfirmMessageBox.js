import React, { Component } from 'react'
import {  Confirm } from 'semantic-ui-react'

class DeleteConfirmMessageBox extends Component {
    //onClose, goDelete(id), item
    handleCancell = () => this.props.onClose();
    handleConfirm = () => this.props.goDelete(this.props.item.id);
    render() {

        const confirmMessage = this.props.item.name ? ("Are you sure to delete the record named " + this.props.item.name + " ?") :
            "Are you sure to delete the sale record";

        return (
            <div id="parentDisable">
            <div id="messageBox001">
                <Confirm
                    open={true}
                    content={confirmMessage}
                    onCancel={this.handleCancell}
                    onConfirm={this.handleConfirm}
                />
                </div>
                </div>
        )
    }
}

export default DeleteConfirmMessageBox;