
let loading = `<style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  padding-left: 90%
  border-top: 16px solid black;
  border-bottom: 16px solid green;
  width: 2.5px;
  height: 2.5px;
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
let message = document.getElementById("textarea");
let sendMessage = document.getElementById("submit");

function clearForm(){
    email.value ="";
    username.value ="";
    message.value ="";
}

sendMessage.addEventListener('click',(e)=>{
  document.getElementById("success").innerHTML=loading
    e.preventDefault()
    const data = { 
            email:email.value,
            name:username.value,
            message:message.value,
    }
    fetch("https://comfortable-eel-pinafore.cyclic.app/api/contact", {

        method: 'POST',
        headers:{
            'Accept': 'application/json, tesxt/plain, */*',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      if (data.status == 'fail') {
        setTimeout(()=>{
          document.getElementById("success").innerHTML =''
  
          },7000)
        document.getElementById("success").innerHTML = `<p style = "font-size: 15px;
        color: red;">${data.message} because of some Empty field(s)!</p>`
      }
      else{

        setTimeout(()=>{
          document.getElementById("success").innerHTML =''
  
          },3000)
        document.getElementById("success").innerHTML = `message received!`
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    clearForm();
})
