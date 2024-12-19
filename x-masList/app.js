const LinkedList = require('./LinkedList');

// Create a new Playlist
const christmasPlayList = new LinkedList();

// Add Christmas songs to the playlist
christmasPlayList.addToHead('Silent Night');
christmasPlayList.addToTail('Jingle Bells');
christmasPlayList.addToTail('Frosty The Snowman');
christmasPlayList.addToTail('Rudolph the Red-Nosed Reindeer');

// Print the Playlist
console.log('Current Playlist: ');
christmasPlayList.printList();

// Remove the currently playing song (head of the list);
console.log("\nPlaying song:", christmasPlayList.removeHead());

// Print the updated playlist
console.log('Updated playlist:');
christmasPlayList.printList();

//Add a new song to the head of the playlist
christmasPlayList.addToHead("Deck the Halls");

// Print the final Playlist
console.log("Final Playlist:");
christmasPlayList.printList();