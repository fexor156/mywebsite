// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    // Check if the form exists before adding the event listener
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get input values
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            // Validate input fields
            if (name === "" || email === "" || message === "") {
                formMessage.textContent = "Please fill out all fields.";
                formMessage.style.color = "red";
                return;
            }

            // Simple email validation
            if (!validateEmail(email)) {
                formMessage.textContent = "Please enter a valid email address.";
                formMessage.style.color = "red";
                return;
            }

            // Sending email via EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };

            emailjs.send("service_nn8jbak", "template_1si5c3b", templateParams)
                .then(function (response) {
                    formMessage.textContent = "Message sent successfully!";
                    formMessage.style.color = "green";
                    contactForm.reset();
                }, function (error) {
                    formMessage.textContent = "Failed to send message. Please try again.";
                    formMessage.style.color = "red";
                });
        });
    }

    // Function to validate email format
    function validateEmail(email) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Mobile menu toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu) {
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

                // Close the mobile menu after clicking
                if (navLinks.classList.contains("nav-active")) {
                    navLinks.classList.remove("nav-active");
                }
            });
        });
    }

    // Back to Top button
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Animations on scroll
    const sections = document.querySelectorAll(".animate__animated");
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("animate__fadeInUp");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();

    // Hide preloader when the page loads
    window.addEventListener("load", function () {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.display = "none";
        }
    });

    // Initialize EmailJS
    emailjs.init("T7_XmzKIYe15KGPXM"); // Replace with your actual EmailJS Public Key
});
