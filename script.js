document.addEventListener("DOMContentLoaded", () => {
    // Toggle navigation menu
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

   
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        contactForm.reset();
    });
});
