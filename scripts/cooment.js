

var  comments = [];
getComment();

function getComment(){
    let Comment = localStorage.getItem("comment");
    if (Comment) {
        comments = JSON.parse(Comment);
    } else {
        setComment();
    };
};

function  setComment(){
    localStorage.setItem("comment", JSON.stringify(comments));
}


    
