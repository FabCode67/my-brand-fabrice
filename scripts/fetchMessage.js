var tbBody =  document.getElementById("tablebody")
fetch('https://comfortable-eel-pinafore.cyclic.app/api/contact/',)
.then(res => res.json())
.then(data => {
    let i =1
    data.data.forEach(function(message) {
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








// async function displayMessages() {
//     console.log("hello", token);
//     await fetch("https://expensive-newt-tiara.cyclic.app/contact/getall", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(async (res) => await res.json())
//       .then((blog) => {
//         let table = ` <table> <thead> <th>Number</th> <th>UserName</th> <th>UserEmail</th> <th>UserMessage</th> <th colspan="3">Action</th> </thead> <tbody id="blogtable">`;
//         // console.log(blog.message);
//         for (let i = 0; i < blog.message.length; i++) {
//           //   console.log(blog.message[i]._id);
//           table += `
//   <tr>
//     <td>${i + 1}</td>
//     <td>${blog.message[i].name}</td>
//     <td>${blog.message[i].email}</td>
//     <td>${blog.message[i].message}</td>
//     <td>
//       <a type="button" id="delete" class="delete" data-blog-id="${
//         blog.message[i]._id
//       }">delete</a>
//     </td>
//   </tr>
// `;
//         }
//         table += `
//   </tbody>
// </table>
// `;
//         document.getElementById("contentTomange").innerHTML = table;
//       })
//       .catch((err) => {
//         document.getElementById("contentTomange").innerHTML = err;
//       });
//   }
//   displayMessages();

//   async function deletemessage(i) {
//     await fetch(
//       `https://expensive-newt-tiara.cyclic.app/contact/delete/${i}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         console.log("result", result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   document
//     .getElementById("contentTomange")
//     .addEventListener("click", function (e) {
//       if (e.target.classList.contains("delete")) {
//         console.log(e.target.dataset.blogId);
//         deletemessage(e.target.dataset.blogId);
//         // to loaad window after delete
//         setTimeout(() => {
//           //   reload window
//           location.reload();
//         }, 2000);
//       }
//     });