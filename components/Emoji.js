import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ label, symbol }) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}>
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Emoji;
