//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTvShows {
	constructor(genre, title, releaseDate, rating) {
		this.title = title;
		this.genre = genre;
		this.date = releaseDate;
		this.rating = rating;
	}
	play() {
		consolelog("Playing...");
	}
	stop() {
		consolelog("Stopping...");
	}
	saveToList() {
		consolelog("Saved To List");
	}
}

let bridgerton = new NetflixTvShows(
	"Bridgerton",
	"Period Romantic Drama",
	2020,
	"99%"
);
