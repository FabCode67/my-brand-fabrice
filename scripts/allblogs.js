

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
         <div class="edit"><button type="button" style="flex-basis:120%;">MORE</button></i></div>
       </div>
       </div>
   ` 
 };
}
document.getElementById("blogCard").innerHTML=blogCard

