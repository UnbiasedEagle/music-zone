import React from 'react';
import './song.styles.scss';

const Song = ({ currentSong, isSongPlayling }) => {
	return (
		<div className='song-container'>
			<img
				className={`${isSongPlayling ? 'rotate' : 'no-rotate'}`}
				src={currentSong.cover}
				alt={currentSong.name}
			/>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
