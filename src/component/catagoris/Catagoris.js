import React, { useEffect, useState } from 'react';
import Catagori from './Catagori';

const Catagoris = () => {
    const [catagoris,setcatagoris] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(data=> setcatagoris(data))
    },[])
    return (
        <div className=' text-left pt-2 pb-4 space-y-1 text-xl px-5 bg-white dark:bg-black dark:text-white italic dark:italic'>
          <h1 className='bg-white text-sky-500 text-4xl '>All Catagoris here</h1>
          <div>
            {
            catagoris.map(p=> <Catagori key={p.id} p={p}></Catagori>)
          }
          </div>
        </div>
    );
};

export default Catagoris;