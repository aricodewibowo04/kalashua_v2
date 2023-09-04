const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.navbar_toggler');
const toggleBtnIcon = document.querySelector('.navbar_toggler i');
const sidebarMenu = document.querySelector('.navbar_sidebar');
const btnTop = document.getElementById('btn-top');
const navLinks = document.querySelector('.navbar_item li a');

// toggle btn function
toggleBtn.onclick = function() {
    sidebarMenu.classList.toggle('open')
    const isOpen = sidebarMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa fa-xmark'
    : 'fa fa-bars'
}

// remove navbar sidebar when it cicked

document.addEventListener('click', function(e) {
    if(!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
        sidebarMenu.classList.remove('open');
        // close the dropdown menu
        toggleBtnIcon.className= "fa fa-bars";
    }
}) 



// btn top function

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.bottom = "2rem";
        navbar.style.top = "0";
    } else {
        btnTop.style.bottom = "-2.5rem";
        navbar.style.top = "-88px";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0;// for chrome etc
}