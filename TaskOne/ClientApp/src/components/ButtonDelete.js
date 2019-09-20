import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonDelete = ({ clickHandler, itemId}) => (
    <div>
        <Button negative onClick={()=>clickHandler(itemId)}><i className="icon ion-md-trash"></i>Delete</Button>
    </div>
)

export default ButtonDelete