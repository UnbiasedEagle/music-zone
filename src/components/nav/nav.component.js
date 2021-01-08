import React from 'react';
import './nav.styles.scss';

const Navbar = ({ showLibrary, setShowLibrary }) => {
	return (
		<nav>
			<h1>MusicZone</h1>
			<button onClick={() => setShowLibrary(!showLibrary)}>
				Library <i className='fas fa-music' />
			</button>
		</nav>
	);
};

export default Navbar;
