


details = [];
getData();

function getData(){
    let Data = localStorage.getItem("blogs");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setComment();
    };
};
function setComment() {
    localStorage.setItem("comment", JSON.stringify(comment));
};



function save() {
    let comment = document.getElementById("thiscom");
    
    
    // let image = URL.createObjectURL(imageId)
    // console.log(imageId);
   

    let data = {
        comments: comment,
    };
    comment.push(data);
    setComment();


};
document.getElementById("addblogform").addEventListener('submit', (e)=>{
    save()
})