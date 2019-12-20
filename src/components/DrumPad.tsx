import * as React from 'react';

interface DrumPadProps {
	Letter: string;
	Name: string;
	KeyCode: number;
	onClick: () => void;
}

const DrumPad: React.FC<DrumPadProps> = ({ Letter, Name, KeyCode, onClick }) => {

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

	return (
		<div id={Letter} className='drum-pad' style={drumPadStyles} data-key={KeyCode} onClick={onClick} >
			<kbd>{Letter}</kbd>
			<p>{Name}</p>
			<audio className='clip' id={Name} src={`../assets/${Letter}.wav`} autoPlay />
		</div>
	);
};

export default DrumPad;
