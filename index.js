//for of works with each iterable
let fullName = "Jawad Hussain";


for (const char of fullName) {
    console.log(char);
}

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}










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