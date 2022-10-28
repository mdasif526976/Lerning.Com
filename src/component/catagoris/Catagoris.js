import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Catagori from './Catagori';

const Catagoris = () => {
  const allcourse = useLoaderData();
  const [course,setcourse] = useState(allcourse)
  // this for catagoris 
  const [catagoris, setcatagoris] = useState([]);
  useEffect(() => {
    fetch(' https://assignment-server-kohl.vercel.app/data')
      .then(res => res.json())
      .then(data => setcatagoris(data))
  }, [])
  const handle=(id)=>{
    if (id!==6) {
      const result =allcourse.filter(p=> p.catagory === id);
       setcourse(result)
    }
   
  }


  return (
    <div className=' grid grid-cols-6 text-left pt-2 pb-4 space-y-1 text-xl px-5 bg-white dark:bg-black dark:text-white italic dark:italic'>
      <div className='col-span-2'>
      <div className=''>
        <h1 className='bg-white text-sky-500 text-4xl '>All Catagoris here</h1>
       
       <ul className="menu bg-base-100 w-56 p-2 rounded-box">
        {
          catagoris.map(p => <Catagori key={p.id} handle={handle} p={p}></Catagori>)
        }
          </ul>
       </div>
       </div>

       <div className='md:hidden lg:hidden dropdown dropdown-center'>
       <label tabIndex={0} className="btn m-1 px-4">See All Catagoris</label>
       <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
       {
          catagoris.map(p => <Catagori key={p.id} handle={handle} p={p}></Catagori>)
        }
      </ul>

      </div>
      <div className='col-span-4'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-2 '>
       {
          course.map((p) => <Courses p={p} key={p.id}></Courses>)
        }
       </div>
      </div>
    </div>
  );
};

export default Catagoris;