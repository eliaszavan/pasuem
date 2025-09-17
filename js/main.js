// Dados das matérias
// Dados das matérias
const materias = [
  {
    nome: "Biologia",
    topicos: [
      "Histórico e importância da Biologia",
      "Caracterização dos seres vivos",
      "Níveis de organização dos seres vivos",
      "Origem da vida",
      "Biologia celular - Composição química da célula",
      "Biologia celular - Componentes celulares (membrana, citoplasma, núcleo)",
      "Biologia celular - Metabolismo energético (respiração, fermentação, fotossíntese, quimiossíntese)",
      "Biologia celular - Metabolismo de controle (DNA, RNA, síntese proteica)",
      "Biologia celular - Divisão celular (mitose e meiose)",
      "Reprodução - Tipos de reprodução",
      "Reprodução - Sistema genital masculino e feminino",
      "Reprodução - Formação de gametas, fecundação",
      "Reprodução - Métodos contraceptivos e ISTs",
      "Desenvolvimento embrionário",
      "Histologia (epitelial, conjuntivo, muscular, nervoso)",
      "Ciência e saúde relacionados aos itens anteriores"
    ]
  },
{
  nome: "Física",
  topicos: [
    "Grandezas físicas e unidades",
    
    // Cinemática
    "Cinemática - Deslocamento escalar e vetorial.",
    "Cinemática - Movimento uniforme (MU).",
    "Cinemática - Movimento uniformemente variado (MUV).",
    "Cinemática - Queda livre e movimento de projéteis.",
    "Cinemática - Movimento circular uniforme (MCU).",
    "Cinemática - Movimento circular uniformemente variado (MCUV).",
    "Cinemática - Função horária de um movimento e sua representação gráfica.",
    
    // Dinâmica
    "Dinâmica - Leis do movimento e da mecânica newtoniana.",
    "Dinâmica - Forças peso, elástica, de contato (normal e atrito).",
    "Dinâmica - Força centrípeta e dinâmica do movimento circular.",
    "Dinâmica - Plano inclinado.",
    "Dinâmica - Lei da gravitação universal da mecânica newtoniana e campo gravitacional.",
    "Dinâmica - Leis do movimento planetário de Kepler.",
    "Dinâmica - Quantidade de movimento linear (momento linear) e impulso de uma força.",
    "Dinâmica - Princípio da conservação da quantidade de movimento linear.",
    "Dinâmica - Trabalho, energia cinética, energia potencial e potência.",
    "Dinâmica - Forças conservativas e não conservativas.",
    "Dinâmica - Princípio da conservação de energia.",
    "Dinâmica - Colisões entre corpos.",
    "Dinâmica - Sistema de partículas e centro de massas.",
    "Dinâmica - Equilíbrio de uma partícula e equilíbrio de um corpo rígido.",
    "Dinâmica - Polias e máquinas simples.",
    
    "Hidrostática - Pressão, empuxo, princípio de Pascal",
    "Termologia e Termodinâmica - Calor, temperatura, escalas, Calorimetria e mudanças de estado, 1ª Lei da Termodinâmica",
    "Óptica geométrica - Reflexão, refração, espelhos e lentes",
    "Eletricidade - Corrente, tensão, resistência (Lei de Ohm), Associação de resistores, Potência elétrica"
  ]
},
{
  nome: "Química",
  topicos: [
    // Estados físicos da matéria (sem prefixo)
    "Estados físicos da matéria, suas características e as mudança de fase.",
    "Substâncias: ocorrência na natureza.",
    "Propriedades físicas das substâncias como possibilidade de sua identificação.",
    "Processos usuais de separação de misturas.",
    "Representação simbólica dos elementos, elementos e substâncias.",
    "Alotropia.",
    "Estrutura atômica e Modelos atômicos.",
    "Isótopos, isóbaros, isótonos e isoeletrônicos.",
    "A tabela Periódica dos Elementos Químicos.",

    // Ligações Químicas
    "Ligações Químicas - Ligações iônicas, covalentes e metálicas e as diferentes organizações das partículas.",
    "Ligações Químicas - Condições para a formação de substâncias orgânicas e inorgânicas, moleculares e iônicas.",
    "Ligações Químicas - Características e relações intermoleculares.",
    "Ligações Químicas - Propriedades de compostos iônicos e moleculares e sua utilização no cotidiano.",
    "Ligações Químicas - Polaridade das ligações e interações intermoleculares.",

    // Radioatividade
    "Radioatividade - Características das emissões radioativas.",
    "Radioatividade - Transformações Químicas Nucleares.",
    "Radioatividade - Transmutação natural e artificial.",
    "Radioatividade - Reações nucleares (fissão e fusão).",
    "Radioatividade - Meia-vida.",
    "Radioatividade - Identificação e compreensão do surgimento de diferentes elementos químicos como resultado de processos radioativos.",
    "Radioatividade - Compreensão da radioatividade no cotidiano e reflexão acerca dos seus benefícios e malefícios.",

    // Cálculos Químicos
    "Cálculos Químicos - Equações químicas e balanceamento de reações (método por tentativas).",
    "Cálculos Químicos - Tipos de reações químicas e formas para seu reconhecimento.",
    "Cálculos Químicos - Interpretação e classificação das equações que representam reações químicas, reconhecendo os estados de agregação da matéria de reagentes e produtos.",
    "Cálculos Químicos - Representação das transformações químicas.",
    "Cálculos Químicos - Caracterização e identificação de substâncias.",
    "Cálculos Químicos - Aspectos quantitativos das transformações químicas.",
    "Cálculos Químicos - Leis que regem as reações químicas.",
    "Cálculos Químicos - Compreensão do envolvimento das leis das reações químicas na produção de compostos adequados ao consumo humano e benéficos ao meio ambiente, bem como de substâncias danosas.",
    "Cálculos Químicos - Cálculo estequiométrico envolvendo massa molar, número de Avogadro, quantidade de matéria.",

    // Funções inorgânicas
    "Funções inorgânicas - Características dos ácidos, das bases, dos sais e dos óxidos.",
    "Funções inorgânicas - Principais propriedades de ácidos e bases: indicadores, condutibilidade elétrica, reação com metais, reação de neutralização e demais reações com tais compostos.",
    "Funções inorgânicas - Impactos ambientais e conscientização da utilização de diferentes substâncias no cotidiano.",
    "Funções inorgânicas - Interpretação e classificação de reações químicas.",

    // Soluções
    "Soluções - Classificação de soluções.",
    "Soluções - Unidades de medidas e suas conversões.",
    "Soluções - Concentrações de soluções.",
    "Soluções - Analise e interpretação de diferentes tipos de concentrações de soluções que fazem parte do cotidiano das pessoas.",
    "Soluções - Impactos no corpo humano, em animais e em ambientes no uso de soluções.",
    "Soluções - Processos de dissolução e solubilidade.",
    "Soluções - Diluição e mistura de soluções.",
    "Soluções - Propriedades da água, qualidade, tratamento, poluição e reflexão sobre as questões relacionadas aos seus diferentes usos, ao seu consumo consciente, ao consumo consciente de produtos em geral; e a importância da reciclagem.",
    "Soluções - Análise de propriedade de materiais com avaliação de suas aplicações no cotidiano (na indústria, na tecnologia etc.).",
    "Soluções - Uso sustentável de soluções.",
    "Soluções - Interpretação de gráficos e/ou de solubilidade de diferentes compostos."
  ]
},
  {
    nome: "Matemática",
    topicos: [
      "Conjuntos numéricos.",
      "Razão e Proporção.",
      "Interpretação de Gráficos.",
      "Notações Científicas.",
      "Porcentagem.",
      "Juros.",
      "Funções - Afim, quadrática, exponencial, logarítmica.",
      "Progressões (PA e PG).",
      "Matrizes, determinantes e sistemas lineares.",
      "Trigonometria - Razões trigonométricas, Identidades trigonométricas.",
      "Geometria analítica - Ponto, reta, circunferência, Distância entre pontos.",
      "Estatística e probabilidade básica."
    ]
  },
{
  nome: "História",
  topicos: [
    // História do Brasil
    "História do Brasil - O período colonial: economia, política, sociedade e cultura.",
    "Brasil Colônia - Economia açucareira, Mineração.",
    "Independência do Brasil.",
    "Primeiro e Segundo Reinado.",
    "República Velha - Coronelismo, café, movimentos sociais.",
    "Era Vargas.",
    "Ditadura Militar e redemocratização.",

    // História Geral / Mundiais
    "Revolução Francesa.",
    "Revoluções Industriais.",
    "Guerra Fria.",
    "1 Guerra Mundial.",
    "2 Guerra Mundial.",

    // História do Paraná
    "História do Paraná - O processo de colonização do Paraná.",
    // Antiguidade Ocidental Grega e Romana
    "Antiguidade Ocidental Grega e Romana - Democracia, cidadania e escravidão.",
    "Antiguidade Ocidental Grega e Romana - Cultura da pólis.",
    "Antiguidade Ocidental Grega e Romana - A expansão romana e a política imperial.",
    "Antiguidade Ocidental Grega e Romana - A crise do século III d.C.",
    "Antiguidade Ocidental Grega e Romana - O Ocidente na Idade Média.",

    // Sociedade Feudal
    "Sociedade Feudal - A sociedade feudal.",
    "Sociedade Feudal - A economia medieval.",
    "Sociedade Feudal - O Estado e a Igreja.",
    "Sociedade Feudal - Cultura e saber.",

    // História Moderna
    "História Moderna - A crise da sociedade medieval e o nascimento do mundo moderno.",
    "História Moderna - As transformações históricas na Europa Ocidental no fim da Idade Média e a formação dos Estados Nacionais.",
    "História Moderna - As grandes navegações e a revolução comercial a partir do século XV.",

    
  ]
},
{
  nome: "Geografia",
  topicos: [
    // Paisagens e conceitos geográficos
    "A formação e a transformação das paisagens.",
    "Os conceitos geográficos fundamentais.",
    "Localização e orientação.",
    "Movimento da terra e fusos horários.",
    "Representação cartográfica.",
    "A dinâmica da natureza e as transformações geradas pela ação antrópica.",

    // Estrutura geológica e relevo
    "Estrutura geológica - Estrutura da terra; Tectônica de placas; Rochas.",
    "O relevo - As estruturas e as formas do relevo; Os agentes internos e externos.",

    // Clima e biomas
    "O clima - Fatores e elementos do clima; Circulação atmosférica; Fenômenos climáticos; Tipos climáticos.",
    "Biomas.",
    "Solos.",
    "Hidrografia.",
    "Formação, localização, exploração dos recursos naturais.",

    // Recursos naturais e impactos
    "Os recursos naturais - Tipos e formas de ocorrência.",
    "As fontes de energia.",
    "Os impactos ambientais gerados pela exploração e pelo uso dos recursos naturais.",

    // Outros tópicos específicos
    "População - Crescimento demográfico, migrações",
    "Urbanização e industrialização",
    "Agricultura e economia no Brasil",
    "Energia e transportes",
    "Geopolítica - Globalização, blocos econômicos",
    "Meio ambiente - Clima, biomas, impactos ambientais"
  ]
},
{
  nome: "Lingua Portuguesa",
  topicos: [
    // Compreensão e interpretação de textos
    "Compreensão e interpretação de textos - Compreensão e interpretação de textos.",
    "Compreensão e interpretação de textos - Condições de produção, estrutura composicional e marcas de estilo de diferentes gêneros do discurso.",
    "Compreensão e interpretação de textos - Funções sintáticas e produção do sentido.",
    "Compreensão e interpretação de textos - Variação linguística do Português Brasileiro.",
    "Compreensão e interpretação de textos - Organizadores textuais, operadores discursivos e/ou conectivos relevantes para a coesão.",
    "Compreensão e interpretação de textos - Argumentação: argumentos e contra-argumentos.",
    "Compreensão e interpretação de textos - Vozes sociais nos gêneros do discurso.",
    "Compreensão e interpretação de textos - Discurso oral: aspectos sinestésicos e adequação da fala a diferentes contextos.",
    "Compreensão e interpretação de textos - Modalizadores do discurso e seus efeitos de sentido.",

    // Itens adicionais
    "Interpretação de texto (narrativo, dissertativo, poético, jornalístico)",
    "Figuras de linguagem",
    "Pronomes",
    "Conjunções",
    "Morfossintaxe",
    "Variação Linguística do Português Brasileiro",
    "Pontuação",
    "Funções sintáticas"
  ]
},
{
  nome: "Educação Física",
  topicos: [
    // Jogos e Brincadeiras
    "Jogos e Brincadeiras - Jogos Cooperativos: A diferença entre os jogos competitivos e os jogos cooperativos; Os tipos de jogos cooperativos e sua aplicabilidade em vários contextos.",

    // Dança
    "Dança - Dança de Salão: O movimento como elemento constituinte do corpo e meio de expressão em sociedade.",

    // Ginástica
    "Ginástica - Ginástica de condicionamento físico; Os vários tipos de Ginástica e suas intencionalidades.",

    // Esportes
    "Esportes - Esporte Plural: O Esporte enquanto manifestação da cultura corporal de movimento: Esporte Educação, Esporte Participação/Lazer e Esporte Rendimento; O esporte como veículo de alienação nas mídias digitais.",

    // Lutas
    "Lutas - Valores humanos e a prática das Lutas no contexto escolar.",
    "Lutas - As Lutas enquanto manifestação da cultura de movimento."
  ]
},
{
  nome: "Filosofia",
  topicos: [
    // Origem da Filosofia
    "A origem da filosofia e os métodos filosóficos",
    "O surgimento do discurso filosófico.",
    "Argumentação filosófica e experimentos de pensamento.",
    "A filosofia grega - A disputa entre a sofística e a filosofia",
    "Método socrático e a dialética",
    "Teoria das ideias",
    "Teses cosmológicas e antropológicas gregas e sua influência na história do pensamento.",

    // Teoria do conhecimento
    "Teoria do conhecimento - O problema da possibilidade do conhecimento; a validade da crença; a distinção entre evidência e opinião; senso comum.",
    "Teoria do conhecimento - Abordagens epistemológicas: ceticismo; racionalismo; empirismo; idealismo transcendental.",

    // Lógica elementar
    "Lógica elementar - A noção de consequência lógica. A inferência válida e a inferência correta. Tipos de inferência (dedutiva, indutiva e abdutiva).",
    "Lógica elementar - Elementos de lógica proposicional clássica (operadores lógico-proposicionais).",
    "Elementos da teoria do silogismo categórico (termos e proposições, o Quadrado de Oposições, figuras e modos válidos do silogismo categórico).",
    "Lógica elementar - Falácias formais e não formais (falácias semânticas, falácias de relevância e falácias indutivas)."
  ]
},
    {
    nome: "Literatura",
    topicos: [
      "Arcadismo / Neoclassicismo",
      "Realismo / Naturalismo",
      "Romantismo",
      "Modernismo (1ª, 2ª geração)",
      "Gregório de Matos",
      "Cláudio Manuel da Costa",
      "Luís Vaz de Camões",
      "Paulo Leminski",
      "Luís Fernando Veríssimo",
      "Tomás Antônio Gonzaga"
    ]
  },
{
  nome: "Artes",
  topicos: [
    // Música
    "Música - Som, ruído, música.",
    "Música - Parâmetros do som.",
    "Música - Instrumentos musicais.",
    "Música - Música ocidental contemporânea.",
    "Música - Gêneros musicais: samba, bossa nova, rock.",

    // Artes Visuais
    "Artes Visuais - Arte Moderna na América Latina: estilos, vanguardas e artistas.",
    "Artes Visuais - Arte Contemporânea: performance, videoarte e instalação.",
    "Artes Visuais - Arte e política: movimento feminista, negro, LGBT e indígenas.",

    // Artes Cênicas
    "Artes Cênicas - Teatro Contemporâneo.",
    "Artes Cênicas - Teatro Naturalista.",
    "Artes Cênicas - Teatro Épico.",
    "Artes Cênicas - Teatro Engajado (Teatro do Oprimido).",
    "Artes Cênicas - O jogo no teatro: o corpo como instrumento.",
    "Artes Cênicas - Teatro Improvisacional.",

    // Dança
    "Dança - Elementos da dança: movimento corporal, espaço e tempo.",
    "Dança - Dança contemporânea.",
    "Dança - Danças típicas brasileiras."
  ]
},

{
  nome: "Sociologia",
  topicos: [
    // Princípios do pensamento e da imaginação sociológica
    "Princípios do pensamento e da imaginação sociológica - O eu e o outro: as relações entre indivíduo e sociedade.",
    "Princípios do pensamento e da imaginação sociológica - Interações, sociabilidades e identidades sociais: ações individuais e ações coletivas.",

    // Processos de socialização e instituições sociais
    "Processos de socialização e instituições sociais - Os processos de socialização nas diferentes instituições sociais.",
    "Processos de socialização e instituições sociais - A juventude como categoria social.",

    // O mundo do trabalho
    "O mundo do trabalho - Os diferentes modos de organização e divisão social no trabalho contemporâneo."
  ]
},
  {
    nome: "Redação",
    topicos: [
      "Estrutura dissertativo-argumentativa",
      "Tese, argumentos, conclusão",
      "Conectores e coesão",
      "Repertório sociocultural (história, atualidades, literatura)"
    ]
  }
];

// Seleciona o container principal
const container = document.querySelector(".subjects");



// Observações para Literatura
const observacoesLiteratura = {
  "Paulo Leminski": "Poemas selecionados:\nHesitei horas,\nnascemos em poemas diversos\nAmor, então,\nsaber é pouco,\namar é um elo,\nesta vida é uma viagem",
  "Luís Fernando Veríssimo": "Crônicas selecionadas:\nVivendo e…\nSexa\nPapos\nHabito Nacional\nSegurança",
  "Gregório de Matos": "Poemas selecionados:\nRecopilou-se o direito\nBote a sua casaca de veludo\nUm soneto começo em vosso gabo:\nVês esse sol de luzes coroado?\nPequei Senhor, mas não porque hei pecado,",
  "Tomás Antônio Gonzaga": "Poemas selecionados:\nEu, Marília, não sou algum vaqueiro (lira I - parte I)\nPintam, Marília, os poetas (lira II – parte I)\nEu, Marília, não fui nenhum vaqueiro (lira XV – parte II)\nAdeus, cabana, adeus; adeus, ó gado (soneto XI – parte III)",
  "Luís Vaz de Camões": "Poemas selecionados:\nAlma minha gentil que te partiste\nAmor é fogo que arde sem se ver\nDoces e claras águas do Mondego\nMudam-se os tempos, mudam-se as vontades,\nNo mundo quis o Tempo que se achasse",
  "Cláudio Manuel da Costa": "Poemas selecionados\nQuem deixa o trato pastoril amado\nNeste álamo sombrio, aonde a escura\nNão vês, Nise, este vento desabrido\nOs olhos tendo posto, e o pensamento\nQue tarde nasce o sol, que vagaroso"
};

// Cria o elemento de tooltip global
// Cria o elemento de tooltip global333
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.innerHTML = '<div class="tooltip-text"></div>';
document.body.appendChild(tooltip);

const tooltipText = tooltip.querySelector(".tooltip-text");

let hideTimeout; // guarda o timeout ativo

// Função para mostrar tooltip com texto
function mostrarTooltip(texto) {
  if (hideTimeout) {
    clearTimeout(hideTimeout); // cancela qualquer timeout anterior
    hideTimeout = null;
  }
  tooltipText.textContent = texto;
  tooltip.style.display = "block"; // garante visibilidade
  requestAnimationFrame(() => {
    tooltip.classList.add("show"); // animação fade-in
  });
}

// Função para esconder tooltip
function esconderTooltip() {
  tooltip.classList.remove("show");
  hideTimeout = setTimeout(() => {
    tooltip.style.display = "none";
    hideTimeout = null;
  }, 300); // espera a animação terminar
}

// Função para adicionar eventos de tooltip aos tópicos de Literatura
function adicionarTooltip(label, topico) {
  label.addEventListener("mouseenter", () => {
    mostrarTooltip(observacoesLiteratura[topico]);
  });
  label.addEventListener("mouseleave", esconderTooltip);
}

// Função para criar barra de progresso
function criarProgresso() {
  const progressContainer = document.createElement("div");
  progressContainer.className = "progress-container";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("circular");

  const circleBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circleBg.classList.add("circle-bg");
  circleBg.setAttribute("cx", "14");
  circleBg.setAttribute("cy", "14");
  circleBg.setAttribute("r", "12");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.classList.add("circle");
  circle.setAttribute("cx", "14");
  circle.setAttribute("cy", "14");
  circle.setAttribute("r", "12");

  const span = document.createElement("span");
  span.className = "progress-text";
  span.textContent = "0%";

  svg.appendChild(circleBg);
  svg.appendChild(circle);
  progressContainer.appendChild(svg);
  progressContainer.appendChild(span);

  return { progressContainer, circle, span };
}

// Função para criar checkboxes de uma matéria
function criarTopicos(materia, contentList, circle, span) {
  materia.topicos.forEach((topico, i) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = `${materia.nome.toLowerCase()}-${i+1}`;

    // Restaurar estado do localStorage
    if (localStorage.getItem(checkbox.dataset.id) === "true") {
      checkbox.checked = true;
    }

    // Atualiza progresso e salva no localStorage
    checkbox.addEventListener("change", () => {
      localStorage.setItem(checkbox.dataset.id, checkbox.checked);
      atualizarProgresso(contentList, circle, span);
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + topico));

    // Tooltip exclusiva para Literatura
if (materia.nome === "Literatura" && observacoesLiteratura[topico]) {
  adicionarTooltip(label, topico);
}

    contentList.appendChild(label);
  });

  // Inicializa progresso
  atualizarProgresso(contentList, circle, span);
}

// Função para criar uma matéria completa
function criarMateria(materia) {
  const details = document.createElement("details");

  const summary = document.createElement("summary");
  summary.textContent = materia.nome + " ";

  const { progressContainer, circle, span } = criarProgresso();
  summary.appendChild(progressContainer);
  details.appendChild(summary);

  const contentList = document.createElement("div");
  contentList.className = "content-list";

  criarTopicos(materia, contentList, circle, span);

  details.appendChild(contentList);
  container.appendChild(details);
}

// Função para atualizar barra de progresso
function atualizarProgresso(contentList, circle, span) {
  const checkboxes = contentList.querySelectorAll("input[type=checkbox]");
  const total = checkboxes.length;
  const marcados = Array.from(checkboxes).filter(c => c.checked).length;
  const porcentagem = Math.round((marcados / total) * 100);
  span.textContent = `${porcentagem}%`;

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  const offset = circumference - (porcentagem / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

// Inicializa todas as matérias
materias.forEach(criarMateria);