document.addEventListener("DOMContentLoaded", function () {

    // Get the menu links
    const menuLinks = document.querySelectorAll(
        'body > section:first-of-type .cybercrime-types a'
    );

    // Get all main content sections
    const contentSections = document.querySelectorAll(
        'body > section:not(:first-of-type)'
    );

    // Hide all content sections initially
    contentSections.forEach(function (section) {
        section.style.display = "none";
    });

    // Show a section when its menu link is clicked
    menuLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            // Get target ID from href
            const targetId = this.getAttribute("href");

            // Hide every content section
            contentSections.forEach(function (section) {
                section.style.display = "none";
            });

            // Find the requested section
            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                // The target is an article inside the section
                const parentSection = targetSection.closest("section");

                if (parentSection) {
                    parentSection.style.display = "block";
                }

                // Smoothly move to the content
                setTimeout(function () {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 50);
            }

            // Mark the selected menu item
            menuLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });

});