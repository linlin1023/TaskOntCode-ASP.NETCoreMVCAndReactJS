import React from 'react'
import { Button } from 'semantic-ui-react'

class ButtonAdd extends React.Component {
    //clickHandler
    render() {
        return (
            <div>
                <Button positive onClick={() => { this.props.clickHandler() }}>New</Button>
            </div>
        ); 
    }
}

export default ButtonAdd