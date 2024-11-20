// // Function to load and inject HTML into the page
// async function loadComponent(filePath) {
//     const response = await fetch(filePath);
//     if (!response.ok) {
//         console.error(`Failed to load ${filePath}: ${response.statusText}`);
//         return "";
//     }
//     return await response.text();
// }

// // Dynamically load and append all components
// async function loadPage() {
//     const app = document.getElementById("app");

//     // Load components
//     const navbarHTML = await loadComponent("../comonents/Navbar/Navbar.html");
//     console.log(navbarHTML);
//     const heroHTML = await loadComponent("../comonents/Hero/Hero.html");
//     const skillsetHTML = await loadComponent("../comonents/skillset/skillset.html");
//     const contactHTML = await loadComponent("../comonents/Contact/contact.html");
//     const footerHTML = await loadComponent("../comonents/Footer/footer.html");
//     const aboutHTML = await loadComponent("../comonents/Aboutus/Aboutus.html");

//     // Append components to the app container
//     app.innerHTML = `
//         ${navbarHTML}
//         ${heroHTML}
//         ${skillsetHTML}
//         ${aboutHTML}
//         ${contactHTML}
//         ${footerHTML}
//     `;
// }

// // Load the page content
// loadPage();


document.addEventListener('DOMContentLoaded', 
    function jkl() {
    fetch('../comonents/Navbar/Navbar.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.nav-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});

document.addEventListener('DOMContentLoaded', 
    function jkl() {
    fetch('../comonents/Hero/Hero.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.hero-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});

document.addEventListener('DOMContentLoaded', 
    function jkl() {
    fetch('../comonents/skillset/skillset.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.skill-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});


document.addEventListener('DOMContentLoaded', 
    function jkl() {
    fetch('../comonents/Contact/Contact.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.contact-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});

document.addEventListener('DOMContentLoaded', 
    function jkl() {
    fetch('../comonents/Footer/Footer.html')
        .then(response => response.text())
        .then(data => {
        
            document.querySelector('.footer-item').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});