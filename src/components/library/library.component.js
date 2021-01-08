import React from 'react';
import LibrarySong from '../library-song/library-song.component';
import './library.styles.scss';

const Library = ({ songs, setCurrentSong, showLibrary }) => {
	return (
		<div className={`library ${showLibrary ? 'show-library' : ''}`}>
			<h2>Song Library</h2>
			<div className='library-songs'>
				{songs.map((song) => {
					return (
						<LibrarySong
							showLibrary={showLibrary}
							setCurrentSong={setCurrentSong}
							key={song.id}
							currentSong={song}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Library;
