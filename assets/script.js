// Icono navbar Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Scroll a secciones
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // animaciones para la seccion activa
            sec.classList.add('show-animated');
        }else{
            sec.classList.remove('show-animated');
        }
    });

    // stick header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // quitar icono y navbar al hacer click en los links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animacion para el footer
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animated', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}