//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}
	about() {
		console.log(`${name} is a ${this.breed}`);
	}
}

let jax = new Dog("jax", "mini goldendoodle");

class Cat extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}
	speak() {
		console.log("meoowwww");
	}
}
