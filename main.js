const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
   hamburger.classList.toogle('active')
    navUL.classList.toggle('active');
});
