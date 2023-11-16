/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
      this.items = [];
    }
  
    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items[this.items.length] = item;
        return this.items.length;
    }
  
    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.items.length - 1];
        this.items.length -= 1;
        return item;
    }
  
    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        return (this.isEmpty()) ? undefined : this.items[this.items.length - 1];
    }
  
    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return (this.items.length) ? false : true;
    }
  
    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return (this.isEmpty()) ? null : this.items.length;
    }
  }
  
  class StackNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedListStack {
    constructor() {
      this.head = null;
    }

    push(value) {
        if (this.isEmpty()) {
            this.head = new StackNode(value);
            return this;
        }
        let runner = this.head;
        while (runner.next) {
            runner = runner.next
        }
        runner.next = new StackNode(value);
        return this;
    }

    pop() {
        if (this.isEmpty()) return null;
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next
        }
        const item = runner.next;
        runner.next = null;
        return item;
    }

    peek()
    {
        if (this.isEmpty()) return null;
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next
        }
        const item = runner.next;
        return item;
    }

    size() {
        if (this.isEmpty()) return null;
        let runner = this.head;
        let count = 0;
        while (runner) {
            runner = runner.next;
            count++;
        }
        return count;
    }

    isEmpty() {
        return (this.head) ? false : true;
    }

    print() {
        let array = [];
        let runner = this.head;
        while (runner) {
            array.push(runner.data)
            runner = runner.next;
        }
        return array;
    }
  }

/* -------------------------------------------------------------------------- */
//~                                Test Cases                                 //
/* -------------------------------------------------------------------------- */

//* Stack
let myStack = new Stack();
myStack.push(2)
myStack.push(5)
myStack.push(3)
console.log(myStack.size())
console.log(myStack.items)
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.items)
//* Linked List Stack
let myListStack = new LinkedListStack();
myListStack.push(2)
myListStack.push(5)
myListStack.push(3)
console.log(myListStack.size())
console.log(myListStack.print())
console.log(myListStack.pop())
console.log(myListStack.peek())
console.log(myListStack.print())

