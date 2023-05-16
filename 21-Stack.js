/* 
Stack
The stack data structure is a sequential collection of elements that follows the principle of Last In First Out (LIFO)
The last element inserted into the stack is first element to be removed
A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model
The stack data structure supports two main operations
-Push, which adds an element to the collection
-Pop, which removes the most recently added element from the collection

Stach Usage
Browser history tracking
Undo operation when typing
Expression conversions
Call stack in JavaSCript runtime

Stack Implementation
push(element) - add an element to the top of the stack
pop() - remove the top most element from the stack
peep() - get the value of the top element without removing it
isEmpty() - check if the stack is empty
size() - get the number of elements in the stack
print() - visualize the elements in the stack
*/

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

// Create New Stack Instance to verify

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size());

stack.print();

console.log(stack.pop());

console.log(stack.peek());