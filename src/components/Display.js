import React from 'react';

export default class Display extends React.Component {
	render() {
		return <div>{this.props.result}</div>;
	}
}

Display.propTypes = {
	result: PropTypes.string
};

Display.defaultProps = {
	result: '0'
};
