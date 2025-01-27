function loadHTML(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(id);
            element.innerHTML = data;

            // Execute inline scripts in the loaded content
            const scripts = element.querySelectorAll('script');
            for (const script of scripts) {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                    newScript.async = false; // Preserve execution order
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
            }

            // Trigger callback if provided
            if (typeof callback === "function") {
                callback();
            }
        })
        .catch(error => console.error(`Error loading HTML: ${error.message}`));
}


// Load the dynamic components
loadHTML("footer", "src/component/Footer.html");
loadHTML("card", "src/component/insuranceCard.html");
loadHTML("feature", "src/component/Feature.html");
loadHTML("navbar", "src/component/NavBar.html");
loadHTML("selectPolicy", "src/component/selectPolicy.html");

loadHTML("StartQuotes", "src/component/StartMyQuote.html", function () {
    // Add event listeners after the content is loaded
    const openModal = document.getElementById('openModal');
    const popupModal = document.getElementById('popupModal');
    const closeModal = document.getElementById('closeModal');
    const continueButton = document.getElementById("continueButton");

    if (openModal && popupModal) {
        openModal.addEventListener('click', () => {
            console.log("Open Modal clicked");
            popupModal.classList.remove('hidden');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            popupModal.classList.add('hidden');
        });
    }

    // Close modal when clicking outside
    if (popupModal) {
        popupModal.addEventListener('click', (e) => {
            if (e.target === popupModal) {
                popupModal.classList.add('hidden');
            }
        });
    }

    if (continueButton) {
        continueButton.addEventListener("click", () => {
            window.location.href = "src/step1.html";
        });
    }
});