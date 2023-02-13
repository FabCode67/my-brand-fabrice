if(localStorage.getItem('token')=='undefined'|| !localStorage.getItem('token')){
document.getElementById('signout').innerHTML = "Login"
}
else{
    document.getElementById('signout').innerHTML = "Logout"
    document.getElementById('signout').addEventListener('click',()=>localStorage.setItem("token", undefined))
}

    