//Example of Classes
class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log("Hello, my name is " + this.name);
    }
  }
  
  let john = new Person("John");
  john.sayHello();
  
  //Example of Variables
  let name = 'John';
  console.log(name);  
  name = 'Fogo'; 
  console.log(name); 
  
  //Example of Array Methods
  let fruit = ['apple', 'banana', 'orange'];
  fruit.push('grape', 'mango');
  console.log(fruit);
  
  //Example of Destructuring
  let fruits = ['apple', 'banana', 'orange'];
  let [fruit1, fruit2, fruit3] = fruits;
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
  
  //Examples of Modules
  // math.js
  export function add(a, b) {
      return a + b;
    }
    export function subtract(a, b) {
      return a - b;
    }
  
  //Example of Ternary Operator
  let isAdmin = true;
  let message = isAdmin ? 'You are an Admin' : 'You are not an Admin';
  console.log(message);
  
  //Example of Spread Operator
  let array1 = [1, 2, 3];
  let array2 = [...arr1, 4, 5, 6];
  console.log(arr2); 