import React, {Component} from 'react';
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
      </div>
    );
  }
}

export default withTooltip(Movie);