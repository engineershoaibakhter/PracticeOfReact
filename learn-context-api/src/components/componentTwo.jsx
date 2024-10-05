import React, { useContext } from 'react'
import { GlobalContext } from '../context'

const ComponentTwo = () => {
    let {state,dispatch}=useContext(GlobalContext);

    function logout(){
        dispatch({
            type:'USER_LOGOUT',
            payload:null
        })
    }

    function login(){
        dispatch({
            type:'USER_LOGIN',
            payload:{
                userName:"Ali",
                email:"ali@gmail.com",
                subject:"Engineering"
            }
        })
    }

    function toggleTheme(){
        dispatch({
            type:"TOGGLE_THEME"
        })
    }
  return (
    <>
    <h1>I am Component One</h1>
    <p>
        username: {state?.user?.userName} <br />
        email: {state?.user?.email} <br />
        subject: {state?.user?.subject} <br />
    </p>
    <br />
    <button onClick={login}>Login</button>
    <button onClick={logout}>Logout</button>
    <br></br>

    <h1>{(state.darkTheme)?"Dark Theme Activated":"Light Theme Activated"}</h1>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default ComponentTwo