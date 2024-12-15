class Song {
    constructor(title) {
        this.title = title; // The Title of the song
        this.next = null; // Pointer to the next song, initially null;
    }
}

// SinglyLinkedList class to manage the playlist
class MusicPlaylist {
    constructor() {
        this.head = null; // First song in the playlist;
        this.tail = null; // Last song in the playlist;
        this.length = 0; // Total number of songs in the playlist;
    }

    // Method to add a song to the end of the playlist
    addSong(title) {
        const newSong = new Song(title); // Create a new song to node
        if (!this.head) {
             // If the playlist is empty
             this.head = newSong; // Set the first song
             this.tail = newSong; // Set the last song to the same song
        } else {
            // If the playlist already has songs
            this.tail.next = newSong; // Link the current last song to the new song
            this.tail = newSong; // Update the tail to the new song
        }
        this.length++; // Increment the count of songs
        return this; // Return the playlist for chaining;
    }

    // Method to display all songs in the playlist
    displayPlayList() {
        if (!this.head) {
            console.log('The playlist is empty.');
            return;
        }
        let current = this.head; // Start from the first song
        console.log('Christmas Playlist:');
        let index = 1; // Song numbering starts from 1;
        while (current) {
            console.log(`${index}. ${current.title}`); // Display song number and title
            current = current.next; // Move to the next song
            index++; // Increment the song number;
        }
    }
}

const christmasPlaylist = new MusicPlaylist();

christmasPlaylist.addSong('Jingle Bells');
christmasPlaylist.addSong('Silent Night');
christmasPlaylist.addSong('Deck the Halls');
christmasPlaylist.addSong('O Holy Night');
christmasPlaylist.addSong('Rudolph the Red-Nosed Reindeer');

christmasPlaylist.displayPlayList();