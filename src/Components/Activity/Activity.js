import React from 'react';
import './Activity.css'

const Activity = () => {
    return (
        <div className='activity-info'>
            <div className='profile'>
            <img src={require('./pic.png')} alt="" />
            <h3>Sayem Abdullah</h3>
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Activity;