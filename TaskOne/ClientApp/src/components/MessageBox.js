import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class MessageBox extends Component {
    
    handleConfirm = () => this.props.onClose();
    render() {
        return (
            <div>
                <Confirm
                    open={true}
                    content={this.props.message}
                    onCancel={this.handleConfirm}
                    onConfirm={this.handleConfirm}
                />
            </div>
        )
    }
}

export default MessageBox;