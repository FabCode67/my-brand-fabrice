let loading = `<style>
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    padding-left: 90%
    border-top: 16px solid black;
    border-bottom: 16px solid green;
    width: 10px;
    height: 10px;
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
let email = document.getElementById("mail");
let username = document.getElementById("namet");
let password = document.getElementById("pass");
let confirmPassword = document.getElementById("cpass");
let gender = document.getElementsByName("gender")
let regester = document.getElementById('signup')


function clearForm(){
    email.value ="";
    username.value=""
    password.value ="";
    password.value ="";
    confirmPassword.value ="";
    gender.value ="";
}

regester.addEventListener('click',(e)=>{
    e.preventDefault()
    document.querySelector('.hed').innerHTML =loading
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
        gender = gender[i].value;
    }
    const user = {
        email:email.value,
        username:username.value,
        gender:gender,
        password:password.value,
        confirmPassword:confirmPassword.value
    }
    fetch("https://comfortable-eel-pinafore.cyclic.app/api/user", {
        method: 'POST',
        headers:{
            'Accept': 'application/json, tesxt/plain, */*',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((user) => {
      console.log('Success:', user);
     if(user.status=='success'){
        window.location.href = '../pages/login.html'
     }
    else  if(user.status=='fail'){
        setTimeout(()=>{
        document.querySelector('.hed').innerHTML = `<h3>SIGNUP</h3>`

        },3000)
        document.querySelector('.hed').innerHTML = `<p style="color:red; margin:auto">${user.message}</p>`

      }
     else if(user.message =='invalid gender'){
        document.querySelector('.hed').innerHTML = user.message
      }
     else if(email.value==""){
        document.getElementById("email").innerHTML="email can't be empty!"
    }
    else if(email.value!=""){
        document.getElementById("email").innerHTML=""
    }
    if(username.value==""){
        document.getElementById("nam").innerHTML="username can't be empty!"
    }
    else if(username.value!=""){
        document.getElementById("nam").innerHTML=""
    }
    if(password.value==""){
        document.getElementById("secret").innerHTML="password can't be empty!"
    }
    else if(password.value!=""){
        document.getElementById("secret").innerHTML=""
    }
    else if(confirmPassword.value==""){
        document.getElementById("confirm").innerHTML="confirm pasword can't be empty!"
    }
    else if(confirmPassword.value!=""){
        document.getElementById("confirm").innerHTML=""
    }
    else {
    window.location.href="../pages/login.html"
    clearForm()
    }
    
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
})
