

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
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    clearForm();
})
