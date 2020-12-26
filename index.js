var five = require("johnny-five");
var Tessel = require("tessel-io");

var { getRandomFromBucket } = require( '../helpers' );

var board = new five.Board({
	io: new Tessel()
});

board.on("ready", () => {
	var lcd = new five.LCD({
		pins: ["a2", "a3", "a4", "a5", "a6", "a7"]
	});

	var button = new five.Button("b1");

	var count = 0;

	lcd.cursor(0, 0).print( 'Press button');
	lcd.cursor(1, 0).print("to get task");

	button.on("press", () => {

		count++;

		if ( 1 < count ) {
			var result_call = getRandomFromBucket();

			lcd.cursor(0, 0).print( ' '.repeat(16));
			lcd.cursor(1, 0).print( ' '.repeat(16));

			lcd.cursor(0, 0).print( result_call[0] + ':' );
			lcd.cursor(1, 0).print( result_call[1] );
		}

	});

//   button.on("release", () => console.log('Button not pressed'));

});


