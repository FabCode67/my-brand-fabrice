let loading = `<style>
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    padding-left: 90%
    border-top: 16px solid black;
    border-bottom: 16px solid green;
    width: 3px;
    height: 3px;
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
let addBlogForm = document.getElementById("addblogform");
let blogTitle = document.getElementById("blog_title");
let blogContent = document.getElementById("html-output");
let blogImage = document.getElementById("image");
let token = localStorage.getItem("token");

addBlogForm.addEventListener('submit', (event) => {
  document.getElementById('insertt').innerHTML= loading
  document.getElementById('insertt').style.backgroundColor='#03010E'
  event.preventDefault();
  const formData = new FormData();
  formData.append('blogTitle', blogTitle.value);
  formData.append('blogContent', blogContent.value);
  formData.append('blogImage', blogImage.files[0]);

  fetch("https://comfortable-eel-pinafore.cyclic.app/api/blog", {
    method: 'POST',
    headers: {
      'Authorization': token,
    },
    body: formData
})
.then((response) => response.json())
.then((blog) => {
console.log('Success:', blog);
if(blog.status == 'fail'){
  setTimeout(()=>{
    document.getElementById('hed').innerHTML = `<h3>ADD BLOG</h3>`
    },3000)
    document.getElementById('hed').innerHTML = `<p style='color:red;'> ${blog.message}</p>`
    document.getElementById('insertt').innerHTML= `INSERT`
    document.getElementById('insertt').style.backgroundColor='#01CC32'

}

else if(blog.status == 'success'){

  setTimeout(()=>{
    document.getElementById('hed').innerHTML = `<h3>ADD BLOG</h3>`
    },3000)
    document.getElementById('hed').innerHTML = `<p style='color:green;'> ${blog.message}</p>`
    document.getElementById('insertt').innerHTML= `INSERT`
    document.getElementById('insertt').style.backgroundColor='#01CC32'

    window.location.href = "../pages/addBlog.html"
}



})
.catch((error) => {
console.error('Error:', error);
setTimeout(()=>{
  document.getElementById('hed').innerHTML = `<h3>ADD BLOG</h3>`
  },3000)
  document.getElementById('hed').innerHTML = `<p style='color:red;'> fields can not be empty</p>`
  document.getElementById('insertt').innerHTML= `INSERT`
  document.getElementById('insertt').style.backgroundColor='#01CC32'

});
});


