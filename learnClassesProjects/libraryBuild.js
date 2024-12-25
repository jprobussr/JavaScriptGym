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
        return this.isCheckedOut;
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
        if (this.ratings.length === 0) {
            return 0; // Return 0 if there are no ratings
        }
        
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating, 0);
        return ratingsSum / this.ratings.length;
    }



}