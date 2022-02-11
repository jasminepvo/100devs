class Guitar {
	constructor(color, stringNumber) {
		this.color = color;
		this.stringNumber = stringNumber;
		this.play = () => console.log("guitar");
	}
}

class Bass extends Guitar {
	constructor(color) {
		super(color, 4);
		this.play = () => console.log("bass");
	}
}

class Electric extends Guitar {
	constructor(color) {
		super(color, 6);
	}
}
Electric.prototype.play = () => console.log("electric");

const guitars = [];
guitars[0] = new Guitar("black");
guitars[1] = new Bass("green");
guitars[2] = new Electric("red");

for (let i = 0; i < 3; ++i) {
	guitars[i].play();
}

process.on("uncaughtException", function (err) {
	if (err instanceof TypeError) {
		throw "type error";
	} else if (err instanceof ReferenceError) {
		throw "ref";
	} else if (err instanceof RangeError) {
		throw "range errow";
	} else {
		throw "unknown";
	}
});

null.length();
