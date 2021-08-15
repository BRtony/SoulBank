//dark mode
function invertmode() {
    const body = document.getElementById('body')
    let currentClass = body.className;
    body.className = currentClass == 'lightmode' ? 'darkmode' : 'lightmode';
    var links = document.getElementsByClassName('modoclaro')
    for (let i = 0; i < links.length; i++) {
        if (links[i].style.color == 'white') {
            links[i].style.color = "black";
            links[i].style.transition = '0.6s';
        } else {
            links[i].style.color = "white"
            links[i].style.transition = "0.6s"
        }
    }
    const blackline = document.getElementById('blackline')
    let blacklineClass = blackline.className;
    blackline.className = blacklineClass == 'blackline' ? 'blacklinelight' : 'blackline';
    const hero = document.getElementById('hero');
    let heroClass = hero.className;
    hero.className = heroClass == 'hero' ? 'herodark' : 'hero';
    const logo = document.getElementById('logo');
    let logoClass = logo.className;
    logo.className = logoClass == 'logo' ? 'logodark' : 'logo';
}

//SUPER MASTER SLIDES
var slideIndex = 1;
showSlides(slideIndex);

// proximo/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

//font size section
var textoAumentado = 0;

function aumentarFonte() {
    if (textoAumentado == 0) {
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("texto")[i].style.fontSize = "28px";
            document.getElementsByClassName("titulos")[i].style.fontSize = "34px";
            textoAumentado++;
        }
    } else {
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("texto")[i].style.fontSize = "20px";
            document.getElementsByClassName("titulos")[i].style.fontSize = "25px";
            textoAumentado--;
        }
    }
}



const mybutton = document.getElementById("myBtn");
window.onscroll = function() { scrollFunction() };

// controle pelas bolinhas
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Quando o usuario rola 100px do topo, mostra ou esconde o botão
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//scroll to top quando usuario clica
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}