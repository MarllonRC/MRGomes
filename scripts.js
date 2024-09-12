// Função para exibir a mensagem de boas-vindas
function showWelcomeMessage() {
    // Obtém o elemento com o ID 'welcome-message'
    const welcomeMessage = document.getElementById('welcome-message');
    
    // Verifica se o elemento foi encontrado
    if (welcomeMessage) {
        // Exibe a mensagem definindo seu estilo de exibição como 'block'
        welcomeMessage.style.display = 'block';
        
        // Define um temporizador para ocultar a mensagem após 5 segundos (5000 milissegundos)
        setTimeout(() => {
            welcomeMessage.style.display = 'none'; // Oculta a mensagem
        }, 5000); // A mensagem desaparecerá após 5 segundos
    }
}

// Função para alternar a visibilidade do menu de navegação
function toggleMenu() {
    // Seleciona o elemento <nav> dentro do <header>
    const nav = document.querySelector('header nav');
    
    // Verifica se o elemento foi encontrado
    if (nav) {
        // Alterna a classe 'active' no menu de navegação
        nav.classList.toggle('active');
    }
}

// Adiciona um listener ao botão de menu para alternar a visibilidade do menu
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
// Quando o botão com a classe 'menu-toggle' é clicado, a função 'toggleMenu' é chamada

// Exibe a mensagem de boas-vindas quando a página é carregada
window.addEventListener('load', showWelcomeMessage);
// Quando a janela (página) é carregada, a função 'showWelcomeMessage' é chamada
