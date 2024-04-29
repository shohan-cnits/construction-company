document.addEventListener('scroll', () => {
    const  header = document.querySelector('header');

    if (window.scrollY > 300 ) {
        header.classList.add('scrolled'); 
    }
   
    else {
        header.classList.remove('scrolled');
    }
});