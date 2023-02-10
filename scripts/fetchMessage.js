var tbBody =  document.getElementById("tablebody")
let token = localStorage.getItem("token");
fetch('https://comfortable-eel-pinafore.cyclic.app/api/contact/', {
   
    headers: {
      "Authorization": token,
    }
})
.then(res => res.json())
.then(data => {
    let i =1
    data.data.reverse().forEach(function(message) {
        tbBody.innerHTML +=
         `
        <tr>
             <td>${i++}</td>
             <td>${message.name}</td>
             <td>${message.email}</td>
             <td>${message.message}</td>
             <td><button type="" onclick="deleteMessage('${message._id}')" style="color:red;background-color: none;"><i class="fa-solid fa-trash" style="color:red;background-color: none;"
             ></i></button></td>
             </tr>
           `;
    });
})



async function deleteMessage(Id){

    let comfirm =window.confirm("are you sure that you want to delete this message?")
    console.log(comfirm);   
    if(comfirm==true){
    await fetch(`https://comfortable-eel-pinafore.cyclic.app/api/contact/${Id}`, {
        mode:'cors',
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => 
           response.json()
        )
      .catch(error => {
        console.error("Error deleting message", error);
      });
      window.location.href="../pages/querries.html"
    }

    else{
        return
    }
}




