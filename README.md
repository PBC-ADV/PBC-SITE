# Pessoa, Braz e Carneiro Advocacia — Site

Site institucional (single-page) em **HTML + CSS + JavaScript puro**, em 6 idiomas
(PT, EN, FR, ES, DE, IT). Não precisa de build nem de servidor: basta abrir o
`index.html` no navegador, ou publicar a pasta inteira em qualquer hospedagem estática.

## Arquivos

| Arquivo        | O que contém                                                              |
| -------------- | ------------------------------------------------------------------------- |
| `index.html`   | Estrutura e todo o estilo (CSS) do site                                   |
| `app.js`       | Lógica: idioma, menu, render de áreas/equipe/artigos, formulário          |
| `data.js`      | Dados editáveis: equipe, imagens, **artigos** e **ID do Formspree**       |
| `i18n.js`      | Traduções dos 6 idiomas                                                   |
| `favicon.svg`  | Ícone da aba do navegador                                                  |

## Como publicar um artigo

Os artigos são **lidos dentro do próprio site**: o visitante clica no card e abre
uma página de leitura (`index.html#artigo/<slug>`), com o mesmo visual do site, sem
sair para fora. Para publicar, abra `data.js` e adicione um objeto ao array
`PBC_ARTICLES`:

```js
window.PBC_ARTICLES = [
  {
    slug: 'reforma-tributaria-o-que-muda',          // obrigatório — vira o endereço do artigo
    title: 'A Reforma Tributária e o que muda',     // obrigatório
    excerpt: 'Resumo curto que aparece no card.',    // opcional
    coverUrl: 'https://.../capa.jpg',                // opcional (capa)
    author: 'Guilherme Carneiro',                    // opcional
    date: '2026-05-31',                              // opcional (AAAA-MM-DD)
    content: `Primeiro parágrafo do texto.

## Um subtítulo

Outro parágrafo, com **negrito**, *itálico* e [um link](https://exemplo.com).

- item de lista
- outro item

> Uma citação em destaque.`
  }
];
```

**Campos:** só `slug`, `title` e `content` são obrigatórios; o resto aparece apenas
se preenchido. O `slug` deve ter só letras minúsculas, números e hífens (sem espaços
nem acentos) — é ele que forma o endereço do artigo.

**Formatação do `content`:** linha em branco separa parágrafos · `## ` vira
subtítulo · `- ` vira lista · `> ` vira citação · `**negrito**` · `*itálico*` ·
`[texto](https://...)` vira link (use `[texto](#contato)` para rolar até uma seção
da página).

Salve e publique. Com a lista vazia (`[]`), a seção mostra "Nenhum artigo publicado no momento.".

> **Observação sobre o idioma:** o texto do artigo fica no idioma em que você
> escreveu (português). Os rótulos ao redor — "Voltar aos artigos", a data, "Por" —
> se traduzem automaticamente conforme o idioma do site.

## Como ativar o envio do formulário

O formulário já funciona: sem configuração, ao enviar ele abre o aplicativo de e-mail
do visitante com a mensagem pronta (para `contato@pbc.adv.br`).

Para receber os contatos direto no e-mail (sem abrir o app do visitante):

1. Crie um formulário gratuito em [formspree.io](https://formspree.io) apontando para `contato@pbc.adv.br`.
2. Copie o ID (final da URL `https://formspree.io/f/XXXXXXXX`).
3. Em `data.js`, cole o ID em `window.PBC_FORMSPREE_ID = 'XXXXXXXX';`.

## Onde editar o conteúdo

- **Textos / traduções:** `i18n.js` (um bloco por idioma)
- **Equipe (fotos e cargos):** `data.js` → `PBC_TEAM`
- **Equipe (nomes e bios):** `i18n.js` → `team.members`
- **Imagens das faixas e vídeo do topo:** `data.js` → `PBC_ASSETS`
