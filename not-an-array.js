// Implement a class called notAnArray that has the following methods
//
// push
//  - Accepts a value and places it at the end (the next incremented index) of the object with the key being an index based on the length and the value being the value passed into the function
//  ex:
//  notAnArray.push('first')
//  notAnArray.push('second')
//  should result in {0: 'first', 1: 'second'}
//
// pop
//  - removes the value from the end of the object and returns it
//  ex:
//  notAnArray.pop();
//  returns 'second' and the object should look like {0: 'first'}
//
// unshift
//  - Accepts a value and places it at the 0th key of the object with the the value being the value passed into the function
//  - the rest of the values should be shifted over one
//  ex:
//  notAnArray.unshift('now I am first');
//  should result in {0: 'now I am first', 1: 'first'}
//
// shift
//  - removes the value from the front of the object and returns it
//  ex:
//  notAnArray.shift();
//  returns 'now I am first' and the object should look like {0: 'first'}
//

class NotAnArray {
    constructor() {
      this.storage = {};
    }
  
    push(value) {
        this.storage[Object.keys(this.storage).length] = "cat";
    }
  
    pop() {
        const value = this.storage[Object.keys(this.storage)];
        delete this.storage[Object.keys(this.storage)];
        return value;
    }
  
    unshift(value) {
        const copy = Object.assign({}, this.storage)

        for(let i = 0; i <= this.length(); i++) {

          if(i === 0) {
            this.storage[i] = value;
   
          } else {
             this.storage[i] = copy[i -1];
          }
        }
    }
  
    shift() {
      delete this.storage[0];
      const copy = Object.assign({}, this.storage);

      for(let i = 0; i < this.length() - 1; i++) {
        this.storage[i] = copy[i+1];
      }
    }

    length() {
      return Object.keys(this.storage).length;
    }
}
  
  
  module.exports = NotAnArray;