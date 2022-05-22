import * as React from 'react';
import '../App.css'

const Login = () => {
    
    return (
        <body>
        <form>
            <h1>Signup</h1>

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