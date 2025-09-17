// Get all the caption content elements
var captionContents = document.querySelectorAll(".caption-content");

// Add event listeners to each portfolio item
document.querySelectorAll('.portfolio-item').forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
        // Show the caption content with a fade-in effect
        captionContents[index].style.display = "block";
        captionContents[index].style.opacity = 1;
    });

    item.addEventListener("mouseout", function () {
        // Hide the caption content when not hovered
        captionContents[index].style.display = "none";
    });
});



// Contact form

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Send the form data to Formspree
        fetch("https://formspree.io/stephenbeese1@live.co.uk", {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // The email was sent successfully
                alert("Your message has been sent. Thank you!");
                contactForm.reset();
            } else {
                // There was an error
                alert("There was an error. Please try again later.");
            }
        });
    });
});


// Fade-up on scroll using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view'); // REMOVE CLASS WHEN OUT OF VIEW
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

// Project dropdown button
let projects_dropdown = document.getElementById("projects-dropdown")

projects_dropdown.addEventListener("click", function() {
    // When project dropdown is clicked change inner HTML
    if (projects_dropdown.innerHTML.includes('fa-caret-up')) {
        projects_dropdown.innerHTML = 'Other Projects <i class="fa-solid fa-caret-down"></i>'
        return
    }
    projects_dropdown.innerHTML = 'Close Projects <i class="fa-solid fa-caret-up"></i>'
})

// Auto update year for copyright

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});