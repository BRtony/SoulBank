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