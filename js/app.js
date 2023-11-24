const cl = console.log;
const postsContainer = document.getElementById("postsContainer");

const postformControl = document.getElementById("postform");
const titleControl = document.getElementById("title");
const bodyControl = document.getElementById("body");
const useridControl = document.getElementById("userid");


let baseUrl = `https://jsonplaceholder.typicode.com`
let postsUrl = `${baseUrl}/posts`

let postsArray = []
//XML httpRequest >> constructor function

const templating = (arr)  =>{
    let result = ``;
    arr.forEach(post => {
        result += ` 
        <div class="card mb-4">
        <div class="card-header">
            <h1>${post.title}</h1>
        </div>
        <div class="card-body">
        <p> ${post.body}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-outline-primary">Edit</button>
            <button class="btn btn-outline-danger">Delete</button>
        </div>
        </div> `
        
    });
    postsContainer.innerHTML = result;
}
//POST
//GET
//PUT/PATCH
//DELETE
onsumbitPosts =(eve) =>{
    eve.preventDefault();
    let newpost = {
        title : titleControl.value,
        body : bodyControl.value,
        userid : useridControl.value
    }
    cl(newpost);

 let xhr = new XMLHttpRequest();
xhr.open("POST", postsUrl, true);

xhr.send(JSON.stringify(newpost));//  we are send data to database


xhr.onload = function (){
    if(xhr.status === 200 || xhr.status === 201){ 
    //cl(xhr.response)
    newpost.id = JSON.parse(xhr.response).id;
    postsArray.push(newpost);
    templating(postsArray)
    
}
}

}


const getAllposts = () =>{
//1 create a instance/object XMLhttpRequest 

let xhr = new XMLHttpRequest();

//2. configration

xhr.open("GET",postsUrl,true);

xhr.send();

xhr.onload = function(){
    if(xhr.status === 200){
       // cl(xhr.response)
    //let data = JSON.parse(xhr.response)
    let postsArray =JSON.parse(xhr.response)//for post change
    
    templating(postsArray);//same
    //templating(data);
    }else{
        alert("something went wrong !!!!")
    }
    

}
}

getAllposts();
//for post 




const  postform = addEventListener("submit",onsumbitPosts)
