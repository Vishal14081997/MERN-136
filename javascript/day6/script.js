// reverse string ---------

// let str = "hello"

// console.log(str.length-1);

// let reverse = ""
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//     reverse = reverse + str[i]
// }
// console.log(reverse);

//-----------------------------------------------------------
// function reverseArr(arr) {
//     let reverse = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         // console.log(arr[i]);
//         reverse.push(arr[i])
//     }
//     return reverse;
// }
// console.log(reverseArr([24, 6, 5, 2, 5, 8, 3]));


//-----------------------------------------------------------

let product = [
    {
        id: 1,
        name: "bag",
        price: 199,
        sizes: ["S", "M", "L", "XL"],
        colors: {
            "S": ["black", "white"],
            "M": ["white"],
            "L": ["red"],
            "XL": ["black"]
        },
    },
    {
        id: 2,
        name: "Adidas",
        price: 1999,
        sizes: ["S", "M", "L", "XL"],
        colors: {
            "S": ["black", "white"],
            "M": ["white"],
            "L": ["red"],
            "XL": ["black"]
        },
    }
]
// console.log("product" , product[0] );

let productSize = product[0].sizes
// console.log(productSize);

let userInputSizes = prompt("enter your sizes")
let productFound = "product not found"

for(let i=0; i<productSize.length; i++){
    // console.log(productSize[i]); 
    if(userInputSizes == productSize[i]){
        productFound = "product found"
    }
}
console.log(productFound);

//-----------------------------------------------------------