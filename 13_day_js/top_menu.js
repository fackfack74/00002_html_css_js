const pre = document.getElementById("pre");
const next = document.getElementById("next");
const top_bgimg = document.querySelector(".top_bgimg");
const top_img = document.getElementById("top_img");

let img_map = ["./img/badge2.jpg", "./img/favicon.png", "./img/girl_sports_dress.jpg"];
let map_pos = 0;

next.onclick = () => {
    console.log("next");
    console.log(img_map.length);
    if((map_pos + 1) >= img_map.length)
        map_pos = 0;
    else
        map_pos++;
    console.log(map_pos);
    console.log(img_map[map_pos]);
    top_bgimg.style.backgroundImage = "url('" + img_map[map_pos] + "')";
    top_img.src = img_map[map_pos];
}

pre.onclick = () => {
    console.log("pre");
    console.log(img_map.length);
    if(map_pos === 0)
        map_pos = img_map.length - 1;
    else
        map_pos--;
    console.log(map_pos);
    console.log(img_map[map_pos]);
    top_bgimg.style.backgroundImage = "url('" + img_map[map_pos] + "')";
    top_img.src = img_map[map_pos];
}
