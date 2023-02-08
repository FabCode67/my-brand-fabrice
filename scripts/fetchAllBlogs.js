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
  confirmBox.style.border = "none";
  dataContainer.innerHTML= ''
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


