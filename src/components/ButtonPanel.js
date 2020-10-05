import React from 'react';
import Button from './Button';

function ButtonPanel() {
	return (
		<div>
			<div className="groupButtons">
				<Button buttonName="AC" color="gray" />
				<Button buttonName="+/-" color="gray" />
				<Button buttonName="%" color="gray" />
				<Button buttonName="÷" />
			</div>
			<div className="groupButtons">
				<Button buttonName="7" color="gray" />
				<Button buttonName="8" color="gray" />
				<Button buttonName="9" color="gray" />
				<Button buttonName="x" />
			</div>
			<div className="groupButtons">
				<Button buttonName="4" color="gray" />
				<Button buttonName="5" color="gray" />
				<Button buttonName="6" color="gray" />
				<Button buttonName="-"  />
			</div>
			<div className="groupButtons">
				<Button buttonName="1" color="gray" />
				<Button buttonName="2" color="gray" />
				<Button buttonName="3" color="gray" />
				<Button buttonName="+" />
			</div>
			<div className="groupButtons">
				<Button buttonName="0" color="gray" wide={true}/>
				<Button buttonName="." color="gray" />
				<Button buttonName="="  />
			</div>
		</div>
	);
}

export default ButtonPanel;
