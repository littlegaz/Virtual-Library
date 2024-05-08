// import the Media class:
const Media = require("./Media");

// create your Music class:

class Music extends Media{
    constructor(artist, length, title, year, genre){
        super(title, year, genre)
        this.artist = artist
        this.length = length
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`
    }

    static shortestAlbum(albums) {
        if (albums.length === 0)return null;

        let shortAlbum = albums[0];
        for (let i = 1; i < albums.length; i++){
            if (albums[i].length < shortAlbum.length){
                shortAlbum = albums[i]
            }
        }
        
      }

}

// don't change below
module.exports = Music;
