// ------------------------ menu --------------------------------

let menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active'); // Toggle the active class on the menu icon

    if (menuIcon.classList.contains('active')) {
        menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Replace menu icon with cross icon
    } else {
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Replace cross icon with menu icon
    }

    navbar.classList.toggle('active'); // Toggle the active class on the navbar
});



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu i");
    const cross = document.querySelector(".cross i");
    let ho1 = document.querySelector("#ho1"); // Select the element to toggle

    menuIcon.addEventListener("click", function () {
        console.log("Menu icon clicked");
        ho1.style.display = "block"; // Display the element when menu icon is clicked
    });

    cross.addEventListener("click", function () {
        ho1.style.display = "none"; // Hide the element when cross icon is clicked
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
ScrollReveal().reveal('', { origin: 'right' });


