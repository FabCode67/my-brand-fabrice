
details = [];
getData();

function getData(){
    let Data = localStorage.getItem("blogs");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("blogs", JSON.stringify(details));
};

function save() {
    let blogTitle = document.getElementById("blog_title");
    let blogContent = document.getElementById("textarea1");
    let imageId = document.getElementById("image").files[0];
    // let image = URL.createObjectURL(imageId)
    console.log(imageId);
   

    let data = {
        blogTitle: blogTitle.value,
        blogContent: blogContent.value,
        image: URL.createObjectURL(imageId)
    };
    details.push(data);
    setData();


};
document.getElementById("addblogform").addEventListener('submit', (e)=>{
    save()
})