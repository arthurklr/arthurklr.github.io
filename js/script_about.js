// Charger les données JSON à partir d'un fichier externe
fetch('json/data_about.json')
    .then(response => response.json())
    .then(data => {
        // Sélectionner l'élément avec la classe "timeline"
        var timelineElement = document.querySelector('.timeline');

        // Parcourir chaque événement dans le tableau de données JSON
        data.timeline.forEach(function (event) {
            // Créer un élément div pour le cercle
            var circleElement = document.createElement('div');
            circleElement.classList.add('cercle-about');

            // Créer un élément h3 pour l'année
            var yearElement = document.createElement('h3');
            yearElement.textContent = event.year;
            circleElement.appendChild(yearElement);

            // Créer un élément img pour l'image
            var imageElement = document.createElement('img');
            imageElement.src = event.content.image;
            imageElement.alt = '';
            circleElement.appendChild(imageElement);

            // Créer un élément p pour le texte
            var textElement = document.createElement('p');
            textElement.textContent = event.content.text;
            circleElement.appendChild(textElement);

            // Ajouter le cercle à la timeline
            timelineElement.appendChild(circleElement);

            // Ajouter une barre entre les cercles, sauf pour le dernier
            if (event !== data.timeline[data.timeline.length - 1]) {
                var barElement = document.createElement('div');
                barElement.classList.add('barre-about');
                timelineElement.appendChild(barElement);
            }
        });

    })
    .catch(error => console.error('Erreur lors du chargement des données JSON :', error));


