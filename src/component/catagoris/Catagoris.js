import React, { useEffect, useState } from 'react';
import Course from '../course/Course';
import Courses from '../Courses/Courses';
import Catagori from './Catagori';

const Catagoris = () => {
  // this for catagoris 
    const [catagoris,setcatagoris] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(data=> setcatagoris(data))
    },[])

    // this is for course 
    // const [old,setnew] =  useState(6);
    const [allcourse,setdata] = useState([]);
    useEffect(()=>{
      fetch(`http://localhost:5000/courses/6`)
      .then(res=> res.json())
      .then(data=> setdata(data))
    },[])
    const apiChanger =(a)=>{
      const cards = allcourse.filter(Course=>{
        return Course.catagory == a;
      })
         setdata(cards);
    }
    console.log(allcourse)
   
    
    return (
        <div className=' grid grid-cols-6 text-left pt-2 pb-4 space-y-1 text-xl px-5 bg-white dark:bg-black dark:text-white italic dark:italic'>
           <div className='col-span-2'>
          <h1 className='bg-white text-sky-500 text-4xl '>All Catagoris here</h1>
           {
            catagoris.map(p=> <Catagori key={p.id} handle={apiChanger} p={p}></Catagori>)
          }
           </div>
           <div className='col-span-4'> 
              {/* {
                allcourse.map((p)=><Courses data={p} key={p.id}></Courses>)
              } */}
           </div>
          </div>
    );
};

export default Catagoris;