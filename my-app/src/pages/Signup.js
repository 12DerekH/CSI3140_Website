import * as React from 'react';
import { useState } from 'react';
import '../styles/Styles.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    
    const [crendentials, setCredentials] = useState({ email: '', password: '', firstName: '', lastName: ''});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if(!isValidEmail(crendentials.email)) {
            window.alert("Please provide a valid email!");
        } else if (crendentials.firstName === '') {
            window.alert("Please provide a valid first name!");
        } else if (crendentials.lastName === '') {
            window.alert("Please provide your last name");
        } else if (crendentials.password === '') {
            window.alert("Please provide your password");
        } else {
            navigate("/login");
        }
    };

    function isValidEmail(email) {return /\S+@\S+\.\S+/.test(email);}

    return (
        <div className='signup'>
            <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
            <body>
            <form>
                <h1 className="logintitle">Signup</h1>
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
        </div>
    )

}

export default Signup;