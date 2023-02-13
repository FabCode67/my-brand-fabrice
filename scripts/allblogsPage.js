let loading = `<style>
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 10%;
    padding-left: 10%
    border-top: 16px solid black;
    border-bottom: 16px solid green;
    width: 15px;
    height: 15px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
  
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  </head>
  <body>  
  <div class="loader" style="margin-left:40%; margin-top:5%; "></div>
  `


document.getElementById("blogCard").innerHTML=loading
let dataContainer =  ''
fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/',{mode:"cors"})
.then(res => res.json())
.then(data => {
    data.data.reverse().forEach(function(blog) {
        dataContainer += `
        <div class="subdiv">
                <div class="photo">
                <img src ="${blog.blogImage}" >
                </div>
                <div class="discript">
                <h3>${blog.blogTitle}</h3>
                <p>${blog.blogContent.substring(0, 110) + '...'}</p>
                </div>
                <div class="buttons" style="display: block;">
                <a href="moreblogs.html?id=${blog._id}"> <input type="button" value="more" style="width:100%; "> </a>           
                </div>
                </div>`;

    })
    document.getElementById("blogCard").innerHTML=dataContainer
})

