import React from 'react';
import Button from './Button';

function ButtonPanel({ handleClick }) {
	return (
		<div>
			<div className="groupButtons">
				<Button buttonName="AC" color="gray" handleClick={handleClick} />
				<Button buttonName="+/-" color="gray" handleClick={handleClick} />
				<Button buttonName="%" color="gray" handleClick={handleClick} />
				<Button buttonName="÷" handleClick={handleClick} />
			</div>
			<div className="groupButtons">
				<Button buttonName="7" color="gray" handleClick={handleClick} />
				<Button buttonName="8" color="gray" handleClick={handleClick} />
				<Button buttonName="9" color="gray" handleClick={handleClick} />
				<Button buttonName="x" handleClick={handleClick} />
			</div>
			<div className="groupButtons">
				<Button buttonName="4" color="gray" handleClick={handleClick} />
				<Button buttonName="5" color="gray" handleClick={handleClick} />
				<Button buttonName="6" color="gray" handleClick={handleClick} />
				<Button buttonName="-" handleClick={handleClick} />
			</div>
			<div className="groupButtons">
				<Button buttonName="1" color="gray" handleClick={handleClick} />
				<Button buttonName="2" color="gray" handleClick={handleClick} />
				<Button buttonName="3" color="gray" handleClick={handleClick} />
				<Button buttonName="+" handleClick={handleClick} />
			</div>
			<div className="groupButtons">
				<Button buttonName="0" color="gray" wide handleClick={handleClick} />
				<Button buttonName="." color="gray" handleClick={handleClick} />
				<Button buttonName="=" handleClick={handleClick} />
			</div>
		</div>
	);
}

export default ButtonPanel;
