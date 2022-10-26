import React, { useState } from 'react';
import Catagoris from '../catagoris/Catagoris';

const Courses = () => {
    return (
        <div>
            <div className='grid grid-cols-6'>
                <div className='grid-cols-2'>
                <Catagoris ></Catagoris>
                </div>
                <div className='grid-cols-3'>

                </div>
            </div>
        </div>
    );
};

export default Courses;