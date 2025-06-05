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
 * @return {string[]}
 */

const recursivePath = (value, leftValue, rightValue, path, paths) => {
  if (!value) return;
  if (typeof value === "number" && !leftValue && !rightValue) {
    path += `${value}`;
    paths.push(path);
  }
  if (typeof value === "number" && (leftValue || rightValue)) {
    path += `${value}->`;
    recursivePath(
      leftValue?.val,
      leftValue?.left,
      leftValue?.right,
      path,
      paths
    );
    recursivePath(
      rightValue?.val,
      rightValue?.left,
      rightValue?.right,
      path,
      paths
    );
  }
};

var binaryTreePaths = function (root) {
  let path = "";
  let paths = [];
  if (!root) return;
  const value = root?.val;
  const leftValue = root?.left;
  const rightValue = root?.right;
  recursivePath(value, leftValue, rightValue, path, paths);
  return paths;
};
