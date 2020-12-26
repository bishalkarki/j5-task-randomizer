process.env.NODE_ENV = 'test'

const assert = require('assert')
const { getRandomFromBucket } = require( '../helpers' );

const Bucket = require( '../Bucket' );

describe( 'Task selection tests', () => {

	it('Should return a task and a person', () => {
		const TestBucket1 = new Bucket( [ 'Item1', 'Item2' ] );
		const TestBucket2 = new Bucket( [ 'Task1', 'Task2' ] );

		const result = getRandomFromBucket( TestBucket1, TestBucket2 );

		assert.strictEqual( Array.isArray( result ), true );
		assert.strictEqual( result.length, 2 );
	});

	// it('Should remove task and person previously selected are not in the next assignment', () => {
	// 	const people = new Bucket();
	// 	people.init( [ 'Person1', 'Person2' ] );

	// 	people

	// 	state.init( 'new' );
	// 	state.addItem( 'newagain' );
	// 	console.log( state.getItems() );
	// 	// const result = getRandomFromBucket();
	// 	// const peopleRemaining = getBucket( 'people' );
	// 	// const tasksRemaining = getBucket( 'tasks' );

	// 	// assert.strictEqual( currentPeople.indexOf( person ), -1 );
	// 	// assert.strictEqual( currentTasks.indexOf( task ), -1 );
	// });
});


describe( 'Bucket', () => {
	it( 'Initializes with default items', () => {
		const TestBucket = new Bucket( [ 'Item1', 'Item2' ] );

		assert.strictEqual( TestBucket.getItems().length, 2 );
	});

	it( 'Gets a random item', () => {
		const TestBucket = new Bucket( [ 'Item1', 'Item2' ] );
		const random = TestBucket.getRandomItem();

		assert.strictEqual( typeof random, 'string' );
		assert.strictEqual( random.length > 0, true );
	});

	it( 'Removes an item from the bucket', () => {
		const TestBucket = new Bucket( [ 'Item1', 'Item2' ] );
		const itemToRemove = TestBucket.getRandomItem();

		TestBucket.removeItem( itemToRemove );

		assert.strictEqual( TestBucket.getItems().indexOf( itemToRemove ), -1 );
	});

	it( 'Resets bucket to default items', () => {
		const TestBucket = new Bucket( [ 'Item1', 'Item2' ] );
		const itemToRemove = TestBucket.getRandomItem();

		TestBucket.removeItem( itemToRemove );

		assert.strictEqual( TestBucket.defaultItems.length === TestBucket.bucket.length, false );

		TestBucket.resetBucket();

		assert.strictEqual( TestBucket.defaultItems.length === TestBucket.bucket.length, true );
	});
})
// on first button click, a randomly selected task is given to a randomly selected person
// on next button click, that task and that person are excluded from the things that can be randomly selected
// the initial program state is saved to a file
// on each button click, the current program state is retrieved from a file
// on each button click, the new program state is saved to a file
// when there are no people remaining, everyone is re-added to the random selection pool
// when there are no tasks remaining, return "out of tasks"
// if a file is empty
