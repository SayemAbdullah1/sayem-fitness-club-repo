import React from 'react';
import './Activity.css'

const Activity = () => {
    return (

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

        </div>


    );
};

export default Activity;