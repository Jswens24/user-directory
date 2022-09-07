import React from 'react';
import './Card.css'
import Username from './Username';

const Card = () => {

    return (
        <div className='card-div'>
            <div>
                <Username />
            </div>
        </div>
    )
};

export default Card;