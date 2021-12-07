/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  
  let sum = 0;
  let deepestLevelOfBinaryTree = 0;
  
  const recursiveFunc = (node, level) => {
    if (!node) return;
    
    if (level === deepestLevelOfBinaryTree) {
      sum = sum + node.val;
    } else if (level > deepestLevelOfBinaryTree) {
      deepestLevelOfBinaryTree = level;
      sum = node.val;
    }

    recursiveFunc(node.left, level + 1);
    recursiveFunc(node.right, level + 1);
  }
  
  recursiveFunc(root, 0);
  return sum;
};