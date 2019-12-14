import React from "react";
import "./App.css";

import drumPads from './assets/drumPads'

import DrumPad from "./components/DrumPad";

const App: React.FC = () => {
	const displayStyles: React.CSSProperties = {
		display: "flex",
		color: "#fff",
		padding: "20px",
		width: "70vw",
		margin: "auto",
		verticalAlign: "middle",
		backgroundColor: "#292929",
		borderRadius: "5px"
	};
	return (
		<div className="drum-machine" style={displayStyles}>
      {drumPads.map(d =>
        <DrumPad Letter={d.letter} Name={d.name} KeyCode={d.key} />
      )}
		</div>
	);
};

export default App;
