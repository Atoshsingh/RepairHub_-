import style from './HeaderCss.module.css'
// import image from './assets/logo-png.png'
// vite = dev server 
// modern replamcment of npm create react 
// npm create vite@latest

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    function login() {
        fetch("/login")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.text();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error while fetching login data:", error);
            });
    }
    return (
        <header >
            {/* <div className={style.headerContainer}>
                <div className={style.logo_div}> <img className={style.logo}  alter="logo" /></div>
                <div className={style.login_div} > <button className={style.login} onClick={login}>signIn</button></div>
                <div className={style.signup_div}><button className={style.signup} >signUp</button></div>

            </div> */}
            <navbar className={style.headerContainer} >
                <div className={style.headerBlackdiv}></div>
                <NavLink className={style.nav} activeClassName={style.active} to="/">
                   Home
                </NavLink>
                <NavLink className={style.nav} activeClassName={style.active} to="/login">
                    Login
                </NavLink>
                <NavLink className={style.nav} activeClassName={style.active} to="/signup">
                    Signup
                </NavLink>
               
            </navbar>
        </header>
    )
}
export default Header;