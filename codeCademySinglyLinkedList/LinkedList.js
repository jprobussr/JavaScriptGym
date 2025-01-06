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

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removeHead = this.head;
    if (!removeHead) {
      return;
    }
      this.head = removeHead.getNextNode();
      return removeHead.data;
    
  }

  search(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
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
