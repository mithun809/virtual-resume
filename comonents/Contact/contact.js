document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission
        successMessage.classList.remove("hidden");
        form.reset(); // Reset the form fields
    });
});
