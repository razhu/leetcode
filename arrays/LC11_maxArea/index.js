function maxArea(height) {
    let left = 0
    let right = height.length - 1
    let areas = []
    while (left < right) {
        if (height[left] < height[right]) {
            areas.push(height[right] * (right - left))
            left++
        } else {
            areas.push(height[left] * (left - right))
            right--
        }
    }
    return Math.max(...areas)
}

module.exports = maxArea;
