


let blogC=""
let blogs = [];
let Data = localStorage.getItem("blogs");
 blogs = JSON.parse(Data);




 cards()
function cards(){
  for (let i = 0; i < blogs.length; i++){
    blogC+= 
   `
  <div class="blogs">
            <div class="pic"><img src="${blogs[i].image}" alt=""></div>
            <div class="desc"><p>${blogs[i].blogContent}</p>
           
                <button onclick="morefun(${i})">more</button></div>
        </div>
   ` 
 };
}
document.getElementById("blo").innerHTML=blogC

let mores=""
function morefun(index){
    mores =  `<div class="up"><img src="${blogs[index].image}" alt=""></div>
    <div class="down">

        <h3>${blogs[index].blogTitle}</h3>
        <p style="margin-top: 1rem;padding: .5rem;">
        ${blogs[index].blogContent}

            <i class="fa-regular fa-heart" style="float: right; cursor: pointer;"></i>
        </p>

        <textarea name="" id="" cols="30" rows="10" style="margin-top: 0rem;" placeholder="Add comment"></textarea>
    </div>`
    document.getElementById("alb").innerHTML=mores

}