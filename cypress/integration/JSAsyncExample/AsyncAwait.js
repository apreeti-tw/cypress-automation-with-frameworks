console.log("start")

async function loginUser(email, password){
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

async function getUserVideos(email){
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

async function videoDetails(video) {
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

async function displayVideoDetails(){
    const user = await loginUser("devil@gmail.com", "ralph")
    const videos = await getUserVideos(user.userEmail)
    const title = await videoDetails(videos[0])
    console.log("Title ------->",title)
}

displayVideoDetails()

console.log("finish")
