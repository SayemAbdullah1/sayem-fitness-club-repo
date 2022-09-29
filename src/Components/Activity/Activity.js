import React from 'react';
import './Activity.css'

const Activity = ({time}) => {
    // console.log(time)
    let totalTimes = 0

    for(const addTime of time){
        totalTimes = totalTimes + addTime.time;
        // console.log(totalTimes)
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
                    <button>10<span>s</span></button>
                    <button>15<span>s</span></button>
                    <button>20<span>s</span></button>
                    <button>25<span>s</span></button>
                    <button>30<span>s</span></button>
            </div>
        </div>

        {/* exercise details  */}

        <div>
            <h3>Exercise details</h3>
                <div className='exercise-brk-time'>
                    <p>Exercise time <span className='tottal-time'>{totalTimes}</span><span className='kg'>s</span></p> 
            </div>
                <div className='exercise-brk-time'>
                    <p>Break time <span>s</span></p>
            </div>
        </div>

        <button className='btn-act'>Activity completed</button>
        </div>
        


    );
};

export default Activity;