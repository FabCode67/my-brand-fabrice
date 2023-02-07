let loading = `<style>
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    padding-left: 80%
    border-top: 16px solid black;
    border-bottom: 16px solid green;
    width: 10px;
    height: 10px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
  
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  </head>
  <body>  
  <div class="loader" style="margin-left:20%;"></div>
  `



var dataContainer =  document.getElementById("blogCard")
toFetchBlogs()
function toFetchBlogs(){
fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/',{mode:"cors"})
.then(res => res.json())
.then(data => {
  let i = 0
    data.data.forEach(function(blog) {
        dataContainer.innerHTML += `
        <div class="subdiv">
            <div class="photo">
            <img src ="${blog.blogImage}" >
           
            </div>
            <div class="discript">
            <h3 class="modify">${blog.blogTitle}</h3>
            <p>${blog.blogContent.substring(0, 110) + '...'}</p>
            </div>
            <div class="buttons">
  

              <div class="edit"><a href="../pages/updateBlog.html?id=${blog._id}"<button id="det" type="button" onclick="editBlog('${blog}')"  ><i class="fa-solid fa-pen-to-square"></button></i> </a></div>
              <div class="delete"><button type="button" onclick="deleteBlog('${blog._id}')" ><i class="fa-solid fa-trash"></i></button></div>
            </div>
            </div>`;
            i++;
    });
    document.getElementById("nblogs").innerHTML = i
})
}
async function deleteBlog(Id) {
  let confirmBox = document.getElementById("confirm-box");
  confirmBox.style.display = "block";
  dataContainer.innerHTML= 'none'
  document.getElementById("yes").addEventListener("click", async () => {
    confirmBox.innerHTML=loading
    let token = localStorage.getItem("token");
    await fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${Id}`, {
      mode: "cors",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error deleting blog", error);
      });
    window.location.href = "../pages/dashboard.html";
  });

  document.getElementById("no").addEventListener("click", () => {
    // confirmBox.style.display = "none";
    window.location.href = "../pages/dashboard.html";
    confirmBox.innerHTML=loading


  });

}



// function editBlog(Id){
// let editFotm =  `<div class="login">
// <div class="place">

//     <div class="hed" id="hed"><h3>ADD BLOG</h3></div>
    
//     <div class="change"> <input type="text" id="edit_blog_title" value = ${Id.blogTitle}>
//         <p id="error1" style="color: red;"></p>
//     </div>
  
//     <div class="content">
       
//               <input name="art_id" type="hidden"><div id="visual-editor">
//               <div id="editor" class="pell"></div></div><div id="source-editor" style="background-color: aqua;">
//               <textarea class="text1" id="html-output" name="html-output" onchange="TextArea()" onblur="TextArea()" rows="10" cols="50">${Id.blogContent}</textarea>
//               <p id="error2" style="color: red;"></p>

//             </div>
       
//             </div>

//     <div class="change"><input type="file" id="image" placeholder="UPLOAD PHOTO"></div>
//     <div class="change"></div><button id="insertt"  style="color: rgb(253, 255, 254); width: 88%; background-color: green;">INSERT</button></div>

   
// </div>

// </div>

// </div>

// </form>

// <script src="../scripts/addBlog.js"></script>
// <script src="../scripts/textEditor.js"></script>

// <script>
// var editor = window.pell.init({
// element: document.getElementById('editor'),
// actions: ['bold', 'italic', 'underline', 'heading1', 'heading2', 'olist', 'ulist', 'link', 'image', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull'],
// defaultParagraphSeparator: 'p',
// onChange: function (html) {
// document.getElementById('html-output').value   = html
// }
// })
// editor.content.innerHTML = document.getElementById('html-output').value
// function TextArea(){
// editor.content.innerHTML = document.getElementById('html-output').value
// }function toggleEditor() {
// if (document.getElementById("source-editor").style.display == "none") {
// document.getElementById("source-editor").style.display = "block";
// document.getElementById("visual-editor").style.display = "none";
// document.getElementById("btn_lbl").value = "Visual Editor";
// } else {
// document.getElementById("source-editor").style.display = "none";
// document.getElementById("visual-editor").style.display = "block";
// document.getElementById("btn_lbl").value = "Source Editor";
// }
// }`;
// document.getElementById("super").innerHTML = editFotm;
// }
  


