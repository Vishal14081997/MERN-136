// 1st (callback)---

// function fetchData (callback){
//     let data = {name:"vishal", email:"vishal@gmail.com"}
//     setTimeout(()=>{
//         // console.log(data);
//         callback(data)
//     },2000)
// }
// function fetchProfileDetails(userName){
//     setTimeout(()=>{
//         console.log(`profile details for ${userName}`,{age:"100", gender:"Male"});
//     },3000)
// }
// fetchData((data)=>{
//     console.log(data);
//     fetchProfileDetails(data.name)
// });

// 2nd--(promise)

// function fetchData() {
//   return new Promise((resole, reject) => {
//     let data = { name: "vishal", email: "vishal@gmail.com" };
//     setTimeout(() => {
//       resole(data);
//     }, 2000);
//   });
// }
// function fetchProfileDetails(userName) {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       resole({
//         userName: userName,
//         age: "100",
//         gender: "Male",
//       });
//     }, 2000);
//   });
// }
// fetchData()
//   .then((data) => {
//     console.log(data);
//     const profileData = fetchProfileDetails(data.name);
//     //  console.log(profileData);
//     profileData.then((profile) => {
//       console.log("profile data fetched : ", profile);
//     });
//   })
//   .then((profile) => {
//     console.log("profile data fetched : ", profile);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// -------------- async / await----------------

function fetchData() {
    return new Promise((resole, reject) => {
        let data = { name: "vishal", email: "vishal@gmail.com" };
        setTimeout(() => {
            resole(data);
        }, 2000);
    });
}
function fetchProfileDetails(userName) {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            resole({
                userName: userName,
                age: "100",
                gender: "Male",
            });
        }, 1000);
    });
}

async function fetchUserData() {
    try {
        const userData = await fetchData()
        console.log(userData);
        const profileData = await fetchProfileDetails(userData.name)
        console.log(profileData);
    } catch (error) {
        console.log(error);
    }
}
fetchUserData()


