import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Randomize extends PureComponent {
  render() {
    const { onPress } = this.props;
    return (
      <button onClick={onPress}>Randomize</button>
    );
  }
}

Randomize.propTypes = {
  onPress: PropTypes.func,
};

Randomize.defaultProps = {
  onPress: () => {},
}

export default Randomize;