import React from 'react';
import './App.css';

import DrumPad from './components/DrumPad'

const App: React.FC = () => {
	const displayStyles: React.CSSProperties = {
		display: 'flex',
		color: '#fff',
		padding: '20px',
		width: '70vw',
		margin: 'auto',
		verticalAlign: 'middle',
		backgroundColor: '#292929',
		borderRadius: '5px',
	}
  return (
    <div className="drum-machine" style={displayStyles}>
      <DrumPad SoundId='boom' KeyString='q' KeyCode={81} />
      <DrumPad SoundId='clap' KeyString='w' KeyCode={87} />
      <DrumPad SoundId='hihat' KeyString='e' KeyCode={69} />
      <DrumPad SoundId='kick' KeyString='a' KeyCode={65} />
      <DrumPad SoundId='openhat' KeyString='s' KeyCode={83} />
      <DrumPad SoundId='ride' KeyString='d' KeyCode={68} />
      <DrumPad SoundId='snare' KeyString='z' KeyCode={90} />
      <DrumPad SoundId='tink' KeyString='x' KeyCode={88} />
      <DrumPad SoundId='tom' KeyString='c' KeyCode={67} />
    </div>
  );
}

export default App;
