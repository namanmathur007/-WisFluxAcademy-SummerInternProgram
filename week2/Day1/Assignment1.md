Assignment 1

<strong></strong>

<strong>1 What is Javascript?</strong>

JavaScript is an object orient programming language designed to make web development easier and more attractive. In most cases, JavaScript is used to create responsive, interactive elements for web pages, enhancing the user experience.


<strong>2 Why do prefer const over var?</strong>

If we wish for a variable to be re-definable, one can prefer using var. The usage of const makes sure that the variable binding is immutable but the object itself can change whenever we like.


<strong>3 What are Objects?</strong>

Objects are one of the available data types in JS. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor. To create a sample object:

const person = { name: "John Doe", age: 52, jobStatus: "Retired", };


<strong>4 What is a function?</strong>

A function is a block of code that is designed to perform a specific task. The usage of a function also helps in re-use of code rather than writing it each time we wish to use it.

To declare a function:

function nthFibonacci(inpNum) { if (inpNum <= 1) return inpNum; return nthFibonacci(inpNum - 2) + nthFibonacci(inpNum - 1); }


<strong>5 What are primitive data types in JS?</strong>

A primitive data type is a data type that is not an object and has no methods or properties. There are 7 primitive data types in JS: string, number, bigint, boolean, undefined, symbol and null.


<strong>6 What is DOM ?</strong>

DOM stands for Document Object Model, with the help of DOM JS can access and change all the elements of a HTML document. It is constructed as a tree of Objects.

With the object model, JS gets all the power it needs to create dynamic web pages.


<strong>7 Why do we need DOM?</strong>

DOM allows JS to be powerful enought to access and change everything that can be changed in a HTML document i.e. we can change the Styling, create new elements, etc. Being able to use DOM gives the programmer infinite possibilities and thus allows a programmer to be able to create truly dynamic web pages.


<strong>8 What is the difference between let and var?</strong>

The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope.

The scope of let not only limited to the block in which it is defined but variable with let also do not get added with global window object even if it get declared outside of any block. But we can access variable with var from window object if it is defined globally.

Due to limited scope let variables are usually used when there is limited use of those variables such as in for loops, while loops or inside the scope of if conditions etc while var variable is used when value of variable need to be less change and used to accessed globally.

Also, one difference between var and let is variable with var can be redeclared to some other value while variable could not be redeclared if it is defined with let

let a = 'hello'; // globally scoped var b = 'world'; // globally scoped console.log(window.a); // undefined console.log(window.b); // 'world' var a = 'hello'; var a = 'world'; // No problem, 'hello' is replaced. let b = 'hello'; let b = 'world'; // SyntaxError: Identifier 'b' has already been declared


<strong>9 What is an Array and how is it different from an Object in JavaScript?</strong>

An array is a special variable, that can hold more than one value. In Programming languages such as C++, Java,etc. Arrays are generally collection of similar types of data. Arrays in JS are also objects.

Arrays in JS are resizable and can contain a mix of different data types. JS arrays are not associative arrays. Arrays in JS are zero-indexed. To create a sample array in JS.

const exampleArr = new Array("This", "is", "an", "example"); Objects must be used when you wish to access data in a key-value pairing and use arrays when you wish to create a simple list of things.


<strong>10 How can we implement call by value and call by reference in Javascript?</strong>

To implement call by value, see the code snippet below:

let originalVal = 10; function updateOriginalVal(originalVal) { originalVal += 10; console.log(originalVal); }

updateOriginalVal(originalVal); // 20 console.log(originalVal); // 10

As we can see, the value of the originalVal variable did not change, rather it was a copy of the original variable, whose value gets changed.

To implement call by reference, see the code snippet below:

let myObj = { val: 10, };

function updateVal(objRef) { objRef.val += 10; }

console.log(myObj.val); // 10 updateVal(myObj); console.log(myObj.val); // 20


<strong>11 What is the use of JavaScript in Web Browsers?</strong>

Using this, we can transform a website from having very basic functionality to be whatever we wish to be. In terms of human analogy, JavaScript is the brain of the website.


<!--------------------- Programs --------------------->

<strong>how a variable value in an HTML webpage using DOM?</strong>
let a = 6
document.write(a)