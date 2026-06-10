/* PBC — assets & team meta (names/bios come from i18n) */
window.PBC_ASSETS = {
  logo: 'https://i.postimg.cc/NfD7TQrP/logo_pbc.png',
  heroVideo: 'https://res.cloudinary.com/dcx5wpggp/video/upload/q_auto,vc_h264,c_limit,w_1920,ac_none/v1781052431/PBC_SITE_8_1_wxjhjv.mp4',
  heroPoster: 'https://i.postimg.cc/GhH8QqBG/PBC-W-BG-3-2-1.png',
  office: [
    { url: 'https://i.postimg.cc/RhBp8dzf/Whats-App-Image-2026-06-06-at-20-35-35.jpg', pos: '50% 50%' },
    { url: 'https://i.postimg.cc/Bb07ypGL/Whats-App-Image-2026-06-06-at-20-31-48.jpg', pos: '50% 50%' },
    { url: 'https://i.postimg.cc/qqTDYwd2/Whats-App-Image-2026-06-06-at-20-31-30.jpg', pos: '50% 50%' },
    { url: 'https://i.postimg.cc/WzvYK8PZ/Whats-App-Image-2026-06-06-at-20-30-05.jpg', pos: '50% 50%' }
  ]
};

// role keys map to i18n team.roles.*
window.PBC_TEAM = [
  { img: 'https://i.postimg.cc/9Qh9KNw3/457A1884.jpg', role: 'founder' },
  { img: 'https://i.postimg.cc/28vvHfyC/457A1705.jpg', role: 'founder' },
  { img: 'https://i.postimg.cc/tCPPrHJq/Gemini_Generated_Image_yx4v6dyx4v6dyx4v.png', role: 'founder' },
  { img: 'https://i.postimg.cc/yY99fzdw/457A2300.jpg', role: 'associate' },
  { img: 'https://i.postimg.cc/bNbb6jrz/457A2140.jpg', role: 'associate' },
  { img: 'https://i.postimg.cc/qMnnmdRF/457A2098.jpg', role: 'associate' },
  { img: 'https://i.postimg.cc/1566WZtj/457A2200.jpg', role: 'intern' },
  { img: 'https://i.postimg.cc/MKRRs8Hx/457A2405.jpg', role: 'intern' },
  { img: 'https://i.postimg.cc/sDSSnRX8/457A2238.jpg', role: 'intern' }
];

window.PBC_ROLE_ORDER = ['founder', 'associate', 'intern'];

/*
 * ARTIGOS — lista local. O leitor abre e lê o artigo DENTRO do próprio site.
 *
 * COMO PUBLICAR UM ARTIGO:
 *   Adicione um objeto ao array abaixo. Salve o arquivo e publique. Os cards
 *   aparecem na ordem listada. Com a lista vazia ([]), a seção mostra
 *   automaticamente "Nenhum artigo publicado no momento.".
 *
 * CAMPOS:
 *   slug      (obrigatório) Identificador do artigo na URL. Use só letras
 *             minúsculas, números e hífens — sem espaços nem acentos.
 *             Ex.: 'reforma-tributaria-o-que-muda'
 *   title     (obrigatório) Título do artigo.
 *   content   (obrigatório) Texto do artigo. Veja a formatação abaixo.
 *   excerpt   (opcional) Resumo de 1–2 linhas. Aparece no card e no topo do artigo.
 *   coverUrl  (opcional) Imagem de capa (card + topo do artigo).
 *   author    (opcional) Quem escreveu. Ex.: 'Guilherme Carneiro'.
 *   date      (opcional) Data no formato 'AAAA-MM-DD'. Ex.: '2026-05-31'.
 *             É exibida por extenso e traduzida conforme o idioma do site.
 *
 * COMO ESCREVER O 'content' (formatação simples):
 *   - Separe parágrafos com uma LINHA EM BRANCO.
 *   - Subtítulo: comece a linha com "## ".
 *   - Lista: comece cada linha com "- ".
 *   - Citação em destaque: comece a linha com "> ".
 *   - Negrito: **texto**     Itálico: *texto*
 *   - Link: [texto do link](https://...)  — use [texto](#contato) p/ rolar até uma seção.
 *
 * Para virar este exemplo num rascunho vazio, troque tudo por:  window.PBC_ARTICLES = [];
 */
window.PBC_ARTICLES = [
  {
    slug: 'cumulacao-multas-carf-tema-487',
    title: 'O fim da cumulação de multas no CARF: o que mudou com o Tema 487 do STF',
    excerpt: 'A 1ª Turma da CSRF reverteu o entendimento que admitia dupla penalidade sobre estimativas e ajuste anual do IRPJ e da CSLL. Entenda o alcance da decisão e o que ela significa para contribuintes com autuações em aberto.',
    coverUrl: 'https://i.postimg.cc/zXbMNSqr/og-tema-487.png',
    date: '2026-05-31',
    content: `Por anos, a Receita Federal lavrou autos de infração cumulando duas penalidades distintas sobre o mesmo contribuinte e o mesmo período de apuração: a multa isolada, incidente sobre o recolhimento a menor das estimativas mensais de IRPJ e CSLL ao longo do ano-calendário, e a multa de ofício, aplicada sobre o saldo apurado no ajuste anual. Do ponto de vista fazendário, tratava-se de infrações distintas — uma pelo não recolhimento mensal, outra pela omissão no fechamento do período. Do ponto de vista do contribuinte, significava pagar duas vezes por condutas que derivavam do mesmo fato gerador e do mesmo resultado econômico.

O CARF oscilou sobre o tema por décadas, a depender da turma, da composição do colegiado e da conjuntura política do órgão. A questão nunca teve equacionamento uniforme e vinculante no âmbito administrativo — até agora.

Em dezembro de 2025, o Supremo Tribunal Federal concluiu o julgamento do RE 640.452 (Tema 487 da repercussão geral), fixando parâmetros constitucionais objetivos para a aplicação de multas por descumprimento de obrigações acessórias. O voto condutor do Ministro Dias Toffoli sinalizou de forma inequívoca que a sobreposição de penalidades sobre o mesmo ilícito — ou sobre infrações que se absorvem mutuamente — é incompatível com os princípios da proporcionalidade e do non bis in idem.

O CARF, vinculado às teses fixadas pelo STF em repercussão geral, passou a adaptar seus precedentes ao novo marco constitucional. A decisão mais expressiva desse movimento veio em 13 de maio de 2026.

A 1ª Turma da Câmara Superior de Recursos Fiscais, no processo nº 16327.001309/2010-54, reverteu o entendimento anterior por 7 votos a 1. O presidente da turma, conselheiro Fernando Brasil de Oliveira Pinto, alterou sua posição após análise aprofundada do Tema 487. A turma cancelou a cumulação e reafirmou a consunção como limite intransponível: a multa de maior gravidade — a de ofício — absorve a de menor — a isolada. Não há base legal nem constitucional para a dupla punição.

O raciocínio é tecnicamente preciso. A multa isolada pune a falta de antecipação do tributo nas estimativas mensais; a multa de ofício pune a insuficiência apurada no ajuste anual. Quando ambas coexistem sobre o mesmo contribuinte, o mesmo período e o mesmo tributo, a consunção impõe que a infração mais grave absorva a menos grave. A cumulação, portanto, não passa pelo teste da proporcionalidade constitucional.

A decisão tem efeitos práticos imediatos sobre quatro categorias de contribuintes.

Primeiro, os que possuem processos administrativos em tramitação no CARF envolvendo a cumulação das duas multas. O novo precedente qualificado deve ser aplicado pelos colegiados de turmas ordinárias.

Segundo, contribuintes com execuções fiscais já ajuizadas com base em CDA que reflita a cumulação. A desconstituição do excesso pode ser discutida nos embargos à execução ou, conforme o caso, por exceção de pré-executividade.

Terceiro, empresas sujeitas a fiscalizações em andamento que ainda não resultaram em autuação formalizada. A orientação vinculante impede que o auditor formalize a cumulação.

Quarto, processos já encerrados que se enquadrem na janela de modulação dos efeitos fixada no Tema 487 — ponto que exige análise caso a caso.

A decisão da CSRF é um precedente qualificado no contencioso administrativo, mas não encerra integralmente a discussão. Resta saber como as turmas ordinárias do CARF aplicarão o entendimento nas situações concretas e se a Fazenda Nacional buscará distinção em casos específicos. Além disso, o alcance exato da modulação do Tema 487 — que restringe a aplicação retroativa da tese — demanda análise individual de cada autuação.

Esta decisão revela, em termos mais amplos, um CARF em processo de reconfiguração pela força dos precedentes vinculantes do STF. O contencioso administrativo tributário, que por décadas operou com lógica própria e por vezes impermeável às teses constitucionais, passa a absorver de forma mais direta as balizas do Supremo. Para contribuintes com autos de infração em aberto, este é o momento de fazer o levantamento e avaliar os caminhos disponíveis.`
  }
];

/*
 * FORMULÁRIO DE CONTATO
 *   Para enviar os contatos por e-mail, crie um formulário gratuito em https://formspree.io
 *   apontando para contato@pbc.adv.br, copie o ID (final da URL https://formspree.io/f/XXXXXXXX)
 *   e cole abaixo entre as aspas. Enquanto estiver vazio, o formulário abre o aplicativo
 *   de e-mail do visitante com a mensagem já preenchida (fallback mailto).
 */
window.PBC_FORMSPREE_ID = '';
