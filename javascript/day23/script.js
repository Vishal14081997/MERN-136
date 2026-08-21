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

// 4th -------------

function getUserDetail(callback) {
    setTimeout(() => {
        let filterData = jsonData.users.map((item) => {
            let newObj = {}
            newObj.name = item.name;
            newObj.userName = item.userName
            return newObj;
        })
        // console.log(filterData);
        callback(filterData)
    }, 3000)
}

function getProfileDetail(user, callback) {
    setTimeout(() => {
        let profileData = jsonData.users.filter((item)=>{
            return item.userName === user   
        })
        // console.log(profileData[0].profile);
        callback(profileData[0].profile)
    },1000)
}
function getPostDetails(user , callback){
    setTimeout(()=>{
        let postData = jsonData.users.filter((item)=>{
            return item.userName === user
        })
        // console.log(postData[0].posts);
        callback(postData[0].posts)
        
    },2000)
}

getUserDetail((data) => {
    console.log(data);
    data.forEach((element) => {
        console.log("user details: ", element);
        getProfileDetail(element.userName ,(profile)=>{
            console.log(`profile for ${element.name}`, profile); 
        });
        getPostDetails(element.userName,(post)=>{
            console.log(`post for ${element.name}` ,post);
        }) 
    })
})

// callback hell 

// callback -> Promise -> async / await

// problem with callback hell :- 

// code become difficult to read
// error handling difficult
// too much nesting makes the code complex
// debugging become difficult