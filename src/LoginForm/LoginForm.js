import React, {Component} from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.title = "Login form!"
   
    this.state = {
      username : '',
      password : '',
      passwordConfirmation : '',
      email : '',
      errors : []
    };

    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this)

    


  }

  validateUsernameOnBlur(event)
  {
    const username = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateNotEmpty("Username", username));

    this.setState({username, errors})
    
  }

  validatePasswordOnBlur(event)
  {
    const password = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateNotEmpty("Password", password));
    this.setState({password,errors});

  }

  validateNotEmpty(field, value)
  {
    console.log("Validator not empty");
    if(value.length <= 0) {
      console.log("Empty");
      return  `${field} must be filled out`
    }
  }

  displayErrors()
  {
    return (
      <div>
        {this.state.errors.map((err,i) => <p key={`err-${i}`}>{err}</p>)}
      </div>
    )
  }

  submitForm(event)
  {
    
  }
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        {/* Username: <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br /> */}
        Username: <input type="text" onBlur={this.validateUsernameOnBlur} /><br />
        Password: <input type="text" onBlur={(event) => {this.validatePasswordOnBlur(event)}} /><br />
        Password confirmation: <input type="text" /><br />
        Email: <input type="text" /><br />
        <button>Submit</button>
        {this.displayErrors()}
      </div>
    )
  }
}


export default LoginForm;
