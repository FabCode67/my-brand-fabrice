
/*-----------------------------------------ADD TO LOCALSTORAGE-------------------------------------------------------*/
// let blogCard=""
// let blogs = [];
// let Data = localStorage.getItem("blogs");
//  blogs = JSON.parse(Data);




//  cards()
// function cards(){
//   for (let i = 0; i < blogs.length; i++){
//     blogCard += 
//    `
//    <div class="subdiv">
//        <div class="photo">
//        <img src ="${blogs[i].image}" >
      
//        </div>
//        <div class="discript">
//        <h3>${blogs[i].blogTitle}</h3>
//        <p>${blogs[i].blogContent.substring(0, 110) + '...'}</p>
//        </div>
//        <div class="buttons">
//          <div class="edit"><button type="button" style="flex-basis:120%;">MORE</button></i></div>
//        </div>
//        </div>
//    ` 
//  };
// }
// document.getElementById("blogCard").innerHTML=blogCard

/*-----------------------------------------ADD TO LOCALSTORAGE-------------------------------------------------------*/




/*-----------------------------------------ADD TO FIREBASE-------------------------------------------------------*/

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
  
  
  var dataContainer =  document.getElementById("blogCard")
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
      <div class="subdiv">
              <div class="photo">
              <img src ="${blog.blogImage}" >
            
              </div>
              <div class="discript">
              <h3>${blog.title}</h3>
              <p>${blog.body.substring(0, 110) + '...'}</p>
              </div>
              <div class="buttons">
              <a href="moreblogs.html?id=${blog.title} "> <input type="button" value="more" style="width:100%;"> </a>           
              </div>
              </div>`;
    }
  
  });
/*-----------------------------------------ADD TO FIREBASE-------------------------------------------------------*/