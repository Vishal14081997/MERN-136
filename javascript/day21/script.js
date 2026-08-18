// Events 

// function sum(){
//     console.log(10+20); 
// }

// 1st 

// function sum() {
//     let number1 = document.getElementById("number1").value;
//     let number2 = document.getElementById("number2").value;
//     console.log(Number(number1) + Number(number2));
// }
// function sub() {
//     let number1 = document.getElementById("number1").value;
//     let number2 = document.getElementById("number2").value;
//     console.log(Number(number1) - Number(number2));
// }

// 2nd

// document.getElementById("button1").onclick = function () {
//     let number1 = Number(document.getElementById("number1").value)
//     let number2 = Number(document.getElementById("number2").value)
//     console.log(number1 + number2);
// }

// document.getElementById("button2").onclick = function () {
//     let number1 = Number(document.getElementById("number1").value)
//     let number2 = Number(document.getElementById("number2").value)
//     console.log(number1 - number2);
// }

// 3rd 

// function sum() {
//     let number1 = Number(document.getElementById("number1").value)
//     let number2 = Number(document.getElementById("number2").value)
//     console.log(number1 + number2);

//     // document.getElementById("result").innerHTML  = `<h2>${number1 +number2}</h2>`

//     let newHeading = document.createElement("h2")
//     newHeading.innerText = number1 + number2

//     document.getElementById("result").appendChild(newHeading)
// }

// 4th 

// document.getElementById("button").addEventListener("click", function(){
//     console.log("hello grras");
// })

//-------------------------------------------------

// let color = "blueviolet"
// document.getElementById("container").addEventListener('click', function () {
//     if(color === "blueviolet"){
//         document.getElementById("container").style.background = "orange"
//         color = "orange"
//     }else{
//         document.getElementById("container").style.background = "blueviolet"
//         color = "blueviolet"
//     }
// });

//----------------------------------------------------------

// document.getElementById("container").addEventListener("mouseenter",function(){
//     document.getElementById("container").style.background = "red"
// })
// document.getElementById("container").addEventListener("mouseleave",function(){
//     document.getElementById("container").style.background = "blueviolet"
// })

//---------------------------------------------------------

// document.getElementById("input").addEventListener("change",function(){
//     console.log('hello vishal');

// })

// document.getElementById("input").addEventListener("change",function(e){
//       console.log(e.target.name , e.target.value); 
// })

// document.getElementById("input").onchange = function (e) {
//     console.log(e.target.name, e.target.value);
// }

// document.getElementById("input").oninput = function (e) {
//     console.log(e.target.name, e.target.value);
// }

// document.getElementById("input").addEventListener("input",function(e){
//       console.log(e.target.value); 
// })

