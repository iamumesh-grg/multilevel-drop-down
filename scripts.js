const navSlide = () => {
    const button = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');

    button.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        button.classList.toggle('toggle');
    });
}

navSlide();