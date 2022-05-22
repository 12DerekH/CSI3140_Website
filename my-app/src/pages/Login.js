import * as React from 'react';
import { useState } from 'react';
import '../App.css'

const Login = () => {
    
    const [crendentials, setCredentials] = useState({ email: '', password: ''});

    const handleLogin = (e) => {
        e.preventDefault();
        let databody  ={
            "email": crendentials.email,
            "password": crendentials.password
        }
    };
    
    return (
        <body>
        <form>
            <h1>Login</h1>

            <div>
                <label>Email</label>
                <input type="text" placeholder='Enter email' name='email' required/>
            </div>
            
            <div>
                <label>Password</label>
                <input type="password" placeholder='Enter password' name='password' required/>
            </div>

            <button type='submit'>Login</button>
        </form>
        </body>
    )

}

export default Login;