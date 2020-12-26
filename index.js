var five = require("johnny-five");
var Tessel = require("tessel-io");
const Bucket = require("./Bucket");

var { getRandomFromBucket } = require( './helpers' );

var board = new five.Board({
	io: new Tessel()
});

const People = new Bucket( getPeopleFromFile() );
const Tasks = new Bucket( getTasksFromSheet() );

board.on( 'ready', () => {

	var lcd = new five.LCD({
		pins: ["a2", "a3", "a4", "a5", "a6", "a7"]
	});

	var button = new five.Button("b1");

	var count = 0;

	lcd.cursor(0, 0).print( 'Press button' );
	lcd.cursor(1, 0).print( 'to get task' );

	button.on( 'press', () => {

		count++;

		if ( 1 < count ) {
			const result_call = getRandomFromBucket( assignedTasks, peopleWithTasks);

			const person = result_call[0];
			const task = result_call[1];

			lcd.cursor(0, 0).print( ' '.repeat(16));
			lcd.cursor(1, 0).print( ' '.repeat(16));

			lcd.cursor(0, 0).print( person + ':' );
			lcd.cursor(1, 0).print( task );

			// assignedTasks.push( task );
			// peopleWithTasks.push( person );
		}

	});

});


