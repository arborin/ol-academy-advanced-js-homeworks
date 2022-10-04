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


function createPosts(post){
    
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            posts.push(post);
            
            const error = false;
            
            if(!error){
                resolve();
            }else{
                reject("Error: somethig wend wrong")
            }
            
        }, 2000);
        
    })
    
    
}


// createPosts({title: "add post 3", body: "this is additional post"})
// .then(getPosts)
// .catch(err=>console.log(err));

const promise1 = new Promise.resolve('hello world');
const promise2 = 10;
// const promise3 = new.Promise((resolve, reject) => setTimeout(() => settimeout(resolve, 2000, 'goodbye!'));