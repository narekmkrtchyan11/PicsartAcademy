const allcourses = document.querySelector("#blackSlack");

allcourses.addEventListener("click",function (e){
    e.stopPropagation()
    const div = document.querySelector("#jsdiv");
    div.style.display = div.style.display === "block"?"none":"block";
  
});
document.querySelector("#maincontainer").addEventListener("click",function (){
    const div = document.querySelector("#jsdiv");
        div.style.display = "none";
});


  