document.addEventListener("DOMContentLoaded", function() {

    // Lógica para o menu ativo
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop();
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add("active");
        }
    });

    // --- NOVO CÓDIGO PARA O FORMULÁRIO DO WHATSAPP ---
    
    // Encontra o formulário pelo ID que demos a ele
    const whatsappForm = document.getElementById("whatsapp-form");

    if (whatsappForm) {
        whatsappForm.addEventListener("submit", function(event) {
            // Previne o envio padrão do formulário
            event.preventDefault();

            // !! IMPORTANTE: Substitua este número pelo WhatsApp da sua equipe !!
            // Formato: DDI + DDD + Número (tudo junto, sem + ou -)
            const numeroWhatsapp = "5517981419419"; // Exemplo: 5517991234567

            // Pega os dados dos campos
            const nome = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("message").value;

            // Formata a mensagem
            let textoMensagem = `Olá, Techguines! Meu nome é *${nome}*.\n\n${mensagem}`;
            
            // Adiciona o email se ele foi preenchido
            if (email) {
                textoMensagem += `\n\n(Meu e-mail para contato: ${email})`;
            }

            // Codifica a mensagem para a URL
            const textoCodificado = encodeURIComponent(textoMensagem);

            // Cria o link do WhatsApp
            const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;

            // Abre o link em uma nova aba
            window.open(linkWhatsapp, "_blank");
        });
    }
});

// ───────────────────────────────
// 👻 GhostShib | Code in Shadows ⚡
// Build it. Break it. Rebuild it.
// ───────────────────────────────
