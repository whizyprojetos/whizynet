# 🚀 WHIZYNET - Gerador Profissional de SNI

**WHIZYNET** é um gerador profissional de SNI (Server Name Indication) com tema dark moderno, desenvolvido por **Whizy Safary** para acesso rápido e seguro a SNIs válidas para múltiplos operadores em África e internacionalmente.

**Website**: [whizynet.tech](https://whizynet.tech)

---

## ✨ Características

- ✅ **Design Dark Profissional** - Tema preto e azul corporativo
- ✅ **HTML/CSS/JavaScript Puro** - Sem dependências externas
- ✅ **Listas Markdown** - SNIs organizadas em formato markdown
- ✅ **Copiar Todos** - Botão para copiar todos os hosts de uma vez
- ✅ **Seleção em Cascata** - País → Operador → SNIs
- ✅ **Otimizado para SEO** - Meta tags, schema.org, sitemap
- ✅ **Responsivo** - Funciona em desktop, tablet e mobile
- ✅ **Países Africanos** - Angola, Moçambique, Nigéria, Quénia, África do Sul
- ✅ **SNIs Válidas** - Dados testados e atualizados

---

## 📁 Estrutura de Arquivos

```
whizynet-vanilla/
├── index.html          # HTML com SEO otimizado
├── styles.css          # CSS dark theme (preto/azul)
├── script.js           # JavaScript vanilla
├── data.js             # Dados de SNI por país/operador
├── logo.png            # Logo do site (adicione seu)
├── favicon.png         # Favicon (adicione seu)
└── README.md           # Este arquivo
```

---

## 🚀 Como Usar

### Opção 1: Abrir Direto no Navegador

1. Descompacte o arquivo ZIP
2. Abra `index.html` no navegador
3. Selecione país e operador

### Opção 2: Servidor Local (Recomendado)

#### Python 3:
```bash
cd whizynet-vanilla
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

#### Node.js:
```bash
cd whizynet-vanilla
npx http-server
```

#### PHP:
```bash
cd whizynet-vanilla
php -S localhost:8000
```

### Opção 3: Termux (Android)

```bash
pkg install python3
cd ~/whizynet-vanilla
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

---

## 🎨 Design

### Paleta de Cores
- **Primária**: `#3b82f6` (Azul)
- **Primária Escura**: `#1e40af` (Azul Escuro)
- **Accent**: `#0ea5e9` (Ciano)
- **Background**: `#0f172a` (Preto)
- **Surface**: `#1a2332` (Preto Claro)
- **Texto**: `#f1f5f9` (Branco)

### Tipografia
- **Display**: Outfit (800 weight)
- **Body**: Outfit (400, 500, 600)
- **Monospace**: JetBrains Mono (para SNIs)

---

## 📊 Países e Operadores

### África
- **Angola**: Unitel, Movicel, Zap
- **Moçambique**: Vodacom, Mcel, Tmcel
- **Nigéria**: MTN, Airtel, Glo
- **Quénia**: Safaricom, Airtel
- **África do Sul**: Vodacom, MTN

### Europa
- **Portugal**: MEO, Vodafone, NOS
- **França**: Orange, SFR, Bouygues
- **Alemanha**: Deutsche Telekom, Vodafone, O2
- **Reino Unido**: BT, Virgin Media, Sky

### Américas
- **Brasil**: Vivo, Claro, OI
- **Estados Unidos**: Verizon, AT&T, Comcast

---

## 🔧 Personalização

### Adicionar Logo

1. Crie um arquivo `logo.png` (recomendado: 50x50px)
2. Coloque na pasta `whizynet-vanilla/`
3. O site carregará automaticamente

### Adicionar Favicon

1. Crie um arquivo `favicon.png` (recomendado: 32x32px)
2. Coloque na pasta `whizynet-vanilla/`
3. O site carregará automaticamente

### Adicionar Mais Países

Edite `data.js` e adicione à variável `SNI_DATA`:

```javascript
const SNI_DATA = {
    "Seu País": {
        "Operador 1": [
            "sni1.com",
            "sni2.com",
            "sni3.com"
        ],
        "Operador 2": [
            "sni4.com",
            "sni5.com"
        ]
    }
};
```

### Mudar Cores

Edite `styles.css` e altere as variáveis CSS:

```css
:root {
    --primary: #3b82f6;      /* Cor primária */
    --accent: #0ea5e9;       /* Cor de destaque */
    --background: #0f172a;   /* Fundo */
    --text-primary: #f1f5f9; /* Texto */
}
```

### Mudar Tipografia

Edite `index.html` e altere as fontes Google:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

---

## 📱 Responsividade

| Breakpoint | Largura | Ajustes |
|-----------|---------|---------|
| Mobile | < 480px | Fonte reduzida, layout adaptado |
| Tablet | 480px - 768px | Layout responsivo |
| Desktop | > 768px | Layout completo |

---

## 🔍 SEO

O site inclui:
- ✅ Meta tags descritivas
- ✅ Open Graph para redes sociais
- ✅ Schema.org structured data
- ✅ Canonical URL
- ✅ Robots meta tag
- ✅ Keywords otimizadas

---

## 🐛 Solução de Problemas

### Página em branco ao abrir
**Solução**: Use um servidor local (veja opção 2 acima)

### Botão de copiar não funciona
**Solução**: Use HTTPS ou localhost (Clipboard API requer contexto seguro)

### Animações lentas
**Solução**: Desative extensões do navegador, verifique performance

### Logo/Favicon não aparece
**Solução**: Coloque os arquivos PNG na pasta `whizynet-vanilla/`

---

## 📊 Compatibilidade

| Navegador | Versão | Suporte |
|-----------|--------|---------|
| Chrome | 60+ | ✅ Total |
| Firefox | 55+ | ✅ Total |
| Safari | 12+ | ✅ Total |
| Edge | 79+ | ✅ Total |
| Opera | 47+ | ✅ Total |
| IE 11 | - | ❌ Não suportado |

---

## 📝 Notas Técnicas

### Performance
- Tamanho total: ~44 KB (não comprimido)
- Carregamento rápido (< 1s em conexão normal)
- Sem requisições externas (exceto Google Fonts)

### Segurança
- Sem acesso a dados sensíveis
- Sem rastreamento ou cookies
- Funciona completamente no cliente

### Acessibilidade
- Contraste adequado (WCAG AA)
- Navegação por teclado
- Labels semânticas

---

## 🎯 Próximos Passos

1. **Adicionar mais SNIs** aos operadores
2. **Implementar busca** para filtrar SNIs
3. **Criar API** para integração
4. **Adicionar histórico** de SNIs usadas
5. **Implementar temas** (light/dark)

---

## 📞 Suporte

**Desenvolvido por**: Whizy Safary  
**Website**: whizynet.tech  
**Email**: contact@whizynet.tech

---

## 📄 Licença

Projeto de código aberto. Sinta-se livre para usar, modificar e distribuir.

---

**Versão**: 2.0.0 | **Data**: Janeiro 2025 | **Status**: Profissional ✓

