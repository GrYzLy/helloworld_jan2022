import React, {Component} from 'react';
import PossibleAnswer from './PossibleAnswer';
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore : 0,
      questions: [
        {

          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        }]
    };
  }
  displayResult(index) {
    const question = this.state.questions[index];
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

  displayQuestion(index) {
    const question = this.state.questions[index];
    
    return (
      <div className='question-display' key={index}>
        <p className='question'>
          {question.question}
        </p>
        <br />
        
        {/* {question.possibleAnswers.map((answer, answerIndex) => (<button key={answerIndex}
        onClick={() => this.answerQuestion(index, answer)}>
        {answer}</button>
        ))} */}

        {question.possibleAnswers.map((answer, answerIndex) => (

        <PossibleAnswer
          key={answerIndex} 
          answerIndex={answerIndex} 
          answer={answer} 
          action={() => this.answerQuestion(index, answer)} />))}

        <br />
        {this.displayResult(index)}
      </div>
    )

  }

  updatePlayerScore(){
    const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length;
    this.setState({playerScore});
    console.log("New player score: ", playerScore);

  }
  
  answerQuestion(index, choice)
  {
    console.log(index + " " + choice)
    const answeredQuestion = this.state.questions[index];
    answeredQuestion.playerChoice = choice;

    const allQuestions = this.state.questions;

    allQuestions[index] = answeredQuestion;

    this.setState({questions : allQuestions}, () => {this.updatePlayerScore();});

  }

  render() {
    return (
      <div>
        <h1>Quiz</h1>
        {this.state.questions.map((question, questionIndex) => 
        (this.displayQuestion(questionIndex)))}
        
       
        {/* {this.state.questions.map((question, questionIndex) => 
        (<Question 
            question={question}
            key={questionIndex} 
            action={() => this.answerQuestion(questionIndex, answer)} 
            />))} */}

      </div>
    )
  }
}


export default Quiz;
