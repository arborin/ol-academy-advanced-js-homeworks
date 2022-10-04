// HOMEWORK 1
console.log("Start");

const usersDB = {
    "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
    "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
    "user3@hw.js": [],
};

// your code goes here...

function displayError(errorMessage) {
    console.error(new Error(errorMessage));
}

function loginUser(email, password, callback, logError) {
    setTimeout(() => {
        console.log(`Now we have the data of user: ${email}`);
        const data = { userEmail: email };
        if(data){
            callback(data);
        }else{
            logError("User not found!");
        }
    }, 3000)
}


function getUserVideos(email, callback, logError){
    setTimeout(()=>{
        const videos = usersDB[email];
        if(videos){
            callback(videos);
        }else{
            logError("Videos not found!");
        }
    }, 2000)
}


function videoDetails(video, callback, logError){
    setTimeout(() => {
        if(video.title){
            callback(video.title);
        }else{
            logError("Video Title not found!");
        }
    }, 2000);
}


const getPassedUsersFirstVideoTitle = (user) =>
    loginUser(user, 1234, (user) => {
            console.log("user:", user);
            getUserVideos( user.userEmail, (videos) => {
                console.log("videos:", videos);
                
                videoDetails(videos[0], (title) => {
                    console.log("title:", title);
                }, (err) => displayError(err));
            },(err) => displayError(err));},
            (err) => displayError(err)
);


getPassedUsersFirstVideoTitle("user1@hw.js");



console.log("Finish");