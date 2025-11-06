document.addEventListener("DOMContentLoaded", function() {

    // Lógica para o menu ativo
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop();
        
        // Adiciona classe 'active' se o href for igual à página atual
        // Trata o caso da 'index.html' que pode ser a raiz '/'
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add("active");
        }
    });

});




/*
───────────────────────────────
👻 GhostShib | Code in Shadows ⚡
Build it. Break it. Rebuild it.
───────────────────────────────
*/
