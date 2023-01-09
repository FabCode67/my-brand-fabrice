
// tableBody = ""
 
// messages=[]

// let Message = localStorage.getItem("messages");
// messages = JSON.parse(Message);

// for(let i = 0; i<messages.length;i++){
//     tableBody += `
//     <tr>
//     <td>${i+1}</td>
//     <td>${messages[i].uname}</td>
//     <td>${messages[i].umail}</td>
//     <td>${messages[i].umessage}</td>
//     <td>08/10/2012</td>
//   </tr>
//   `
// }
// document.getElementById("tablebody").innerHTML = tableBody


const firebaseConfig = {
  apiKey: "AIzaSyDhZ3CHEFJAt9GqU7qaScVIKYpK5X3mQ1s",
  authDomain: "mybland-eaf03.firebaseapp.com",
  databaseURL: "https://mybland-eaf03-default-rtdb.firebaseio.com",
  projectId: "mybland-eaf03",
  storageBucket: "mybland-eaf03.appspot.com",
  messagingSenderId: "88332557026",
  appId: "1:88332557026:web:7919be9a6e027cbe78dcbb"
};
firebase.initializeApp(firebaseConfig);


var tbBody =  document.getElementById("tablebody")
var blogRef = firebase.database().ref("/contactMessages");
blogRef.on("value", function(snapshot) {
  // Clear the data container
  tbBody.innerHTML = "";
  // Get the data
  var data = snapshot.val();

  // Loop through the data and add it to the data container
  let i =1
  for (var key in data) {
    
    var querry = data[key];
    tbBody.innerHTML += `
    <tr>
         <td>${i++}</td>
         <td>${querry.userName}</td>
         <td>${querry.mail}</td>
         <td>${querry.message}</td>
         <td>09-Jan-2023</td>
       </tr>`;
  }

});











