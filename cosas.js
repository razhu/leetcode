/* // [ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]
// find the max sum of 5 sequences


function max5 (array) {
    let slidingWindow = {}
    let mySubarray = []
    let minIndex = 0;
    let maxIndex = 4
    let partialSum = 0

    for (let index = minIndex; index < array.length; index++) {
        mySubarray = getSubarray(array, minIndex, maxIndex + 1)
        partialSum = mySubarray.reduce((a, b) => a + b)
        slidingWindow[partialSum] = mySubarray
        minIndex++
        maxIndex++
    }
    let maxIndex2 = Math.max(...Object.keys(slidingWindow))
    return slidingWindow[maxIndex2]
}

function getSubarray (arr, ini, fin) {
    return arr.slice(ini, fin)
}
let sampleArray = [ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]
console.log(max5(sampleArray));
*/

// palindrome
const longestPalindrome = s => {
    let longest = s.substring(0, 1)
    for(let i = 0; i < s.length; i++) {
      let temp = expand(s, i, i)
      if(temp.length > longest.length) {
        longest = temp
      }
      temp = expand(s, i, i + 1)
      if(temp.length > longest.length) {
        longest = temp
      }
    }
    return longest
  }
  
  const expand = (s, begin, end) => {
    while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
      begin--
      end++
    }
    return s.substring(begin + 1, end)
  }

console.log('xxx ', longestPalindrome('abacdfgdcaba'));