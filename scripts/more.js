


let blogCards=""
let blogs = [];
let Data = localStorage.getItem("blogs");
 blogs = JSON.parse(Data);




 cards()
function cards(){
  for (let i = 0; i < blogs.length; i++){
    blogCards += 
   `
   <div class="blog1">
   <div class="photo1"><img src="${blogs[i].image}" alt=""></div>
   <div class="sdisc">
     <h3>${blogs[i].blogTitle}</h3>
     <p>${blogs[i].blogContent.substring(0, 90) + '...'} 
     </p>
        <a href="./pages/moreblogs.html"><input type="button" value="more" > </a>           
       </div>
 </div>
   ` 
 };
}
document.getElementById("bloga").innerHTML=blogCards
