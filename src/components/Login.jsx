// import React from "react";
//  import {useNavigate } from 'react-router-dom'

// const Login=()=> {

//      let history=useNavigate();

//     const Login=()=> {

//         history('/home');
//     }
//     return<div>
//         <form>
//             <input type="text"/>
//             <input type="password"/>
//             <button onClick={Login}>Login</button>
//         </form>
//     </div>
// }

// export default Login;

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

import './login.css'


function Login() {

  let history = useNavigate();

  // console.log(history);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.fullname);
    console.log("caleed");
    
    if(inputs.username==="foo" && inputs.password==="bar"){
      alert('login sucessfully');
      history('/home');
    }

    else {
      
      alert('wrong user')
      const myWindow = window.open();
      myWindow.document.write("<h1> 404 error</h1>");
      setInputs("");

    }
  }

  return (

        
    <form onSubmit={handleSubmit} className="loginn">
      <div className="form-design">
    
        <label>Enter your User name:</label>
    
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} required/>
    
        <label>Enter your PassWord:</label>    
        
        <input type="password" name="password" value={inputs.password || ""} onChange={handleChange} required/>
        <input className="btn login" type="submit" />
    </div>      
    </form>
  )
}


export default Login;