import React, { useState } from "react";
import "./App.css";

import drumPads from "./assets/drumPads";

import DrumPad from "./components/DrumPad";

const App: React.FC = () => {

	const [display, setDisplay] = useState('Press or click a key.')

	const drumMachineStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: 'column',
		color: "#fff",
		justifyContent: 'space-evenly',
		fontSize: '2em'
	};

	const keysStyles: React.CSSProperties = {
		borderRadius: "5px",
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		margin: '0 auto',
		padding: "20px",
		width: "60vw",
		backgroundColor: "#292929",
	}

	return (
		<div className="drum-machine" style={drumMachineStyles}>
			<span className='display'>{display}</span>
			<div className="keys" style={keysStyles} >
				{drumPads.map((d, i) => (
					<DrumPad key={i} setDisplay={setDisplay} Letter={d.letter} Name={d.name} KeyCode={d.key} Src={d.src} />
				))}
			</div>
		</div>
	);
};

export default App;
