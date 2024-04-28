import { useState } from 'react';
import style from './Forms.module.css';
import style2 from "./Home.module.css";

function Signup() {
    const [values, setValue] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    function setName(event) {
        setValue(c => ({ ...c, name: event.target.value }));
        // console.log(values.name);
    }
    function setEmail(event) {
        setValue(c => ({ ...c, email: event.target.value }))
    }
    function setPassword(event) {
        setValue(c => ({ ...c, password: event.target.value }))
    }
    function setConfirm(event) {
        setValue(c => ({ ...c, confirmPassword: event.target.value }))
    }
    function submit() {
        console.log(values);
    }
    return (
        <div className={style2.mainDiv}>
            <div className={style.mainLoginDiv}>

<div className={style.innerLoginDiv}>
    <form >

        <input className={style.loginName} type="text" placeholder='username' onChange={setName} required />
        <input className={style.loginEmail} type="email" placeholder='email' onChange={setEmail} required />
        <input className={style.loginPassword} type="text" placeholder='password' onChange={setPassword} required />
        <input className={style.loginConfirmPassword} type="text" onChange={setConfirm} placeholder='confirm password' required />
        <button onClick={submit}>Submit</button>
              
    </form>
    

</div>

</div>
        </div>
    );
}
export default Signup;
