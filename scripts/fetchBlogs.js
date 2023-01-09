






/*--------------------------------------------------- fetch from local storage........................................*/
/*
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
*/



const firebaseConfig = {
    apiKey: "AIzaSyDhZ3CHEFJAt9GqU7qaScVIKYpK5X3mQ1s",
    authDomain: "mybland-eaf03.firebaseapp.com",
    databaseURL: "https://mybland-eaf03-default-rtdb.firebaseio.com",
    projectId: "mybland-eaf03",
    storageBucket: "mybland-eaf03.appspot.com",
    messagingSenderId: "88332557026",
    appId: "1:88332557026:web:7919be9a6e027cbe78dcbb"
  };
  firebase.initializeApp(firebaseConfig);


  var dataContainer =  document.getElementById("blogCard")
  var blogRef = firebase.database().ref("/myBlogTest");
  blogRef.on("value", function(snapshot) {
    // Clear the data container
    dataContainer.innerHTML = "";

    // Get the data
    var data = snapshot.val();

   

    // Loop through the data and add it to the data container
    for (var key in data) {
      var blog = data[key];
      console.log(key);
      dataContainer.innerHTML += `
      <div class="subdiv">
          <div class="photo">
          <img src ="${blog.blogImage}" >
         
          </div>
          <div class="discript">
          <h3 style="width:100%; margin-left:0rem;">${blog.title}</h3>
          <p>${blog.body.substring(0, 110) + '...'}</p>
          </div>
          <div class="buttons">
            <div class="edit"><button id="det" type="button" onclick="edit('${key}')"  ><i class="fa-solid fa-pen-to-square"></button></i></div>
            <div class="delete"><button type="button" onclick="deleteData('${key}')" ><i class="fa-solid fa-trash"></i></button></div>
          </div>
          </div>`;

    }
 
  });



/*------------------------------------------update blogs----------------------------------------------*/


  

function edit(key) {
  var blog;

  // Get a reference to the data that you want to edit
  var blogRef = firebase.database().ref("/myBlogTest/" + key);
  blogRef.on("value", function(snapshot) {
    blog = snapshot.val();
  });
  let editForm = 
  `<div class="login">
  <form action="" id="addblogform">
  <div class="place">

      <div class="hed"><h3>ADD BLOG</h3></div>
      
      <div class="change"> <input type="text" id="blogHead" value="${blog.title}"></div>
      
    <textarea id="blogBody">${blog.body}</textarea>
      <div class="change"><input type="file" id="image"></div>
      <div class="change"> <button type="submit" class="btn btn-primary mt-3" onclick="editData('${key}')"  style="color: rgb(253, 255, 254); width: 100%; background-color: green;">Update</button>
      </div>
     
     
  </div>



</form> </div>
  `;
  document.getElementById("super").innerHTML = editForm;
  
};




// function editData(key) {
//   // Get the values from the form
//   var newTitle = document.getElementById("blogHead").value;
//   var newBody = document.getElementById("blogBody").value;

//   // Get a reference to the data that you want to update
//   var blogRef = firebase.database().ref("/myBlogTest/" + key);

//   // Update the data in the database
//   blogRef.update({
//     title: newTitle,
//     body: newBody
//   });
// }

function editData(key) {
  // Get the values from the form
  var newTitle = document.getElementById("blogHead").value;
  var newBody = document.getElementById("blogBody").value;
  let blogimage = document.getElementById("image");
  var imageFile = blogimage.files[0];

  // Get a reference to the data that you want to update
  var blogRef = firebase.database().ref("/myBlogTest/" + key);

  // Update the data in the database
  blogRef.update({
    title: newTitle,
    body: newBody
  });

  // Add the image to Firebase Storage and get its URL
  if (imageFile) {
    var storageRef = firebase.storage().ref("/myBlogTest/" + key + "/image");
    storageRef.put(imageFile).then(function(snapshot) {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        // Update the image URL in the database
        blogRef.update({
          blogImage: downloadURL
        });
      });
    });
  }
}





  function deleteData(key) {
    // Get a reference to the database
    var database = firebase.database();
  
    // Get a reference to the data that you want to delete
    var dataRef = database.ref("/myBlogTest/" + key);
  
    // Use the `remove()` method to delete the data
    var comfirm =window.confirm("are you sure that you want to delete this blog?")
    console.log(comfirm);
    if(comfirm==true){
      dataRef.remove().then(function() {
        // Data deleted successfully
        console.log("Data deleted successfully");
      }).catch(function(error) {
        // An error occurred
        console.log("Error deleting data: " + error);
      });
    }
    else{
      return
    }
   
  }

  
  