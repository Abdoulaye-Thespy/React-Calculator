import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, color, wide, handleClick }) {
	let className = `button ${color}`;
	if (wide) {
		className += ' fifty';
	}
	return (
		<button name={buttonName} value={buttonName} type="button" className={className} onClick={() => { handleClick(buttonName); }}>
			{buttonName}
		</button>
	);
}

Button.propTypes = {
	buttonName: PropTypes.string.isRequired,
	color: PropTypes.string,
	wide: PropTypes.bool
};

Button.defaultProps = {
	wide: false,
	color: 'orange'
};

export default Button;
