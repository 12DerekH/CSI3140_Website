import * as React from 'react';
import { useState } from 'react';
import '../styles/Main.css'

const Main = () => {
    
    const [quizvalues, setName] = useState({ name: '', code: '', qamount: '', question: false});
    const handleSubmit = () => {
        //Check to see if all fields are filled in
        console.log(quizvalues.name+"," + quizvalues.code+"," + quizvalues.qamount);
    }

    if(!quizvalues.question) {
        return (
            <div>
                <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
                <form className="container"> 
                    <h1>Create a quiz</h1><br/>

                    <label>Enter the quiz name: </label>
                    <input className="info" onChange={(e) => setName({...quizvalues, name: e.target.value, question: true})} type="text" placeholder="Quiz name" />

                    <label>How many questions does the quiz have: </label>
                    <input className="info" onChange={(e) => setName({...quizvalues, qamount: e.target.value, question: true})} type="text" placeholder="Number of questions" />

                    <input onClick={handleSubmit} type="button" value="Submit" />
                </form>

            </div>
        )
    } else {
        <div>
                <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
                <form className="container"> 
                    <h1>Enter your questions</h1><br/>
                </form>

        </div>
    }
        

}

export default Main;