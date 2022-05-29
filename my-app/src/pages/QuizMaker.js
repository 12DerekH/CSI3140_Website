import * as React from 'react';
import { useState } from 'react';
import '../styles/Main.css'

const Main = () => {
    
    const [quizvalues, setName] = useState({ name: '', code: '', qamount: ''});

    const handleName = (event) => {
        setName(event.target.value);
        event.preventDefault();

        //Look for quiz matching quiz code
        console.log("quiz name is " + quizvalues.name);
      }

      const handleSubmit = () => {
        //Check to see if all fields are filled in
        console.log(quizvalues.name+","+quizvalues.code+","+quizvalues.qamount);
      }

    return (
        <div>
            <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
            <form class="container"> 
                <h1>Create a quiz</h1><br/>
                <label>Enter the quiz name: </label>
                <input class="info" onChange={handleName} type="text" placeholder="Quiz name" />
                <label>How many questions does the quiz have: </label>
                <input class="info" onChange={handleName} type="text" placeholder="Quiz name" />
                <button type='submit' onClick={handleSubmit}>Start</button>
            </form>
        </div>
    )

}

export default Main;