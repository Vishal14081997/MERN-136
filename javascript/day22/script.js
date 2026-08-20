// ------------event delegation -------------------------

// 1) event bubbling 
// 2) event capturing
// 3) event target

// 1) event bubbling --------------------

// document.getElementById("parent-list").addEventListener("click", function(){
//     console.log("Parent list Clicked ✅"); 
// })
// document.getElementById("waterfall").addEventListener("click", function(){
//     console.log("waterfall Clicked ☁🌧"); 
// })

// 2) event capturing --------------------

// document.getElementById("parent-list").addEventListener("click", function(){
//     console.log("Parent list Clicked ✅"); 
// }, true)
// document.getElementById("waterfall").addEventListener("click", function(){
//     console.log("waterfall Clicked ☁🌧"); 
// })

// 3) event target ---------------------

// document.getElementById("parent-list").addEventListener("click", function(event){
//     event.stopPropagation()
//     console.log("Parent list Clicked ✅"); 
// })
// document.getElementById("waterfall").addEventListener("click", function(event){
//     event.stopPropagation()
//     console.log("waterfall Clicked ☁🌧"); 
// })


// 2nd way

// document.getElementById("container").addEventListener("click", function () {
//     console.log("Container Clicked ✅");
// })
// document.getElementById("addToCart").addEventListener("click", function (e) {
//     e.stopPropagation()
//     console.log("add to cart button clicked");
// })


// ------------------  Timer function --------------------------

// setTimeout(()=>{
//     console.log("hello vishal");
// },2000)

// setInterval(()=>{
//     let random = Math.random()
//     console.log(random);
// },2000)

// console.log("hyyyyyy");

// setTimeout(()=>{
//     console.log("hello grras");
// },5000)

// Q run my interval only for 10 second then stop it ?

// const interval = setInterval(() => {
//     let random = Math.random()
//     console.log(random);
// }, 2000)
// setTimeout(() => {
//     clearInterval(interval)
// }, 11000)