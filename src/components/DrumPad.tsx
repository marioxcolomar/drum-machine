import * as React from 'react';

interface DrumPadProps {
	SoundId: string;
	KeyString: string;
	KeyCode: number;
}

const DrumPad: React.FC<DrumPadProps> = ({ SoundId, KeyString, KeyCode }) => {
	const audioRef = React.createRef<HTMLAudioElement>()

	const drumPadStyles: React.CSSProperties = {
		padding: '10px',
		border: '1px solid lightgrey',
		borderRadius: '5px',
		width: '50px',
		height: '50px',
		cursor: 'pointer',
		margin: 'auto',
		fontWeight: 500
	};

	return (
		<div id={SoundId} className='drum-pad' style={drumPadStyles} data-key={KeyCode} onClick={() => audioRef}>
			<kbd>{KeyString.toUpperCase()}</kbd>
			<p style={{ fontSize: '12px' }}>{SoundId}</p>
			<audio className='clip' id={KeyString.toUpperCase()} src={`../assets/${SoundId}.wav`} ref={audioRef} autoPlay />
		</div>
	);
};

export default DrumPad;
