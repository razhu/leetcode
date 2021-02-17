function maxDepth(root) {
    let result = 0
    function helper(node, depth) {
        if (!node) {
            result = Math.max(depth - 1, depth)
            return // base case so it doesnt run forever
        }
        helper(node.left, depth + 1)
        helper(node.right, depth + 1)
    }
    helper(root, 1)
    return result
}

module.exports = maxDepth;
