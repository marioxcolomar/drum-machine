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
      <DrumPad SoundId='boom' KeyString='q' />
      <DrumPad SoundId='clap' KeyString='w' />
      <DrumPad SoundId='hihat' KeyString='e' />
      <DrumPad SoundId='kick' KeyString='a' />
      <DrumPad SoundId='openhat' KeyString='s' />
      <DrumPad SoundId='ride' KeyString='d' />
      <DrumPad SoundId='snare' KeyString='z' />
      <DrumPad SoundId='tink' KeyString='x' />
      <DrumPad SoundId='tom' KeyString='c' />
    </div>
  );
}

export default App;
