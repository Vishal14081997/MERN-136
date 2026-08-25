
// api call --------

// const response = fetch("https://fakestoreapi.com/products");
// // console.log(response);
// response
// .then((data)=>{
//     // console.log(data.json());
//     return data.json();
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error); 
// })


// mini project --------------------

const fetchData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        // console.log(data);


        data.forEach((item) => {
            let myDiv = document.getElementById("container")
            let newDiv = document.createElement("div")
            newDiv.innerHTML = `<img src="${item.image}" width= "150" height = "150"/> <h2>${item.id}</h2> <p>${item.category}</p> <p>${item.description}</p>`
            newDiv.style.background = "skyblue"
            newDiv.style.padding = "20px"
            newDiv.style.borderRadius = "10px"
            myDiv.appendChild(newDiv)
        })
    } catch (error) {
        console.log(error);
    }
}
fetchData()