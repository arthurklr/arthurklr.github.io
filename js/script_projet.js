document.addEventListener("DOMContentLoaded", function() {
    // Charger le fichier JSON
    fetch('js/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON : ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            // Créer les boutons pour chaque projet
            const saeButton = document.createElement('button');
            saeButton.textContent = 'SAE';
            saeButton.addEventListener('click', () => {
                window.location.href = 'projet.html?titre=SAE';
            });

            const messagerieButton = document.createElement('button');
            messagerieButton.textContent = 'Messagerie en ligne';
            messagerieButton.addEventListener('click', () => {
                window.location.href = 'projet.html?titre=Messagerie%20en%20ligne';
            });

            // Ajouter les boutons à la page
            document.getElementById('buttons-container').appendChild(saeButton);
            document.getElementById('buttons-container').appendChild(messagerieButton);
        })
        .catch(error => console.error(error));
});
