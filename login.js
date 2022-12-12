var login = document.getElementById("logins")
var password = document.getElementById("pass")
var names = document.getElementById("namet");


function validatename(){
    if(names.value==""){
        document.getElementById("nam").innerHTML = "name cant't be empty"
    }
    else{
    document.getElementById("nam").innerHTML = ""        
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
function testLogin(){
    if(names.value=="Fab" && password.value=="admin"){
        window.location.href = "./dashboard.html";
    }
    else if(names.value!="Fab" && names.value!="" && password.value!=""&& password.value!="admin"){
        window.location.href = "./moreblogs.html"; 
    }
}
login.addEventListener('click',()=>{
    validatename()
    passwordvalidation()
    testLogin()

})