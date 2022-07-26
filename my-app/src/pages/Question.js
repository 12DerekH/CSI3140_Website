import { useEffect, useState } from 'react'

const Question = (props) => {

    const number = parseInt(props.numberOfQuestions);
    const [questions, setQuestions] = useState([Array(number)]);

    useEffect(() => {
        const newArray = [number];
        for(var i=0; i<number; i++) {
            const newQuestion = { question: "", answer:  "", index: i}
            newArray[i] = newQuestion;
        }
        setQuestions(newArray);
    }, []);

    const updateQuestion = ((e, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = e;
        setQuestions(updatedQuestions)
    })

    const updateAnswer = ((e, index) => {
        const updateAnswer = [...questions];
        updateAnswer[index].answer = e;
        setQuestions(updateAnswer)
    })

    const elements = Array.from({length: number}, (_, index) => {
        return <div key={index}>
                    <label>Question {index+1} </label>
                    <input type="text" placeholder="Question" onChange={(e) => updateQuestion(e.target.value, index)} />
                    <input type="text" placeholder="Answer" onChange={(e) => updateAnswer(e.target.value, index)}/>
                </div>;
    });

    const saveQuestions = () => {
        {/* create txt file */}
        // fs.writeFile('questions.txt', questions, (err) => { if (err) throw err; })
    }

    return <div> {elements} <input type="button" onClick={saveQuestions()} value="Save"/> </div>

}

export default Question;