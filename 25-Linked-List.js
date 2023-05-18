/* 
Linked List
A linked list is a linear data structure that includes a series of connected nodes
Each node consists of a data value and a pointer that points to the next node
The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
Random access of elements is not feasible and accessing an element has linear time complexity

The linked list data structure supports three main operations
-Insertion - to add an element at the beginning, end or at a given index in the list
-Deletion - to remove an item given its index or value
-Search - to find an element given its value

Linked List Usage-
All applications of both stacks and queues are applications of linked lists
Image viewer
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // 0(1)
    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    // O(n)
    //this can be imrpove by linked list tail pointer
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return;
        }
        if(index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index-1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if(index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    // Constant Time Complexity
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next
                this.size--;
                return value;
            }
            return null
        }
    }

    search(value) { 
        if(this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while(curr) {
            if(curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.print();

list.insert(10, 0);

list.insert(20, 1);

list.insert(30, 2);
list.insert(40, 3);
list.insert(50, 4);
list.print();

list.reverse();
list.print();
// console.log(list.getSize());

// console.log(list.removeFrom(10));

// console.log(list.removeFrom(0));
// console.log(list.removeFrom(1));
// list.print();
// console.log(list.removeValue(40));
// list.print();

// console.log(list.removeValue(20));
// list.print();

// console.log(list.getSize());
// console.log(list.search(40));