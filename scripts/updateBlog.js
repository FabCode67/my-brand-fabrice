


// let mores = ''
// fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${getId}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": localStorage.getItem('token')
//   },
// })
// .then(res => res.json())
// .then(data => {
//   let blog = data.data;
//  mores =


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


let updateBlogForm = document.getElementById("addblogform");
let blogTitle = document.getElementById("blog_title");
let blogContent = document.getElementById("html-output");
let blogImage = document.getElementById("image");
let token = localStorage.getItem("token");

var getBlogById =  new URLSearchParams(window.location.search) 
var getId = getBlogById.get("id")

fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${getId}`,{mode:"cors"})
.then(res => res.json())
.then(data => {
        let blog = data.data;
        blogTitle.value= blog.blogTitle
        blogContent.value = blog.blogContent
        console.log(blog.blogContent);
    })
updateBlogForm.addEventListener('submit', (event) => {
  document.getElementById('hed').innerHTML = loading;
  event.preventDefault();
  console.log(getId);
  const formData = new FormData();
  formData.append('blogTitle', blogTitle.value);
  formData.append('blogContent', blogContent.value);
  formData.append('blogImage', blogImage.files[0]);

  fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${getId}`, {
    method: 'PATCH',
    headers: {
      'Authorization': token,
    },
    body: formData
  })
  .then((response) => response.json())
  .then((blog) => {
    console.log('Success:', blog);
    if(blog.message == "Blog updated successfully"){
      window.location.href='../pages/dashboard.html'
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
});
