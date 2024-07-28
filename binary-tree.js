/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  minDepth(){
    if(!this.left && !this.right) return 1;

    if(!this.left){
      return 1 + this.right.minDepth()
    }

    if(!this.right){
      return 1 + this.root.minDepth()
    }

    if(this.left && this.right){
      return 1 + Math.min(this.right.minDepth(), this.left.minDepth())
    }
  }

  maxDepth(){
    if(!this.left && !this.right) return 1;

    if(!this.left){
      return 1 + Math.max(this.left.maxDepth(), this.right.maxDepth());
    }

    if(!this.right){
      return 1 + Math.max(this.left.maxDepth(), this.right.maxDepth());
    }
    
    return 1 + Math.max(this.left.maxDepth(), this.right.maxDepth())
  }

  maxPathSum() {
    // Initialize a variable to track the maximum sum
    let maxSum = { value: Number.NEGATIVE_INFINITY };

    // Helper function to compute the max sum recursively
    const maxPathSumHelper = (node) => {
      if (!node) return 0;

      // Recursively compute the maximum path sum for the left and right subtrees
      let leftSum = Math.max(0, maxPathSumHelper(node.left));
      let rightSum = Math.max(0, maxPathSumHelper(node.right));

      // Update the maximum sum including the current node
      let currentMax = node.val + leftSum + rightSum;
      maxSum.value = Math.max(maxSum.value, currentMax);

      // Return the maximum path sum that includes the current node
      return node.val + Math.max(leftSum, rightSum);
    };

    maxPathSumHelper(this);

    return maxSum.value;
  }

  nextLarger(lowerBound){
    let nextLarger = null;

    const traverse = (node) => {
      if (!node) return;

      if (node.val > lowerBound) {
        if (nextLarger === null || node.val < nextLarger) {
          nextLarger = node.val;
        }
      }

      traverse(node.left);
      traverse(node.right);
    };

    traverse(this);
    return nextLarger;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root === null) return 0;
    return this.root.minDepth();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;
    return this.root.maxDepth();
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    return this.root.maxPathSum();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    return this.root.nextLarger(lowerBound);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
