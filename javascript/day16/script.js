// const persan = {
//     firstName:"vishal",
//     lastName :"singh",
//     address:"Jaipur",
//     companyName:"Grras"
// }

// let keyValuePair = Object.entries(persan)
// console.log(keyValuePair);

// let arr = [["name", "vishal"], ["age", 40]]
// let obj = Object.fromEntries(arr)
// console.log(obj);

// persan.gender = "Male"
// persan.firstName = "rajendra"
// console.log(persan);

// Object.seal(persan);
// persan.firstName = "sagar"
// persan.gender = "Female"
// console.log(persan);

// Object.freeze(persan);
// persan.firstName = "sagar"
// persan.gender = "Female"
// persan = {}
// console.log(persan);

// let isExist = persan.hasOwnProperty("firstName")
// console.log(isExist);

// let obj = {
//     firstName:"vishal",
//     lastName:"singh"
// }
// Object.assign(obj , {
//     address:"Jaipur",
//     gender:"Male"
// })
// console.log(obj);


// -------------------------string methods------------------------------

// toUppercase , toLowercase , slice , split , trim , chatAt , replace , substring , includes , indexOf

// let str = "Hello, My name is vishal singh";

// console.log(str[4]);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let newStr = str.slice(0,4)
// console.log(newStr);

// let newStr = str.substring(4,0)
// console.log(newStr);


// let str = "Hello, My name is vishal singh";
// let result = str.split(" ")
// let result = str.split(",")
// let result = str.split(".")
// let result = str.split("e")
// console.log(result);


// let date = "10-03-2026" // -->> 10/03/2026
// let result = date.split("-")
// let joinArr = result.join("/")
// console.log(joinArr);

// let str = "   hello vishal   "
// console.log(str.length);

// let newStr = str.trim()
// console.log(newStr.length);


// let str = "Hello, My name is vishal singh vishal";
// let newStr = str.replace("vishal", "mukesh")
// let newStr = str.replaceAll("vishal", "mukesh")
// console.log(newStr);

// let str = "5"
// let newStr = str.padStart(3, "0")
// let newStr = str.padEnd(3, "0")
// console.log(newStr);


// let str = "Hello, My name is vishal singh";
// let result = str.includes("vishal singh")
// console.log(result);


// let date = "10-02-2026"
// let newDate = date.replaceAll("-", "/")
// console.log(newDate);



