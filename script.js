document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and initiative boxes container
    const toggleButton = document.getElementById('toggle-button');
    const initiativeContainer = document.getElementById('initiative-container');

    // Initially hide the initiative container
    initiativeContainer.style.display = 'none';

    // Add click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the initiative container
        if (initiativeContainer.style.display === 'none' || initiativeContainer.style.display === '') {
            initiativeContainer.style.display = 'flex';
        } else {
            initiativeContainer.style.display = 'none';
        }
    });
});
