class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	// insert(val) {
	//   let current = this.root;
	//   let node = new Node(val);

	//   if(this.root === null)
	//       return this.root = node;

	//       let prev = null;

	//       while (current) {
	//           if (current.val > val) {
	//               prev = current;
	//               current = current.left;
	//           }
	//           else if (current.val < val) {
	//               prev = current;
	//               current = current.right;
	//           }
	//       }
	//       if (prev.val > val)
	//           return prev.left = node;
	//       else
	//           return prev.right = node;

	// }
	//why didn't mine work

	insert(val) {
		// If the tree is empty, insert at the root
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}

		// Otherwise, find the correct spot for the new node.
		let current = this.root;
		while (true) {
			if (val < current.val) {
				if (current.left === null) {
					current.left = new Node(val);
					return this;
				} else {
					current = current.left;
				}
			} else if (val > current.val) {
				if (current.right === null) {
					current.right = new Node(val);
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val, current = this.root) {
		// If the tree is empty, insert at the root
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}
		if (val < current.val) {
			if (current.left === null) {
				current.left = new Node(val);
				return this;
			} else {
				return this.insertRecursively(val, current.left);
			}
		} else if (val > current.val) {
			if (current.right === null) {
				current.right = new Node(val);
				return this;
			} else {
				return this.insertRecursively(val, current.right);
			}
		}
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let current = this.root;

		if (current === null) {
			return undefined;
		}
		while (current) {
			if (current.val === val) return current;

			current = val < current.val ? current.left : current.right;
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, current = this.root) {
		if (current === null) {
			return undefined;
		}
		if (current.val === val) return current;

		if (val < current.val) {
			return this.findRecursively(val, current.left);
		} else {
			return this.findRecursively(val, current.right);
		}
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder(currentNode = this.root) {
		let result = [];

		function traverse(currentNode) {
			result.push(currentNode.val);
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
		}
		traverse(currentNode);
		return result;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder(currentNode = this.root) {
		let result = [];

		function traverse(currentNode) {
			if (currentNode.left) traverse(currentNode.left);
			result.push(currentNode.val);
			if (currentNode.right) traverse(currentNode.right);
		}
		traverse(currentNode);
		return result;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder(currentNode = this.root) {
		let result = [];

		function traverse(currentNode) {
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
			result.push(currentNode.val);
		}
		traverse(currentNode);
		return result;
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs() {
    


  }

	/** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

	remove(val) {}

	/** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
