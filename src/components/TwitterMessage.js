import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
        <p>you have <span style={{color: "blue"}}>{this.props.maxChars - this.state.message.length}</span> characters remaining</p>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
