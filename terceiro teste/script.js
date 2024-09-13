window.addEventListener('scroll', function() {
    const nav = document.querySelector('header nav');
    const triggerHeight = window.innerHeight * 0.53; // 55% da altura da tela

    if (window.scrollY > triggerHeight) {
        nav.style.backgroundColor = 'black';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Pega o ID do link clicado
        const target = document.querySelector(targetId); // Seleciona o elemento de destino
        const navHeight = document.querySelector('nav').offsetHeight; // Altura do menu

        // Calcula a posição do target e subtrai a altura do nav
        const targetPosition = target.offsetTop - navHeight;

        // Faz a rolagem suave até a posição ajustada
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


