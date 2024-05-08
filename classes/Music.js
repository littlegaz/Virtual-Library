// import the Media class:

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

    static shortestAlbum(musicArray) {
        if (musicArray.length === 0) return null; // Check if the array is empty
        return musicArray.reduce((shortest, current) => {
          return current.shortestSongLength < shortest.shortestSongLength ? current : shortest;
        }, musicArray[0]); // Initialize with the first music item as the shortest
      }

}

// don't change below
module.exports = Music;
