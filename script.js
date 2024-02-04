// Mobile Nav

window.onload = function () {
    var navigation = document.querySelector(".header-nav")
    var mobileNavButton = document.getElementById("mobile-menu-button")
    var mobileNavMenu = document.getElementById("mobile-menu")
    mobileNavMenu.style.display = 'none'

    mobileNavButton.addEventListener('click', function () {
        if (mobileNavMenu.style.display === 'none') {
            mobileNavMenu.style.display = 'block';
            navigation.style.background = 'var(--clr-background)';
            mobileNavButton.innerHTML = "Close Menu";
        } else {
            mobileNavMenu.style.display = 'none';
            navigation.style.background = 'linear-gradient(var(--clr-background), var(--clr-background-transparent))';
            mobileNavButton.innerHTML = "Menu";
        }
    });
}


// Progress Bar

document.addEventListener('scroll', function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    // Find the 'myBar' element and update its width if it exists.
    var myBar = document.getElementById("progress-bar");
    if (myBar) {
        myBar.style.width = scrolled + "%";
    }
});


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

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const eligibilityContainer = document.getElementById('eligibility-container');

    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the eligibility container
        if (eligibilityContainer.style.display === 'none' || eligibilityContainer.style.display === '') {
            eligibilityContainer.style.display = 'block';
        } else {
            eligibilityContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const discountedTaxesElement = document.getElementById('discounted-taxes');
    const initialAmountInput = document.getElementById('initial-amount');
    const calculateDiscountButton = document.getElementById('calculate-discount');

// Define a function to calculate and display the discounted taxes
    function calculateAndDisplayDiscount() {
    // Get the user's input from the input element
        const userInput = initialAmountInput.value;

    // Check if the user input is a valid number
        if (!isNaN(userInput)) {
        // Convert the user input to a number
            const initialTaxAmount = parseFloat(userInput);

        // Calculate the 30% discount
            let discountedTaxAmount = initialTaxAmount;

        // Set the initial display value
            discountedTaxesElement.textContent = `$${discountedTaxAmount.toFixed(2)}`;

        // Define a function to update and display the ticking number
        function updateTickingNumber() {
            if (discountedTaxAmount > 0.71 * initialTaxAmount) {
                discountedTaxAmount -= 100;
            } else if (discountedTaxAmount > 0.7058 * initialTaxAmount) {
                discountedTaxAmount -= 10;
            } else if (discountedTaxAmount > 0.7001 * initialTaxAmount) {
                discountedTaxAmount -= 1; 
            } else if (discountedTaxAmount > 0.70 * initialTaxAmount) {
                discountedTaxAmount -= 0.01;
            } else {
                clearInterval(tickingInterval);
            }
            discountedTaxesElement.textContent = `$${discountedTaxAmount.toFixed(2)}`;
        }
        
        

        // Update the ticking number every 1000 milliseconds (1 second)
            const tickingInterval = setInterval(updateTickingNumber, 8);
        } else {
            alert('Invalid input. Please enter a valid number.');
        }
    }

// Add a click event listener to the button
    calculateDiscountButton.addEventListener('click', calculateAndDisplayDiscount);
});
