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


// By Datta kale 



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

// --------------------------- Feedback Databasee --------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyr_GyFqVo1pO6yYfJk-6sK6lqd-f0JGFI-wPdsxDWqaRuUOskJBF_T1CBv6BjKu6snxg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});

// ------------------------------ Scroll Reveal(Animation) ---------------------------------------

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1800,
    delay: 110
});


ScrollReveal().reveal('.container h1,#ho li a', { origin: 'top' });
ScrollReveal().reveal('#da,#foot h2', { origin: 'bottom' });
ScrollReveal().reveal('.options label,.brand', { origin: 'left' });
ScrollReveal().reveal('#reason, #star, #suggestion', { origin: 'right' });

