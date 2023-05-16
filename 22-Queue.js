/* 
Queue

The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
The first element inserted into the queue is the first element to be removed
A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head)
Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model

The queue data structure supports two main operations
-enqueue(element) - which adds an element to the rear/tail of the collection
-dequeue() - which removes an element from the front/head of the collection
peek() - get the value of the element at the front of the queue without removing it
isEmpty() - check if the queue is empty
size() - get the number of elements in the queue
print() - visualize the elements in the queue

Queue Usage
Printers
CPU task scheduling
Callback queue in JavaScript runtime
*/

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString())
    }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());

queue.print();

console.log(queue.dequeue());

console.log(queue.peek());