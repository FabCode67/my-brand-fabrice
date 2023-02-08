let dataContainer =  document.getElementById("blogCard")
fetch('https://comfortable-eel-pinafore.cyclic.app/api/blog/',{mode:"cors"})
.then(res => res.json())
.then(data => {
    data.data.forEach(function(blog) {
        dataContainer.innerHTML += `
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
    });
})

