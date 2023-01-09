

//<FETCHBLOG>
/*
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

*/





const firebaseConfig = {
    apiKey: "AIzaSyDhZ3CHEFJAt9GqU7qaScVIKYpK5X3mQ1s",
    authDomain: "mybland-eaf03.firebaseapp.com",
    databaseURL: "https://mybland-eaf03-default-rtdb.firebaseio.com",
    projectId: "mybland-eaf03",
    storageBucket: "mybland-eaf03.appspot.com",
    messagingSenderId: "88332557026",
    appId: "1:88332557026:web:7919be9a6e027cbe78dcbb"
  };
  firebase.initializeApp(firebaseConfig);
  
  
  var dataContainer =  document.getElementById("blo")
  var blogRef = firebase.database().ref("/myBlogTest");
  blogRef.on("value", function(snapshot) {
    // Clear the data container
    dataContainer.innerHTML = "";
  
    // Get the data
    var data = snapshot.val();
  
   
  
    // Loop through the data and add it to the data container
    for (var key in data) {
      var blog = data[key];
      dataContainer.innerHTML += `
      <div class="subRight">
      <div class="subPhoto">
      <img src="${blog.blogImage}" alt="">
         </div>
      <div class="subContent">
   
          <div class="upcont">
              <h3>${blog.title}</h3>
              <p>${blog.body.substring(0, 90) + '...'}
              </p>
          </div>
          <div class="undercont">
         <a id="avoid" href = "#here" onclick="morefun('${key}')"<button >more</button> </a>
         <button id="avoid2" onclick="morefun('${key}')">more</button>
          </div>                   
   
      </div>
   </div>`;
  
    }
  
  });





  let mores= document.getElementById("alb")
//   console.log(mores);



                   //GENERATION OF MOREBLOG MAIN SECTION
 var moreblog =  new URLSearchParams(window.location.search) 
 var getId = moreblog.get("id")
//  console.log(getId) 
 let blogArr =[]
 

function morefun(key){

    var blogRef = firebase.database().ref("/myBlogTest/" + key);
    blogRef.on("value", function(snapshot) {
      blog = snapshot.val();
    });


    mores.innerHTML =  ` <section id="here">
    <div class="upMain">
    <div class="mainPhoto">
    <img src="${blog.blogImage}" alt="">
    </div>
    <div class="mainContent">
    
    <h3>${blog.title}</h3>
    <p style="margin-top: 1rem;padding: .5rem;">
        ${blog.body}
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
            
            <input type="hidden" value="${blog.title}" id="blog-title"/>

        </form>
    </div>
    <div class="mainDispComment" id="commentsCard">
       
    </div>
  </div>
    
    </section>`




                               //FETCH COMMENTS FROM FIREBASE


    var commentRef = firebase.database().ref("/Comments");
    commentRef.on("value", function(snapshot) {

     var nofcom = 0      
    var commentCards = ''
      var comment = snapshot.val();
     
       
      var keys = Object.keys(comment);
      for (var i = keys.length - 1; i >= 0; i--) {
        var key1 = keys[i];
        var secom = comment[key1];
        if(secom.blog==blog.title){
            // console.log(secom.blog)
            nofcom ++
       document.getElementById("nofComents").innerHTML =nofcom;

       commentCards +=`

        <div class="minDisp">
        <div class="userDiv">
            <p> <i class="fa-solid fa-user" style="font-size: 20px;"></i> ${secom.username}</p>
        </div>
        <div class="dispContent">
        <p id="thiscom">${secom.comm}</p>
         </div>
    </div>       
        ` 
        
    }
    document.getElementById("commentsCard").innerHTML= commentCards

    
 };

    });

    
    
                   // SSAVE COMMENT TO FIREBASE
                   
    //clear fields
    
    function clerFields(){
       document.getElementById("userName").value ="";
       document.getElementById("commentField").value ="";
    }


 document.getElementById("commentForm").addEventListener('submit',submitComment)
function submitComment(e){
    e.preventDefault()
    var userName = document.getElementById("userName").value;
   var commentField = document.getElementById("commentField").value;
   var blogTitle=document.getElementById("blog-title").value
    var blogRef = firebase.database().ref("/Comments");
    blogRef.push({
        username:userName,
        comm:commentField,
        blog: blogTitle
    });
    clerFields()
  }

}










     //REPEATED CODES FROM HERE







     

var blogRef = firebase.database().ref("/myBlogTest/");
blogRef.on("value", function(snapshot) {
 var blog = snapshot.val();
//  console.log(blog)
for(var blogs of Object.values(blog)){
    blogArr.push(blogs)
}

// console.log(blogArr);
// console.log("hello");
blogArr.find((el)=>{
    if(el.title === getId){
        mores.innerHTML =  ` <section id="here">
    <div class="upMain">
    <div class="mainPhoto">
    <img src="${el.blogImage}" alt="">
    </div>
    <div class="mainContent">
    
    <h3>${el.title}</h3>
    <p style="margin-top: 1rem;padding: .5rem;">
        ${el.body}
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
            
            <input type="hidden" value="${el.title}" id="blog-title"/>

        </form>
    </div>
    <div class="mainDispComment" id="commentsCard">
       
    </div>
  </div>
    
    </section>`



    var commentRef = firebase.database().ref("/Comments");
    commentRef.on("value", function(snapshot) {
    
     var nofcom1 = 0   
      let commentArr = []
   
    var commentCards = ''
      var comment = snapshot.val();
     for(const comments of Object.values(comment)){
        commentArr.push(comments)
     }
       console.log(commentArr);
      for (var i = commentArr.length - 1; i >= 0; i--) {
        var key1 = commentArr[i];
        if(key1.blog==getId){
            nofcom1 ++
       document.getElementById("nofComents").innerHTML =nofcom1;
    
       commentCards +=`
    
        <div class="minDisp">
        <div class="userDiv">
            <p> <i class="fa-solid fa-user" style="font-size: 20px;"></i> ${key1.username}</p>
        </div>
        <div class="dispContent">
        <p id="thiscom">${key1.comm}</p>
         </div>
    </div>       
        ` 
        document.getElementById("commentsCard").innerHTML= commentCards
    
    }
    
    
    }
    
    });


    function clerFields(){
        document.getElementById("userName").value ="";
        document.getElementById("commentField").value ="";
     }
    
    
    document.getElementById("commentForm").addEventListener('submit',submitComment)
    function submitComment(e){
    e.preventDefault()
    var userName = document.getElementById("userName").value;
    var commentField = document.getElementById("commentField").value;
    var blogTitle=document.getElementById("blog-title").value
     var blogRef = firebase.database().ref("/Comments");
     blogRef.push({
         username:userName,
         comm:commentField,
         blog: blogTitle
     });
     clerFields()
    }
    
    }
})







});


