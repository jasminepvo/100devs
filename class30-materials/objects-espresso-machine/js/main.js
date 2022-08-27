//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class Espresso {
	constructor(coffee, sugar, creamer, size) {
		this.coffee = coffee;
		this.sugar = sugar;
		this.creamer = creamer;
		this.size = size;
	}

	makeCoffee() {
		console.log("making coffee...");
	}
	getSize() {
		this.size = prompt("how many oz of coffee would you like?");
	}
	coffeeInfo() {
		console.log(
			`Your ${this.coffee} has ${this.sugar}, ${this.creamer} and is ${this.size} oz.`
		);
	}
}

let vanillaLate = new Espresso("vanilla", "none", "hazelnut", "8");
