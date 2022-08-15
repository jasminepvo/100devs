//Create a stopwatch object that has four properties and three methods
// const stopwatch = {
//   hour: "04",
//   minute: "21",
//   second: "59",
//   currentTime function() {
//     return `${this.hour}${this.minute}${this.second}`
//   },
// }

let stopwatch = {};

stopwatch.brand = "Nike";
stopwatch.color = "black";
stopwatch.shape = "round";
stopwatch.size = "medium";

stopwatch.start = function () {
	console.log("startttinggggg");
};
stopwatch.stop = function () {
	console.log("stopppppinnggg");
};
stopwatch.sayBrand = function () {
	console.log(stopwatch.brand);
};
