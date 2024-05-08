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
        if (movies.length === 0) return null;

        let longestMovie = movies[0];
        for (let i = 1; i< movies.length; i++){
            if (movies[i].duration > longestMovie.duration){
                longestMovie = movies[i]
            }
        }
    }
}

module.exports = Movie;