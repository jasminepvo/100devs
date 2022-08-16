// const circle = {
// 	radius: 1,
// 	location: {
// 		x: 1,
// 		y: 1,
// 	},
// 	draw: function () {
// 		console.log("draw");
// 	},
// };

// circle.draw();

//if we wanted to create another circle object, we would have duplicated the function. so if we have a bug in this method, we would have to fix the same method in all the objects
// const circle = {
// 	radius: 1,
// 	location: {
// 		x: 1,
// 		y: 1,
// 	},
// 	draw: function () {
// 		console.log("draw");
// 	},
// };

//if an object has one or more methods, we say that object has behavior like a person who can do different things. if it didn't have a method, duplicated literal would not be a problem

//if key and value are the same, you can remove the noise so radius: radius can just be radius,
//Factory Function
function createCircle(radius) {
	return {
		radius,
		draw: function () {
			console.log("draw");
		},
	};
}

//const circle = createCircle(1); //pass 1 as radius

//looks like a class but js doesn't have classes
//Constructor Function - this is also an object
function Circle(radius) {
	this.radius = radius; //reference to the object that is executing this piece of code, set to argument
	this.draw = function () {
		console.log("draw");
	};
}
const another = new Circle(1); //will create an empty object, then use 'this' to point to the global object

//defining global variables is bad practice & forgetting new will give you an error
//const another = Circle(1);

//as developer you should be familiar with both factory and constructor, choose the one you prefer

//every object in js has a property called constructor and that references the function that was used to construct or create that object

let x = {};
//JavaScript translates to let x = new Object();
//new String(); //'', "", ``
//new Boolean(); //true, false
//new Number(); //1, 2, 3...

// const Circle1 = new Function(
// 	"radius",
// 	`
// this.radius = radius;
// this.draw = function () {
// 	console.log("draw");
// }
// `
// );
// const circle = new Circle1(1);

//console circle shows radius, draw, prototype: object

Circle.call({}, 1); //if we had multiple arguments we would do 1, 2, 3, 4

//Primitives or Value Types: number, string, boolean, symbol, undefined, null
//Primitives are copied by their value
//Reference Types - object, function, array
//Objects are copied by their reference

// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number); //this will log 10

let obj = { value: 10 };

function increase(obj) {
	obj.value++;
}

increase(obj);
console.log(obj); //this will log 11
//the reason for this is because when we call increase(obj), this object is passed by it's reference. So the local parameter we have in the function will point -> to the same object defined in "let obj = {value: 10}"
