import React from 'react';
import './ExerciseCard.css'

const ExerciseCard = ({exercise}) => {
    const {name, picture, age, time, details} = exercise;
    // console.log(exercise.name)
    return (
        <div className='exercise-card'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            
        </div>
    );
};

export default ExerciseCard;