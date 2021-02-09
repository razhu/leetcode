function rob(nums) {
    // let even = 0;
    // let odd = 0
    // for (let i = 0; i < nums.length; i++) {
    //     i%2 === 0 ? even+=nums[i] : odd+=nums[i]
    // }
    // return Math.max(even, odd)

    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
}

module.exports = rob;
