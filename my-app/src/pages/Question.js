import { useState } from 'react'

const Question = (props) => {

    const number = parseInt(props.numberOfQuestions);

    const [questions, setQuestions] = useState([Array(number)]);

    const elements = Array.from({length: number}, (_, index) => {
        return <div key={index}>
                    <label>Question {index+1} </label>
                    <input type="text" placeholder="Question" onChange={(e) => setQuestions({...questions, question: e.target.value})} />
                    <input type="text" placeholder="Answer" onChange={(e) => setQuestions({...questions, answer: e.target.value})}/>
                </div>;
    });

    const saveQuestions = () => {
        {/* create txt file */}
        
    }

    return <div> {elements} <input type="button" onClick={saveQuestions()} value="Save"/> </div>

}

export default Question;