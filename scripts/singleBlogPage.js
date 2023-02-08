let loading = `<style>
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    padding-left: 80%
    border-top: 16px solid black;
    border-bottom: 16px solid green;
    width: 4px;
    height: 4px;
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
              <p> <a href="moreblogs.html?id=${blog._id}" >${blog.blogContent.substring(0, 90) + '...'}</a>
              </p>
          </div>
          <div class="undercont">
        
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
              <button type="submit" id="but" style="width:auto;">Add Comment</button>
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
  document.getElementById('but').innerHTML= loading;
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
      if(data.message == "Comment added successfully"){
      window.location.href = `moreblogs.html?id=${blog._id}`
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    // clearForm();
 
})

    var commentCards = ''
    var nOfCComment=0
    
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

