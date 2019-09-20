import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonEdit = ({ clickHandler, item}) => (
    <div>
        <Button color="yellow" onClick={() => clickHandler(item)}><i className="icon ion-md-create"></i>Edit</Button>
    </div>
)

export default ButtonEdit