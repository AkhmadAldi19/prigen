//efect scroll dengan class efectscroll
window/addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("efectsscroll",window.scrollY > 0);
});

// dropdown
function hamburger(){
    const hamburger= document.querySelector('.hamburger');
    const navigasi= document.querySelector('.navigasi');
    hamburger.classList.toggle('active');
    navigasi.classList.toggle('active');
}