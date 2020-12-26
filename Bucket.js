module.exports = class Bucket {

	constructor( initialItems ) {
		this.bucket = initialItems;
		this.defaultItems = initialItems;
		this.usedItems = [];
	}

	addItem( item ) {
		this.bucket.push( item );
	}

	removeItem( itemToRemove ) {
		this.bucket = this.bucket.filter( item => item !== itemToRemove );
	}

	getRandomItem() {
		const randomIndex = Math.floor( Math.random() * this.bucket.length );

		return this.bucket[randomIndex];
	}

	getItems() {
		return this.bucket;
	}

	resetBucket() {
		this.bucket = this.defaultItems;
	}
};
