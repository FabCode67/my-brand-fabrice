let username = document.getElementById("namet");
let password = document.getElementById("pass");
let login = document.getElementById("login");
let invalid = document.getElementById("invalid");

function clearForm(){
    username.value=""
    password.value ="";
}

login.addEventListener('click',(e)=>{
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
        invalid.innerHTML = `<p style="color:red;"><u>Invalid username or password</u></p>`;
        setTimeout(()=>{
            invalid.innerHTML = `<h3 >LOGIN HERE</h3>` 
        },2000)
        return
    }
    else{
        localStorage.setItem("token", user.data);
        if(user.role === 'isAdmin'){
            window.location.href="../pages/dashboard.html"
        }
        else{
            window.location.href="../pages/allblogs.html"
        }

    }
    })
   
    })



// login.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const user = {
//         username:username.value,
//         password:password.value,
//     }
//     fetch("https://comfortable-eel-pinafore.cyclic.app/api/login", {
//         method: 'POST',
//         headers:{
//             'Accept': 'application/json, tesxt/plain, */*',
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify(user),
//     })
//     .then((response) => response.json())
//     .then((user) => {
//       console.log('Success:', user);
//       console.log('Success:', user.message);
//       console.log('Success:', user.data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//     clearForm()
// })
