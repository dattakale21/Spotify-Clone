// Toggle menu icon and element with ID "ho1"
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu1 i");
    const cross = document.querySelector(".cross1 i");
    let ho1 = document.querySelector("#ho1"); // Select the element to toggle

    menuIcon.addEventListener("click", function () {
        if (ho1.style.display === "block") {
            ho1.style.display = "none"; // Hide the element when menu icon is clicked
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Replace cross icon with menu icon
        } else {
            ho1.style.display = "block"; // Display the element when menu icon is clicked
            menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Replace menu icon with cross icon
            menuIcon.classList.remove('.menu1 i');
        }
    });

    cross.addEventListener("click", function () {
        ho1.style.display = "none"; // Hide the element when cross icon is clicked
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Replace cross icon with menu icon
    });
});


// ------------------------------ Scroll Reveal(Animation) ---------------------------------------

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1800,
    delay: 110
});


ScrollReveal().reveal('.container h1,#ho li a', { origin: 'top' });
ScrollReveal().reveal('.container,#foot h2', { origin: 'bottom' });
ScrollReveal().reveal('.brand', { origin: 'left' });
ScrollReveal().reveal('.dropbtn', { origin: 'right' });
