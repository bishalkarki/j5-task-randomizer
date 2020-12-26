const getRandomAssignmentFromBucket = ( PeopleBucket, TaskBucket ) => {

	const person = PeopleBucket.getRandomItem();
	const task = TaskBucket.getRandomItem();

	PeopleBucket.removeItem( person );
	TaskBucket.removeItem( task );

	return [
		person,
		task
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
