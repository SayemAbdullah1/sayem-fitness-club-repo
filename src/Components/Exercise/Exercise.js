import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Blog from '../Blog/Blog';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Exercise.css'

const Exercise = () => {

    const [exercises, setExercises] = useState([])
    const [time, setTime] = useState([])

    useEffect(()=>{
        fetch('db.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])

    // add time==============
    const addTotalTime =(addTime)=>{
        const newTime = [...time, addTime]
        setTime(newTime)
        // console.log(newTime)
    }



    return (
        <div className='exercise-container'>
            <div>
            <div className='exercise'>
                {
                    exercises.map(exercise => <ExerciseCard
                        exercise = {exercise}
                        key = {exercise.id}
                        addTotalTime={addTotalTime}
                    ></ExerciseCard>)
                }
            </div>
                <Blog></Blog>
            </div>

            <div className='activity'>
                <Activity
                    time = {time}
                ></Activity>
            </div>
        </div>
    );
};

export default Exercise;