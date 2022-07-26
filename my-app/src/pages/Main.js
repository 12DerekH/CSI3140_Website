import * as React from 'react';
import { useState } from 'react';
import '../styles/Main.css'
import {Link} from 'react-router-dom';

const Main = () => {
    
    const [quizcode, setCode] = useState("");

    const handleSubmit = (event) => {
        setCode(event.target.value);
        event.preventDefault();

        //Look for quiz matching quiz code
        console.log(quizcode)
      }

    return (
        <div>
            <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
            <Link class="login" exact to='/login'>Want to create a quiz? Sign in here</Link>
            <form class="container"> 
                <h1>Access a quiz</h1><br/>
                <input class="info" type="text" placeholder="Quiz code" />
                <button type='submit' onClick={handleSubmit}>Start</button> <br/>
                <Link class="maker" exact to='/maker'>Link to quiz creation while there is no backend</Link>
            </form>
        </div>
    )

}

export default Main;