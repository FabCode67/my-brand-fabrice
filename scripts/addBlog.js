let addBlogForm = document.getElementById("addblogform");
let blogTitle = document.getElementById("blog_title");
let blogContent = document.getElementById("html-output");
let blogImage = document.getElementById("image");
let token = localStorage.getItem("token");

addBlogForm.addEventListener('submit', (event) => {
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
})
.catch((error) => {
console.error('Error:', error);
});
});