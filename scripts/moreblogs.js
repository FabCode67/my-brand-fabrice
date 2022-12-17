


let blogC=""
let blogs = [];
let Data = localStorage.getItem("blogs");
 blogs = JSON.parse(Data);




 cards()
function cards(){
  for (let i = 0; i < blogs.length; i++){
    blogC+= 
   `
  <div class="blogs">
            <div class="pic"><img src="${blogs[i].image}" alt=""></div>
            <div class="desc"><p>${blogs[i].blogContent}</p>
           
                <button onclick="morefun(${i})">more</button></div>
        </div>
   ` 
 };
}
document.getElementById("blo").innerHTML=blogC

let mores=""
 function morefun(index){
    mores =  `<div class="up"><img src="${blogs[index].image}" alt=""></div>
    <div class="down">

        <h3>${blogs[index].blogTitle}</h3>
        <p style="margin-top: 1rem;padding: .5rem;">
        ${blogs[index].blogContent}
        </p>
        // <form action="" id="commentForm">
        <textarea name="" id="commetField" cols="30" rows="10" style="margin-top: 3rem; border: 1px solid green;" placeholder="Add comment" ></textarea> <br>
        <button id="but">Add Comment</button>
        
        <div class="comment">
            <i class="fa-solid fa-user" style="font-size: 30px;"></i>
            <p id="thiscom">all about coomment</p>
        </div>
    </div>`

    document.getElementById("alb").innerHTML=mores
}




// document.getElementById("but").addEventListener("click",()=>{
//     var commentField = document.getElementById("commentField").value();
//     var data={
//         comments : commentField
//     }
//     blogs.push(data);
//     localStorage.setItem("blogs",JSON.stringify(blogs))
// })


