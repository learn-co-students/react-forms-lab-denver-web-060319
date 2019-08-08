import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: 0,
      inputString: ""
    };
  }

  handleUpdate = (e) => {
    this.setState({
      remaining: this.props.maxChars - e.target.value.length,
      inputString: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.input} onChange={this.handleUpdate} name="message" id="message" />
        <p>Remaining: {this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
