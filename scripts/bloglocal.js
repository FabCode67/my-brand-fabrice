
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







var imagesObject = [];

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = function(e) {
          displayImgData(e.target.result)
          addImage(e.target.result);
      };

      reader.readAsDataURL(f);
    }
}

function loadFromLocalStorage(){
  var images = JSON.parse(localStorage.getItem("images"))

  if(images && images.length > 0){
    imagesObject = images;
    
    displayNumberOfImgs();
    images.forEach(displayImgData);
  }
}

function addImage(imgData){
  imagesObject.push(imgData);
  displayNumberOfImgs();
  localStorage.setItem("images", JSON.stringify(imagesObject));
}



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