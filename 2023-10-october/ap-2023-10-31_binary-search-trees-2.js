/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root ? false : true;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (this.isEmpty()) return null;

        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (this.isEmpty()) return null;

        if (!current.left) {
            return current.data;
        }

        return this.minRecursive(current.left);
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (this.isEmpty()) return null;

        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (this.isEmpty()) return null;

        if (!current.right) {
            return current.data;
        }

        return this.maxRecursive(current.right);
    }
    // *********************** Work Starts Here

    contains(searchVal) {
        //* edge cases | empty bst, root == searchVal
        if (this.isEmpty()) return false;
        if (this.root.data == searchVal) return true;

        //* iterate through BST
        let current = this.root;
        while (current) {
            //* compare searchVal to current bst node, either advance or return comparison
            if (current.data == searchVal) return true;

            if (searchVal < current.data) {
                current = current.left;
            } else if (searchVal > current.data) {
                current = current.right;
            }
        }
        return false;
    }

    containsRecursive(searchVal, current = this.root) {
        if (!current) return false;
        if (current.data == searchVal) return true;

        if (searchVal < current.data) {
            if (!current.left) return false;
            if (current.left.data == searchVal) return true;
            return this.containsRecursive(searchVal, current.left);
        } else if (searchVal > current.data) {
            if (!current.right) return false;
            if (current.right.data == searchVal) return true;
            return this.containsRecursive(searchVal, current.right);
        }
    }

    range(startNode = this.root) {
        return !startNode ? null : this.max(startNode) - this.min(startNode);
    }

    // *********************** Work Ends Here

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            ' '.repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
                `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
          root
          10
        /   \
      5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);
//* test cases

//* contains

console.log(threeLevelTree.contains(10) + ' | expected: true');
console.log(threeLevelTree.contains(15) + ' | expected: true');
console.log(threeLevelTree.contains(9) + ' | expected: false');

//* contains recursive
console.log(threeLevelTree.containsRecursive(10) + ' | expected: true');
console.log(threeLevelTree.containsRecursive(15) + ' | expected: true');
console.log(threeLevelTree.containsRecursive(9) + ' | expected: false');

//* range
console.log(oneNodeTree.range() + ' | expected: 0');
console.log(twoLevelTree.range() + ' | expected: 10');
console.log(threeLevelTree.range() + ' | expected: 13');
