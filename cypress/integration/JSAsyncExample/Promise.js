console.log("start")

function loginUser(email, password){
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            // runs some steps to login asynchronously
            // runs some steps to login asynchronously
            // runs some steps to login asynchronously
            console.log("User has logged in!!")
            resolve({userEmail: email})
        }, 5000)
    }))
}

function getUserVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // runs some steps to get user videos asynchronously
            // runs some steps to get user videos asynchronously
            // runs some steps to get user videos asynchronously
            console.log("Now we have the data!!")
            resolve(["video1", "video2", "video3"])
        }, 5000)
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            // runs some steps to video details asynchronously
            // runs some steps to video details asynchronously
            // runs some steps to video details asynchronously
            console.log("Video details have been found!!")
            resolve("Fast and Furious")
        }, 5000)
    })
}

loginUser("devil@gmail.com", "ralph")
    .then(user => getUserVideos(user.userEmail)
        .then(videos => videoDetails(videos[0])
            .then(title => console.log("Title:", title))))

console.log("finish")
