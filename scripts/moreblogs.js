

//<FETCHBLOG>
let blogC=""
let blogs = [];
let Data = localStorage.getItem("blogs");
blogs = JSON.parse(Data);
cards()
function cards(){
  for (let i = blogs.length-1; i >= 0; i--){
    blogC+= 
   `


   <div class="subRight">
   <div class="subPhoto">
   <img src="${blogs[i].image}" alt="">
      </div>
   <div class="subContent">

       <div class="upcont">
           <h3>${blogs[i].blogTitle}</h3>
           <p>${blogs[i].blogContent.substring(0, 90) + '...'}
           </p>
       </div>
       <div class="undercont">
      <a id="avoid" href = "#here" <button onclick="morefun(${i})">more</button> </a>
      <button id="avoid2" onclick="morefun(${i})">more</button>
       </div>                   

       
   </div>
</div>
   ` 
 };
 
}
document.getElementById("blo").innerHTML=blogC


//more blog
let mores=""
function morefun(index){
    mores =  ` <section id="here">
    <div class="upMain">
    <div class="mainPhoto">
    <img src="${blogs[index].image}" alt="">
    </div>
    <div class="mainContent">
    
    <h3>${blogs[index].blogTitle}</h3>
    <p style="margin-top: 1rem;padding: .5rem;">
        ${blogs[index].blogContent}
        </p>
        </div>
  </div>
  <div class="belowMain">
    <div class="mainMomment">
        <form action="" id="commentForm">
            <div class="inputText">
                <input type="text" id="userName" placeholder="Username" required>
            </div>
            <div class="commentSect">
                <textarea name="" id="commentField" cols="30" rows="10" placeholder="comment" required></textarea>
            </div>
            <div class="buttonDiv">
                 <label><span id="nofComents"> 0 </span>Comment(s)</label>
                <button type="submit" id="but" >Add Comment</button>
            </div>
            
            <input type="hidden" value="${blogs[index].blogTitle}" id="blog-title"/>

        </form>
    </div>
    <div class="mainDispComment" id="commentsCard">
       
    </div>
  </div>
    
    </section>
           `
           document.getElementById("alb").innerHTML=mores
           var nofcom = 0
       let Comment = localStorage.getItem("comment");
    if (Comment) {
        comments = JSON.parse(Comment);
    
       var commentsCard =""
              for (let i = comments.length-1 ; i > 0; i--){
                
        if(comments[i].blog==blogs[index].blogTitle){
            nofcom ++
       document.getElementById("nofComents").innerHTML =nofcom;

        commentsCard += 
       `

       <div class="minDisp">
       <div class="userDiv">
           <p> <i class="fa-solid fa-user" style="font-size: 20px;"></i> ${comments[i].username}</p>
       </div>
       <div class="dispContent">
       <p id="thiscom">${comments[i].comm}</p>
        </div>
   </div>       
       ` 
        }
       document.getElementById("commentsCard").innerHTML=commentsCard

       
    };

    
    }
    function saveComment() {
        var userName = document.getElementById("userName")
        var commentField = document.getElementById("commentField");
        var blogTitle=document.getElementById("blog-title")
        let commen = {
          username:userName.value,
           comm:commentField.value,
           blog: blogTitle.value
        };
        comments.push(commen);
        setComment()
        morefun(index)
    };
    document.getElementById("commentForm").addEventListener('submit',saveComment)
}
var  comments = [];


