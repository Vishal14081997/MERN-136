// ---------------- asyc javascript------------------------

// console.log("first step");
// setTimeout(() => {
//     console.log("second step");
// }, 2000)
// console.log("Third step");


let jsonData = {
    users: [
        {
            name: "vishal",
            userName: "vishal@1408",
            profile: {
                email: "vishal@gmail.com",
                age: "100"
            },
            posts: ["post1", "post2", "post3"]
        },
        {
            name: "raj",
            userName: "raj@123",
            profile: {
                email: "raj@gmail.com",
                age: "100"
            },
            posts: ["post1", "post2", "post3"]
        },
        {
            name: "pawan",
            userName: "pawan@123",
            profile: {
                email: "pawan@gmail.com",
                age: "100"
            },
            posts: ["post1", "post2", "post3"]
        }
    ]
}

// 1st -------

// function getUserDetail() {
//     let filterData = jsonData.users.map((item) => {
//         let newObj = {}
//         newObj.name = item.name
//         newObj.userName = item.userName
//         return newObj;
//     })
//     // console.log(filterData);
//     setTimeout(()=>{
//         console.log(filterData);  
//     },3000)
// }
// getUserDetail()

// 2nd --------

// let userDetails;
// function getUserDetail() {
//     let filterData = jsonData.users.map((item) => {
//         let newObj = {}
//         newObj.name = item.name
//         newObj.userName = item.userName
//         return newObj;
//     })
//     // console.log(filterData);
//     setTimeout(() => {
//         userDetails = filterData
//     }, 3000)
// }
// setTimeout(() => {
//     console.log(userDetails);
// }, 3000)
// getUserDetail()

// 3rd---------

// let profileData;
// function getProfileDetail(user) {
//     let filterData = jsonData.users.filter((item) => {
//         return item.userName === user
//     })
//     // console.log(filterData[0].profile);
//     setTimeout(() => {
//         profileData = filterData[0].profile
//         console.log(profileData);
//     }, 3000)
// }
// getProfileDetail("vishal@1408");