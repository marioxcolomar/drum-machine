import React, { useEffect } from 'react';

interface DrumPadProps {
	Letter: string;
	Name: string;
	Src: string;
	KeyCode: number;
	setDisplay: (string: string) => void;
}

const DrumPad: React.FC<DrumPadProps> = ({ Letter, Name, Src, KeyCode, setDisplay }) => {

	let audioRef = React.createRef<HTMLAudioElement>()

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
			audioRef.current?.play()
			setDisplay(Name)
		}
	}

	const handleClick = () => {
		audioRef.current?.play()
		setDisplay(Name)
	}

	return (
		<div id={Letter} className='drum-pad' style={drumPadStyles} data-key={KeyCode} onClick={handleClick} >
			<kbd>{Letter}</kbd>
			<p>{Name}</p>
			<audio ref={audioRef} className='clip' id={Name} src={Src} autoPlay />
		</div>
	);
};

export default DrumPad;
