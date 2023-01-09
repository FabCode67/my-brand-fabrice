let changeIcon = function(icon){
    icon.classList.toggle('fa-times')
}


const textarea = document.getElementById("textarea1");

function f1(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function f3(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f5(e) {
    textarea.style.textAlign = "left";
}

function f6(e) {
    textarea.style.textAlign = "center";
}

function f7(e) {
    textarea.style.textAlign = "right";
}

function f8(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}

// window.addEventListener('load', () => {
//     textarea.value = "";
// });

var login = document.getElementById("logins")
var button = document.getElementById("submit");
var names = document.getElementById("namet");
var email = document.getElementById("mail");
var messaget = document.getElementById("rextarea");
var password = document.getElementById("pass")

var switchs = true

function checkEmpty(){
    if(names.value!="" && email.value!="" && messaget.value!=""&&switchs==true){
    document.getElementById("success").innerHTML = " message submitted successful👌"

    setTimeout(()=>{
        document.getElementById("success").innerHTML = ""
    },2000)
    submitForm()
    names.value="";
    email.value="";
    messaget.value="";
}
   }


function validatename(){
    if(names.value==""){
        document.getElementById("name").innerHTML = "name can't be empty"
    }
    else{
    document.getElementById("name").innerHTML = ""        
    }
           }

         
function validateEmail(){
    if(email.value=="")
    document.getElementById("email").innerHTML = "email can't be empty"
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
    document.getElementById("email").innerHTML = "Please ender valid email"
    switchs = false;

    }
    else{
        switchs = true;

        document.getElementById("email").innerHTML = ""
    }
    
}

function passwordvalidation(){
    if(password.value == ""){
     document.getElementById("secret").innerHTML="password can't be empty"
    }
 //    else if(password.value.length < 8){
 //     document.getElementById("secret").innerHTML="Enter 8 characters"
 //    }
    else{
     document.getElementById("secret").innerHTML=""
 
    }
 }  
 









//  message = [];
//  getMessage();
 
//  function getMessage(){
//      let Message = localStorage.getItem("messages");
//      if (Message) {
//          message = JSON.parse(Message);
//      } else {
//          setMessage();
//      };
//  };
 
//  function setMessage(){
//      localStorage.setItem("messages", JSON.stringify(message))
//  }
 
 
//  function saveMessage(){
     
//  let uname = document.getElementById("namet")
//  let umail = document.getElementById("mail")
//  let umessage = document.getElementById("rextarea")
 
//      let allMesssages = {
//          uname:uname.value,
//          umail:umail.value,
//          umessage:umessage.value
//      }
//      message.push(allMesssages)
//      setMessage()
//  }
 
//  document.getElementById("contactForm").addEventListener('submit', saveMessage)






                                      //FIREBASE MESSAGES//


          

  
//   document.getElementById("contactForm").addEventListener('click',submitForm)
  
  function submitForm(){
   
   
         let uname = document.getElementById("namet").value
          let umail = document.getElementById("mail").value
          let umessage = document.getElementById("rextarea").value
      var contactRef = firebase.database().ref("/contactMessages");
      contactRef.push({
        userName: uname,
        mail: umail,
        message:umessage
      });
      }
  
                              





























function validateMessage(){
    if(messaget.value=="")
    document.getElementById("message").innerHTML = "message can't be empty"
    else
    document.getElementById("message").innerHTML = ""   
    }

button.addEventListener('click',()=>{
   validatename()
   validateEmail()
   validateMessage()
   checkEmpty()
})









