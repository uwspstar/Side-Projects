# Binary Search Trees
# 1) has to be sored
# 2) fast for larger set
# 3) each node is greater than every node in its left subtree

# BST insert
# 1) start at root
# 2) always insert as a leaf


class Node:
    def __init__(self, data):
        self.right = self.left = None
        self.data = data


class Solution:
    def insert(self, root, data):
        if root == None:
            return Node(data)
        else:
            if data <= root.data:
                cur = self.insert(root.left, data)
                root.left = cur
            else:
                cur = self.insert(root.right, data)
                root.right = cur
        return root

    def getHeight(self, root):
        # Write your code here
        if root:
            leftDepth = self.getHeight(root.left)
            rightDepth = self.getHeight(root.right)

            if leftDepth > rightDepth:
                return leftDepth + 1
            else:
                return rightDepth + 1
        else:
            return -1


T = int(input())
myTree = Solution()
root = None
for i in range(T):
    data = int(input())
    root = myTree.insert(root, data)
height = myTree.getHeight(root)
print(height)
