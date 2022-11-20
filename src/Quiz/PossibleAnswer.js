const PossibleAnswer = props => (<button key={props.answerIndex}
  onClick={props.action}>
  {props.answer}</button>
  )

export default PossibleAnswer;
