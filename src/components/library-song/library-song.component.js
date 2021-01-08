import React from 'react';
import './library-song.styles.scss';

const LibrarySong = ({ currentSong, setCurrentSong, showLibrary }) => {
	return (
		<div
			className={`${showLibrary ? 'active' : ''} library-song ${currentSong.active && 'selected'}`}
			onClick={() => setCurrentSong(currentSong)}
		>
			<img src={currentSong.cover} alt={currentSong.name} />
			<div className='song-description'>
				<h3>{currentSong.name}</h3>
				<h4>{currentSong.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
