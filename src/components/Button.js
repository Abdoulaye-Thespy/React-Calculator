import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	return <div>{props.buttonName}</div>;
}

Button.propTypes = {
	buttonName: PropTypes.string
};

export default Button;
