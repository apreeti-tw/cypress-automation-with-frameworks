console.log("start")

function loginUser(email, password, callback){/*TODO Remove callback param to test functions without callback*/
    setTimeout(() => {
        // runs some steps to login asynchronously
        // runs some steps to login asynchronously
        // runs some steps to login asynchronously
        console.log("User has logged in!!")
        callback({userEmail: email}) /*TODO Comment this line to test functions without callback*/
    }, 5000)
}

function getUserVideos(email, callback){
    setTimeout(() => {
        // runs some steps to get user videos asynchronously
        // runs some steps to get user videos asynchronously
        // runs some steps to get user videos asynchronously
        console.log("Now we have the data!!")
        callback(["video1", "video2", "video3"])
    }, 5000)
}

function videoDetails(video, callback) {
    setTimeout(()=> {
        // runs some steps to video details asynchronously
        // runs some steps to video details asynchronously
        // runs some steps to video details asynchronously
        console.log("Video details have been found!!")
        callback("Fast and Furious")
    }, 5000)
}

//Function call with callback
const user =
    loginUser("devil@gmail.com", "ralph", user => {
    console.log(user)
    getUserVideos(user.userEmail, videos => {
        console.log(videos)
        videoDetails(videos[0], title => {
            console.log(title)
        })
    })
})

//Function call without callback
/*const user = loginUser("devil@gmail.com", "ralph")
console.log(user)
console.log("finish")*/
