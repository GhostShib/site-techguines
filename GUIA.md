🎨 Guia Completo de Customização - Site Techguines
🖼️ Como Adicionar Imagens Próprias
Fotos dos Integrantes
Recomendações:

Tamanho: 300x300px (mínimo)
Formato: JPG ou PNG
Peso: menos de 200KB por imagem
Fundo: preferencialmente neutro ou uniforme

Opções de hospedagem de imagens:

Imgur (Gratuito)

Acesse: https://imgur.com
Faça upload da imagem
Copie o link direto
Use no HTML: <img src="LINK_DO_IMGUR">


PostImage (Gratuito)

Acesse: https://postimages.org
Upload e copie o "Direct link"


CloudFlare Images (Gratuito até 100k imagens)

Melhor performance
CDN global



Fotos dos Projetos
Use serviços como Unsplash, Pexels ou Pixabay para imagens de alta qualidade e gratuitas relacionadas a robótica.
Como usar:
html<!-- Exemplo com Unsplash -->
<img src="https://images.unsplash.com/photo-ID?w=600&h=400&fit=crop" 
     alt="Descrição" 
     class="project-image">
🎯 Personalizando Conteúdo
Página Inicial (index.html)
Mudar o slogan:
html<p class="hero-slogan">"Seu novo slogan aqui"</p>
Alterar destaques:
html<div class="highlight-card">
    <div class="highlight-icon">🎯</div> <!-- Emoji personalizado -->
    <h3>Seu Título</h3>
    <p>Sua descrição</p>
</div>
Página Sobre (sobre.html)
Adicionar mais conquistas:
html<li>Nova conquista da equipe</li>
Adicionar mais valores:
html<li><strong>Seu Valor:</strong> Descrição do valor</li>
Página de Projetos (projetos.html)
Estrutura de um novo projeto:
html<div class="project-card">
    <img src="URL_DA_IMAGEM" alt="Nome do Projeto" class="project-image">
    <div class="project-content">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">
            Descrição detalhada do que o projeto faz, 
            tecnologias utilizadas e resultados obtidos.
        </p>
        <div class="project-tags">
            <span class="tag">Tecnologia 1</span>
            <span class="tag">Tecnologia 2</span>
            <span class="tag">Área</span>
        </div>
    </div>
</div>
🎨 Mudando o Esquema de Cores
Opção 1: Esquema Azul/Roxo (Atual)
css/* Cores principais atuais */
--primary: #667eea;
--secondary: #764ba2;
--accent: #f093fb;
Opção 2: Esquema Verde/Azul (Tecnológico)
cssbackground: linear-gradient(135deg, #0cebeb, #20e3b2, #29ffc6);
/* Trocar em: body { background } */

.nav-link.active {
    background: linear-gradient(135deg, #20e3b2 0%, #29ffc6 100%);
}
Opção 3: Esquema Laranja/Vermelho (Energético)
cssbackground: linear-gradient(135deg, #ff6b6b, #ee5a6f, #c44569);

.hero-title {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 50%, #feca57 100%);
}
Opção 4: Esquema Escuro Minimalista
cssbackground: linear-gradient(135deg, #000000, #1a1a1a, #2d2d2d);

.highlight-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
🔧 Ajustes de Performance
Otimizar Imagens
Antes de fazer upload:

Redimensione para o tamanho necessário
Comprima usando: https://tinypng.com
Converta para WebP (melhor performance): https://cloudconvert.com

No HTML:
html<img src="imagem.webp" 
     alt="Descrição" 
     loading="lazy"> <!-- Carregamento preguiçoso -->
Minificar CSS e JS
Use ferramentas online:

CSS: https://cssminifier.com
JS: https://javascript-minifier.com

Depois salve como style.min.css e script.min.js e atualize os links no HTML.
📱 Testando em Dispositivos Móveis
Usando o Chrome DevTools

Pressione F12 no Chrome
Clique no ícone de dispositivo móvel (ou Ctrl+Shift+M)
Teste em diferentes resoluções:

iPhone SE (375x667)
iPhone 12 (390x844)
iPad (768x1024)
Desktop (1920x1080)



Ferramentas Online

Responsinator: http://www.responsinator.com
BrowserStack: https://www.browserstack.com

🌐 SEO - Otimização para Buscadores
Adicionar Meta Tags
Em cada arquivo HTML, adicione dentro do <head>:
html<!-- Meta Tags Básicas -->
<meta name="description" content="Equipe Techguines - Robótica educacional e inovação tecnológica">
<meta name="keywords" content="robótica, FLL, tecnologia, educação, STEM">
<meta name="author" content="Equipe Techguines">

<!-- Open Graph (para compartilhar no Facebook) -->
<meta property="og:title" content="Techguines - Equipe de Robótica">
<meta property="og:description" content="Inovação, Tecnologia e Trabalho em Equipe">
<meta property="og:image" content="https://i.postimg.cc/KRSKfbfs/logo.png">
<meta property="og:url" content="https://seusite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Techguines - Equipe de Robótica">
<meta name="twitter:description" content="Construindo o futuro, um robô por vez">
<meta name="twitter:image" content="https://i.postimg.cc/KRSKfbfs/logo.png">

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
Criar Favicon

Use https://favicon.io para gerar
Faça upload da logo da equipe
Baixe os arquivos gerados
Coloque na pasta do site

🔒 Segurança e Boas Práticas
Links Externos Seguros
Sempre use em links externos:
html<a href="https://site-externo.com" 
   target="_blank" 
   rel="noopener noreferrer">
Proteção de E-mail
Para evitar spam, use codificação:
html<!-- Ao invés de: mailto:contato@techguines.com -->
<a href="mailto:&#99;&#111;&#110;&#116;&#97;&#116;&#111;&#64;&#116;&#101;&#99;&#104;&#103;&#117;&#105;&#110;&#101;&#115;&#46;&#99;&#111;&#109;">
Use: https://www.email-encoder.com
📊 Analytics - Monitorar Visitantes
Google Analytics (Gratuito)

Crie uma conta em https://analytics.google.com
Obtenha seu código de acompanhamento
Adicione antes do </head>:

html<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
🎥 Adicionando Vídeos
YouTube
html<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
💬 Adicionando Chat/WhatsApp
Botão do WhatsApp
Adicione antes do </body>:
html<a href="https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site!" 
   class="whatsapp-float" 
   target="_blank"
   rel="noopener noreferrer">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
</a>

<style>
.whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #25d366;
    padding: 15px;
    border-radius: 50%;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
    z-index: 1000;
    transition: all 0.3s ease;
}

.whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(37, 211, 102, 0.7);
}
</style>
🚀 Checklist Antes de Publicar

 Todas as imagens estão carregando
 Links do Google Drive atualizados
 Instagram e e-mail corretos
 Formulário testado e funcionando
 Site testado em mobile
 Meta tags adicionadas
 Favicon criado e adicionado
 Conteúdo revisado (sem erros de português)
 Todas as páginas funcionando
 Links externos abrem em nova aba


Dúvidas? Consulte a documentação ou entre em contato!


<!-- ─────────────────────────────── -->
<!-- 👻 GhostShib | Code in Shadows ⚡ -->
<!-- Build it. Break it. Rebuild it. -->
<!-- ─────────────────────────────── -->
