// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const contactForm = document.getElementById("contactForm");

    // Check if the form exists before adding the event listener
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission (page refresh)

            // Get input values
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            // Validate input fields
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                return;
            }

            // Simple email validation
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Simulate sending a message
            alert("Thank you, " + name + "! Your message has been sent.");
            
            // Clear the form
            contactForm.reset();
        });
    }
});

// Function to validate email format
function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu
    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });

    // Smooth scrolling for menu links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset if needed
                    behavior: "smooth"
                });
            }

            // Close the mobile menu after clicking (on mobile)
            if (navLinks.classList.contains("nav-active")) {
                navLinks.classList.remove("nav-active");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const backToTop = document.getElementById("backToTop");

    // Toggle mobile menu
    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });

    // Smooth scrolling for menu links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }

            // Close mobile menu after clicking a link
            if (navLinks.classList.contains("nav-active")) {
                navLinks.classList.remove("nav-active");
            }
        });
    });

    // Show/hide "Back to Top" button
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    // Scroll to top when button is clicked
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animate__animated");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8; // Adjust when the animation starts

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add("animate__fadeInUp");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once when page loads
});
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});
