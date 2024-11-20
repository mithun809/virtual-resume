// Function to load and inject HTML into the page
async function loadComponent(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
        console.error(`Failed to load ${filePath}: ${response.statusText}`);
        return "";
    }
    return await response.text();
}

// Dynamically load and append all components
async function loadPage() {
    const app = document.getElementById("app");

    // Load components
    const navbarHTML = await loadComponent("../comonents/Navbar/Navbar.html");
    console.log(navbarHTML);
    const heroHTML = await loadComponent("../comonents/Hero/Hero.html");
    const skillsetHTML = await loadComponent("../comonents/skillset/skillset.html");
    const contactHTML = await loadComponent("../comonents/Contact/contact.html");
    const footerHTML = await loadComponent("../comonents/Footer/footer.html");
    const aboutHTML = await loadComponent("../comonents/Aboutus/Aboutus.html");

    // Append components to the app container
    app.innerHTML = `
        ${navbarHTML}
        ${heroHTML}
        ${skillsetHTML}
        ${aboutHTML}
        ${contactHTML}
        ${footerHTML}
    `;
}

// Load the page content
loadPage();
