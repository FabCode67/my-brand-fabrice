


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
         <div class="edit"><button type="button"  onclick="edit(${i})"><i class="fa-solid fa-pen-to-square"></button></i></div>
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







function edit(index) {

 var blogRef = firebase.database().ref("/myBlogTest/" + key);
    blogRef.on("value", function(snapshot) {
      blog = snapshot.val();
   


  let editForm = 
  `<div class="login">
  <form action="" id="addblogform">
  <div class="place">

      <div class="hed"><h3>ADD BLOG</h3></div>
      
      <div class="change"> <input type="text" id="blogHead" value="${blogs[index].blogTitle}"></div>
      
<section>
<div class="row">
<div class="col">
    <div class="first box">
        <input id="font-size" type="number" value="16" min="1" max="100" onchange="f1(this)">
    </div>
    <div class="second box">
        <button type="button" onclick="f2(this)">
            <i class="fa-solid fa-bold"></i>
        </button>
        <button type="button" onclick="f3(this)">
            <i class="fa-solid fa-italic"></i>
        </button>
        <button type="button" onclick="f4(this)">
            <i class="fa-solid fa-underline"></i>
        </button>
    </div>
    <div class="third box">
        <button type="button" onclick="f5(this)">
            <i class="fa-solid fa-align-left"></i>
        </button>
        <button type="button" onclick="f6(this)">
            <i class="fa-solid fa-align-center"></i>
        </button>
        <button type="button" onclick="f7(this)">
            <i class="fa-solid fa-align-right"></i>
        </button>
    </div>
    <div class="fourth box">
        <button type="button" onclick="f8(this)">aA</button>
        <button type="button" onclick="f9()">
            <i class="fa-solid fa-text-slash"></i>
        </button>
        <input type="color" onchange="f10(this)">
    </div>
</div>
</div>
<br>
    <textarea id="contText">${blogs[index].blogContent}</textarea>

</section>

      <div class="change"><input type="file" id="image" value=${blogs[index].image}></div>
      <div class="change"> <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
      </div>
     
     
  </div>



</form> </div>
  `;
  document.getElementById("super").innerHTML = editForm;
  

});
};


function update(index) {
let newBlogTitle = document.getElementById('blogHead');
let newBlogContent = document.getElementById('contText');
let newBlogimage = document.getElementById("image");
var newImage


newBlogimage.addEventListener("change",(e)=>{
    
    const img=e.target.files[0];

    const reader=new FileReader();

    reader.readAsDataURL(img);
  
    reader.addEventListener("load",()=>{
      newImage=reader.result;

    });
});

blogs[index] = {
      blogTitle: newBlogTitle.value,
      blogContent: newBlogContent.value,
      image: newImage
  };
  localStorage.setItem("blogs", JSON.stringify(blogs));
}





