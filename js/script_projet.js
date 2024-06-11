// Fetch JSON data
fetch('json/data_projet.json')
    .then(response => response.json())
    .then(data => {
        const buttonsContainer = document.getElementById('buttons');
        const projectInfoContainer = document.getElementById('project-info');

        // Function to create buttons
        function createButton(project) {
            const button = document.createElement('button');
            button.textContent = project.titre_projet;
            button.addEventListener('click', () => displayProjectInfo(project));
            return button;
        }

        // Function to display projects
        function showProjects(projects) {
            // Clear previous project info
            projectInfoContainer.innerHTML = '';

            // If only one project, display its info directly
            if (Object.keys(projects).length === 1) {
                const projectKey = Object.keys(projects)[0];
                const project = projects[projectKey];
                displayProjectInfo(project);
            } else {
                // If multiple projects, create buttons to choose from
                for (const projectKey in projects) {
                    const project = projects[projectKey];
                    const button = createButton(project);
                    buttonsContainer.appendChild(button);
                }
            }
        }

        // Function to display project information
        function displayProjectInfo(project) {
            projectInfoContainer.innerHTML = `
                <h2>${project.titre_projet}</h2>
                <p>${project.description}</p>
                <p>Langages utilisés : ${project.langage}</p>
                <p>Apprentissage : ${project.apprentissage}</p>
            `;
        }

        // Create buttons for each category
        for (const category in data) {
            const projects = data[category];
            if (Object.keys(projects).length === 1) {
                // If only one project, directly display its info
                const projectKey = Object.keys(projects)[0];
                const project = projects[projectKey];
                const button = createButton(project);
                buttonsContainer.appendChild(button);
            } else {
                // If multiple projects, create a button for the category
                const button = document.createElement('button');
                button.textContent = category;
                button.addEventListener('click', () => showProjects(projects));
                buttonsContainer.appendChild(button);
            }
        }
    })
    .catch(error => console.error('Error fetching data:', error));
