import React from 'react';
import './style.css';

function ResultCard() {
	return (
		<div className="resultCard">
			<div className="book-info">
				<h1>Title</h1>
				<p>Author</p>
				<div className="img">
					<p>image goes here</p>
					<p>
						Descriptikjf fiosiadjfdkffh efj sjflskdjf sdsjf osdjfklsdf dfj sldflsdkjflsdfj lskfas sdklfj
						sklfjskljd fskd ksjdfsjij sdl kdajfklasj dflklksjdf oisiek fasdksdjosdjf lksjdf dslkfj slkjfd
						sjf sjd ksdjfidsf oidsjsdflksflk jsdfoiejon
					</p>
				</div>
			</div>
			<div className="book-btns">
				<button>View</button>
				<button>Save</button>
			</div>
		</div>
	);
}

export default ResultCard;
