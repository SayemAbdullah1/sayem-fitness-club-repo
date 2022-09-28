import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Exercise.css'

const Exercise = () => {

    const [exercises, setExercises] = useState([])

    useEffect(()=>{
        fetch('db.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])

    return (
        <div className='exercise-container'>
            <div className='exercise'>
                {
                    exercises.map(exercise => <ExerciseCard
                        exercise = {exercise}
                        key = {exercise.id}
                    ></ExerciseCard>)
                }
            </div>
            <div className='activity'>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Exercise;