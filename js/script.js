/* ===========================================
   PORTFOLIO JAVASCRIPT
   Author : Perdia Santika
=========================================== */

// =========================
// Navbar Scroll Effect
// =========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// =========================
// Active Menu
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const tujuan = document.querySelector(this.getAttribute("href"));

        tujuan.scrollIntoView({

            behavior: "smooth"

        });

    });

});
// =========================
// Typing Effect
// =========================

const text = [

    "IT Support",

    "Web Developer",

    "Frontend Developer",

    "Backend Developer"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typing(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(typing,1500);

    }else{

        setTimeout(typing,120);

    }

})();
// =========================
// Back To Top
// =========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}