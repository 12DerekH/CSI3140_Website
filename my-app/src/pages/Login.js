import * as React from 'react';
import { useState } from 'react';


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
        <body>
        <form>
            <h1>Login</h1>
            <div class="input">
                <label>Email</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, email: e.target.value})} type="text" placeholder='Enter email' name='email' required/>
            </div>
            <div class="input">
                <label>Password</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, password: e.target.value})} type="password" placeholder='Enter password' name='password' required/>
            </div>
            <button type='submit' onClick={handleLogin}>Login</button>
        </form>
        </body>
    )

}

export default Login;