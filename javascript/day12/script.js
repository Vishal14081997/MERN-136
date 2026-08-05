//-------------- callbacks -------------

// function which can be passed in other function parameter or argument

// function greet(name ,callback){ 
//     console.log("hello" ,name);
//     callback()
// }

// function sayBye(){
//     console.log("Good Bye");  
// }
// greet("vishal",sayBye)


// function sum(callback){
//     // console.log("the sum function" , callback()); 
//     callback()
// }
// function sumCallback(){
//     console.log(10+30); 
// }
// sum(sumCallback)

// function sum(x ,y ,callback){
//     console.log("hello");
//     callback(x,y)
// }
// function sumCallback(a,b){
//     console.log(a+b);
// }
// sum(20,30,sumCallback)


// function sum(x, y, callback) {
//     return callback(x, y)
// }
// function sumCallback(a, b) {
//     return a + b
// }
// let addofNu = sum(40, 50, sumCallback);
// console.log(addofNu);

// Q . write a function that takes an array of number and a callback . the callback should add 5 to each number and return the update array.

// function processNumber(arr, callback) {
//     // console.log(arr);
//     return callback(arr)
// }
// function processCallback(numberArr) {
//     let updatedArr = []
//     for(let i=0; i<numberArr.length; i++){
//         updatedArr[i] = numberArr[i] + 5
//     }
//     // console.log(updatedArr);
//     return updatedArr;
// }

// let  updatefuction = processNumber([10, 20, 30], processCallback)
// console.log(updatefuction);

// Q . 

// let cartData = [
//     {
//         productName :"OnePlus",
//         productPrice :10000
//     },
//     {
//         productName :"Sumsung",
//         productPrice :3000
//     },
//     {
//         productName :"Noting",
//         productPrice :12000
//     },
//     {
//         productName :"Iphone",
//         productPrice :3000
//     },
// ]

// function totalOfCartPrice(data){
//     let total = 0
//     for(let i=0; i<data.length; i++){
//         total += data[i].productPrice
//     }
//     // console.log(total);
//     return total;
// }
// let totalPayment = totalOfCartPrice(cartData)
// console.log(totalPayment);
