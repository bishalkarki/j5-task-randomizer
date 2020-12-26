const getRandomAssignmentFromBucket = ( taskBucket, peopleBucket ) => {

	const person = peopleBucket.getRandomItem();
	const task = taskBucket.getRandomItem();

	peopleBucket.removeItem( person );
	taskBucket.removeItem( task );

	return [
		person,
		task
	];
};

const getAllTasks = () => {

	if ( process.env.NODE_ENV === 'test' ) {
		return [ 'task1', 'task2' ];
	}

	return fs.readFileSync(
		path.join( __dirname, './data/tasks.txt' ),
		'utf8'
	).split("\n")

};

const getAllPeople = () => {

	if ( process.env.NODE_ENV === 'test' ) {
		return [ 'person', 'person1' ];
	}

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
