function search(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) return i
        }
          return -1
}

module.exports = search;
