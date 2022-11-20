import React, {Component} from 'react';
import Greetings from '../Greetings/Greetings';

class RouterJS extends Component {
  constructor(props) {
    super(props);
    
  }

  RouteTo = path => {
    let paths = path
            .split('/')
            .map(p => p.toLowerCase())
            .slice(1);
    
            console.log(paths);
    return paths;
  }

  render() {
    
    let pathsOuter = this.RouteTo(window.location.pathname);

    return (
      <div>
        <h1>Router</h1>
        <p>href: {window.location.href}</p>
        <p>path: {window.location.pathname}</p>

        <br />
        {pathsOuter.includes('greetings') ? <Greetings name="Bartosz" /> : null}
      </div>
    )
  }
}


export default RouterJS;
