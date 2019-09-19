import React from 'react'
import { Button } from 'semantic-ui-react'

class ButtonAdd extends React.Component {
    ///<ButtonAdd type={type} addFunction={addFunction} header={header}/>

    constructor() {
        super();
        this.state = {
        }
        this.addButtonClickHandler = this.addButtonClickHandler.bind(this);
    }
    addButtonClickHandler() {

    }

    render() {
        return (
            <div>
                <Button positive onClick={this.addButtonClickHandler} >New</Button>
            </div>
        ); 
    }
}

export default ButtonAdd