import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.title = "Counter!"
    this.state = {clickCounter : 0}
  }

  setCounter(counter)
  {
    console.log(counter)
    this.setState({clickCounter : counter,})
  }

  setTitle()
  {
    console.log(this.title);
    this.title = "New Title";
    console.log(this.title);
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <h3>Clicks:{this.state.clickCounter}</h3>
        <button onClick={() => this.setCounter(this.state.clickCounter + 1)} >+1</button>
        <button onClick={() => this.setTitle()} >New Title!</button>
      </div>
    )
  }
}


export default Counter;
