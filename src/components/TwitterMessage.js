import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredChars: 0,
      inputString: ""
    };
  }

  handleUpdate = (e) => {
    this.setState({
      enteredChars: e.target.value.length,
      inputString: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.inputString} onChange={this.handleUpdate} name="message" id="message" />
        <p>Remaining: {this.props.maxChars - this.state.enteredChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
