var isValid = function(s) {
    const bases = {
        "[": "]",
        "(": ")",
        "{": "}"
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        if (bases[e]) {
            stack.push(e)
        } else { // not in the left side...
            if (bases[stack.pop()] !== e) return false
        }
    }
    return true
};

console.log('sdss ', isValid('()'));

// program to display fibonacci sequence using recursion
// function fibonacci(num) {
//     if(num < 2) {
//         return num;
//     }
//     else {
//         return fibonacci(num-1) + fibonacci(num - 2);
//     }
// }

// console.log('xxx ', fibonacci(7));

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }
// const n1 = new Node(100)
// // console.log(n1);

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     // Insert first node
//     insertFirst(data) {
//         this.head = new Node(data, this.head)
//     }
//     // Insert last node
    
//     // Insert at index
    
//     // Remove at index
    
//     // Insert first node
    
//     // Clear list
    
//     // Print list data
//     printListData() {
//         let current = this.head
//         while (current){
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }

// const ll = new LinkedList()
// ll.insertFirst(200)
// ll.insertFirst(300)
// ll.insertFirst(400)
// ll.printListData()

// var lengthOfLongestSubstring = function(s) {
//     let sw = {}
//     let maxLonInitial = 0
//     let maxLonUltimo = 0

//     if (s.length === 0) return maxLonInitial
//     console.log('ssss aqui 1');
//     if (s.length === 1) return maxLonInitial + 1
//     console.log('ssss aqui 2');
//     for (let i = 0; i < s.length; i++) {
//         const e = s[i];
//         if (!sw[e]) {
//             maxLonInitial++
//         } else {
//             sw = {}
//             sw[e] = true
//             maxLonInitial = 1
//             maxLonUltimo = Math.max(maxLonInitial, maxLonUltimo)
//         }
//         sw[s[e]] = true
//     }
//     console.log('ssss aqui 3');
//     return maxLonUltimo
// };

// console.log(lengthOfLongestSubstring('abcabcbb'));

// var longestPalindrome = function(s) {
//     let left = 0
//     let right = 0
//     let myp = ''
//     for (let i = 0; i < s.length; i++) {
//         const e = s[i];
//         left -= 1
//         right += 1
//         if (s[left] !== s[right]) {
//             myp = ''
//             left = i
//             right = i
//         } else {
//             myp = s[left] + s[i] + s[right]
//         }
        
//     }        
//     return myp
// };

// console.log(longestPalindrome('babad'));


