import React from 'react';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

function App() {
	return (
		<div className="App" id="app">
			<Display />
			<ButtonPanel />
		</div>
	);
}

export default App;
