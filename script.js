/*==============================
Loader
==============================*/
window.addEventListener("load",()=>{
const loader=document.querySelector(".loader");
setTimeout(()=>{
loader.classList.add("hide");
},1200);
});

/*==============================
Sticky Header
==============================*/
const header=document.querySelector("header");
window.addEventListener("scroll",()=>{
if(window.scrollY>80){
header.classList.add("active");
}else{
header.classList.remove("active");
}
});

/*==============================
Mobile Menu
==============================*/
const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

if(menuBtn){
menuBtn.onclick=()=>{
nav.classList.toggle("active");
menuBtn.classList.toggle("active");
}
}

document.querySelectorAll("nav a").forEach(link=>{
link.onclick=()=>{
nav.classList.remove("active");
menuBtn.classList.remove("active");
}
});

/*==============================
Counter
==============================*/
const counters=document.querySelectorAll(".counter");

const startCounter=()=>{
counters.forEach(counter=>{
const target=+counter.dataset.target;
let count=0;
const speed=target/120;

const update=()=>{
count+=speed;

if(count<target){
counter.innerText=Math.floor(count);
requestAnimationFrame(update);
}else{
counter.innerText=target;
}
}

update();

});
}

let counterStarted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(stats){

const top=stats.offsetTop-300;

if(window.scrollY>top&&!counterStarted){

counterStarted=true;

startCounter();

}

}

});

/*==============================
Swiper
==============================*/
new Swiper(".productsSwiper",{

loop:true,

spaceBetween:30,

grabCursor:true,

speed:900,

autoplay:{
delay:3000,
disableOnInteraction:false,
},

pagination:{
el:".swiper-pagination",
clickable:true,
},

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev",
},

breakpoints:{

0:{
slidesPerView:1,
},

768:{
slidesPerView:2,
},

1200:{
slidesPerView:3,
}

}

});

/*==============================
AOS
==============================*/
AOS.init({
duration:1000,
once:true,
offset:120
});

/*==============================
Smooth Scroll
==============================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==============================
Active Navigation
==============================*/
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(li=>{

li.classList.remove("active");

const link=li.querySelector("a");

if(link&&link.getAttribute("href")==="#"+current){

li.classList.add("active");

}

});

});


/*==============================
Scroll To Top
==============================*/
const topBtn=document.createElement("div");

topBtn.className="scrollTop";

topBtn.innerHTML='<i class="fa-solid fa-angle-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==============================
Reveal Animation
==============================*/
const reveal=document.querySelectorAll(".fade-up,.fade-left,.fade-right");

const revealElements=()=>{

reveal.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",revealElements);

revealElements();

