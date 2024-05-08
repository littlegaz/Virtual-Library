// import the Media class:

const Media = require("./Media");

// create your Movie class:

class Movie extends Media{
    constructor(director, duration, rating, title, year, genre){
        super(title, year, genre)
        this.director = director
        this.duration = duration
        this.rating = rating
        
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`
    }

    static longestMovie(movies) {
        return movies.reduce((longest, currentMovie) => {
          return currentMovie.duration > longest.duration ? currentMovie : longest;
        }, movies[0]);
    }
}

module.exports = Movie;