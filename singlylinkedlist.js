//Linked list data structure

class Node {
  constructor(value) {
    this.value = value;
    this.next = 0;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("lok");
list.push("tamang");
list.push(123);
list.push("el paso");
console.log(list.head);
console.log(list.head.value);
console.log(list.head.next);
