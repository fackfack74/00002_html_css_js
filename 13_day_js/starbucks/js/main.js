
const div_search = document.querySelector(".search");
const txt_item = document.querySelector("input");
const icon_search = document.querySelector(".material-icons");

div_search.addEventListener("click", function(){
    txt_item.focus();
});

txt_item.addEventListener("focus", function(){
    txt_item.setAttribute("placeholder", "통합검색");
    //icon_search.style = "display:none;";
    div_search.classList.add("focused");
});

txt_item.addEventListener("blur", function(){
    txt_item.setAttribute("placeholder", "");
//    icon_search.style = "display:inline;";
    div_search.classList.remove("focused");
});