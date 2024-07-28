/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  sumChildren(){
    let sum = this.val;
    for(let child of this.children){
      sum+=child.sumChildren();
    }
    return sum;
  }

  checkEven(){
    let totalEvens = this.val % 2 === 0 ? 1:0;
    
    for(let child of this.children){
      totalEvens+= child.checkEven();
    }
    return totalEvens;
  }

  sumGreaterVals(lowerBound){
    let greaterVals = this.val > lowerBound ? 1:0;

    for(let child of this.children){
      greaterVals+= child.sumGreaterVals(lowerBound);
    }
    return greaterVals;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(this.root === null) return 0;
    return this.root.sumChildren();
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(this.root === null) return 0;
    return this.root.checkEven();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(this.root === null) return 0;
    return this.root.sumGreaterVals(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
