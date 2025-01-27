// Select elements
const menuButton = document.getElementById('menuButton');
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// // Ensure sidebar and overlay are hidden on load
window.addEventListener('DOMContentLoaded', () => {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    menuIcon.classList.remove('change');
    document.documentElement.classList.remove('no-scroll');
});



// Toggle sidebar, overlay, and blur effect
menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('translate-x-full'); // Show/hide sidebar
    overlay.classList.toggle('hidden'); // Show/hide overlay
    menuIcon.classList.toggle('change'); // Toggle menu icon animation
    document.documentElement.classList.toggle('no-scroll'); // Prevent background scroll
      // Ensure secondary sidebar is closed when menu button is clicked
      secondarySidebar.classList.add('translate-x-full');
});

// Close sidebar and overlay when clicking the overlay
overlay.addEventListener('click', function () {
    sidebar.classList.add('translate-x-full'); // Hide sidebar
    overlay.classList.add('hidden'); // Hide overlay
    menuIcon.classList.remove('change'); // Reset menu icon
    document.documentElement.classList.remove('no-scroll'); // Re-enable b  ackground scroll
});


// Select additional elements
const secondarySidebar = document.getElementById('secondarySidebar');
const insuranceContent = document.getElementById('insuranceContent');
const informationContent = document.createElement('div');

// Create content for the Information section
informationContent.id = "informationContent";
informationContent.classList.add("p-4");
informationContent.innerHTML = '<p class="text-xl">This is the Information content.</p>';

// Function to show the Secondary Sidebar with appropriate content
function showSecondarySidebar(contentType) {
    secondarySidebar.classList.remove('translate-x-full'); // Show secondary sidebar

    // Clear current content and show the appropriate one
    if (contentType === 'Insurance') {
        insuranceContent.style.display = 'block';
        if (informationContent.parentNode) {
            informationContent.parentNode.removeChild(informationContent);
        }
    } else if (contentType === 'Information') {
        insuranceContent.style.display = 'none';
        secondarySidebar.appendChild(informationContent);
    }
}

// Function to go back to the primary sidebar
function goBackToPrimarySidebar() {
    secondarySidebar.classList.add('translate-x-full'); // Hide secondary sidebar
}

// Modify the overlay click handler to close both sidebars
overlay.addEventListener('click', function () {
    sidebar.classList.add('translate-x-full'); // Hide primary sidebar
    overlay.classList.add('hidden'); // Hide overlay
    menuIcon.classList.remove('change'); // Reset menu icon
    document.documentElement.classList.remove('no-scroll'); // Re-enable background scroll
    secondarySidebar.classList.add('translate-x-full'); // Hide secondary sidebar
});

// Dark mode

// Apply the saved theme immediately before the page fully loads
(function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateIcons();
})();

function updateIcons() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    const sunIcon = document.getElementById("sunIcon");
    const moonIcon = document.getElementById("moonIcon");

    if (isDarkMode) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }
}

function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
    // Save the user's preference to localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    updateIcons(); // Update the icons dynamically
}

// Set up event listeners on page load
window.onload = function () {
    const themeSwitcher = document.getElementById("themeSwitcherTwo");
    if (themeSwitcher) {
        themeSwitcher.checked = document.body.classList.contains("dark-mode");
        themeSwitcher.addEventListener("change", myFunction);
    }
};


window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    console.log('Header Position:', header.getBoundingClientRect().top);
});




