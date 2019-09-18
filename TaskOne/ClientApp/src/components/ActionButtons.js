import React from 'react'
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';

const ActionButtons = () => (
    <div className="buttonSet">
        <span className = "btns"><ButtonEdit /></span>
        <span className = "btns"><ButtonDelete/></span>
    </div>
    
)

export default ActionButtons