


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
         <div class="edit"><button type="button"  onclick="editBlog(${i})"><i class="fa-solid fa-pen-to-square"></button></i></div>
         <div class="delete"><button type="button"  onclick="deleteBlog(${i})"><i class="fa-solid fa-trash"></i></button></div>
       </div>
       </div>
   ` 
 };
}
document.getElementById("blogCard").innerHTML=blogCard


function deleteBlog(index) {
  blogs.splice(index, 1);
  localStorage.setItem('blogs', JSON.stringify(blogs))
  window.location.href = "dashboard.html"
};







