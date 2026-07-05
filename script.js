const words = [
    "Web Developer",
    "Programmer",
    "Problem Solver",
    "Tech Enthusiast"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[i];

    if (!isDeleting) {
        j++;
    } else {
        j--;
    }

    document.getElementById("typing").textContent =
        currentWord.substring(0, j);

    if (j === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1200);

        return;

    }

    if (j === 0) {

        isDeleting = false;

        i++;

        if (i === words.length)
            i = 0;

    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);

}

typeEffect();
const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
const topBtn = document.getElementById("topBtn");
console.log(topBtn);
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("DOMContentLoaded", function () {

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 200) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});
const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    progress.style.width = percent + "%";

});
window.addEventListener("load", function(){

const loader = document.getElementById("loader");

setTimeout(function(){

loader.classList.add("hidden");

},1000);

});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button").forEach((item)=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});