


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


let updateBlogForm = document.getElementById("addblogform");
let blogTitle = document.getElementById("blog_title");
let blogContent = document.getElementById("html-output");
let blogImage = document.getElementById("image");
let token = localStorage.getItem("token");

var getBlogById =  new URLSearchParams(window.location.search) 
var getId = getBlogById.get("id")

fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/',{mode:"cors"})
.then(res => res.json())
.then(data => {
  let i = 0
    data.data.forEach(function(blog) {
        blogTitle.value= blog.blogTitle
        blogContent.value = blog.blogImage
    })})
updateBlogForm.addEventListener('submit', (event) => {
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
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
