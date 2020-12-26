var path = require('path')
var fs = require("fs")

const getRandomFromBucket = () => {

	var people = getPeople();
	var all_tasks = getAllTasks();

	var randomIndex = Math.floor(Math.random()*people.length);
	var randomTaskIndex = Math.floor(Math.random()*all_tasks.length);

	return [people.splice(randomIndex, 1)[0], all_tasks.splice(randomTaskIndex, 1)[0]];
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

const getPeople = () => {

	if ( process.env.NODE_ENV === 'test' ) {
		return [ 'person', 'person1' ];
	}

	return fs.readFileSync(
		path.join( __dirname, './data/people.txt' ),
		'utf8'
	).split("\n")

};

module.exports = {
	getRandomFromBucket,
	getAllTasks,
	getPeople
};
