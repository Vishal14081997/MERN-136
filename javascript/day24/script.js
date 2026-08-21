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
function getUserDetail() {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            let filterData = jsonData.users.map((item) => {
                let newObj = {}
                newObj.name = item.name
                newObj.userName = item.userName
                return newObj
            })
            reject("error")
        },3000)
    })
}
const userDetails  = getUserDetail()
console.log(userDetails);
