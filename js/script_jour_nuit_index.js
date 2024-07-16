document.addEventListener('DOMContentLoaded', function () {
    const icon = document.querySelector('.icon');
    const pages = document.querySelectorAll('.page');
    const header = document.querySelector('header');
    const h2 = document.querySelectorAll('h2');
    const h4 = document.querySelectorAll('h4');
    const menu = document.querySelector('.menu-bas');
    const menu_bouton = document.querySelectorAll('.element>svg');
    const logiciel = document.querySelectorAll('.logiciel');
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    const caseelement = document.querySelectorAll('.case');
    const cercle = document.querySelectorAll('.cercle-about');
    const texte = document.querySelector('.texte-about');
    const qualite = document.querySelectorAll('.qualite');
    const propos = document.querySelector('#propos');


    icon.addEventListener('click', function () {
        icon.classList.toggle('nuit');
        icon.classList.toggle('jour');
        if (icon.classList.contains('jour')) {
            pages.forEach(function (page) {
                page.classList.add('clair');
            });
            h2.forEach(function (h2) {
                h2.classList.add('clair');
            });
            h4.forEach(function (h4) {
                h4.classList.add('clair');
            });
            menu_bouton.forEach(function (menu_bouton) {
                menu_bouton.classList.add('menu-clair');
            });
            logiciel.forEach(function (logiciel) {
                logiciel.classList.add('menu-clair');
            });
            caseelement.forEach(function (caseelement) {
                caseelement.classList.add('element-clair');
            });
            cercle.forEach(function (cercle) {
                cercle.classList.add('element-clair');
            });
            qualite.forEach(function (qualite) {
                qualite.classList.add('texte-fonce');
            });
            header.classList.add('clair');
            menu.classList.add('menu-clair');
            front.classList.add('menu-clair');
            back.classList.add('menu-clair');
            texte.classList.add('menu-clair');
            propos.classList.add('bouton_clair')
        } else {
            pages.forEach(function (page) {
                page.classList.remove('clair');
            });
            h2.forEach(function (h2) {
                h2.classList.remove('clair');
            });
            h4.forEach(function (h4) {
                h4.classList.remove('clair');
            });
            menu_bouton.forEach(function (menu_bouton) {
                menu_bouton.classList.remove('menu-clair');
            });
            logiciel.forEach(function (logiciel) {
                logiciel.classList.remove('menu-clair');
            });
            caseelement.forEach(function (caseelement) {
                caseelement.classList.remove('element-clair');
            });
            cercle.forEach(function (cercle) {
                cercle.classList.remove('element-clair');
            });
            qualite.forEach(function (qualite) {
                qualite.classList.remove('texte-fonce');
            });
            header.classList.remove('clair');
            menu.classList.remove('menu-clair');
            front.classList.remove('menu-clair');
            back.classList.remove('menu-clair');
            texte.classList.remove('menu-clair');
            propos.classList.remove('bouton_clair')
        }
    });

    // Vérifier l'état initial de l'icône pour définir l'état de la page
    if (icon.classList.contains('jour')) {
        pages.forEach(function (page) {
            page.classList.add('clair');
        });
    } else {
        pages.forEach(function (page) {
            page.classList.remove('clair');
        });
    }
});
