// Populate category list with ajax
// implement form validation as well

let url = 'https://backend.getlinked.ai/hackathon/categories-list';

const nav = document.querySelector('.pri-nav');
const navToggle = document.querySelector(".mob-nav-toggle");

navToggle.addEventListener('click', () => {
    const vis = nav.getAttribute("data-visible");

    if (vis === "false") {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        nav.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded', false);
    }
});