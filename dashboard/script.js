window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("sideBar").addEventListener("mouseover", () => {
        $(".option-name").css("display", "inline");
        $(".option-name").css("animation", "1.5s ease displayNameAnimations");
    });

    document.getElementById("sideBar").addEventListener("mouseout", () => {
        $(".option-name").css("animation", "0.4s linear removeNameAnim");
        $(".option-name").css("display", "none");

    })
});


// Get elements
const gridIcon = document.querySelector('.grid-icon');
const floatingTerminal = document.querySelector('.floating-terminal');

// Show the terminal with a dropdown effect and fade out the 9-dot pattern slowly
gridIcon.addEventListener('mouseenter', () => {
    floatingTerminal.style.display = 'flex';
    setTimeout(() => {
        floatingTerminal.style.opacity = '1';
        floatingTerminal.style.transform = 'translateY(10px)'; // Drop down effect
    }, 200); // Small delay to trigger the transition

    gridIcon.style.opacity = '0'; // Slowly fade out the 9-dot pattern
    setTimeout(() => {
        gridIcon.style.display = 'none'; // Hide the 9-dot pattern after fading out
    }, 500); // Adjust the timing as needed
}) ;

// Keep the terminal visible when the user hovers over it
floatingTerminal.addEventListener('mouseenter', () => {
    floatingTerminal.style.display = 'flex';``
});

// Hide the terminal and show the 9-dot pattern slowly when clicking anywhere outside
document.addEventListener('click', (event) => {
    if (!gridIcon.contains(event.target) && !floatingTerminal.contains(event.target)) {
        floatingTerminal.style.opacity = '0'; // Fade out the terminal
        floatingTerminal.style.transform = 'translateY(-10px)'; // Move the terminal up slightly
        setTimeout(() => {
            floatingTerminal.style.display = 'none';
        }, 30000); // Adjust the timing as needed

        gridIcon.style.display = 'grid'; // Show the 9-dot pattern again
        setTimeout(() => {
            gridIcon.style.opacity = '1'; // Slowly fade in the 9-dot pattern
        }, 50); // Start the fade-in after the display is set to grid
    }
});
