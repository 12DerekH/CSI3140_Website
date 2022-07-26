import { useEffect, useState } from 'react'

const Question = (props) => {

    const number = parseInt(props.numberOfQuestions);
    const name = (props.quizName);
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
        let questionOutput = name + " questions:\n\n";
        let answerOutput = name + " answers:\n\n"
        let counter = 1

        for(let a of questions) {
            let temp = counter + ": " + a.question + "\n\n"     
            let temp2 = questionOutput.concat(temp)
            questionOutput = temp2
            counter++
        }

        counter = 1

        for(let b of questions) {
            let temp = counter + ": " + b.answer + "\n\n"     
            let temp2 = answerOutput.concat(temp)
            answerOutput = temp2
            counter++
        }

        console.log(questionOutput);
        console.log(answerOutput)

        const element = document.createElement("a");
        const file = new Blob([questionOutput], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = name + " questions" + ".txt";
        document.body.appendChild(element);
        element.click();

        const element2 = document.createElement("a");
        const file2 = new Blob([answerOutput], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file2);
        element.download = name + " answers" + ".txt";
        document.body.appendChild(element2);
        element.click();
    }

    return (<div>
            <div> {elements} </div>
            <input type="button" onClick={saveQuestions} value="Save"/>
            </div>)

}

export default Question;