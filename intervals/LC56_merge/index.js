function merge(intervals2) {
    let intervals = intervals2.map(int => int.sort())
    let merged = []
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        if (i === 0) {
            merged.push(intervals[i])
        } else {
            if (interval[0] >= intervals[i-1][1]) {
                merged.push([intervals[i-1][0], interval[1], ])
            }
        }
        
    }
    return merged
}

module.exports = merge;
