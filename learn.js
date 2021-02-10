class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
const n1 = new Node(100)
// console.log(n1);

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
    // Insert last node
    
    // Insert at index
    
    // Remove at index
    
    // Insert first node
    
    // Clear list
    
    // Print list data
    printListData() {
        let current = this.head
        while (current){
            console.log(current.data);
            current = current.next
        }
    }
}

const ll = new LinkedList()
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(400)
ll.printListData()

