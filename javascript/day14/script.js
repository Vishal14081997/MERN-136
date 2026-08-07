// -----------------sort----------------------------------

// let arr = [12, 13, 1000, 2000, 100223, 7899, 555, 22, 55]
// console.log("original array: ", arr);

// arr.sort((a,b)=> b-a )
// console.log("sorted array: ", arr);


// let arr = ["aaa" , "aab" , "vxd" , "abc" , "xyz", "jkk", "dba","kjkjk"]
// arr.sort()
// console.log(arr);

// ------------------------ map -------------------------

// let arr = [10, 20, 30, 41, 55 ,60];

// arr.map((item) => {
//     console.log(item*2);
// })

// let returnValue = arr.map((item) => {
//     return item * 2
// })
// console.log(arr);
// console.log(returnValue);


// let returnValue = arr.map((item) => {
//     if(item % 2 ===0){
//         return item;
//     }
// })
// console.log("return value: ", returnValue);


// let returnValue = arr.map((item) => {
//         return item > 30;
// })
// console.log("return value: ", returnValue);

//------------------ filter -----------------------------

// let arr = [10, 20, 30, 41, 55, 60];

// let newArr = arr.filter((item)=>{
//         return item % 2 !== 0
// })
// console.log(newArr);

// let newArr = arr.filter((item) => {
//     return item > 30;
// });
// console.log(newArr);

// ------------------ reduce ---------------------------

// let arr = [10, 20, 30, 40, 49, 50];

// let result = arr.reduce((acc, curr) => {
//     console.log("Acc value : ", acc);
//     console.log("curr value : ", curr);
//     console.log("----- Iteration completed--------");
//     return acc + curr;

// },0)

// Acc     curr
// 0   +    10
// 10  +    20
// 30  +    30
// 60  +    40
// 100 +    49
// 149 +    50

// console.log(result);


// let cartData = [
//     {
//         productName:"Iphone",
//         prodcutCategory:"smartPhone",
//         productPrice:1000,
//         qunatity:2
//     },
//     {
//         productName:"Noting",
//         prodcutCategory:"smartPhone",
//         productPrice:600,
//         qunatity:1
//     },
//     {
//         productName:"vivo",
//         prodcutCategory:"smartPhone",
//         productPrice:500,
//         qunatity:6
//     }
// ]

// let result = cartData.reduce((acc, curr) => {
//     console.log("Acc value : ", acc);
//     console.log("curr value : ", curr);
//     console.log("----- Iteration completed--------");
//     return acc + curr.productPrice*curr.qunatity;

// },0)

// console.log(result);


// ---------------- find-----------------------

// let arr = [10, 20, 30, 31, 31, 39, 40, 49, 50];

// let result = arr.find((item) => {
//     return item > 30
// })
// console.log(result);


// find: value> 30 && value<40

// let result = arr.find(value=> value>30 && value<40)
// console.log(result);

// let result = arr.findLast(value=> value>30 && value<40)
// console.log(result);



