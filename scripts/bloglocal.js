


/*-----------------------------------------ADD TO LOCALSOTRAGE-------------------------------------------------------*/

// details = [];
// getData();

// function getData(){
//     let Data = localStorage.getItem("blogs");
//     if (Data) {
//         details = JSON.parse(Data);
//     } else {
//         setData();
//     };
// };
// function setData() {
//     localStorage.setItem("blogs", JSON.stringify(details));
// };

// let blogimage = document.getElementById("image");
// var image


// blogimage.addEventListener("change",(e)=>{
    
//     const img=e.target.files[0];

//     const reader=new FileReader();

//     reader.readAsDataURL(img);
  
//     reader.addEventListener("load",()=>{
//         image=reader.result;

//     });
// });


// function save() {
//     let blogTitle = document.getElementById("blog_title");
//     let blogContent = document.getElementById("textarea1");
//     let data = {
//         blogTitle: blogTitle.value,
//         blogContent: blogContent.value,
//         image: image
//     };
//     details.push(data);
//     setData();


// };
// document.getElementById("addblogform").addEventListener('submit', (e)=>{
//     save()
// })

/*-----------------------------------------ADD TO LOCALSOTRAGE-------------------------------------------------------*/






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

let blogimage = document.getElementById("image");
    var image


blogimage.addEventListener("change",(e)=>{
    
    const img=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(img);
  
    reader.addEventListener("load",()=>{
        image=reader.result;

    });
});



function cleaForm(){
  document.getElementById("blog_title").value=""
  document.getElementById("textarea1").value=""
  document.getElementById("image").files[0]=null
}

var btitle = document.getElementById("blog_title")
var textarea = document.getElementById("textarea1");

function checkEmptyness(){
  if(btitle.value==""){
document.getElementById("error1").innerHTML="title can not be empty!"
  }
  else{
    document.getElementById("error1").innerHTML=""
  }
   if(textarea.value==""){
    document.getElementById("error2").innerHTML="content can not be empty!"
  }
  else{
    document.getElementById("error2").innerHTML=""
  }
  if(btitle.value!=""&&textarea.value!=""){
    document.getElementById("hed").innerHTML = " blog added successfuly"

    setTimeout(()=>{
        document.getElementById("hed").innerHTML = `<h3>ADD OTHER BLOG</h3>`
    },2000)

    return true
  }
 
}


document.getElementById("addblogform").addEventListener('submit',submitForm)

function submitForm(e){
 
   e.preventDefault()
   if(checkEmptyness()!=true){
    return
  }
    var blogTitle = document.getElementById("blog_title").value;
    var blogContent = document.getElementById("textarea1").value;
    var blogRef = firebase.database().ref("/myBlogTest");
    blogRef.push({
      title: blogTitle,
      body: blogContent,
      blogImage:image
    });
    cleaForm()
    }









// const saveBlogs=(blogTitle, blogContent, image)=>{
//   var newBlog = blogForm.push();
//   newBlog.set(
//     {
//     blogHead:blogTitle,
//     blogCont:blogContent,
//     blogImage:image
//     }
//   )
// }



















// const firebaseConfig = {
//   apiKey: "AIzaSyDrNua7nD1-MZfktel7rzj9q_IjD6jRGxw",
//   authDomain: "capastoneproject.firebaseapp.com",
//   databaseURL: "https://capastoneproject-default-rtdb.firebaseio.com",
//   projectId: "capastoneproject",
//   storageBucket: "capastoneproject.appspot.com",
//   messagingSenderId: "628750201693",
//   appId: "1:628750201693:web:f377bd3adb12240abdeeb4"
// };

//   firebase.initializeApp(firebaseConfig);


//   var blogTitle, blogContent;

//   function selectFields(){
//     blogTitle = document.getElementById("blog_title").value;
//     blogContent = document.getElementById("textarea1").value;
//   }

//  let blogimage = document.getElementById("image");
// var image


// blogimage.addEventListener("change",(e)=>{
    
//     const img=e.target.files[0];

//     const reader=new FileReader();

//     reader.readAsDataURL(img);
  
//     reader.addEventListener("load",()=>{
//         image=reader.result;

//     });
// });





//   document.getElementById("go").onclick=function(){
//     selectFields()
//     firebase.database().ref('blogters/'+blogTitle).set({
//         blogTitle: blogTitle,
//         blogc: blogContent,
//         imagec:image

 
//   });
// }



// /*-----------------------------------------ADD TO FIREBASE-------------------------------------------------------*/

