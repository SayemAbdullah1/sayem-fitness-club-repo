import React, { useState } from 'react';
import './Activity.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activity = ({time}) => {

    const [breakTime, setBreakTime] = useState('')
    // console.log(time)
    let totalTimes = 0

    for(const addTime of time){
        totalTimes = totalTimes + addTime.time;
        // console.log(totalTimes)
    }
// use toast-----------------
    const difToast = () =>{
        toast("Thank you!")
    }
    const handleBreakTime = (event)=>{
        const breakTime = event.target.innerText;
        setBreakTime(breakTime)
        // console.log(newBreak)
}



    return (
            // activity infooo......................................

        <div className='activity-info'>
            <div className='profile'>
            <img src={require('./pic.png')} alt="" />
            <h3>Sayem Abdullah</h3>
            </div>

            <div className='info'>
                <div>
                    <div className='per-info'>
                        <h2>68<span className='kg'>kg</span> </h2>
                    </div>
                    <span>weight</span>
                </div>
                <div>
                    <div className='per-info'>
                        <h2>5.8</h2>
                    </div>
                    <span>height</span>
                </div>
                <div>
                    <div className='per-info'>
                        <h2>25<span className='kg'>yrs</span> </h2>
                    </div>
                    <span>age</span>
                </div>
                
            </div>

        {/* Add a break ------------------------------*/}
        <div className='add-break'>
            <h3>Add a break</h3>
            
            <div className='break'>
                    <button onClick={(event) => handleBreakTime(event)}>10</button>
                    <button onClick={(event) => handleBreakTime(event)}>15</button>
                    <button onClick={(event) => handleBreakTime(event)}>20</button>
                    <button onClick={(event) => handleBreakTime(event)}>25</button>
                    <button onClick={(event) => handleBreakTime(event)}>30</button>
            </div>
        </div>

        {/* exercise details  */}

        <div>
            <h3>Exercise details</h3>
                <div className='exercise-brk-time'>
                    <p>Exercise time <span className='tottal-time'>{totalTimes}</span><span className='kg'>s</span></p> 
            </div>
                <div className='exercise-brk-time'>
                    <p>Break time <span className='sec'>{breakTime} s</span></p>
            </div>
        </div>
            <button className='btn-act' onClick={difToast}>Activity completed</button>
        <ToastContainer/>
            
            
        </div>
        


    );
};

export default Activity;