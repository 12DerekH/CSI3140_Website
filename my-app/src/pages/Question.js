

const Question = (props) => {

    const number = parseInt(props.numberOfQuestions);

    const elements = Array.from({length: number}, (_, index) => {
        return <div>
                    <label>Question {index} </label>
                    <input type="text" placeholder="Question"/>
                    <input type="text" placeholder="Answer"/>
                </div>;
    });

    return <div>{elements}</div>

}

export default Question;