const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    //O toque, no mobile, normalmente tem um delay de 300ms. Isso faz com que o clique e o toque acontecam ao mesmo tempo, resultando na abertura e fechamento imediato do menu mobile. A condição abaixo impede que isso aconteça.
    if (TouchEvent === 'touchstart') {
        TouchEvent.preventDefault()
    }
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); //classList.toggle adiciona ou remove uma classe ao elemento nav. Pode ser substituído por .add ou .remove 
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

    }

}

btnMobile.addEventListener('click', toggleMenu); //ao clicar no botão, chama a função toggleMenu
btnMobile.addEventListener('touchstart', () => { toggleMenu }); //ao toque na tela, chama a função toggleMenu