import React, {Component, Profiler} from 'react';
import Profile from './Profile'

class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null
    }
  }
  loadProfiles()
  {
    fetch('http://localhost:39635/Profile')
    .then(response => response.json())
    .then(data => this.setState({data : data}))

  }

  componentDidMount()
  {
    this.loadProfiles();
  }

  render() {
    console.log(this.state.data)
    return (

      <div>
        <h1>Fetch Api</h1>
        {this.state.data && <Profile user={this.state.data} />}
      </div>
    )
  }
}


export default FetchApi;
