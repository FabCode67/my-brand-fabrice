var names = document.getElementById("namet");
var email = document.getElementById("mail");
var signup = document.getElementById("signup");
var password = document.getElementById("pass")
var checkpass = document.getElementById("cpass")


var switchs = true;

function comparepasswords(){
    if(password.value!=checkpass.value){
    document.getElementById("comfirm").innerHTML="password mismatch!😏"
    }
}

function comfirmpass(){
    if(password.value == ""){
     document.getElementById("comfirm").innerHTML="password can't be empty"
    }
    else{
     document.getElementById("comfirm").innerHTML=""
 
    }
 }  

function passwordvalidation(){
    if(password.value == ""){
     document.getElementById("secret").innerHTML="password can't be empty"
    }
    else{
     document.getElementById("secret").innerHTML=""
 
    }
 }  
function validatename(){
    if(names.value==""){
        document.getElementById("nam").innerHTML = "name cant't be empty"
    }
    else{
    document.getElementById("nam").innerHTML = ""        
    }
           }
function validateEmail(){
      if(email.value=="")
      document.getElementById("email").innerHTML = "email can't be empty"
      else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))){
      document.getElementById("email").innerHTML = "Please ender valid email"
      switchs = false;
        
      }
      else{
          switchs = true;
         document.getElementById("email").innerHTML = ""
      }
      
        }        

  
function testSignUp(){
    
    if(names.value!="" && password.value!="" && switchs==false && password == checkpass){
        window.location.href = "./login.html"; 
    }
}
signup.addEventListener('click',()=>{
    validatename()
    passwordvalidation()
    testSignUp()
    validateEmail()
    comfirmpass()
    comparepasswords()

})      