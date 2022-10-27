import React from 'react';

const Catagori = ({ p ,handle}) => {
    return (
        <div>
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">

                <li> <button onClick={()=>handle(p.id)}><p>{p.name}</p></button></li>
            </ul>
        </div>


    );
};

export default Catagori;