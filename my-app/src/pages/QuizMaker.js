import * as React from 'react';
import { useState } from 'react';
import Question from './Question';
import '../styles/Main.css'

const Main = () => {
    
    const [quizvalues, setName] = useState({ name: '', code: '', qamount: '', question: false});
    const questions = [];
    const handleSubmit = () => {
        
        // Error handling
        if(quizvalues.name === '') {
            window.alert("Please provide the quiz name");
        } else if (quizvalues.qamount === '') {
            window.alert("Please provide the number of questions");
        } else { 
            setName({...quizvalues, question: true});
        }
    }

    if(!quizvalues.question) {
        return (
            <div>
                <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
                <form className="container"> 
                    <h1>Create a quiz</h1><br/>

                    <label>Enter the quiz name: </label>
                    <input className="info" onChange={(e) => setName({...quizvalues, name: e.target.value})} type="text" placeholder="Quiz name" />

                    <label>How many questions does the quiz have: </label>
                    <input className="info" onChange={(e) => setName({...quizvalues, qamount: e.target.value})} type="number" placeholder="Number of questions" pattern="[0-9]+"/>

                    <input onClick={handleSubmit} type="button" value="Create" />
                </form>
            </div>
        )
    } else {
        return(
            <div>
                <a href="/"><img src="https://images.cooltext.com/5603665.png" width="291" height="95" alt="Quizzle" /></a>
                <h1>Please provide your questions</h1><br/>
                <form className="container">
                    <Question numberOfQuestions={quizvalues.qamount} />
                </form>
            </div>
        )
    }
        

}

export default Main;