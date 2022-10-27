import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
 const [user,setuser]= useState({
    name:'',password:'',
    email:''
 })
  const getUserData =(event)=>{
    setuser({...user,[event.target.name]:event.target.value})
    console.log(user)
  }
  const submit=()=>{

  }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
      <p className="py-6">Didn't Have a account ? Then Signup Now.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" onChange={getUserData} name='name' value={user.name} placeholder="Enter your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" onChange={getUserData} name='email' value={user.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" onChange={getUserData} name='password' value={user.password} placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already Have a account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={submit} className="btn btn-primary">Signup</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;