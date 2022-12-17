
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

let blogimage = document.getElementById("image");
var image


blogimage.addEventListener("change",(e)=>{
    
    const img=e.target.files[0];

    const reader=new FileReader();

    reader.readAsDataURL(img);
    // console.log(reader.readAsDataURL(img))
  
    reader.addEventListener("load",()=>{
        image=reader.result;
        console.log(image);

    });
});


function save() {
    let blogTitle = document.getElementById("blog_title");
    let blogContent = document.getElementById("textarea1");
    
    // let image = URL.createObjectURL(imageId)
    // console.log(imageId);
   

    let data = {
        blogTitle: blogTitle.value,
        blogContent: blogContent.value,
        image: image
    };
    details.push(data);
    setData();


};
document.getElementById("addblogform").addEventListener('submit', (e)=>{
    save()
})