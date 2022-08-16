//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeStreetFighterCharacters(punch, kick, catchPhrase, specialMove) {
	this.punch = punch;
	this.kick = kick;
	this.catchPhrase = catchPhrase;
	this.specialMove = specialMove;
	this.taunt = function () {
		console.log(`You can't handle my ${this.specialMove}`);
	};
	this.winning = function () {
		console.log(`Haha! ${this.catchPhrase}`);
	};
	this.dash = function () {
		console.log(`Whoooop, missed me!`);
	};
}

let ryu = new MakeStreetFighterCharacters(
	"high",
	"high",
	"Get OVER HERE",
	"HADDDDDDUUUUUUKKKKEEEENNN"
);
