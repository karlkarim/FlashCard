import React from 'react';
import './DrawButton.css'

const DrawButton = ({onclick, btnName}) => {
    return(

        <div className='buttonContainer'>
            <button className='btn' onClick={onclick}>{btnName}</button>
        </div>

    )
}
export default DrawButton;
