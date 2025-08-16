document.addEventListener('DOMContentLoaded', () => {
    const discoverButton = document.getElementById('discover-button');
    const userInputSection = document.getElementById('user-input');
    const userForm = document.getElementById('user-form');
    const parallelProfileSection = document.getElementById('parallel-profile');

    discoverButton.addEventListener('click', () => {
        document.getElementById('hero').classList.add('hidden');
        userInputSection.classList.remove('hidden');
    });

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        userInputSection.classList.add('hidden');

        // Placeholder for AI/logic layer
        const parallelLife = generateParallelLife();

        displayParallelProfile(parallelLife);
        parallelProfileSection.classList.remove('hidden');
    });

    function generateParallelLife() {
        // This is a placeholder. In a real application, this would involve a call to an AI service.
        const personas = ["a traveling guitarist in Berlin", "a renowned chef in Paris", "a tech innovator in Silicon Valley", "a marine biologist in the Great Barrier Reef"];
        const randomPersona = personas[Math.floor(Math.random() * personas.length)];

        return {
            title: "Your Parallel Self",
            description: `In a parallel world, you are ${randomPersona}. You spend your days exploring your passion and living a life full of adventure and creativity.`
        };
    }

    function displayParallelProfile(parallelLife) {
        parallelProfileSection.innerHTML = `
            <div class="parallel-card">
                <h3>${parallelLife.title}</h3>
                <p>${parallelLife.description}</p>
                <button id="share-button">Share Your Parallel Self</button>
            </div>
            <div id="return-triggers">
                <h4>Discover another timeline...</h4>
                <button class="trigger-button">What if you moved abroad?</button>
                <button class="trigger-button">What if you followed your childhood dream?</button>
            </div>
        `;

        // Add event listeners for new buttons if needed
    }
});

