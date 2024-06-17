document.addEventListener("DOMContentLoaded", () => {
    fetch('json/data_projet.json')
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.querySelector('.projet');

            data.forEach(project => {
                // Create the link element
                const link = document.createElement('a');
                link.href = `projet.html?categorie=${project.id}`;

                // Create the category div
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'categorie';
                categoryDiv.id = project.id;

                // Create the span for the text
                const span = document.createElement('span');
                span.className = 'text';
                span.textContent = project.name;

                // Append span to category div
                categoryDiv.appendChild(span);

                // Append category div to link
                link.appendChild(categoryDiv);

                // Append link to project container
                projectContainer.appendChild(link);
            });
        })
        .catch(error => console.error('Error fetching project data:', error));
});
