var dataContainer =  document.getElementById("blogCard")
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
              <div class="edit"><button id="det" type="button" onclick="edit('')"  ><i class="fa-solid fa-pen-to-square"></button></i></div>
              <div class="delete"><button type="button" onclick="deleteBlog('${blog._id}')" ><i class="fa-solid fa-trash"></i></button></div>
            </div>
            </div>`;
            i++;
    });
    document.getElementById("nblogs").innerHTML = i
})


async function deleteBlog(Id){

  let comfirm =window.confirm("are you sure that you want to delete this blog?")
  console.log(comfirm); 
    
  if(comfirm==true){
  let token = localStorage.getItem("token");
  await fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${Id}`, {
      mode:'cors',
      method: 'DELETE',
      headers: {
         
       "Content-Type": "application/json",
        "Authorization": token,
      }
  })
  .then(response => 
         response.json()
      )
    .catch(error => {
      console.error("Error deleting blog", error);
    });
    window.location.href="../pages/dashboard.html"
  }

  else{
      return
  }
}




document.getElementById('disable').addEventListener('click', () => {
  localStorage.setItem("token", undefined);
  window.location.href = "../pages/login.html"
  });
  


