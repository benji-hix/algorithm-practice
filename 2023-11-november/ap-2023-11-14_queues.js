/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
      this.items = [];
    }
  
    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.items.length;
    }
  
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) return undefined;
        return this.items.shift();
    }
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return (this.isEmpty()) ? undefined : this.items[0];
    }
  
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return (this.items.length) ? false : true; 
    }
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
  }
  
  //* Rebuild the above class using a linked list instead of an array. */
  class QueueNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedListQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.queueSize = 0;
    }

    enqueue(value) {
        if (this.isEmpty()) {
            const newNode = new QueueNode(value);
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        let runner = this.head;
        while (runner.next) {
            runner = runner.next
        }
        runner.next = new QueueNode(value);
        this.size++;
        return this.queueSize;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.head;
        this.head = this.head.next;
        this.size--;
        return item;
    }

    peek()
    {
        if (this.isEmpty()) return null;
        return this.head;
    }

    size() {
        return this.queueSize;
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

  //* queue
// let testQueue = new Queue();
// console.log(testQueue.items)
// testQueue.enqueue(1);
// testQueue.enqueue(2);
// testQueue.enqueue(3);
// console.log(testQueue.size());
// console.log(testQueue.items)
// console.log(testQueue.dequeue())
// console.log(testQueue.front())

//~ linked list queue
let testListQueue = new LinkedListQueue();
testListQueue.enqueue(1);
testListQueue.enqueue(2);
testListQueue.enqueue(3);
// console.log(testListQueue.size());
console.log(testListQueue.print());
console.log(testListQueue.dequeue());
console.log(testListQueue.peek());
console.log(testListQueue.print());

