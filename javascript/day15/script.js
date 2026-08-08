//--------------- every -------------------------

// let arr = [10, 20, 30, 40, 50, 60]

// let result = arr.every((item) => {
//    return item % 2 ===0
// })
// console.log(result);


// ---------------- some -------------------

// let arr = [10, 20, 30, 41, 50, 60]
// let result = arr.some((item) => {
//     return item % 2 == 0
// })
// console.log(result);


// ----------------------- fill-------------------------

// let arr = [10, 20, 30, 41, 50, 60]

// arr.fill(value , start , end)
// arr.fill(0 ,3)
// arr.fill(0,2 ,4)
// arr.fill("hello", 2,4)
// console.log(arr);

// ------------------- flat ----------------------------

// let arr = [10, 20, 30, 41, [10,200,400], [60]]
// let newArr = arr.flat()
// console.log(newArr);

// let arr = [10, 20, 30, 41, [10,200,400, [20,0,50,"vishal"]], [60]]
// let newArr = arr.flat(2)
// console.log(newArr);

// ------------------------ flatmap-------------------

// flatmap - Map() + flat()

// const arr = [1,2,3]

// const result = arr.flatMap(num => [num ,num*2])
// console.log(result);

// const result = arr.map(num => [num ,num*2])
// console.log(result);
// // [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]

// let newArr = result.flat()
// console.log(newArr);

// let arr = [10, 21, 30, 41, 50, 60]
// let result = arr.map((item) => {
//     return item % 2 === 0 ? [item * 2] : []
// })
// console.log(result);

// let arr = [ [ 20 ], [], [ 60 ], [], [ 100 ], [ 120 ] ]
// let newArr = arr.flat()
// console.log(newArr);


//----------------- findIndex-------------------------

// let arr = [10, 20, 30, 51, 60]
// let result = arr.findIndex((item) => {
//     return item % 2 !== 0
// })
// console.log(result);

// ------------------- copywithin------------------------
// arr.copyWithin(target ,start ,end)

// let arr = [10,20,30,40,50,60,70,80]

// let newArr = arr.copyWithin(2, 0 ,2)
// let newArr = arr.copyWithin(4, 0 ,3)
// let newArr = arr.copyWithin(2,0)

// console.log(newArr);


// ************ Object methods********************************

// let obj = {
//     firstName: "vishal",
//     lastName: "singh",
//     address: "Jaipur",
//     companyName: "Grras",
// }
// let keys = Object.keys(obj)
// console.log(keys);

// for(let i=0; i<keys.length; i++){
//     console.log(obj[keys[i]]);  
// }
// let valueOfObj = Object.values(obj)
// console.log(valueOfObj);

