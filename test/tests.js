process.env.NODE_ENV = 'test'

const assert = require('assert')
const { getRandomAssignmentFromBucket } = require( '../helpers' );

const Bucket = require( '../Bucket' );

describe( 'Task selection tests', () => {

	it( 'Should return a task and a person', () => {
		const TestBucket1 = new Bucket( [ 'Item1', 'Item2' ] );
		const TestBucket2 = new Bucket( [ 'Task1', 'Task2' ] );

		const result = getRandomAssignmentFromBucket( TestBucket1, TestBucket2 );

		assert.strictEqual( Array.isArray( result ), true );
		assert.strictEqual( result.length, 2 );
	});

	it( 'Should remove task and person previously selected are not in the next assignment', () => {
		const PeopleBucket = new Bucket( [ 'Person1', 'Person2' ] );
		const TaskBucket = new Bucket( [ 'Task1', 'Task2' ] );

		const result = getRandomAssignmentFromBucket( PeopleBucket, TaskBucket );

		assert.strictEqual( PeopleBucket.getItems().indexOf( result[0] ), -1 );
		assert.strictEqual( TaskBucket.getItems().indexOf( result[1] ), -1 );
	});

	it( 'Should add everyone back to the selection pool when no people are remaining', () => {
		const PeopleBucket = new Bucket( [ 'Person1', 'Person2' ], true );
		const TaskBucket = new Bucket( [ 'Task1', 'Task2' ] );

		const results = [
			getRandomAssignmentFromBucket( PeopleBucket, TaskBucket ),
			getRandomAssignmentFromBucket( PeopleBucket, TaskBucket )
		];

		assert.strictEqual(
			PeopleBucket.getItems().length === PeopleBucket.getDefaultItems().length,
			true
		);
	});
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
		const TestBucket = new Bucket( [ 'Item1', 'Item2' ], true );
		const itemToRemove = TestBucket.getRandomItem();

		TestBucket.removeItem( itemToRemove );

		assert.strictEqual(
			TestBucket.getDefaultItems().length === TestBucket.getItems().length,
			false
		);

		const nextItemToRemove = TestBucket.getRandomItem();

		TestBucket.removeItem( nextItemToRemove );
		TestBucket.maybeResetBucketWhenEmpty();

		assert.strictEqual(
			TestBucket.getDefaultItems().length === TestBucket.getItems().length,
			true
		);
	});
})

