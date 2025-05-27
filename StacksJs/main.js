import Stack from './Stack.js';

const names = ['Harry', 'Lisa', 'Miles', 'James', 'Eve'];

const nameStack = new Stack(names.length);

for (let i = 0; i < names.length; i++) {
  nameStack.push(names[i]);
}


console.log(`Who arrived last? Answer: ${nameStack.peek()}`);