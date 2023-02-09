

// var dataContainer =  document.getElementById("bloga")
// fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/',{mode:"cors"})
// .then(res => res.json())
// .then(data => {
//     data.data.reverse().forEach(function(blog) {
//     dataContainer.innerHTML += `
//     <div class="blog1">
//     <div class="photo1"><img src="${blog.blogImage}" alt=""></div>
//     <div class="sdisc">
//       <h3>${blog.blogTitle}</h3>
//       <p>${blog.blogContent.substring(0, 90) + '...'} 
//       </p>
//          <a href="./pages/moreblogs.html?id=${blog._id} "> <input type="button" value="more" > </a>           
//         </div>
//   </div>`;
//     });
// });


var dataContainer = document.getElementById("bloga");
fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/', { mode: "cors" })
  .then(res => res.json())
  .then(data => {
    let count = 0;
    data.data.reverse().forEach(function(blog) {
      if (count < 3) {
        dataContainer.innerHTML += `
        <div class="blog1">
          <div class="photo1"><img src="${blog.blogImage}" alt=""></div>
          <div class="sdisc">
            <h3>${blog.blogTitle}</h3>
            <p>${blog.blogContent.substring(0, 90) + '...'}</p>
            <a href="./pages/moreblogs.html?id=${blog._id} ">
              <input type="button" value="more">
            </a>
          </div>
        </div>`;
      }
      count++;
    });
  });

