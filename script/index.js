const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); //classList.toggle adiciona ou remove uma classe ao elemento nav. Poderia ser substituído por .add ou .remove 
    const active = nav.classList.contains('active');
    this.setAttribute('aria-expanded', active);
    if (active) {
        this.setAttribute('aria-label', 'Fechar Menu'); //se a nav tem classe 'active'
    } else {
        this.setAttribute('aria-label', 'Abrir Menu');
    }

}

btnMobile.addEventListener('click', toggleMenu); //ao clicar no botão, chama a função toggleMenu
btnMobile.addEventListener('touchstart', () => { toggleMenu }); //ao toque na tela, chama a função toggleMenu

//botão dark mode
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

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
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