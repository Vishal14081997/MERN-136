// Array methods - 
// push , pop ,shift , unshift , concat , slice , splice ,indexOf , includes , reverse , join, sort , map , filter , reduce , find ,every ,some , fill , copywithin , flat , flatmap, findIndex

//---------------- concat-----------------------

// let arr1 = [1, 2, 3, 4]
// let arr2 = ["vishal", "singh", "raj"]
// let arr3 = [true, false, undefined, null]
// let newArr = arr2.concat(arr1, "this is static value", arr3)

// console.log(newArr);

// ----------- slice ---------------

// let arr = [10, 20, 30, 40, 50, 60]

// does not change original array , return a new  array 

// startIndex -> includes
// endIndex -> not includes

// let newArr = arr.slice(2)
// let newArr = arr.slice(2,5)
// let newArr = arr.slice(1 , 3)

// console.log(arr);
// console.log(newArr)

//--------------- splice -------------

// let arr = [10, 20, 30, 40, 50, 60]

// let returnArr = arr.splice(3)
// let returnArr = arr.splice(3 ,1)
// let returnArr = arr.splice(3 ,2)
// let returnArr = arr.splice(3 ,3 ,1000)
// let returnArr = arr.splice(3 ,0 ,"vishal" , true, 40)

// console.log("original array :", arr);
// console.log("return value : " , returnArr);

// change the original array 
// return the remove element


//--------- indexOf -----------------

// let arr = [10, 20, 50, 30, 40, 50, 50, 60]
// let indexOfValue = arr.indexOf(50)
// let indexOfValue = arr.indexOf(50 ,6)
// let indexOfValue = arr.indexOf(100)
// console.log(indexOfValue);


// ---------- includes ----------------------

// let arr = [10, 20, 50, 30, 40, 50, 50, 60]

// let isExist = arr.includes(61);

// console.log(isExist);

// const product = ["phone" , "tv", "ac"]
// let newProduct = "ac"

// if(!product.includes(newProduct)){
//         product.push(newProduct)
// }else{
//     console.log("item already exists");
// }
// console.log(product);


// --------------- reverse-------------

// let arr = [10, 20, 50, 30, 40, 50, 50, 60]

// let reverseArr = arr.reverse()
// console.log(reverseArr);

// --------------- join----------------------

// let arr = [10, 20, 50, 30, 40, 50, 50, 60]
            
// // let joinString = arr.join() 
// let joinString = arr.join("-")

// console.log(arr);
// console.log(joinString);


// -----------------sort----------------------------------