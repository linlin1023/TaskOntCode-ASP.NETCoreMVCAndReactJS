import React from 'react'
import { Button } from 'semantic-ui-react'
import DeleteConfirmMessageBox from './DeleteConfirmMessageBox';

class ButtonDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            confirm: false
        }
        this.deleteClick = this.deleteClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    deleteClick() {
        this.setState({
            confirm: true,
        });
    }

    onClose() {
        this.setState({
            confirm: false
        });   
    }

    render() {
        const { clickHandler, item } = this.props;
        return (
            <div>
                <div>
                    <Button negative onClick={() => this.deleteClick()}><i className="icon ion-md-trash"></i>Delete</Button>
                </div>
                { //onClose, goDelete(id), item
                    this.state.confirm && <DeleteConfirmMessageBox item={item} goDelete={clickHandler} onClose={this.onClose} />
                }
            </div>
        );
    }
}
export default ButtonDelete