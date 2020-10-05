import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, className }) {
  return (
    <button name={buttonName} value={buttonName} type="button" className={"button "+ className}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
