import React from 'react';
import './style.css';
import ResultCard from '../ResultCard/ResultCard';

function SearchBook() {
	return (
		<div>
			<form className="pure-form">
				<fieldset>
					<legend>Book Search</legend>
					<input type="book" placeholder="Title" />
					<button type="submit" class="pure-button pure-button-primary">
						Search
					</button>
				</fieldset>
			</form>
			<div className="results">
				<h4>Results</h4>
				<ResultCard />
			</div>
		</div>
	);
}

export default SearchBook;
