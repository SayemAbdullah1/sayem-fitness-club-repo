import React from 'react';
import './ExerciseCard.css'

const ExerciseCard = ({exercise}) => {
    const { name, picture, age, time, details } = exercise;
    // console.log(exercise.name)
    return (
       <div>
            <div className='exercise-card' data-aos="fade-up-right">
                <img src={picture} alt="" />
                <div className='cart-info'>
                    <h3>{name}</h3>
                    <p className='details'>{details.slice(0, 150)}<span>...</span></p>
                    <p>Age Limit: {age}</p>
                    <p>Time required: {time}s</p>
                </div>
                <button className='add-btn'>Add to list</button>

            </div>
       </div>
    );
};

export default ExerciseCard;