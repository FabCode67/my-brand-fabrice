let token = localStorage.getItem('token');
if(token=='undefined'){
document.getElementById('signout').innerHTML = "Login"
}
else{
    document.getElementById('signout').innerHTML = "Logout"
    document.getElementById('signout').addEventListener('click',()=>localStorage.setItem("token", undefined))
}

    