const firebaseConfig = {
    apiKey: "AIzaSyAkovgtKM9f1OMtLc-PgDkVLX-0_amb8uQ",
    authDomain: "portfolion-77be4.firebaseapp.com",
    databaseURL: "https://portfolion-77be4-default-rtdb.firebaseio.com",
    projectId: "portfolion-77be4",
    storageBucket: "portfolion-77be4.appspot.com",
    messagingSenderId: "648330402641",
    appId: "1:648330402641:web:f919476eeab2f69ee85170"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//reference firebase
const blogCollection =firebase.database().ref('portfolion');

document.getElementById("addblogform").addEventListener('submit', submitBlog)

function submitBlog(e){
  e.preventDefault();
  var blog_title = getElementVal("blog_title");
  var content = getElementVal("textarea1")
  var image =document.getElementById("image").files[0]
  saveBlog(blog_title, content,image)
console.log(blog_title, content)
}

const saveBlog = (blog_title, content,image)=>{
    var newBlog = blogCollection.push();
    newBlog.set({
        blog_title:blog_title,
        content:content,
        image:`<img src=${URL.createObjectURL(image)} width="200" height="190">`
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }

//   var fromfirebase = firebase.database().

blogCollection.on("value",function(snapshot)
{
 snapshot.array.forEach(function(element) {
 console.log(element.val());
 });
 })