### Binary tree
- Binary tree is a tree where each node can have maximum two children. 
- Since there are only two children so it’s quite intuitive to call them left and right child. L 
```
class BinaryTreeNode {
    constructor(value) {
        // Value which our beloved node represents.
        this.value = value;
        // Reference of the left child.
        this.left = null;
        // Reference of the right child.
        this.right = null;
    }
}
```