import { useState } from "react";
import style from './Forms.module.css';
import { Link } from 'react-router-dom';

import style2 from "./Home.module.css";

function Signin() {

    const [values, setValue] = useState({ email: "", password: "" });
    const [a , setA] = useState(0);
    function setEmail(event) {
        setValue(c => ({ ...c, email: event.target.value }))
    }
    function setPassword(event) {
        setValue(c => ({ ...c, password: event.target.value }))
    }

    function submit() {
        console.log(values);
    }
    return (
       <div className={style2.mainDiv}>
         <div className={style.mainLoginDiv}>

<div className={style.innerLoginDiv}>
    <form >

        <input className={style.loginEmail} type="email" placeholder='email' onChange={setEmail} required />
        <input className={style.loginPassword} type="text" placeholder='password' onChange={setPassword} required />
        <button onClick={submit}>Submit</button>
        <h3 className={style.registerButton} >
            <Link to="/signup" className="link link-primary m-10 p-10">
              Register
            </Link>
        </h3>
    </form>
</div>

</div>
       </div>
    );
}
export default Signin; 

/*

import React, { useState } from 'react';
import ComponentToOpen from './ComponentToOpen'; // Import the component you want to open

const App = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage component visibility

    const handleClick = () => {
        setIsOpen(true); // Set isOpen to true when the button is clicked
    };

    return (
        <div>
            <button onClick={handleClick}>Open Component</button>
            {isOpen && <ComponentToOpen />} {/* Render the component if isOpen is true */
//             </div>
//         );
//     };
    
//     export default App;
    


//  */