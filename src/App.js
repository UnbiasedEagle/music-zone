import React, { useEffect, useState } from 'react';
import data from './data/songs.data';
import Player from './components/player/player.component';
import Song from './components/song/song.component';
import Library from './components/library/library.component';
import Navbar from './components/nav/nav.component';

function App() {
	const [ songs, setSongs ] = useState(data());
	const [ currentSong, setCurrentSong ] = useState(songs[0]);
	const [ isSongPlaying, setIsSongPlaying ] = useState(false);
	const [ showLibrary, setShowLibrary ] = useState(false);
	const [ currentSongIndex, setCurrentSongIndex ] = useState(0);

	useEffect(
		() => {
			const updatedSongsList = songs.map((song) => {
				if (song.id === currentSong.id) {
					song.active = true;
				} else {
					song.active = false;
				}
				return song;
			});

			setSongs(updatedSongsList);

			setIsSongPlaying(true);
		},
		// eslint-disable-next-line
		[ currentSong ]
	);

	useEffect(() => {
		setIsSongPlaying(false);
	}, []);

	useEffect(
		() => {
			setCurrentSong(songs[currentSongIndex]);
		},
		// eslint-disable-next-line
		[ currentSongIndex, setCurrentSong ]
	);

	return (
		<div className={`app ${showLibrary ? 'active-library' : ''}`}>
			<Navbar setShowLibrary={setShowLibrary} showLibrary={showLibrary} />
			<Song isSongPlayling={isSongPlaying} currentSong={currentSong} />
			<Player
				setCurrentSongIndex={setCurrentSongIndex}
				currentSongIndex={currentSongIndex}
				setCurrentSong={setCurrentSong}
				isSongPlaying={isSongPlaying}
				setIsSongPlaying={setIsSongPlaying}
				currentSong={currentSong}
				totalSongs={songs.length}
			/>
			<Library showLibrary={showLibrary} setCurrentSong={setCurrentSong} songs={songs} />
		</div>
	);
}

export default App;
