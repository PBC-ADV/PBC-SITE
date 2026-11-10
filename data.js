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
// 'key'  identifica o membro para a AUTORIA de artigos (campo "author" em PBC_ARTICLES).
// 'name' aparece na assinatura do artigo (byline) e no card, junto da foto deste membro.
window.PBC_TEAM = [
  { key: 'fernando-pessoa',    name: 'Fernando Pessoa',          img: 'https://i.postimg.cc/9Qh9KNw3/457A1884.jpg', role: 'founder' },
  { key: 'lucas-braz',         name: 'Lucas Braz',               img: 'https://i.postimg.cc/28vvHfyC/457A1705.jpg', role: 'founder' },
  { key: 'guilherme-carneiro', name: 'Guilherme Carneiro',       img: 'https://i.postimg.cc/tCPPrHJq/Gemini_Generated_Image_yx4v6dyx4v6dyx4v.png', role: 'founder' },
  { key: 'marina-madruga',     name: 'Marina Madruga',           img: 'https://i.postimg.cc/yY99fzdw/457A2300.jpg', role: 'associate' },
  { key: 'pedro-costa',        name: 'Pedro Costa',              img: 'https://i.postimg.cc/bNbb6jrz/457A2140.jpg', role: 'associate' },
  { key: 'luciano-oliveira',   name: 'Luciano Oliveira',         img: 'https://i.postimg.cc/qMnnmdRF/457A2098.jpg', role: 'associate' },
  { key: 'felipe-madruga',     name: 'Felipe Madruga',           img: 'https://i.postimg.cc/1566WZtj/457A2200.jpg', role: 'intern' },
  { key: 'maria-antonia',      name: 'Maria Antônia Cavalcanti', img: 'https://i.postimg.cc/MKRRs8Hx/457A2405.jpg', role: 'intern' },
  { key: 'joao-pedro',         name: 'João Pedro Moreira',       img: 'https://i.postimg.cc/sDSSnRX8/457A2238.jpg', role: 'intern' }
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
 *   author    (opcional) Autoria do artigo. Use a 'key' de um membro de PBC_TEAM
 *             (ex.: 'guilherme-carneiro') — exibe a FOTO + nome + cargo do autor.
 *             Um texto livre que não case com nenhuma key vira apenas "Por <texto>".
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
    slug: 'fim-escala-6x1-contratos-empresariais',
    title: 'Fim da escala 6x1 e a atual (des)atenção do empresariado aos seus efeitos sobre os contratos',
    excerpt: 'Além da folha de pagamento, a EC nº 141/2026 atinge os contratos com terceiros precificados sobre a jornada de 44 horas. Entenda os caminhos de reequilíbrio, os riscos de prazo e as repercussões em cada setor.',
    coverUrl: 'https://i.postimg.cc/bJyyFzDh/Fim-da-escala-6x1-1x.png',
    author: 'guilherme-carneiro',
    date: '2026-11-11',
    content: `A Emenda Constitucional nº 141/2026, que pôs fim à escala 6x1, foi promulgada e publicada em 16 de outubro de 2026, e seus contornos essenciais já são conhecidos. A emenda alterou o art. 7º da Constituição para assegurar dois dias de repouso semanal remunerado e reduzir o limite semanal de trabalho de 44 para 40 horas, vedada qualquer redução salarial. A redução se dá em duas etapas: 42 horas e dois repousos a partir de 16 de dezembro de 2026, e 40 horas a partir de 16 de dezembro de 2027. A regra alcança os contratos de trabalho em curso e os pisos salariais.

Também já foram amplamente divulgados os efeitos sobre a relação de emprego. As cláusulas coletivas sobre jornada e repouso incompatíveis com a emenda perdem efeito em 16 de dezembro, ainda que o instrumento esteja vigente. A norma coletiva passa a ser necessária tanto para o regime compensatório mensal quanto para distribuir as 42 horas em cinco dias. O valor da hora normal aumenta e, com ele, o da hora extra. Para a jornada de 40 horas, a Súmula 431 do TST já adota o divisor 200. Para a etapa de 42 horas, fala-se em divisor 210, ainda sem precedente. O reflexo de comissões e horas extras habituais sobre o descanso semanal remunerado se altera. Empregados com diploma superior e remuneração igual ou superior a duas vezes e meia o teto do Regime Geral ficam fora das regras de controle de jornada, preservados os dois repousos.

Esses pontos concentram, com razão, a atenção dos departamentos de pessoal. Há, contudo, um efeito da emenda que tem passado praticamente despercebido. Para muitas empresas, ele terá repercussão econômica superior à da própria folha: o impacto sobre os contratos celebrados com terceiros.

## Contratos precificados sobre a jornada de 44 horas

Toda empresa que emprega mão de obra também contrata e é contratada, e grande parte desses contratos tem preço formado sobre o custo do trabalho na jornada de 44 horas. É o caso da empreitada a preço global, da terceirização de limpeza, portaria e vigilância, da prestação de serviços contínuos com dedicação de equipe, do fornecimento com montagem ou instalação e da locação de equipamentos com operador. Com a emenda, o custo da hora de trabalho aumenta por força constitucional, enquanto o preço contratado permanece o mesmo.

Para os contratos com o poder público, a emenda traz regra própria. Ela alcança os contratos da administração direta e indireta vigentes em 16 de outubro de 2026 que envolvam emprego direto de mão de obra, inclusive licitações, concessões, permissões e parcerias público-privadas. Nesses contratos, a redução da jornada dos empregados alocados só se aplica após aditamento para manutenção do equilíbrio econômico-financeiro, a ser formalizado em até um ano. Não havendo aditamento, a redução passa a valer ao fim desse prazo, com o salário preservado. A própria emenda reconheceu, portanto, que a mudança desequilibra esses contratos, e condicionou sua aplicação à recomposição do preço. Para os contratos entre particulares, a emenda nada dispõe. A solução depende do que as partes pactuaram e, subsidiariamente, do Código Civil.

O exame começa pelo próprio contrato. A cláusula de reajuste por índice geral, como o IPCA ou o INCC, tende a não resolver o problema. Ela é anual, mede a variação média de preços e não foi concebida para absorver aumento de custo decorrente de alteração normativa. Mais útil é a cláusula de repactuação vinculada à convenção coletiva da categoria, ou a que preveja reequilíbrio pela superveniência de lei ou encargo. Já a cláusula de força maior raramente socorre o contratado, porque o art. 393 do Código Civil trata da inexecução impossível de evitar, e não da execução que se tornou mais onerosa.

Se o contrato for silente, restam a revisão do art. 317 e a resolução por onerosidade excessiva dos arts. 478 a 480 do Código Civil. Nesta última, o art. 479 permite ao réu evitar a resolução oferecendo modificação equitativa das condições. O caminho, porém, é estreito. Nos contratos paritários, o art. 421-A, III, determina que a revisão seja excepcional e limitada. O requisito da imprevisibilidade também será discutido, porque a PEC tramitava desde 2019 e o tema ocupou o debate público por quase dois anos.

A resposta tende a variar conforme a data de celebração do contrato. Nos contratos anteriores à aprovação na Câmara, em maio de 2026, a tese da imprevisibilidade é mais consistente, pois o conteúdo da reforma e o seu calendário eram ainda incertos. Nos celebrados depois disso, enfraquece. Nos assinados após a publicação da emenda, desaparece, pois o novo custo já era conhecido e deveria estar no preço.

O prazo merece a mesma atenção que o preço. A reorganização das equipes pode comprometer cronogramas pactuados com multa moratória. Dificilmente a redução da jornada será aceita como fato que afasta a mora, nos termos do art. 396 do Código Civil, já que não impede a execução, apenas a torna mais custosa.

A análise deve ser feita pelos dois lados. Como tomadora de serviços, a empresa deve esperar pedidos de reequilíbrio de seus fornecedores. Esses pedidos precisam ser avaliados pelo mérito, com base em planilha de composição de custos, e não acolhidos ou recusados por reflexo. Como prestadora, a empresa precisa quantificar o impacto e formular o pleito com fundamentação e antecedência, de preferência antes de 16 de dezembro. Em ambos os casos, o aditivo negociado é preferível à disputa. Ele oferece previsibilidade, preserva a relação comercial e evita que a questão dependa de um juízo sobre imprevisibilidade cujo resultado é incerto.

## Repercussões por setor

O texto constitucional é geral, mas o impacto varia conforme a atividade, a intensidade de mão de obra e o regime de funcionamento.

Na construção civil, a adequação envolve a reorganização das turmas, sobretudo nas obras que hoje trabalham aos sábados, e a revisão dos cronogramas de obra. O SINICON chegou a orientar suas associadas a adiar acordos coletivos sobre a reorganização da jornada.

No plano contratual, a empreitada tem uma particularidade. O art. 620 do Código Civil autoriza a revisão do preço global, a pedido do dono da obra, quando o custo de material ou de mão de obra cair mais de um décimo. Não há regra simétrica em favor do empreiteiro na hipótese de aumento. O art. 619, por sua vez, afasta o direito do empreiteiro a acréscimo de preço, salvo estipulação em contrário. Sem cláusula expressa, o empreiteiro dependerá da teoria geral da revisão, com as limitações já descritas.

Na incorporação imobiliária, a questão do prazo alcança também a relação com os adquirentes. O atraso decorrente da readequação das equipes tende a ser tratado como risco do empreendimento. Ele deve ser absorvido dentro do prazo de tolerância do art. 43-A da Lei nº 4.591/1964, e não servir de justificativa para ultrapassá-lo.

Há ainda um ponto de atenção na cadeia de subcontratação. Nos termos do art. 455 da CLT, os empregados do subempreiteiro podem reclamar contra o empreiteiro principal pelo inadimplemento das obrigações trabalhistas. Assim, subempreiteiros que não se adequarem à nova jornada geram passivo que pode alcançar a construtora, e a verificação da adequação dos terceiros passa a integrar a gestão de risco da obra.

Na indústria, as linhas contínuas e os turnos ininterruptos de revezamento já se submetem ao art. 7º, XIV, da Constituição, que fixa jornada de seis horas, salvo negociação coletiva, dispositivo que o novo § 3º do art. 7º menciona expressamente. As plantas que operam em turnos de oito horas por força de norma coletiva dependem de renegociação. A perda de eficácia das cláusulas incompatíveis em 16 de dezembro torna esse prazo especialmente curto. No plano contratual, a atenção recai sobre os contratos de fornecimento de longo prazo com preço fixo e compromissos de volume ou de prazo de entrega. A redução das horas disponíveis por empregado pode comprometer o cumprimento dessas obrigações e, pelas razões já expostas, dificilmente servirá de justificativa para o inadimplemento.

Na saúde, a escala 12x36 do art. 59-A da CLT tem média de 42 horas semanais e é compatível com a etapa de transição. A situação muda em dezembro de 2027, quando o limite passa a 40 horas. Além da escala própria, hospitais e clínicas costumam concentrar serviços terceirizados de higienização, nutrição, lavanderia e segurança. Todos são intensivos em mão de obra e estão sujeitos aos pedidos de reequilíbrio descritos acima. Ao mesmo tempo, parte relevante da receita está atrelada a tabelas negociadas com operadoras, que não se ajustam automaticamente ao novo custo.

No comércio, de funcionamento diário, a dificuldade está em montar rodízios com duas folgas semanais sem reduzir o horário de atendimento. O domingo permanece apenas como folga preferencial, e seguem aplicáveis as regras de rodízio dominical do art. 6º, parágrafo único, da Lei nº 10.101/2000. Para lojistas em shopping centers, a questão tem também uma face contratual. O contrato de locação e as normas gerais do empreendimento costumam impor horário mínimo de funcionamento. Esse horário precisará ser coberto com equipes de jornada menor, e a emenda não autoriza, por si só, qualquer flexibilização dessa obrigação perante o empreendedor.

Nas instituições de ensino não há regra setorial, e os dois repousos se aplicam como regra geral. Para professores com carga contratual de até 40 horas semanais, não há redução proporcional, mas o direito aos dois repousos permanece. O ponto de maior relevância prática, porém, é financeiro. As anuidades de 2027 estão sendo fixadas agora, e a Lei nº 9.870/1999 admite, no art. 1º, § 3º, o acréscimo correspondente à variação de custos com pessoal, desde que comprovada em planilha de custo. Como o valor da anuidade é fixado para todo o período letivo, a instituição que não incorporar o novo custo nesse momento terá dificuldade de repassá-lo ao longo do ano.

## Questões pendentes de definição

Como a emenda é recente, não há jurisprudência sobre ela, e alguns pontos permanecem em aberto. O primeiro é a compatibilidade da escala 12x36 com o limite de 40 horas, a partir de dezembro de 2027. O segundo é a situação dos empregados enquadrados no art. 62 da CLT, como gerentes e trabalhadores externos, já que a única exceção constitucional expressa é a dos empregados de alta remuneração com diploma superior. O terceiro é o divisor aplicável à etapa de 42 horas e a validade de cláusulas coletivas que mantenham o divisor 220. O quarto é a lei complementar que a emenda autoriza para medidas transitórias em favor de microempreendedores, microempresas e empresas de pequeno porte, ainda não editada. No campo contratual, não há orientação alguma sobre os contratos privados. O tratamento deles continuará a ser definido caso a caso, pelas cláusulas pactuadas e pela teoria geral da revisão.

## Considerações finais

A adequação da folha e das escalas é inevitável e tem data marcada, e a maior parte das empresas já está atenta a ela. A revisão dos contratos, ao contrário, não tem prazo imposto pela emenda, e é justamente por isso que tende a ser adiada. O custo, porém, já está definido. A partir de 16 de dezembro, cada contrato precificado sobre a jornada de 44 horas passa a carregar uma diferença que alguma das partes terá de absorver.

Para decidir quem absorve essa diferença, a negociação é mais vantajosa que o litígio, porque o regime de revisão dos contratos privados é restrito e o resultado judicial, incerto. O trabalho começa pelo mapeamento dos contratos em que o custo de mão de obra é relevante. Passa pela leitura das cláusulas de reajuste, reequilíbrio e prazo. E se conclui, sempre que possível, em aditivos que redistribuam o novo custo de forma expressa. Como os efeitos variam conforme a atividade e o conteúdo de cada contrato, a análise do caso concreto é indispensável.`
  },
  {
    slug: 'cumulacao-multas-carf-tema-487',
    title: 'O fim da cumulação de multas no CARF: o que mudou com o Tema 487 do STF',
    excerpt: 'A 1ª Turma da CSRF reverteu o entendimento que admitia dupla penalidade sobre estimativas e ajuste anual do IRPJ e da CSLL. Entenda o alcance da decisão e o que ela significa para contribuintes com autuações em aberto.',
    coverUrl: 'https://i.postimg.cc/v8pNh06n/Fim-da-cumulacao-de-multas-no-CARF-1x.png',
    author: 'marina-madruga',
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
