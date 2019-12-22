import React, { useEffect } from 'react';

interface DrumPadProps {
	Letter: string;
	Name: string;
	KeyCode: number;
	onClick: () => void;
	setDisplay: (string: string) => void;
}

const DrumPad: React.FC<DrumPadProps> = ({ Letter, Name, KeyCode, onClick, setDisplay }) => {

	const drumPadStyles: React.CSSProperties = {
		padding: '10px',
		border: '1px solid lightgrey',
		borderRadius: '5px',
		width: '50px',
		height: '50px',
		cursor: 'pointer',
		margin: 'auto',
		fontWeight: 500,
		fontSize: '12px'
	};

	useEffect(() => {
		window.addEventListener('keydown', keydownHanlder)
		return () => {
			window.removeEventListener('keydown', keydownHanlder)
		}
	})

	const keydownHanlder = (e: KeyboardEvent) => {
		if (e.keyCode === KeyCode) {
			console.log('keydown matches letter', e.keyCode, Letter)
			setDisplay(Name)
		}
	}

	return (
		<div id={Letter} className='drum-pad' style={drumPadStyles} data-key={KeyCode} onClick={onClick} >
			<kbd>{Letter}</kbd>
			<p>{Name}</p>
			<audio className='clip' id={Name} src={`../assets/${Letter}.wav`} autoPlay />
		</div>
	);
};

export default DrumPad;
