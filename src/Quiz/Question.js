import PossibleAnswer from "./PossibleAnswer";

function displayResult(question) {
  // const question = this.state.questions[index];
  if(!question.playerChoice) {return;}
  if(question.playerChoice === question.rightAnswer)
  {
    return (
      <p>
        Answer correct!
      </p>
    )
  }
  else
  {
    return (
      <p>Answer incorrect!</p>
    )
  }
}

const Question = props => (

<div className='question-display' >
        <p className='question'>
          {props.question.question}
        </p>
        <br />
        {props.question.possibleAnswers.map((answer, answerIndex) => (

      <PossibleAnswer
        key={answerIndex} 
        answerIndex={answerIndex} 
        answer={answer} 
        action={props.action} />))}

<br />
{displayResult(props.question)}
</div>
)

export default Question;
