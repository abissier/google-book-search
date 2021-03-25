const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI ||
		'mongodb+srv://new-user:riley@cluster0.9flal.mongodb.net/googlebooks?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	}
);

const bookSeed = [
	{
		authors: [ 'Trevor Noah' ],
		description:
			"Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone elses language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
		image: '',
		link: 'https://books.google.com/books/about/Born_a_Crime.html?id=N97UCwAAQBAJ',
		title: 'Born a Crime: Stories from a South African Childhood'
	},
	{
		authors: [ 'Suzanne Collins' ],
		description:
			"Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
		image: 'http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
		link: 'http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api',
		title: 'The Hunger Games'
	}
];

db.Book
	.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
