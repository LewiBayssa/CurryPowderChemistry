window.onload = function () {
    // Mobile Nav
    var navigation = document.querySelector(".header-nav")
    var mobileNavButton = document.getElementById("mobile-menu-button")
    var mobileNavMenu = document.getElementById("mobile-menu")

    mobileNavButton.addEventListener('click', function () {
        if (mobileNavMenu.style.display === 'none' || mobileNavMenu.style.display === '') {
            mobileNavMenu.style.display = 'block';
            navigation.style.background = 'var(--clr-background)';
            mobileNavButton.innerHTML = "Close Menu";
        } else {
            mobileNavMenu.style.display = 'none';
            navigation.style.background = 'linear-gradient(var(--clr-background), var(--clr-background-transparent))';
            mobileNavButton.innerHTML = "Menu";
        }
    });

    // Eligibility Section
    var eligibilityButton = document.querySelector(".eligibility-button")
    var eligibilitySection = document.querySelector(".eligibility-section")
    eligibilityButton.addEventListener('click', function () {
        if (eligibilitySection.style.display === 'none' || eligibilitySection.style.display === '') {
            eligibilitySection.style.display = 'block';
            eligibilityButton.innerHTML = "Close Eligibility";
        } else {
            eligibilitySection.style.display = 'none';
            eligibilityButton.innerHTML = "Eligibility";
        }
    });

    // Tax Calculation
    const savingsInput = document.getElementById('savings-input'); // initialamountinput
    const savingsButton = document.getElementById('savings-button'); // calculatediscountbutton
    const savingsResult = document.querySelector(".savings-new-tax"); // discountedtaxeselement
    const savingsResultElement = document.querySelector(".savings-discount")

    // Define a function to calculate and display the discounted taxes
    function calculateAndDisplayDiscount() {
        // Get the user's input from the input element
        const userInput = savingsInput.value;
        // Check if the user input is a valid number
        if (!isNaN(userInput)) {
            savingsResultElement.style.display = "block"
            // Convert the user input to a number
            const initialTaxAmount = parseFloat(userInput);
            // Calculate the 30% discount
            let discountedTaxAmount = initialTaxAmount;
            // Set the initial display value
            savingsResult.textContent = `$${discountedTaxAmount.toFixed(2)}`;
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
                savingsResult.textContent = `$${discountedTaxAmount.toFixed(2)}`;
            }
            // Update the ticking number every 1000 milliseconds (1 second)
            const tickingInterval = setInterval(updateTickingNumber, 8);
        } else {
            savingsResultElement.style.display = "none"
            alert('Invalid input. Please enter a valid number.');
        }
    }
    // Add a click event listener to the button
    savingsButton.addEventListener('click', calculateAndDisplayDiscount);
};

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