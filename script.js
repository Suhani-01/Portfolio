const theme=document.getElementById("theme-toggle");
const body=document.body;

let isLight=true;
theme.addEventListener("click",()=>{
    const icon = document.getElementById("icon");

    icon.style.opacity = "0"; // fade out

    setTimeout(() => {
        if (isLight) {
            body.setAttribute("class", "darktheme");
            isLight = false;
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            body.setAttribute("class", "lighttheme");
            isLight = true;
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

        icon.style.opacity = "1"; // fade in
    }, 150); // wait a bit before fading in new icon
})

window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    if(window.scrollY>10){
        header.classList.add("scrolled")
    }else{
        header.classList.remove("scrolled");
    }
})