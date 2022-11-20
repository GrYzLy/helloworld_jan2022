import React, {Component} from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cycle : 0
    }
    console.log("Constructor");
    console.log("Cycle: " + this.state.cycle)
    

  }

  componentDidMount() {
    console.log("Component Did Mount")
    console.log("Cycle: " + this.state.cycle)
    setInterval(
      () => this.setState({ cycle : this.state.cycle + 1}),
      30000
    )

  }

  componentDidUpdate(prevProps, prevState)
  {
    console.log("Did update");
    console.log('prevProp', prevProps);
    console.log('prevState: ',prevState)
  }

  render() {
    console.log("Render")
    return (

      <div>
        <h1>Lifecycle</h1>
        {this.state.cycle}
      </div>
    )
  }
}


export default Lifecycle;
