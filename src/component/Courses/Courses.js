import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({p}) => {
    console.log(p)
    const {name,id,img,detail} = p;
    return (
        <div>
            <div className="max-w-xs  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={img} alt="" className="border-solid object-cover object-center w-full rounded-t-md h-60  dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-1">
	<h2 className=" font-semibold tracking-wide">{name}</h2>
	{detail.length > 200 ?
        <p className="dark:text-gray-100 text-bold"> {detail.slice(0,119)+'...'}
     <Link to={`/course/${id}`}>See more</Link>  
    </p>:<p>{detail}</p>}
		</div>
		<Link to={`/course/${id}`} type="button" className="flex items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md  bg-pink-300 dark:bg-violet-400 dark:text-gray-900">Detail</Link>
	</div>
</div>
        </div>
    );
};

export default Courses;