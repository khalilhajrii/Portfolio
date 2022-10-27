const navbar = document.querySelector('.bg-light');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};