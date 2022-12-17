

let blogCard=""
let blogs = [];
let Data = localStorage.getItem("blogs");
 blogs = JSON.parse(Data);




 cards()
function cards(){
  for (let i = 0; i < blogs.length; i++){
    blogCard += 
   `
   <div class="subdiv">
       <div class="photo">
       <img src ="${blogs[i].image}" >
      
       </div>
       <div class="discript">
       <h3>${blogs[i].blogTitle}</h3>
       <p>${blogs[i].blogContent.substring(0, 110) + '...'}</p>
       </div>
       <div class="buttons">
         <div class="edit"><button type="button" onclick="morefun(${i})" style="flex-basis:120%;">MORE</button></i></div>
       </div>
       </div>
   ` 
 };
}
document.getElementById("blogCard").innerHTML=blogCard

let mores=""
 function morefun(index){
  window.location.href="./../pages/moreblogs.html"

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





