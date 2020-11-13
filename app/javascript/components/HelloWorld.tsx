import React, { Component, Requireable } from "react"
import PropTypes from "prop-types"

type p = { greeting: string };

class HelloWorld extends Component<p> {
  static propTypes: { greeting: Requireable<string> }

  render() {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
