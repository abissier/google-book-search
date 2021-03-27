import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
	return (
		<div className="header">
			<h1>Google Books</h1>
			<Link to="/Search">Search</Link>
			<Link to="/Saved">Saved</Link>
		</div>
	);
}

export default Header;
