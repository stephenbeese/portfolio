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