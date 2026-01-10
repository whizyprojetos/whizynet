/**
 * WHIZYNET - Banco de Dados de Tutoriais
 * Adicione novos tutoriais aqui seguindo a estrutura abaixo.
 */

const TUTORIALS_DATA = [
    {
        id: "como-configurar-si-connect",
        title: "Como configurar Si Connect",
        category: "SI CONNECT",
        date: "10 Jan 2026",
        author: "Whizy Safary",
        excerpt: "Aprenda o passo a passo de como configurar o Si Connect para ter internet grátis ilimitada.",
        content: `
            <p>Si é um dos aplicativos actualmente popular para internet grátis Ilimitada. Neste tutorial, vamos focar na configuração do aplicativo</p>
            <h3>Requisitos:</h3>
            <ul>
                <li>Aplicativo Si Connect (Versão Original Play Store).</li>
                <li>Saldo de dados mínimo ou wifi (apenas para actualizar os servidores).</li>
            </ul>
            <h3>Passo a Passo:</h3>
            <p>1. Abra o Si Connect e vá para as o menu lateral, clique em 'Servidores'.</p>
            <p>2. Selecione um dos Servidores disponíveis.</p>
            <p>3. Volte para tela inicial e clique em 'Adicionar Tempo' (1 moeda por padrão)</p>
            <p>4. Com essa moeda padrão você pode trocar por 1 hora.</p>
            <p>5. Volte na tela principal e clique em 'iniciar' para a vpn conectar</p>
            <blockquote class="tutorial-quote">Dica: Você pode ganhar mais moedas assistindo anúncios e trocando por mais tempo <br> Se não conectar, Mude de Servidor.</blockquote>
        `,
        image: "https://i.ibb.co/gZWG8TFh/siconnect.jpg?w=800&auto=format&fit=crop&q=120"
    },
    {
        id: "como-criar-arquivo-http-injector-ssl-tls",
        title: "Como criar arquivo no HTTP Injector (TLS/SSL)",
        category: "HTTP INJECTOR",
        date: "10 Jan 2026",
        author: "Whizy Safary",
        excerpt: "Aprenda o passo a passo de como configurar o seu HTTP Injector para ter internet grátis ilimitada.",
        content: `
            <p>HTTP Injector é um dos aplicativos mais estáveis para o uso de túneis VPN. Neste tutorial, vamos focar na configuração do método Tls/Ssl com servidores do aplicativo.</p>
            <h3>Requisitos:</h3>
            <ul>
                <li>Aplicativo HTTP Injector instalado (Versão Original Play Store).</li>
                <li>Uma SNI válida (veja a nossa lista na página inicial).</li>
                <li>Saldo de dados mínimo ou wifi (apenas para actualizar os servidores).</li>
            </ul>
            <h3>Passo a Passo:</h3>
            <p>1. Abra o HTTP Injector e vá para as configurações de túnel.</p>
            <p>2. Selecione o modo 'TLS/SSL (stunnel)'.</p>
            <p>3. No campo Server Name Indication (SNI), insira uma das SNIs que você copiou do nosso gerador.<br> E na versão do 'TLS' escolha um (Recomendo TLSv1.3)</p>
            <p>4. Depois Clique no menu lateral e clique em Servidores, escolha um servidor que suporte o 'SSH'.</p>
            <p>5. Depois Clique no botão 'Iniciar' deslize para leteral direito nos registros para ver os precedimentos até o texto 'Vpn Estabelecida' e uma notificação no seu celular 'conectado'</p>
            <blockquote class="tutorial-quote">Dica: Se não conectar de primeira, Mude entre Servidores ou tente alternar entre o modo avião para renovar o seu IP.</blockquote>
        `,
        image: "https://i.ibb.co/7xq6jVJ5/httpinjectorssl-tls.jpg?w=800&auto=format&fit=crop&q=120"
    },
    
];
