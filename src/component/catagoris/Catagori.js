import React from 'react';

const Catagori = ({p,handle}) => {
    return (
        <div>
           
                <li className=''> <button onClick={()=> handle(p.id)}><p>{p.name}</p></button></li>
        </div>


    );
};

export default Catagori;