function maxProduct(nums) {
    let max0 = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let max1 = nums[i];
        nums[i] = Math.max(max1, max1 * nums[i - 1])
        max0 = Math.max(max0, nums[i])
    }
    return max0
}

module.exports = maxProduct;
