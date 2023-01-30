// let numbers = [1, 2, 3, 4];
// const newNum = numbers.map((n) => {
//   return n *2000
// })
// setTimeout(() => console.log(numbers.slice(0, 3)), 0);
// // setTimeout is asynchronous callback function which executes later than other synchronous functions 
// console.log(newNum);

// const { update } = require("lodash");

// //Function Composition 

// import { compose, pipe } from "lodash/fp";
// let input = " JavaScript  ";
// // let output = "<div>"+ input.trim() +"</div>";

// const trim = str => str.trim();
// const toLowerCase = str => str.toLowerCase();
// const wrapDiv = str => `<div>${str}</div>`;
// const wrapSpan = str  => `<span>${str}</span>`;
// const wrap = type => str => `<${type}>${str}</${type}>`; // apply curring here now 

// const result = wrapDiv(toLowerCase(trim(input)));
// const result1 = wrapSpan(toLowerCase(trim(input)));
// const result2 = wrap("div")(toLowerCase(trim(input)));
// const result3 = wrap("span")(toLowerCase(trim(input)));

// console.log(result); //Output - <div>javascript</div>
// console.log(result1); //Output - <span>javascript</span>
// console.log(result2); //Output - <div>javascript</div>
// console.log(result3); //Output - <span>javascript</span>

// //Compose function from lodash executes from right to left
// const transform = compose(wrapDiv, toLowerCase, trim);
// const transformX = compose(wrapSpan, toLowerCase, trim);
// const transformY = compose(wrap("div"), toLowerCase, trim);
// const transformZ = compose(wrap("span"), toLowerCase, trim);

// //Pipe function from Lodash executes from left to right 
// const transform1 = pipe(trim, toLowerCase, wrapDiv);
// const transform1X = pipe(trim, toLowerCase, wrapSpan);
// const transform1Y = pipe(trim, toLowerCase, wrap("div"));
// const transform1Z = pipe(trim, toLowerCase, wrap("span"));

// console.log(transform(input)); //Output - <div>javascript</div>
// console.log(transformX(input)); //Output - <span>javascript</span>
// console.log(transformY(input)); //Output - <div>javascript</div>
// console.log(transformZ(input)); //Output - <div>javascript</div>

// console.log(transform1(input)); //Output - <div>javascript</div>
// console.log(transform1X(input)); //Output - <span>javascript</span>
// console.log(transform1Y(input)); //Output - <span>javascript</span>
// console.log(transform1Z(input)); //Output - <span>javascript</span>

// // Curring function
// function add(a) {
//   return function(b) {
//     return a * b;
//   };
// }
// console.log(add(10)(15)); 
// const add2 = a => b => a * b;
// console.log(add2(10)(15)); // this process of function()()() is called curring 

// // Pure Functions means producing same output for same input which are immutable or cannot be changed
// // it only depends on input arguments and doesn't depend on any kind of state within.

// function Mul(num) {
//   return num * 2;
// }
// console.log(Mul(2));
// console.log(Mul(2));
// console.log(Mul(2));
// console.log(Mul(2));
//  // this is a pure function as it will return the same results as many times we run it,
// // it clearly depends on the input parameter "num" 

// function Random(number) {
//   return Math.random(number)
// }
// console.log(Random(2));
// console.log(Random(2));
// console.log(Random(2));
// console.log(Random(2));
// // this a not a pure function as it will return the different results as many times we run it
// // it clearly depends on the "random" method parameter "

// // Immutable Object - an Object whose State cannot be modified after it is created 

// const person = { 
//   name: "john" ,
//   address: {
//     country: "India",
//     city: "Chennai",
//   }
// };
// // const updated = Object.assign({}, person, { name: "Rajprabhu", age: 30 });
// const updated = {...person, name: "raj"}
// // updated.address.city = "madras";// will update the person because it does shallow coping
// // So inOrder to do deep copying, we need to declare 
// const newUpdated = { 
//   ...person,
//   address: {
//     ...person.address,
//     city: "Singaara Chennai",
//   },
//   name: "Rajprabhu Rajasekaran"
//   }
// console.log(person); //this is the object defined 
// console.log(updated); // this only shallow copies the object which will cause object mutation 
// console.log(newUpdated);// this deep copies the object 

// // Practising Immutability
// const nos = [1, 2, 3, 4, 5, 6, 7];
// const start = [0, ...nos]// adding at the start
// const end = [...nos, 8] // adding at the end 
// console.log(start);
// console.log(end);

// //adding 
// const index = nos.indexOf(2);
// console.log(index);
// const added = [...nos.slice(0, index), 0, ...nos.slice(index)];// adding at a particular index
// console.log(added);

// //removing 
// const removed = added.filter(n => n !== 0);
// console.log(removed);

// // update
// const changed = removed.map(n => (n === 7 ? 6.5 : n));
// console.log(changed);

// // Enforcing Immutability in functional javaScript Programing 

// //Immutable Library
// import { Map } from 'immutable'; 

// let book = Map({ title: "die now", year: 1998 });

// function publish(book) {
//   return book.set("isPublished", true);
// }

// let newBook = publish(book);
// console.log(book.toJS());
// console.log(newBook.toJS());

// //Immer library
// import { produce } from 'immer';
// let AnotherBook = { title: "Power of Now", year: 2002 };

// function published(AnotherBook) {
//   return produce(AnotherBook, draftBook => {
//     draftBook.isPublished = true;
//   });
// }
// let updated = published(AnotherBook);
// console.log(AnotherBook);
// console.log(updated);