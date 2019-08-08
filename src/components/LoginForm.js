import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUpdate = (e) => {

    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  submit = (e) => {
    e.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      const {username, password} = this.state
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="username" value={this.username} onChange={this.handleUpdate} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.password} onChange={this.handleUpdate} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
