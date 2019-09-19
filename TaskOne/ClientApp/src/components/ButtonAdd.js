import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonAdd = ({ handleNew, type }) => {
    console.log(handleNew);
    return (
        <div>
            <Button positive onClick={() => handleNew(type)}>New</Button>
        </div>
    );
}

export default ButtonAdd