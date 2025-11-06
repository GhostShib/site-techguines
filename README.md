🤖 Site Techguines - Equipe de Robótica
Site profissional e moderno para a equipe de robótica Techguines, desenvolvido com HTML5, CSS3 e JavaScript puro.
📁 Estrutura de Arquivos
techguines/
│
├── index.html          # Página inicial
├── sobre.html          # Página sobre a equipe
├── projetos.html       # Página de projetos
├── portfolio.html      # Página de portfólio
├── integrantes.html    # Página de integrantes
├── contato.html        # Página de contato
├── style.css           # Arquivo CSS principal
├── script.js           # Arquivo JavaScript
└── README.md           # Este arquivo
🚀 Como Usar
Instalação

Baixe todos os arquivos e coloque na mesma pasta
Não é necessário instalar nenhuma dependência
Abra o arquivo index.html em seu navegador

Configurações Necessárias
1. Links do Google Drive (portfolio.html)
Substitua seu-link-aqui pelos links reais das pastas do Google Drive:
html<!-- Exemplo de como deve ficar -->
<a href="https://drive.google.com/drive/folders/1ABC123DEF456" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="btn-portfolio">
    Acessar Pasta
</a>
Como obter o link da pasta do Google Drive:

Abra a pasta no Google Drive
Clique em "Compartilhar"
Configure como "Qualquer pessoa com o link"
Copie o link e cole no código

2. Instagram da Equipe (contato.html)
Substitua pelo handle correto do Instagram:
html<a href="https://www.instagram.com/SEU_INSTAGRAM_AQUI" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="contact-link">
3. E-mail Oficial (contato.html)
Substitua pelo e-mail oficial da equipe:
html<a href="mailto:seu-email@dominio.com" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="contact-link">
4. Formulário Formspree
O formulário já está configurado com o endpoint fornecido:
html<form action="https://formspree.io/f/mvgwdzok" method="POST">
Se precisar alterar:

Acesse formspree.io
Crie uma conta gratuita
Crie um novo formulário
Copie o endpoint e substitua no código

🎨 Personalização
Cores
As cores principais estão definidas no CSS e podem ser alteradas:
css/* Gradiente de fundo */
background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);

/* Cor principal (roxo/azul) */
color: #667eea;

/* Cor de destaque (dourado) */
color: #ffd700;

/* Gradiente dos botões */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
Fontes
O site usa a fonte Poppins do Google Fonts. Para mudar:
css@import url('https://fonts.googleapis.com/css2?family=SuaFonte:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'SuaFonte', sans-serif;
}
Integrantes da Equipe (integrantes.html)
Para adicionar ou remover membros:
html<div class="team-member">
    <img src="URL_DA_FOTO" alt="Nome" class="member-photo">
    <h3 class="member-name">Nome Completo</h3>
    <p class="member-role">Cargo/Função</p>
</div>
Projetos (projetos.html)
Para adicionar novos projetos:
html<div class="project-card">
    <img src="URL_DA_IMAGEM" alt="Descrição" class="project-image">
    <div class="project-content">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição do projeto...</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
🌐 Hospedagem
Opção 1: GitHub Pages (Grátis)

Crie um repositório no GitHub
Faça upload de todos os arquivos
Vá em Settings > Pages
Selecione a branch main
Seu site estará em: https://seu-usuario.github.io/nome-do-repo

Opção 2: Netlify (Grátis)

Acesse netlify.com
Arraste a pasta com os arquivos
Pronto! Seu site estará online

Opção 3: Vercel (Grátis)

Acesse vercel.com
Importe o projeto
Deploy automático

📱 Responsividade
O site é totalmente responsivo e funciona em:

💻 Desktop (1920px+)
💻 Laptop (1366px - 1920px)
📱 Tablet (768px - 1366px)
📱 Mobile (320px - 768px)

✨ Funcionalidades

✅ Design moderno com glassmorphism
✅ Animações suaves ao rolar a página
✅ Menu fixo com destaque de página ativa
✅ Formulário funcional integrado com Formspree
✅ Links externos abrem em nova aba
✅ Efeitos hover em todos os elementos interativos
✅ Gradiente animado no fundo
✅ Elementos flutuantes decorativos
✅ Totalmente responsivo
✅ Performance otimizada
✅ Sem dependências externas

🔧 Tecnologias Utilizadas

HTML5
CSS3 (Animações, Gradientes, Flexbox, Grid)
JavaScript Vanilla (ES6+)
Google Fonts (Poppins)
Formspree (Formulário de contato)

📝 Licença
© 2024 Equipe Techguines. Todos os direitos reservados.
💡 Suporte
Para dúvidas ou sugestões:

📧 E-mail: contato@techguines.com
📱 Instagram: @techguines


Desenvolvido com ❤️ para a Equipe Techguines



<!-- ─────────────────────────────── -->
<!-- 👻 GhostShib | Code in Shadows ⚡ -->
<!-- Build it. Break it. Rebuild it. -->
<!-- ─────────────────────────────── -->
