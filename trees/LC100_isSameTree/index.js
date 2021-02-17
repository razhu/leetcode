function isSameTree(p, q) {
    let sameTree = true
    function checkSameTree(x, y) {
        if (!x && !y) {
            return
        } else if (!x || !y) {
            sameTree = false
            return 
        } else if (x.val !== y.val) {
            sameTree = false
            return 
        }
        checkSameTree(x.left, y.left)
        checkSameTree(x.right, y.right)
    }
    checkSameTree(p, q)
    return sameTree;
}

module.exports = isSameTree;
