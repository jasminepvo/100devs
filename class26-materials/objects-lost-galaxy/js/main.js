//Create a pizza object that has four properties and three methods
function Pizza(crust, sauce, topping, cheese) {
	this.crust = crust;
	this.sauce = sauce;
	this.topping = topping;
	this.cheese = cheese;
	this.status = function () {
		console.log("I am on the way");
	};
	this.type = function () {
		return `I am made with ${topping}`;
	};
	this.brand = function () {
		console.log("Papa Johns");
	};
}

//oops i made this a constructor
