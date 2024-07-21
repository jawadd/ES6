import { Animal, Cat } from './animal.js';

let cat = new Cat('Cat', 4);

cat.makeNoise();

console.log(cat.metaData)

// let example = 'Jawad';



// console.log(example.padStart(10, 'a'));
// console.log(example.padEnd(10, 'a'));


// import { add } from './exportChallenge.js';
// console.log(add(1,2));

// import { data } from './example.js';
// let updatedData = data;

// updatedData.push(5)
// console.log(updatedData);



// function add(...nums) {
//     let total =0;
//     for (const num of nums){
//         total+=num;
//     }
//     console.log(`The total is ${total}`);
// }

// add(4, 5, 7, 8, 12)




/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

// const shoppingList = ["eggs", "milk", "butter"];
// const newShoppingList = ['Vegetables',...shoppingList,"fruit"]
// for (const item of newShoppingList){
//     console.log(item);
// }



// let contacts = ["Ali", "Khan", "Jan"];
// // The spread operator will create a new copy of the contacts and store it in
// //personalFriends , we can add new contacts only to our personal friends

// let personalFriends = [ "Salim", ...contacts, "Kalim" ];

// contacts.push("Kiei");

// console.log(personalFriends);

// //using spread operator with objects
// let person = {
//     name: "Adnan",
//     age: 25,
//     city: "Mardan"
// }

// let employee = {
//     ...person,
//     salary: 50000,
//     position: "Software Developer"
// }

// console.log(employee);

// const students = [ 
//     { name: "Jawad", city: "Islamabad" },
//     { name: "Hussain", city: "Mardan"},
//     { name: "Muhammad Affan", city: "Katlang" }
// ]

// for (const student of students) {
//     console.log(`${student.name} lives in  ${student.city}`);
// }


// for (const {name,city} of students) {
//     console.log(`${name} lives in  ${city}`);
// }


// //for of works with each iterable
// let fullName = "Jawad Hussain";


// for (const char of fullName) {
//     console.log(char);
// }

// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//     console.log(income);
//     total += income;
// }


// function addressMaker(address) {
//      const{city,state} =address; //object destruction
//     const newAddress = {
//         // object literals
//         city,
//         state,
//         country: 'Pakistan'
//     };
//     // Template literals
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
    
// }

// addressMaker({city: 'Mardan', state: 'KP'});


// function addressMaker(city, state) {
//     //we can simplify this to
//     const newAdress = {newcity:city, newstate:state};
//     const newAdresss = {city,state}; //object literal
//     console.log(newAdress);
//     console.log(newAdresss);
// }

// addressMaker('Mardan', 'KP');
// let [firstName, middleName, lastName] = ['Jawad', '', 'Hussain'];

// // lastName = 'We can change this one to replace the earlier one';

// console.log(lastName)

// const student = {
//     name: "Jawad",
//     age: 30,
//     projects: {
//         diceGame: "Two player dice game using JavaScript"
//     }
// }

// const{name, age , projects:{diceGame}}=student;
// console.log(`${name} aged ${age} has completed "${diceGame}"`)
// const player = {
//     name: 'Jawad Hussain',
//     club: 'Balasoor',
//     address: {
//       city: 'Mardan'
//     }
//   };
  
//   // console.log( player.address.city );
  
//   const { name, club, address: { city } } = player;
  
//   console.log(`${name} plays for ${club}`);
  
//   console.log(`${name} lives in ${city}`);
  
  



// let word1 = 'Jawad';
// let word2 = 'Hussain';
// let num1 = 2;
// let num2 = 3;

// const fullName = `${num1 + num2} ${word2}`;
// let example = `${word1} 
// ${word2}`;
// console.log(fullName);
// console.log(example)
// document.getElementById('example').innerText = example;