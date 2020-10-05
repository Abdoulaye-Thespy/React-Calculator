import React from 'react';
import Button from './Button';

function ButtonPanel() {
	return (
		<div>
			<div className="groupButtons">
				<Button buttonName="AC" className="gray" />
				<Button buttonName="+/-" className="gray" />
				<Button buttonName="%" className="gray" />
				<Button buttonName="÷" />
			</div>
			<div className="groupButtons">
				<Button buttonName="7" className="gray" />
				<Button buttonName="8" className="gray" />
				<Button buttonName="9" className="gray" />
				<Button buttonName="x" />
			</div>
			<div className="groupButtons">
				<Button buttonName="4" className="gray" />
				<Button buttonName="5" className="gray" />
				<Button buttonName="6" className="gray" />
				<Button buttonName="-"  />
			</div>
			<div className="groupButtons">
				<Button buttonName="1" className="gray" />
				<Button buttonName="2" className="gray" />
				<Button buttonName="3" className="gray" />
				<Button buttonName="+" />
			</div>
			<div className="groupButtons">
				<Button buttonName="0" className="fifty gray" />
				<Button buttonName="." className="gray" />
				<Button buttonName="="  />
			</div>
		</div>
	);
}

export default ButtonPanel;
