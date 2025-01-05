const Node = require('./Node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.getNextNode();
    }
  }
}


module.exports = LinkedList;

// const Node = require('./Node.js');

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   // Add song to the beginning
//   addToHead(title) {
//     const newSong = new Node(title);
//     const currentHead = this.head;
//     this.head = newSong;

//     if (currentHead) {
//       this.head.setNextNode(currentHead);
//     }
//   }

//   addToTail(title) {
//     let currentSong = this.head;
//     const newSong = new Node(title);

//     if (!currentSong) {
//       this.head = newSong;
//     } else {
//       while (currentSong.getNextNode() !== null) {
//         currentSong = currentSong.getNextNode();
//       }
//       currentSong.setNextNode(newSong);
//     }
//   }

//   printList() {
//     let currentSong = this.head;
//     const playList = [];
//     while (currentSong !== null) {
//       playList.push(currentSong.title);
//       currentSong = currentSong.getNextNode();
//     }
//     console.log(playList.join(' -> '));
//   }
// }

// module.exports = LinkedList;
