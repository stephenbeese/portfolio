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
