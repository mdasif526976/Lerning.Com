import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const data = useLoaderData();
    const {price,img,name,detail} = data;
    console.log(data)
    return (
        <div className=''>
            <div className="card card-compact mx-12 w-4/6 bg-base-100 shadow-2xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl'>{detail}</p>
    <p className='py-2 text-3xl text-left pb-5'>Price :${price}</p>
    <div className="card-actions justify-around md:justify-between">
      <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;