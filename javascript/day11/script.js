// -----------scope ----------

// var => global scope variable (but in case of function it become local scope / function scope variable)

// let and const - block scope variable

// if (true) {
//     {
//         let a = 30;
//         console.log(a);
//         {
//             console.log(a);
//         }
//         console.log(a);
//     }
// }

// for (let i = 0; i < 5; i++) {
//     let a = 20;
//     if (true) {
//         console.log(a);
//     }
// }
// console.log("outside the for loop" , a);


// var a = "vishal"
// for (let i = 0; i < 2; i++) {
//     let a = 20;
//     console.log(a);

// }
// console.log("outside the for loop", a);


// function sum() {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);


// ----------- hoisting -----------

// console.log(a);
// var a = 10;

// sum()
// function sum(){
//     console.log("hello");
// }

// console.log(sum);
// sum()
// var sum = function(){
//     console.log("sum function called"); 
// }

