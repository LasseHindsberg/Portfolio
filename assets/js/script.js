const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('header__nav--active')
     // animate links
     navLinks.forEach((link,index) =>{
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        };
        
    });

   

    });
}

navSlide();