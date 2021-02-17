function isValidBST(r) {
    let valid = true
    function helper (node, min, max) {
        if (!node) return
        if (
            (min !== null && node.val <= min) ||
            (max !== null && node.val >= max) 
        ) {
            valid = false
            return
        }

        helper(node.left, min, node.val)
        helper(node.right, node.val, max)
    }

    helper(r, null, null)
    return valid
}

module.exports = isValidBST;