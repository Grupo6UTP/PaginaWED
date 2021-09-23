document.querySelector('.menu-btn').addEventListener('click', ()=>{document.querySelector('.nav-menu').classList.toggle('show')})

scrollReveal().reveal('.principal');
scrollReveal().reveal('.varios',{delay: 500});
scrollReveal().reveal('.social',{delay: 500});
scrollReveal().reveal('.Pie-contactos',{delay: 500});