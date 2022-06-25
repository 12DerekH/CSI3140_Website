import * as React from 'react';
import { useState } from 'react';
import '../styles/Styles.css';
import {Link} from 'react-router-dom';

const Signup = () => {
    
    const [crendentials, setCredentials] = useState({ email: '', password: '', firstName: '', lastName: ''});

    const handleLogin = (e) => {
        e.preventDefault();
        let databody  ={
            "email": crendentials.email,
            "password": crendentials.password,
            "firstName": crendentials.firstName,
            "lastName": crendentials.lastName
        }
        // Log the user in
        console.log(databody)
    };
    
    return (
        <body>
        <form>
            <h1 class="logintitle">Signup</h1>
            <div class="input">
                <label>Email</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, email: e.target.value})} type="text" placeholder='Email' name='email' required/>
            </div>
            <div class="input">
                <label>First name</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, firstName: e.target.value})} type="text" placeholder='First Name' name='firstName' required/>
            </div>
            <div class="input">
                <label>Last name</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, lastName: e.target.value})} type="text" placeholder='Last Name' name='lastName' required/>
            </div>
            <div class="input">
                <label>Password</label>
                <input class="inputField" onChange={(e) => setCredentials({...crendentials, password: e.target.value})} type="password" placeholder='Password' name='password' required/>
            </div>
            <button type='submit' onClick={handleLogin}>Create my account</button>
            <br></br>
            <Link exact to='/login'>Already have an account? Login here</Link>
        </form>
        </body>
    )

}

export default Signup;