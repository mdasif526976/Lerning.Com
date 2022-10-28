import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const data = useLoaderData();
    const {img,name,detail} = data;
    return (
        <div className=''>
            <div className="card card-compact mx-12 w-4/6 bg-base-100 shadow-2xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl'>{detail}</p>
    <div className="card-actions justify-around md:justify-between">
      <Link to='/premium' className="btn hover:text-sky-600 bg-sky-500">Get premium access</Link>
      <button className="btn text-white bg-red-600">Download PDF</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;