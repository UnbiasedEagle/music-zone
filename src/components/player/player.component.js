import React, { useEffect, useRef, useState } from 'react';
import './player.styles.scss';

const Player = ({
	currentSong,
	isSongPlaying,
	setIsSongPlaying,
	setCurrentSongIndex,
	currentSongIndex,
	totalSongs
}) => {
	const songRef = useRef(null);

	const playSongHandler = () => {
		if (songInfo.currentTime === songInfo.duration) {
			songRef.current.currentTime = 0;
		}
		songRef.current.play();
		setIsSongPlaying(true);
	};

	const stopSongHandler = () => {
		songRef.current.pause();
		setIsSongPlaying(false);
	};

	const [ songInfo, setSongInfo ] = useState({
		currentTime: 0,
		duration: 0
	});

	const timeUpdateHandler = () => {
		if (songRef.current.duration) {
			const current = songRef.current.currentTime;
			const duration = songRef.current.duration;
			setSongInfo({ currentTime: current, duration });
		}
	};

	function getTime(time) {
		return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
	}

	const dragHandler = (e) => {
		setSongInfo({ ...songInfo, currentTime: +e.target.value });

		songRef.current.currentTime = +e.target.value;
	};

	useEffect(
		() => {
			if (songInfo.currentTime === songInfo.duration) {
				setIsSongPlaying(false);
			}
		},
		[ songInfo, setIsSongPlaying ]
	);

	const prevSongHandler = () => {
		if (currentSongIndex === 0) {
			setCurrentSongIndex(totalSongs - 1);
		} else {
			setCurrentSongIndex(currentSongIndex - 1);
		}
	};

	const nextSongHandler = () => {
		if (currentSongIndex === totalSongs - 1) {
			setCurrentSongIndex(0);
		} else {
			setCurrentSongIndex(currentSongIndex + 1);
		}
	};

	useEffect(
		() => {
			if (currentSong && isSongPlaying) {
				playSongHandler();
			}
		},
		// eslint-disable-next-line
		[ currentSong, playSongHandler ]
	);

	return (
		<div className='player'>
			<div className='time-controls'>
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					min={0}
					onChange={dragHandler}
					max={songInfo.duration}
					value={songInfo.currentTime}
					type='range'
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className='play-controls'>
				<i onClick={prevSongHandler} className='fas fa-angle-left skip-back fa-2x' />
				{isSongPlaying ? (
					<i onClick={stopSongHandler} className='fas fa-pause fa-2x' />
				) : (
					<i onClick={playSongHandler} className='fas fa-play play fa-2x' />
				)}

				<i onClick={nextSongHandler} className='fas fa-angle-right skip-forward fa-2x' />
			</div>
			<audio
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler}
				ref={songRef}
				src={currentSong.audio}
			/>
		</div>
	);
};

export default Player;
