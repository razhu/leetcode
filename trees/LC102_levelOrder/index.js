function levelOrder(r) {
    let result = []
    function helper(node, depth) {
        if (!node) return // base case so it doesnt run forever
        if (!result[depth]) result[depth] = []
        result[depth].push(node.val)
        helper(node.left, depth + 1)
        helper(node.right, depth + 1)
    }
    helper(r, 0)
    console.log('ddd ', result);
    return result
}

module.exports = levelOrder;
