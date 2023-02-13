let username = document.getElementById("namet");
let password = document.getElementById("pass");
let login = document.getElementById("login");
let invalid = document.getElementById("invalid");

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


function clearForm(){
    username.value=""
    password.value ="";
}

login.addEventListener('click',(e)=>{
    document.getElementById('invalid').innerHTML=loading
    login.style.display ='none';

    e.preventDefault()
    const user = {
    username:username.value,
    password:password.value,
    }
    fetch("https://comfortable-eel-pinafore.cyclic.app/api/login", {
    method: 'POST',
    headers:{
    'Accept': 'application/json, tesxt/plain, /',
    'Content-Type':'application/json',
    },
    body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((user) => {
    console.log('Success:', user);
    console.log('Success:', user.data);
    console.log('fail:', user.status);
    console.log('fail:', user.message);
    console.log('success:', user.role);

    if(user.status == "fail"){
        localStorage.setItem("token", undefined);
        invalid.innerHTML = `<p style="color:red; margin-left:-10%;"><u>Invalid username or password</u></p>`;
        setTimeout(()=>{
            invalid.innerHTML = `<h3 >LOGIN HERE</h3>` 
        },2000)
        login.style.display ='block';

        return
    }
    else{
        localStorage.setItem("token", user.data);
        if(user.role === 'isAdmin'){
            login.style.display ='none';
            window.location.href="../pages/dashboard.html"
                 }
        else{
          login.style.display ='none';
          window.location.href="../pages/allblogs.html"
                 }

    }
    })
    .catch((error) => {
      document.getElementById('invalid').innerHTML=`<p style="text-align:center;margin-left:-5rem;float:left"> timeout! 💭 Check your connection and <a href='./login.html' style="color:green;font-size:20px;">refresh</a> the page</p>`
    });
    
    })





