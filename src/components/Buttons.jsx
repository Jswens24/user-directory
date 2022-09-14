import React from 'react';
import './Buttons.css'

const Buttons = (props) => {

    return (
        <div>
            <button onClick={props.previous}>Previous</button>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
            <button onClick={props.next}>Next</button>
        </div>
    )
};

export default Buttons;