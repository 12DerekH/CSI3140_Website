import * as React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Styles.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [crendentials, setCredentials] = useState({ email: '', password: ''});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if(!isValidEmail(crendentials.email)) {
            window.alert("Please provide a valid email!");
        } else if (crendentials.password === '') {
            window.alert("Please provide a valid password!");
        } else {
            navigate("/portal");
        }
    };

    function isValidEmail(email) {return /\S+@\S+\.\S+/.test(email);}
    
    return (
        <div>
            <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
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
        </div>
    )

}

export default Login;