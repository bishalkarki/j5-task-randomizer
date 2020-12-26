var path = require('path')
var fs = require("fs")
var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board({
  io: new Tessel()
});

var all_tasks = fs.readFileSync(
    path.join( __dirname, './data/tasks.txt' ), 
    'utf8'
  ).split("\n")

var people = fs.readFileSync(
    path.join( __dirname, './data/people.txt' ), 
    'utf8'
  ).split("\n")

function getRandomFromBucket() {
   var randomIndex = Math.floor(Math.random()*people.length);
   var randomTaskIndex = Math.floor(Math.random()*all_tasks.length);
   return [people.splice(randomIndex, 1)[0], all_tasks.splice(randomTaskIndex, 1)[0]];
}

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
      var result_call = getRandomFromBucket()
  
      lcd.cursor(0, 0).print( ' '.repeat(16));
      lcd.cursor(1, 0).print( ' '.repeat(16));
  
      lcd.cursor(0, 0).print( result_call[0] + ':' );
      lcd.cursor(1, 0).print( result_call[1] );
    }
    
  });

//   button.on("release", () => console.log('Button not pressed'));
    
});


