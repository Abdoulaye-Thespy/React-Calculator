import React from 'react';

export default class Button extends React.Component {
	render() {
		return <div>{this.props.buttonName}</div>;
	}
}

Display.propTypes = {
	result: PropTypes.string
};