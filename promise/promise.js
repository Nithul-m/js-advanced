// let promise = new Promise(function(resolve,reject){

//     //producer functions
//     setTimeout(()=>{

    
//     resolve("done");
//     console.log("after resolve");
//     } ,3000);


// });
// // consuming function
// console.log(promise);





fetch("https://jsonplaceholder.typicode.com/posts")
.then((data) => data.json())
.then((res) => dataFromAPI(res))
.catch((err) =>{

console.log(err.message);
})
function dataFromAPI(data) {
    let html_content = ``;
    data.forEach((post) => {
        html_content += `<tr>
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>

        </tr>`
        

    });

    let ele = document.getElementById("postsContent");

    ele.innerHTML = html_content;
}