
tableBody = ""
 
messages=[]

let Message = localStorage.getItem("messages");
messages = JSON.parse(Message);

for(let i = 0; i<messages.length;i++){
    tableBody += `
    <tr>
    <td>${i+1}</td>
    <td>${messages[i].uname}</td>
    <td>${messages[i].umail}</td>
    <td>${messages[i].umessage}</td>
    <td>08/10/2012</td>
  </tr>
  `
}
document.getElementById("tablebody").innerHTML = tableBody