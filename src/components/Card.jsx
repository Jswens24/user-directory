import React, { useState } from 'react';
import './Card.css';
import data from '../data';
import Buttons from './Buttons';

const Card = () => {

    const [info, setInfo] = useState(0);

    const next = () => {
        setInfo(info + 1);
        if (info == data.length - 1) {
            alert('you have gone too far')
            setInfo(data.length - 1)
        }
    };

    const previous = () => {
        setInfo(info - 1);
        if (info == 0) {
            alert('you have gone back too far')
            setInfo(0)
        }
    };



    return (
        <div className='card-div'>
            <div>
                <h2>{data[info].name.first} {data[info].name.last}</h2>
                <h4>From: {data[info].city}, {data[info].country}</h4>
                <h4>Job Title: {data[info].title}</h4>
                <h4>Employer: {data[info].employer}</h4>

                <ol>Favorite Movies:
                    <li>{data[info].favoriteMovies[0]}</li>
                    <li>{data[info].favoriteMovies[1]}</li>
                    <li>{data[info].favoriteMovies[2]}</li>
                </ol>

            </div>
            <Buttons
                next={next}
                previous={previous} />
        </div>
    )
};

export default Card;