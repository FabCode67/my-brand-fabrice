fetch('https://comfortable-eel-pinafore.cyclic.app/api/profile/', {
   
    headers: {
      "Authorization": localStorage.getItem("token")
    }
})
.then(res => res.json())
.then(data => {
  console.log(data.data.email);
  if (localStorage.getItem("token")=='undefined'|| data.data.email!='fab@gmail.com') {
  window.location.href = "./login.html";
    }
})
.catch(()=>{
  window.location.href = "./login.html";
})

 