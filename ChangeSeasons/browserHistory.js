class Node {
    constructor(url) {
        this.url = url;
        this.next = null;
    }
}

class BrowserHistory {
    constructor() {
        this.current = null;
        this.head = null;
    }

    visit(url) {
        const newNode = new Node(url);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.current;
        }
        this.current = newNode;
        console.log(`Vistited: ${url}`);
    }

    back() {
        if (!this.current || !this.current.next) {
            console.log("No previous pages.");
            return;
        }
        this.current = this.current.next;
        console.log(`Went back to: ${this.current.url}`);
    }

    showHistory() {
        let temp = this.current;
        console.log('Browser History:');
        while (temp) {
            console.log(temp.url);
            temp = temp.next;
        }
    }
}

const browser = new BrowserHistory();

browser.visit('Code Cademy');
browser.visit('You Tube');
browser.visit('github');

browser.showHistory();
browser.back();
browser.showHistory();