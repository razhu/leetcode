function invertTree(r) {
    function invertirTree(node) { // helper method recursion
        if (!node) return // base case, so it doesn call itself forver
        // if (!node.left || !node.right) return
        let temp = node.left
        node.left = node.right
        node.right = temp
        invertirTree(node.left)
        invertirTree(node.right)
    }
    invertirTree(r)
    return r
}

module.exports = invertTree;
