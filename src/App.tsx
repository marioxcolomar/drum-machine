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
	};

	const keysStyles: React.CSSProperties = {
		borderRadius: "5px",
		display: 'flex',
		padding: "20px",
		width: "70vw",
		backgroundColor: "#292929",
	}

	return (
		<div className="drum-machine" style={drumMachineStyles}>
			<h2>{display}</h2>
			<div className="keys" style={keysStyles} >
				{drumPads.map((d, i) => (
					<DrumPad key={i} onClick={() => setDisplay(d.name)} Letter={d.letter} Name={d.name} KeyCode={d.key} />
				))}
			</div>
		</div>
	);
};

export default App;
