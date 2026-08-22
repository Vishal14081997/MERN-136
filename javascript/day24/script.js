// ------------------- promises---------------------

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
// 1st ---

// function getUserDetail() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             let filterData = jsonData.users.map((item) => {
//                 let newObj = {}
//                 newObj.name = item.name
//                 newObj.userName = item.userName
//                 return newObj
//             })
//             resole(filterData)
//             // reject("error")
//         }, 3000)
//     })
// }
// const userDetails = getUserDetail()
// console.log(userDetails);

// userDetails
//     .then((data) => {
//         console.log(data);
//      })
//     .catch((error) => {
//         console.log(error);
//      })

// 2nd ---

// function getUserDetail() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             let filterData = jsonData.users.map((item) => {
//                 let newObj = {}
//                 newObj.name = item.name
//                 newObj.userName = item.userName
//                 return newObj
//             })
//             resole(filterData)
//             // reject("error")
//         }, 3000)
//     })
// }
// const userDetails = getUserDetail()
// // console.log(userDetails);

// function getProfileDetail(user) {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             let profileData = jsonData.users.filter((item) => {
//                 return item.userName === user
//             })
//             // console.log(profileData[0].profile);
//             resole(profileData[0].profile)
//         }, 2000)
//     })
// }
// // getProfileDetail("vishal@1408")

// userDetails
//     .then((data) => {
//         console.log(data);
//         data.forEach((element) => {
//             //   console.log(element); 
//             const profileData = getProfileDetail(element.userName)
//             // console.log(profileData);
//             profileData
//                 .then((profile) => {
//                     console.log(profile)
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("user details fetched"); 
//     })

// 3rd -----

let promiseArray = [
    new Promise((resole, reject) => resole("hello grras")),
    new Promise((resole, reject) => resole("hello vishal")),
    new Promise((resole, reject) => resole("hello jaipur"))
    // new Promise((resole, reject) => reject("error")),
]
console.log(promiseArray);

Promise.all(promiseArray)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
