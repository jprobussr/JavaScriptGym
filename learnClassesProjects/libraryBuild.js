// Parent class for all media types
class Media {
    constructor(title) {
        // Initialize title, checked-out status, and ratings
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // Getter for the title
    get title() {
        return this._title;
    }

    // Getter for the checked-out status
    get isCheckedOut() {
        return this._isCheckedOut;
    }

    // Getter for the ratings array
    get ratings() {
        return this._ratings;
    }

    // Setter for the checked-out status
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    // Method to toggle the checked-out staus
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    // Method to calculate and return the average of ratings
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, ratings) => accumulator + ratings, 0);
        return ratingsSum / this.ratings.length;
    }

    // Method to add a new rating to the ratings array
    addRating(value) {
        if (value >= 1 && value <= 5) {
            this.ratings.push(value);
        } else {
            console.log('Rating must be between 1 and 5.');
        }
    }
}

// Subclass for books that extends the Media class
class Book extends Media {
    constructor(author, title, pages) {
        // Call the parent class constructor with the title;
        super(title);
        this._author = author; // Initialize the author
        this._pages = pages; // Initialize the number of pages
    }

    // Getter for the author
    get author() {
        return this._author;
    }

    // Getter for the pages
    get pages() {
        return this._pages;
    }
}


//Subclass for movies that extends the media class
class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
        // Call the parent class constructor with the title
        super(title);
        this._director = director; // Initialize the director
        this._runTime = runTime; // Initialize the runTime
        this._movieCast = movieCast;
    }

    // Getter for the director
    get director() {
        return this._director;
    }

    // Getter for the runTime
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    shuffle() {
        return this._songs.sort(() => Math.random() - 0.5);
    }
}

class Catalog {
    constructor() {
        this._items = [];
    }

    get items() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item);
    }
}


// Create an instance of the Book class
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// Toggle the checked-out status of the book
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// Add ratings to the book
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Log the average rating of the book
console.log(historyOfEverything.getAverageRating().toFixed(2));

// Create an instance of the movie class
const speed = new Movie('Jan de Bont', 'Speed', 116);

// Toggle the checked-out status of the movie
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(3);

// Log the average rating of the movie
console.log(speed.getAverageRating().toFixed(2));

const myCD = new CD('Pink Floyd', 'The Dark Side of the Moon', ['Speak to Me', 'Breathe', 'Time', 'Money']);
console.log(myCD.shuffle());

const libraryCatalog = new Catalog();
libraryCatalog.addItem(historyOfEverything);
libraryCatalog.addItem(speed);
libraryCatalog.addItem(myCD);

console.log(libraryCatalog.items);