var dataContainer =  document.getElementById("blo")
fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/',{mode:"cors"})
.then(res => res.json())
.then(data => {
    data.data.forEach(function(blog) {
        dataContainer.innerHTML += `
      <div class="subRight">
      <div class="subPhoto">
      <img src="${blog.blogImage}" alt="">
         </div>
      <div class="subContent">
   
          <div class="upcont">
              <h3>${blog.blogTitle}</h3>
              <p>${blog.blogContent.substring(0, 90) + '...'}
              </p>
          </div>
          <div class="undercont">
         <a id="avoid" href = "#here" onclick="moreblog('${blog._id}')"<button >more</button> </a>
         <button id="avoid2" onclick="moreblog('${blog._id}')">more</button>
          </div>                   
   
      </div>
   </div>`;
    });
})



var moreblog =  new URLSearchParams(window.location.search) 
var getId = moreblog.get("id")


console.log(getId);

let mores = ''
fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${getId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem('token')
  },
})
.then(res => res.json())
.then(data => {
  let blog = data.data;
 mores =  `
    <section id="here">
      <div class="upMain">
        <div class="mainPhoto">
          <img src="${blog.blogImage}" alt="">
        </div>
        <div class="mainContent">
          <h3>${blog.blogTitle}</h3>
          <p style="margin-top: 1rem;padding: .5rem;">
            ${blog.blogContent}
          </p>
        </div>
      </div>
      <div class="belowMain">
        <div class="mainMomment">
          <form action="" id="commentForm">
            <div class="inputText">
            </div>
            <div class="commentSect">
              <textarea name="" id="commentField" cols="30" rows="10" placeholder="comment" required></textarea>
            </div>
            <div class="buttonDiv">
              <label><span id="nofComents"> 0 </span>Comment(s)</label>
              <button type="submit" id="but">Add Comment</button>
            </div>
            <input type="hidden" value="${blog._id}" id="blog-title"/>
          </form>
        </div>
        <div class="mainDispComment" id="commentsCard"></div>
      </div>
    </section>
  `;
  
  document.getElementById("alb").innerHTML=mores
let comment = document.getElementById("commentField");
let addComment = document.getElementById("commentForm");

function clearForm(){
    comment.value ="";
}

addComment.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = { 
            comment:comment.value,
    }
    let token = localStorage.getItem("token");

    fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${getId}/comment`, {
        method: 'POST',
        headers:{
            'Accept': 'application/json, tesxt/plain, */*',
            'Content-Type':'application/json',
            "Authorization": token,
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data.message);
      console.log('Success:', blog.comments);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    clearForm();
    mores
})

    var commentCards = ''
    let nOfCComment=0
for (var i = blog.comments.length - 1; i >= 0; i--) {
 commentCards +=`
  <div class="minDisp">
  <div class="userDiv">
      <p> <i class="fa-solid fa-user" style="font-size: 20px;"></i> ${blog.comments[i].username}</p>
  </div>
  <div class="dispContent">
  <p id="thiscom">${blog.comments[i].comment}</p>
   </div>
</div>       
  `
  nOfCComment++
 
}
document.getElementById("nofComents").innerHTML =nOfCComment;

document.getElementById("commentsCard").innerHTML= commentCards

});



function moreblog(blog){
fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${blog}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem('token')
  },
})
.then(res => res.json())
.then(data => {
  let blog = data.data;
 mores =  `
    <section id="here">
      <div class="upMain">
        <div class="mainPhoto">
          <img src="${blog.blogImage}" alt="">
        </div>
        <div class="mainContent">
          <h3>${blog.blogTitle}</h3>
          <p style="margin-top: 1rem;padding: .5rem;">
            ${blog.blogContent}
          </p>
        </div>
      </div>
      <div class="belowMain">
        <div class="mainMomment">
          <form action="" id="commentForm">
            <div class="inputText">
            </div>
            <div class="commentSect">
              <textarea name="" id="commentField" cols="30" rows="10" placeholder="comment" required></textarea>
            </div>
            <div class="buttonDiv">
              <label><span id="nofComents"> 0 </span>Comment(s)</label>
              <button type="submit" id="but">Add Comment</button>
            </div>
            <input type="hidden" value="${blog._id}" id="blog-title"/>
          </form>
        </div>
        <div class="mainDispComment" id="commentsCard"></div>
      </div>
    </section>
  `;
  
  document.getElementById("alb").innerHTML=mores
let comment = document.getElementById("commentField");
let addComment = document.getElementById("commentForm");

function clearForm(){
    comment.value ="";
}

addComment.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = { 
            comment:comment.value,
    }
    let token = localStorage.getItem("token");

    fetch(`https://comfortable-eel-pinafore.cyclic.app/api/blog/${getId}/comment`, {
        method: 'POST',
        headers:{
            'Accept': 'application/json, tesxt/plain, */*',
            'Content-Type':'application/json',
            "Authorization": token,
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data.message);
      console.log('Success:', blog.comments);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    clearForm();
    mores
})

    var commentCards = ''
    let nOfCComment=0
for (var i = blog.comments.length - 1; i >= 0; i--) {
 commentCards +=`
  <div class="minDisp">
  <div class="userDiv">
      <p> <i class="fa-solid fa-user" style="font-size: 20px;"></i> ${blog.comments[i].username}</p>
  </div>
  <div class="dispContent">
  <p id="thiscom">${blog.comments[i].comment}</p>
   </div>
</div>       
  `
  nOfCComment++
 
}
document.getElementById("nofComents").innerHTML =nOfCComment;

document.getElementById("commentsCard").innerHTML= commentCards

});
}