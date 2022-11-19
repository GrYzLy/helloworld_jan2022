import React, {Component} from 'react';
import SecretMessage from "./SecreteMessage"
class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSecret : false
    }
  }

  secretMessage() {
    return (<div>
      I'm secrete message
    </div>)
  }

  toggleSecreteMessage()
  {
    console.log("toggleSecreteMessage");
    console.log(this.state.showSecret)
    this.setState({showSecret : !this.state.showSecret});
  }

  render() {
    return (
      <div>
        <h1>Conditional rendering</h1>
        <button onClick={this.toggleSecreteMessage.bind(this)}>Show/Hide!</button>
        {this.state.showSecret ? this.secretMessage() : null}
        {this.state.showSecret && this.secretMessage()}
        {this.state.showSecret && <SecretMessage />}
      </div>
    )
  }
}


export default ConditionalRendering;
