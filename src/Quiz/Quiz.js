import React, {Component} from 'react';

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
      <div className='question-display'>
        <p className='question'>
          {question.question}
        </p>
        <br />
        
        <button 
        onClick={() => this.answerQuestion(index, question.possibleAnswers[0])}>
        {question.possibleAnswers[0]}</button>
        
        <button 
        onClick={() => this.answerQuestion(index, question.possibleAnswers[1])}>
        {question.possibleAnswers[1]}</button>
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
        {this.displayQuestion(0)}
        {this.displayQuestion(1)}
      </div>
    )
  }
}


export default Quiz;
