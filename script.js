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

    // Function to update the scroll progress bar
    function updateScrollProgressBar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', updateScrollProgressBar);

    // Call the function to initialize the scroll progress bar
    updateScrollProgressBar();
});
