const posts = [
    {title: "Post one", body: "this is one post"},
    {title: "Post one", body: "this is one post"}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`
        });
       
        document.body.innerHTML = output;
    }, 3000);
}


function createPosts(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}


createPosts({title: "add post", body: "this is additional post"}, getPosts);