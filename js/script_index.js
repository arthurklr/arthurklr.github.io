document.querySelectorAll(".element").forEach(e => {
    e.addEventListener("click", () => {
        // Retirer la classe 'lien-actif' de tous les éléments
        document.querySelectorAll(".element").forEach(el => {
            el.classList.remove('lien-actif');
        });
        // Ajouter la classe 'lien-actif' à l'élément cliqué
        e.classList.add('lien-actif');
    });
});

