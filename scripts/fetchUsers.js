var tbBody =  document.getElementById("tablebody")
fetch('https://comfortable-eel-pinafore.cyclic.app/api/user/',{mode:"cors"})
.then(res => res.json())
.then(data => {
    let i =1
    data.data.reverse().forEach(function(user) {
        tbBody.innerHTML +=
         `
        <tr>
             <td>${i++}</td>
             <td>${user.email}</td>
             <td>${user.username}</td>
             <td>${user.gender}</td>
             <td><button type="" onclick="deleteUser('${user._id}')"><i class="fa-solid fa-trash"></tr>
           `;
    });
})

async function deleteUser(Id){

    let comfirm =window.confirm("are you sure that you want to delete this user?")
    console.log(comfirm); 
      
    if(comfirm==true){
    let token = localStorage.getItem("token");
    await fetch(`https://comfortable-eel-pinafore.cyclic.app/api/user/${Id}`, {
        mode:'cors',
        method: 'DELETE',
        headers: {
           
         "Content-Type": "application/json",
          "Authorization": token,
        }
    })
    .then(response => 
           response.json()
        )
      .catch(error => {
        console.error("Error deleting user", error);
      });
      window.location.href="../pages/users.html"
    }

    else{
        return
    }
}
