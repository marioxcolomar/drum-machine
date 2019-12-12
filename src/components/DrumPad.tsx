import * as React from 'react'

interface DrumPadProps {
	SoundId: string,
	KeyString: string,
}

const DrumPad: React.FC<DrumPadProps> =
	({ SoundId, KeyString }) => {

	const drumPadStyles: React.CSSProperties = {
		padding: '10px',
		border: '1px solid lightgrey',
		borderRadius: '5px',
		width: '40px',
		height: '40px',
		cursor: 'pointer',
		margin: 'auto',
		fontWeight: 500,
	}

	return (
	<div id={SoundId} className='drum-pad' style={drumPadStyles}>
		<kbd>{KeyString.toUpperCase()}</kbd>
		<audio src={`../assets/${SoundId}.wav`} />
	</div>
	)
}

export default DrumPad