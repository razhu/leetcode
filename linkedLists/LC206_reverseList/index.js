function reverseList(head) {
    let preview = null
    let current = head

    while (current) {
        let temp = current.next
        current.next = preview
        preview = current
        current = temp

    }
    return preview
}

module.exports = reverseList;
