const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
const totalImages = images.length;
let index = 0;
let slideIndex = 0;
showSlides();

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

document.addEventListener('DOMContentLoaded', () => {
    const goalItems = document.querySelectorAll('.goal-item');

    goalItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all goal items
            goalItems.forEach(el => {
                if (el !== item) { // Ensure that the clicked item is not affected
                    el.classList.remove('active');
                }
            });

            // Toggle 'active' class on the clicked goal item
            item.classList.toggle('active');
        });
    });
});


function showSlides() {
    const slides = document.querySelector('.slides');
    const slidesArray = Array.from(slides.getElementsByClassName('slide'));
    if (slideIndex >= slidesArray.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slidesArray.length - 1;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}