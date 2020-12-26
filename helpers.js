const fs = require( 'fs' );
const path = require( 'path' );
const { listParticipants, listTasks, authorize } = require('./googleSheetsAPI');

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
	return fs.readFile(
		path.join( __dirname,'./credentials.json'),
		(err, content) => {
			if (err) return console.log('Error loading client secret file:', err);
			// Authorize a client with credentials, then call the Google Sheets API.
			authorize(JSON.parse(content), listTasks);
	});

	// TODO: this is what we need to transform the data from google sheets.
	// potentially simlar for below
	var filtered_rows = rows.filter(row => {
		if (row[1] !== "1") {
		   return true;
		}
	 });
	 
	 var tasks = filtered_rows.map(row => {
		if (row[1] !== "1"){
		   return row[0]
		}
	 });
};

const getAllPeople = () => {
	return fs.readFile(
		path.join( __dirname,'./credentials.json'),
		(err, content) => {
			if (err) return console.log('Error loading client secret file:', err);
			// Authorize a client with credentials, then call the Google Sheets API.
			authorize(JSON.parse(content), listParticipants);
		})
};

module.exports = {
	getRandomAssignmentFromBucket,
	getAllTasks,
	getAllPeople
};


// TODO: testing the calls - remove
getAllPeople()
getAllTasks()