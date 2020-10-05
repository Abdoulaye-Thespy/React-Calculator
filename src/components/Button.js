import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName }) {
  return (
    <button name={buttonName} value={buttonName} type="button">
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
