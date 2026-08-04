//------------ break , continue--------------

// for (let i = 1; i <= 10; i++) {
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if(i === 7){
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {

//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i);
// }

// --------- post increment ------
// let x = 5; 
// console.log(x++);
// let a = x++
// console.log("the value of x is : ", x);
// console.log("the value of a is :" , a);


// --------- pre increment ------
// let x = 5; 
// console.log(++x);

// let a = ++x;
// console.log("the value of x is : ", x);
// console.log("the value of a is :" , a);


// Q .write a function to find sum of even number blow n;

// function sumOfEvenNumber(n) {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         if(i % 2 === 0){
//             sum += i
//         }
//     }
//     console.log(sum);

// }
// sumOfEvenNumber(100);


// ------------ spread operator , rest operator---------------------


// let name1 = "vishal" 
// let name2 = "vishal"
// console.log(name1 === name2);

// let arr1 = [10,20,30,40,50]
// let arr2 = [10,20,30,40,50]

// console.log(arr1 == arr2);


// let arr3 = [100, 200,300,400,500]
// let arr4 = arr3
// console.log(arr3 == arr4);

// arr3[5] = 1000;
// console.log(arr3);
// console.log(arr4);


//-------spread operator-------

// let data = [
//     {
//         productName: "OnePlus",
//         ProductPrice: 3000,
//     },
//     {
//         productName: "Sumsung",
//         ProductPrice: 2000,
//     },
//     {
//         productName: "Iphone",
//         ProductPrice: 5000,
//     },
//     {
//         productName: "Noting",
//         ProductPrice: 3000,
//     },
// ]
// // modifiedData = data;
// modifiedData = [...data];

// modifiedData[4] = {
//     productName: "Vivo",
//     ProductPrice: 8000,
// }
// console.log("original data", data);
// console.log("modified data", modifiedData);


// let arr1 = [10,20,30,40]
// let arr2 = [100,200,300,400]
// let arr3 = [...arr2 , "vishal",...arr1]
// console.log(arr3);

// let arr = [1,2,3]
// let copy = [...arr]
// copy.push(4)
// console.log(copy);

// let obj1 = {
//     firstName:"vishal",
//     lastName:"singh"
// }
// let obj2 = {
//     gender:"Male",
//     age:30,
//     firstName:"rekha",
// }
// let obj3 = {...obj2, ...obj1 , firstName:"raj"}
// console.log(obj3);


// object destructuring 

// let obj = {
//     firstName:"vishal",
//     gender: "Male",
//     age: 30
// }
// let {age ,firstName} = obj;
// console.log(firstName);


//-------rest operator-------

// let arr = [10,20,30,40]

// let [firstValue , secondValue, ...rest] = arr;
// console.log(secondValue);
// console.log(rest);



