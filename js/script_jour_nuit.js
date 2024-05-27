document.addEventListener('DOMContentLoaded', function () {
    const icon = document.querySelector('.icon');
    const page = document.querySelector('.page');
    const header = document.querySelector('header')
    const home = document.querySelector('.home')
    const lien = document.querySelector('.block')
    const bouton = document.querySelectorAll('.bouton>a>button')

    icon.addEventListener('click', function () {
        icon.classList.toggle('nuit');
        icon.classList.toggle('jour');
        if (icon.classList.contains('jour')) {
            header.classList.add('clair')
            page.classList.add('clair');
            home.classList.add('clair')
            lien.classList.add('lien_clair')
            bouton.classList.add('bouton_clair')
        } else {
            page.classList.remove('clair');
            header.classList.remove('clair')
            home.classList.remove('clair')
            lien.classList.remove('lien_clair')
            bouton.classList.remove('bouton_clair')
        }
    });

    // Vérifier l'état initial de l'icône pour définir l'état de la page
    if (icon.classList.contains('jour')) {
        page.classList.add('clair');
    } else {
        page.classList.remove('clair');
    }
});
