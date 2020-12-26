var five = require('johnny-five');
var Tessel = require('tessel-io');
const Bucket = require('./Bucket');

var { getRandomAssignmentFromBucket, getAllPeople, getAllTasks } = require( './helpers' );

var board = new five.Board({
	io: new Tessel()
});

const People = new Bucket( getAllPeople(), true );
const Tasks = new Bucket( getAllTasks() );

board.on( 'ready', () => {

	var lcd = new five.LCD({
		pins: ['a2', 'a3', 'a4', 'a5', 'a6', 'a7']
	});

	var button = new five.Button('b1');

	var count = 0;

	lcd.cursor(0, 0).print( 'Press button' );
	lcd.cursor(1, 0).print( 'to get task' );

	button.on( 'press', () => {

		count++;

		if ( 1 < count ) {
			const [ person, task ] = getRandomAssignmentFromBucket( People, Tasks );

			if ( task === undefined ) {
				lcd.cursor(0, 0).print( 'No tasks left!  ' );
				lcd.cursor(1, 0).print( 'Come back later.' );
			} else {
				lcd.cursor(0, 0).print( ' '.repeat(16) );
				lcd.cursor(1, 0).print( ' '.repeat(16) );

				lcd.cursor(0, 0).print( person + ':' );
				lcd.cursor(1, 0).print( task );
			}
		}

	});

});


