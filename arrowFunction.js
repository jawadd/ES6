const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if( listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake" );
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
}
// includes function , and not supported by IE, return true or false
// let numArray = [1,2,3,4,5];

// console.log(numArray.includes(2))

// default parameter for function
// const leadSinger = (artist = "someone") => {
//     console.log(`${artist} is the lead singer of Cold Play`);
// }

// leadSinger("Khan");

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/
//
// //function declaration
// function breakfastMenu() {
//     return "I'm going to scrambled eggs for breakfast";
// }

// //anonymous function
// const lunchMenu = function() {
//     return "I'm going to eat pizza for lunch";
// }
// //Arrow function
// const dinnerMenu = () => {
//     return "I'm going to eat a burger for dinner,(with return statment)";
// }

// console.log( dinnerMenu() );
// // Arrow function with arguments

// const dinnerMenu2 = (food) => `I'm going to eat a ${food} for dinner`;
// console.log( dinnerMenu2("chicken salad") );
// // If we only have return statment , we can also omit it
// const dinnerMenu3 = (food) => `I'm going to eat a ${food} for dinner`;

// console.log( dinnerMenu3("chicken salad") );

// // we can also omit the parenthesis if we have only one argument
// const dinnerMenu4 = food => `I'm going to eat a ${food} for dinner`;

// console.log( dinnerMenu4("chicken salad") );
// // for more than one arguments we need the praenthesis
// const dinnerMenu5 = (food, drink) => `I'm going to eat a ${food} and drink ${drink} for dinner`;

// console.log( dinnerMenu5("chicken salad","Water") );