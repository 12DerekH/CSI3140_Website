import * as React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Styles.css';

const Login = () => {
    
    const [crendentials, setCredentials] = useState({ email: '', password: ''});

    const handleLogin = (e) => {
        e.preventDefault();
        let databody  ={
            "email": crendentials.email,
            "password": crendentials.password
        }
        // Log the user in
        console.log(databody)
    };
    
    return (
        <body class="loginbody">
        <form class="loginform">
            <h1 class="logintitle">Login</h1>
            <div class="input">
                <label>Email</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, email: e.target.value})} type="text" placeholder='Enter email' name='email' required/>
            </div>
            <div class="input">
                <label>Password</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, password: e.target.value})} type="password" placeholder='Enter password' name='password' required/>
            </div>
            <button type='submit' onClick={handleLogin}>Login</button>
            <br></br>
            <Link exact to='/signup'>Dont have an account? Sign up here</Link>
        </form>
        </body>
    )

}

export default Login;