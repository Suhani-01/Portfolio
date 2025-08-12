const theme=document.getElementById("theme-toggle");
const body=document.body;

let isLight=true;

theme.addEventListener("click", () => {
  // Fade out icon
  icon.style.opacity = "0";

  setTimeout(() => {
    if (isLight) {
      body.classList.remove("lighttheme");
      body.classList.add("darktheme");

      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");

      isLight = false;
    } else {
      body.classList.remove("darktheme");
      body.classList.add("lighttheme");

      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");

      isLight = true;
    }

    // Fade in icon
    icon.style.opacity = "1";
  }, 150);
});

window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    if(window.scrollY>10){
        header.classList.add("scrolled")
    }else{
        header.classList.remove("scrolled");
    }
})

//when box enter viewport
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){  
            entry.target.classList.add('show');
        } else {
        entry.target.classList.remove('show');  // Remove class when out of view
        }
    })
})

const hero_button=document.querySelector('.button-container');
observer.observe(hero_button);

const about2_box=document.querySelectorAll('.about2-box');
about2_box.forEach(box => {
    observer.observe(box);
});

const skill_box=document.querySelectorAll('.card-container');

skill_box.forEach(box=>{
    observer.observe(box)
})

const gears=document.querySelectorAll('.gear');
gears.forEach(gear=>{
    observer.observe(gear)
})


const projectCard=document.querySelectorAll('.project-box');
projectCard.forEach(card=>{
    observer.observe(card)
})


const certificates=document.querySelectorAll('.certificate-card');
certificates.forEach(cert => {
    observer.observe(cert);
});