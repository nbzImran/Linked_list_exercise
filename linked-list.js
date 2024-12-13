    /** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}



/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    for (let val of vals) this.push(val);
  }

  // _get( idx ) {
  //   console.log("Getting node at index:", idx);

  //   if ( idx < 0 || idx >= this.length ) {
  //     throw new Error("invalid index.")
  //   }

  //   let current = this.length;
  //   for ( let i = 0; i < idx; i++ ) {
  //     current = current.next;
  //   }

  //   return current
  // }

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  
  
  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    // if the list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1; //update the length of the list
  }

  

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    // if the list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    if (this.length === 0 ) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */


  
  pop() {
    return this.removeAt(this.length - 1);
    
  }





 
  
  /** shift(): return & remove first item. */

  shift() {
    if ( this.length === 0 ) {
      return null; // Return null if the list is empty
    }
    const val = this.head.val; // sabve the value of the head
    this. head = this.head.next; // move the head to the next node
    this.length -= 1; // Decrement the length

    // if the list becomes empty, update the tail to null
    if (this.length === 0 ) {
      this.tail = null;
    }

    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if ( idx < 0 || idx >= this.length ) {
      throw new Error("Invalid index")
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if ( idx < 0 || idx >= this.length ) {
      throw new Error("invalid index")
    }

    let currentNode = this.head;
    for ( let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if ( idx < 0 || idx > this.length ) {
      throw new Error("Invalid index.")
    }

    const newNode = new Node(val);


    if ( idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if ( this.length === 0) {
        this.tail = newNode;
      }
      this.length += 1;
      return;
    }

    if ( idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }

    const prevNode = this._get(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    console.log("Removing at index:", idx);

    if ( idx >= this.length || idx < 0 ) {
      throw new Error("Invalid index")
    }

    // Remove the first item
    if ( idx === 0) {
      console.log("Removing first node:", idx === 0);
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if ( this.length < 2 ) this.tail = this.head;
      return val;
    }
    //get the pervios node
    let prev = this._get(idx - 1);

    // Remove the tail
    if ( idx === this.length - 1 ) {
      console.log("Removing tail:", idx === this.length - 1);

      let val = prev.next.val;
      prev.next = null
      this.tail = prev;
      this.length -= 1;
      return val
    }

    let val = prev.next.val;
    prev.next = prev.next.next;
    return val
  }

  /** average(): return an average of all values in the list */

  average() {
    if ( this.length === 0) {
      return 0; // Return 0 for an empty list
    }

    let total = 0;
    let currentNode = this.head;

    while (currentNode) {
      total += currentNode.val; // Add the value of the current node
      currentNode = currentNode.next;

    }

    return total / this.length; // comput and return the AVG
  }
}

module.exports = LinkedList;
