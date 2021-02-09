function uniquePaths(m, n) {
    const dpMatrix = []

    for (let row = 1; row <= n; row++) {
        dpMatrix.push([])
    }
    // fillout first row
    for (let row = 0; row < n; row++) {
        dpMatrix[row][0] = 1
    }
    // fillout first column
    for (let col = 0; col < m; col++) {
        dpMatrix[0][col] = 1
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            // do the thing here
            dpMatrix[row][col] = dpMatrix[row][col-1] +  dpMatrix[row - 1][col]
        }
        
    }
    return dpMatrix[n-1][m-1]
}

module.exports = uniquePaths;


