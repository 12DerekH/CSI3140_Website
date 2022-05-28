import * as React from 'react';
import '../styles/Main.css'
import {Link} from 'react-router-dom';

const Main = () => {
    
    return (
        <div>
            <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
            <div class="container"> 
                <h1>Access a quiz</h1><br/>
                <Link class="login" exact to='/signup'>Dont have an account? Sign up here</Link>
                <input class="info" type="text" placeholder="Quiz code"/>
                <button>Start</button>
            </div>
        </div>
    )

}

export default Main;