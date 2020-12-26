const getRandomFromBucket = ( taskBucket, peopleBucket ) => {

	const person = peopleBucket.getRandomItem();
	const task = taskBucket.getRandomItem();

	return [
		person,
		task
	];
};

module.exports = {
	getRandomFromBucket
};
