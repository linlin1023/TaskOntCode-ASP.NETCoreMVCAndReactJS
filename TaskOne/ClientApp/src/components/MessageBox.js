import React, { Component } from 'react'
import {  Confirm } from 'semantic-ui-react'

class MessageBox extends Component {
    
    handleConfirm = () => this.props.onClose();
    render() {
        return (
            <div id="parentDisable">
            <div id="messageBox001">
                <Confirm
                    open={true}
                    content={this.props.message}
                    onCancel={this.handleConfirm}
                    onConfirm={this.handleConfirm}
                />
                </div>
                </div>
        )
    }
}

export default MessageBox;