// WHIZYNET - Script Principal
// Gerador Profissional de SNI

// ==========================================
// Elementos do DOM
// ==========================================

const countrySelect = document.getElementById('country-select');
const operatorSelect = document.getElementById('operator-select');
const operatorGroup = document.getElementById('operator-group');
const generateBtn = document.getElementById('generate-btn');
const loadingDiv = document.getElementById('loading');
const resultsSection = document.getElementById('results-section');
const resultsContainer = document.getElementById('results-container');
const resultsInfo = document.getElementById('results-info');
const emptyState = document.getElementById('empty-state');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// ==========================================
// Inicialização
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    populateCountries();
    setupEventListeners();
});

// ==========================================
// Funções Principais
// ==========================================

/**
 * Popula o dropdown com países
 */
function populateCountries() {
    const countries = Object.keys(SNI_DATA).sort();
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

/**
 * Configura os event listeners
 */
function setupEventListeners() {
    countrySelect.addEventListener('change', handleCountryChange);
    operatorSelect.addEventListener('change', handleOperatorChange);
    generateBtn.addEventListener('click', handleGenerate);
}

/**
 * Manipula a mudança de país
 */
function handleCountryChange() {
    const selectedCountry = countrySelect.value;
    
    if (!selectedCountry) {
        operatorGroup.style.display = 'none';
        generateBtn.disabled = true;
        resetResults();
        return;
    }
    
    const operators = Object.keys(SNI_DATA[selectedCountry]).sort();
    
    // Limpar operadores anteriores
    operatorSelect.innerHTML = '<option value="">Selecione um operador...</option>';
    
    // Adicionar novos operadores
    operators.forEach(operator => {
        const option = document.createElement('option');
        option.value = operator;
        option.textContent = operator;
        operatorSelect.appendChild(option);
    });
    
    operatorGroup.style.display = 'block';
    generateBtn.disabled = true;
    resetResults();
}

/**
 * Manipula a mudança de operador
 */
function handleOperatorChange() {
    const selectedOperator = operatorSelect.value;
    generateBtn.disabled = !selectedOperator;
}

/**
 * Manipula o clique no botão de gerar
 */
function handleGenerate() {
    const selectedCountry = countrySelect.value;
    const selectedOperator = operatorSelect.value;
    
    if (!selectedCountry || !selectedOperator) {
        showToast('Por favor, selecione um país e operador', 'error');
        return;
    }
    
    // Simular carregamento
    generateBtn.disabled = true;
    loadingDiv.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    emptyState.classList.add('hidden');
    
    setTimeout(() => {
        // Abrir link da Monetag antes de mostrar resultados
        window.open('https://otieu.com/4/10442403', '_blank');
        
        displayResults(selectedCountry, selectedOperator);
        generateBtn.disabled = false;
        loadingDiv.classList.add('hidden');
    }, 600);
}

/**
 * Exibe os resultados de SNI em formato markdown
 */
function displayResults(country, operator) {
    const snis = SNI_DATA[country][operator];
    
    if (!snis || snis.length === 0) {
        emptyState.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        return;
    }
    
    resultsContainer.innerHTML = '';
    resultsSection.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    // Atualizar informações
    resultsInfo.textContent = `${country} • ${operator} • ${snis.length} SNIs`;
    
    // Criar card com listas markdown
    const card = createResultCard(operator, snis);
    resultsContainer.appendChild(card);
}

/**
 * Cria um card de resultado com listas markdown
 */
function createResultCard(operator, snis) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    // Título do operador
    const operatorTitle = document.createElement('div');
    operatorTitle.className = 'result-operator';
    operatorTitle.textContent = operator;
    
    // Container para SNIs
    const sniContent = document.createElement('div');
    sniContent.className = 'sni-content';
    
    // Criar lista markdown
    let markdownList = '';
    snis.forEach(sni => {
        markdownList += `- ${sni}\n`;
    });
    
    // Exibir como código pré-formatado
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.textContent = markdownList;
    preElement.appendChild(codeElement);
    
    sniContent.appendChild(preElement);
    
    // Botão copiar todos
    const copyAllBtn = document.createElement('button');
    copyAllBtn.className = 'copy-all-btn';
    copyAllBtn.innerHTML = ' Copiar Todos os Hosts';
    copyAllBtn.addEventListener('click', () => copyAllSNIs(snis, operator));
    
    // Montar card
    card.appendChild(operatorTitle);
    card.appendChild(sniContent);
    card.appendChild(copyAllBtn);
    
    return card;
}

/**
 * Copia todos os SNIs para o clipboard
 */
function copyAllSNIs(snis, operator) {
    let markdownList = `# SNIs - ${operator}\n\n`;
    snis.forEach(sni => {
        markdownList += `- ${sni}\n`;
    });
    
    navigator.clipboard.writeText(markdownList).then(() => {
        showToast(`✓ ${snis.length} hosts copiados para clipboard!`, 'success');
    }).catch(() => {
        showToast('Erro ao copiar', 'error');
    });
}

/**
 * Mostra notificação toast
 */
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.classList.remove('hidden', 'error');
    
    if (type === 'error') {
        toast.classList.add('error');
    }
    
    // Animar entrada
    toast.style.animation = 'none';
    setTimeout(() => {
        toast.style.animation = 'slideInUp 0.3s ease-out';
    }, 10);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

/**
 * Reseta os resultados
 */
function resetResults() {
    resultsSection.classList.add('hidden');
    emptyState.classList.add('hidden');
    resultsContainer.innerHTML = '';
}

// ==========================================
// Animações ao Scroll
// ==========================================

/**
 * Observador para animar elementos ao entrar na viewport
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de resultado quando forem criados
const observeResultCards = () => {
    document.querySelectorAll('.result-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
};

// Chamar após exibir resultados
const originalDisplayResults = displayResults;
displayResults = function(country, operator) {
    originalDisplayResults(country, operator);
    setTimeout(observeResultCards, 100);
};

// ==========================================
// Efeitos de Clique
// ==========================================

document.addEventListener('click', (e) => {
    // Efeito ripple no botão
    if (e.target.closest('.btn')) {
        const btn = e.target.closest('.btn');
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        const rect = btn.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Adicionar animação ripple ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
