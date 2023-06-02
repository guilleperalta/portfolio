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
        // let top = window.scrollY;
        let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        let anchoViewport = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let offset = anchoViewport < 700 ? sec.offsetTop - 400 : sec.offsetTop - 300;
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

// Funcion para cambiar los colores de toda la pagina
let darkModeToggle = document.querySelector('#darkModeToggle');
let root = document.documentElement;
let darkMode = true;
darkModeToggle.addEventListener('click', ()=>{
    if (darkMode){
        root.style.setProperty('--bg-color', '#e5e5e5');
        root.style.setProperty('--second-bg-color', '#efefef');
        root.style.setProperty('--text-color', '#121212');
        root.style.setProperty('--main-color', '#00638b');
        darkMode = !darkMode;
    }else{
        root.style.setProperty('--bg-color', '#081b29');
        root.style.setProperty('--second-bg-color', '#112e42');
        root.style.setProperty('--text-color', '#ededed');
        root.style.setProperty('--main-color', '#00abf0');
        darkMode = !darkMode;
    }
});