/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
      /**
       * 0th index not used, so null is a placeholder. Not using 0th index makes
       * calculating the left and right children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
      this.heap = [null];
    }
  
    /**
   * @param {number} i
   */
    idxOfParent(i) {
      return Math.floor(i / 2);
    }
  
    /**
     * @param {number} i
     */
    idxOfLeftChild(i) {
      return i * 2;
    }
  
    /**
     * @param {number} i
     */
    idxOfRightChild(i) {
      return i * 2 + 1;
    }
  
    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() { 
        return this.heap[1];
    }
  
    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) { 
        this.heap.push(num)
        let index = this.heap.length - 1;

        while (this.heap[this.idxOfParent(index)] > num) {
            let parentIndex = this.idxOfParent(index);
            let parentValue = this.heap[this.idxOfParent(index)]

            if (parentValue == null) break;
            //* 
            this.heap[parentIndex] = num;
            this.heap[index] = parentValue;
            index = parentIndex;
        }

        return this.heap;
    }
  
    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
      if (parentIdx > this.heap.length - 1) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
      );
  
      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
  }

let myHeap = new MinHeap();
myHeap.insert(9)
myHeap.insert(7)
myHeap.insert(5)
myHeap.insert(3)
myHeap.insert(2)
myHeap.insert(1)
console.log(myHeap.heap)
console.log(myHeap.printHorizontalTree())