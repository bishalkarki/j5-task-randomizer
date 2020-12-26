const fs = require( 'fs' );
const path = require( 'path' );

const getRandomAssignmentFromBucket = ( bucket1, bucket2 ) => {

	const item1 = bucket1.getRandomItem();
	const item2 = bucket2.getRandomItem();

	bucket1.removeItem( item1 );
	bucket2.removeItem( item2 );

	return [
		item1,
		item2
	];
};

const getAllTasks = () => {
	return fs.readFileSync(
		path.join( __dirname, './data/tasks.txt' ),
		'utf8'
	).split("\n")
};

const getAllPeople = () => {
	return fs.readFileSync(
		path.join( __dirname, './data/people.txt' ),
		'utf8'
	).split("\n")
};

module.exports = {
	getRandomAssignmentFromBucket,
	getAllTasks,
	getAllPeople
};
