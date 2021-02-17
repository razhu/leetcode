function maxArea(height) {
    // let left = 0
    // let right = height.length - 1
    // let areas = []
    // while (left < right) {
    //     if (height[left] < height[right]) {
    //         areas.push(height[right] * (right - left))
    //         left++
    //     } else {
    //         areas.push(height[left] * (left - right))
    //         right--
    //     }
    // }
    // return Math.max(...areas)

    let left = 0;
    let right = height.length - 1
    let maxArea =  0
    
    while (left < right) {
        currentMaxArea = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(currentMaxArea, maxArea)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
}

module.exports = maxArea;
