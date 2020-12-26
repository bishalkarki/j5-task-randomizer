module.exports = class Bucket {

	constructor( initialItems, resetToDefaultWhenEmpty = false ) {
		this.bucket = initialItems;
		this.defaultItems = initialItems;
		this.resetToDefaultWhenEmpty = resetToDefaultWhenEmpty;
	}

	addItem( item ) {
		this.bucket.push( item );
	}

	removeItem( itemToRemove ) {
		this.bucket = this.bucket.filter( item => item !== itemToRemove );
		this.maybeResetBucketWhenEmpty();
	}

	getRandomItem() {
		const randomIndex = Math.floor( Math.random() * this.bucket.length );

		return this.bucket[randomIndex];
	}

	getDefaultItems() {
		return this.defaultItems;
	}

	getItems() {
		return this.bucket;
	}

	maybeResetBucketWhenEmpty() {
		if ( this.resetToDefaultWhenEmpty === true && this.bucket.length === 0 ) {
			this.bucket = this.defaultItems;
		}
	}
};
