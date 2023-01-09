


// let blogCards=""
// let blogs = [];
// let Data = localStorage.getItem("blogs");
//  blogs = JSON.parse(Data);




//  cards()
// function cards(){
//   for (let i = blogs.length-1 ; i >= 0; i--){
//     blogCards += 
//    `
//    <div class="blog1">
//    <div class="photo1"><img src="${blogs[i].image}" alt=""></div>
//    <div class="sdisc">
//      <h3>${blogs[i].blogTitle}</h3>
//      <p>${blogs[i].blogContent.substring(0, 90) + '...'} 
//      </p>
//         <a href="./pages/moreblogs.html"><input type="button" value="more" > </a>           
//        </div>
//  </div>
//    ` 
//    if(blogs.length<3){
//     document.getElementById("rmore").style.display = "none";
//    }
//    else{
//       document.getElementById("rmore").style.display = "block";
//       // blogs.splice(1, 1)
//    }
   
//  };
// }
// document.getElementById("bloga").innerHTML=blogCards













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


var dataContainer =  document.getElementById("bloga")
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
        <div class="blog1">
        <div class="photo1"><img src="${blog.blogImage}" alt=""></div>
        <div class="sdisc">
          <h3>${blog.title}</h3>
          <p>${blog.body.substring(0, 90) + '...'} 
          </p>
             <a href="./pages/moreblogs.html?id=${blog.title} "> <input type="button" value="more" > </a>           
            </div>
      </div>`;
  }

});











 









