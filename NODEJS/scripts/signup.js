let email = document.getElementById("mail");
let username = document.getElementById("namet");
let password = document.getElementById("pass");
let confirmPassword = document.getElementById("cpass");
let gender = document.getElementsByName("gender")
let regester = document.getElementById('signup')


// function checkEmptyness(){

// }



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
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    window.location.href="../pages/login.html"
    clearForm()
})
