import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: null,
			next: null,
			operation: null
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(buttonName) {
    if(this.state.operation == "="){
      this.setState(
        {
          total: null,
          next: null,
          operation: null
        }
      );
    } 
    console.log(this.state.operation);
		this.setState((data) => calculate(data, buttonName));
	}
	render() {
		const { total, next, operation } = this.state;
		const result = next || total || '0';
		return (
			<div className="app" id="app">
				<Display result={result.toString()} operation={operation} />
				<ButtonPanel handleClick={this.handleClick} />
			</div>
		);
	}
}
