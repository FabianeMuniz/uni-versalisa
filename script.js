const WHATSAPP_NUMBER = "554192659285";

const products = [
  {
  category: "mandala-tecida",
  name: "Mandala tecida - Guardiã do Fogo e da Água",
  description: "Uma mandala de cores intensas que une a força do fogo à serenidade da água, criando uma composição de proteção, equilíbrio e energia vital.",
  details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Combina mandala tibetana e circular em uma única peça (2 em 1). Reage à luz UV.",
  price: 500.00,
  images: [
    "image/mandala-tecida/mandala-tecida-guardiadofogoedaagua.png"
  ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Portal das 12 Pontas",
    description: "Uma composição geométrica de 12 pontas que representa a união entre calmaria e movimento, convidando à contemplação e ao equilíbrio.",
    details: "Mandala de 12 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Combina mandala tibetana e circular em uma única peça (2 em 1). Reage à luz UV.",
    price: 700.00,
    images: [
      "image/mandala-tecida/mandala-tecida-portaldas12pontas.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Fluxos",
    description: "Uma representação da força do movimento e da conexão entre energias, inspirando harmonia, equilíbrio e boas vibrações.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Combina mandala tibetana e circular em uma única peça (2 em 1). Reage à luz UV.",
    price: 500.00,
    images: [
      "image/mandala-tecida/mandala-tecida-fluxos.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Transmutar",
    description: "Inspirada na força do fogo e na energia da transformação, simboliza renovação, coragem e a abertura de novos caminhos.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em barra roscada e aço inox, oferecendo durabilidade. Combina mandala tibetana e circular em uma única peça (2 em 1). Reage à luz UV.",
    price: 500.00,
    images: [
      "image/mandala-tecida/mandala-tecida-transmutar.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Portal Dimensional",
    description: "Uma composição de azul, verde e roxo que representa proteção, serenidade e conexão espiritual, trazendo uma atmosfera de harmonia ao ambiente.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Combina mandala tibetana e circular em uma única peça (2 em 1). Reage à luz UV.",
    price: 500.00,
    images: [
      "image/mandala-tecida/mandala-tecida-portaldimensional.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Universo Frequencial",
    description: "Uma representação da integração e da unidade, com formas geométricas e cores vibrantes que inspiram expansão, espiritualidade e harmonia.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Combina mandala tibetana e circular em uma única peça (2 em 1). Reage à luz UV.",
    price: 500.00,
    images: [
      "image/mandala-tecida/mandala-tecida-universofrequencial.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Sol Interior",
    description: "Com cores quentes e vibrantes, simboliza vitalidade, determinação e força criativa, inspirando coragem para transformar intenções em realizações.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Combina mandala tibetana e circular em uma única peça (2 em 1). Reage à luz UV.",
    price: 500.00,
    images: [
      "image/mandala-tecida/mandala-tecida-solinterior.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Entre Polos",
    description: "Uma mandala que celebra o equilíbrio entre as dualidades, representando a conexão com o todo e o movimento contínuo da vida.",
    details: "Mandala de 8 pontas, com 40cm x 40cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 400.00,
    images: [
      "image/mandala-tecida/mandala-tecida-entrepolos.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Pulso Cósmico",
    description: "O encontro da profundidade do roxo com a energia radiante do amarelo, simbolizando espiritualidade, alegria, criatividade e transformação.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 400.00,
    images: [
      "image/mandala-tecida/mandala-tecida-pulsocosmico.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Reflexo",
    description: "Uma dança de cores que representa as múltiplas dimensões do ser e o equilíbrio entre razão e emoção.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 500.00,
    images: [
      "image/mandala-tecida/mandala-tecida-reflexo.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Raiz e Chama",
    description: "A união da intensidade do fogo com a estabilidade da terra, representando transformação, acolhimento e conexão com a própria essência.",
    details: "Mandala com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox.",
    price: 250.00,
    images: [
      "image/mandala-tecida/mandala-tecida-raizechama.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Frequência Azul",
    description: "Uma composição de tons azuis e brancos que transmite serenidade, proteção e equilíbrio, inspirando tranquilidade e clareza interior.",
    details: "Mandala com 50cm x 50cm. Estrutura em aço inox.",
    price: 300.00,
    images: [
      "image/mandala-tecida/mandala-tecida-frequenciaazul.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Frequência Infinita",
    description: "Uma representação do fluxo contínuo da vida e das infinitas possibilidades de transformação, com cores vibrantes que evocam liberdade e expansão.",
    details: "Mandala com 40cm x 40cm. Estrutura em aço inox. Reage à luz UV.",
    price: 250.00,
    images: [
      "image/mandala-tecida/mandala-tecida-frequenciainfinita.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Expansão",
    description: "Inspirada nos sete chakras, representa a expansão da consciência, o autoconhecimento e a conexão entre os centros de energia.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 500.00,
    images: [
      "image/mandala-tecida/mandala-tecida-expansao.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Solar",
    description: "Inspirada na energia do sol, simboliza luz, vitalidade e renovação, irradiando acolhimento, criatividade e expansão interior.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Estrutura em aço inox.",
    price: 280.00,
    images: [
      "image/mandala-tecida/mandala-tecida-solar.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Sintonia",
    description: "Uma composição vibrante que representa conexão, equilíbrio e transformação interior, trazendo harmonia e significado ao ambiente.",
    details: "Mandala de 8 pontas, com 50cm x 50cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 300.00,
    images: [
      "image/mandala-tecida/mandala-tecida-sintonia.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Micélio Cósmico",
    description: "O encontro do roxo com o amarelo representa a conexão entre espiritualidade e criatividade, inspirando expansão, movimento e transformação.",
    details: "Mandala de 8 pontas, com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 250.00,
    images: [
      "image/mandala-tecida/mandala-tecida-miceliocosmico.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Vórtice Cósmico",
    description: "Uma explosão de cores neon sobre uma base preta, inspirada nos movimentos espirais do cosmos e na energia da transformação.",
    details: "Mandala de 8 pontas, com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 250.00,
    images: [
      "image/mandala-tecida/mandala-tecida-vorticecosmico.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Reggae",
    description: "Uma mandala colorida e cheia de personalidade, inspirada nas cores e na energia vibrante da cultura reggae.",
    details: "Mandala de 12 pontas, com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox, oferecendo durabilidade. Reage à luz UV.",
    price: 160.00,
    images: [
      "image/mandala-tecida/mandala-tecida-reggae.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Mandala tecida - Maresia",
    description: "Uma peça artesanal inspirada na leveza do mar, com detalhes que valorizam a beleza do trabalho manual em cada lado.",
    details: "Mandala de 8 pontas, com 30cm x 30cm. Produzida com técnicas de bordado na frente e no verso. Estrutura em aço inox, oferecendo durabilidade.",
    price: 150.00,
    images: [
      "image/mandala-tecida/mandala-tecida-maresia.png",
      "image/mandala-tecida/mandala-tecida-maresia2.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Conjunto de Mandalas - Jardim Quântico",
    description: "Um conjunto artesanal que combina mandala, brincos e chaveiro em uma composição inspirada na geometria e na expansão das cores.",
    details: "Mandala de 12 pontas, com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox. Acompanha brincos em base de madeira, com 6cm x 6cm, e chaveiro com base de aço inox, com 8cm x 8cm. Reage à luz UV.",
    price: 250.00,
    images: [
      "image/mandala-tecida/mandala-tecida-conjuntojardimquantico.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Conjunto de Mandalas - Vórtice Solar Violeta",
    description: "Um conjunto que une a energia das formas geométricas à intensidade das cores, criando uma composição artesanal cheia de personalidade.",
    details: "Mandala de 12 pontas, com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox. Acompanha brincos em base de madeira, com 6cm x 6cm, e chaveiro com base de aço inox, com 8cm x 8cm. Reage à luz UV.",
    price: 250.00,
    images: [
      "image/mandala-tecida/mandala-tecida-conjuntovorticesolarvioleta.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Conjunto de Mandalas - Nó do Infinito",
    description: "Uma composição artesanal que simboliza continuidade e conexão, acompanhada de acessórios que levam a arte da mandala para o dia a dia.",
    details: "Mandala de 8 pontas, com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox. Acompanha brincos em base de madeira, com 6cm x 6cm, e chaveiro com base de aço inox, com 8cm x 8cm.",
    price: 250.00,
    images: [
      "image/mandala-tecida/mandala-tecida-conjuntonodoinfinito.png"
    ]
  },
  {
    category: "mandala-tecida",
    name: "Conjunto de Mandalas - Fio a Fio",
    description: "Um conjunto delicado que valoriza os detalhes do trabalho artesanal, reunindo uma mandala e brincos em uma composição harmoniosa.",
    details: "Mandala de 12 pontas, com 30cm x 30cm. Produzida com técnicas de bordado e estrutura em aço inox. Acompanha brincos em base de madeira, com 6cm x 6cm.",
    price: 180.00,
    images: [
      "image/mandala-tecida/mandala-tecida-conjuntofioafio.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Gênese do Equilíbrio",
    description: "Entre Sol e Lua, fogo e água, quatro mandalas Olho de Deus se conectam em uma composição que simboliza o equilíbrio entre forças opostas e complementares.",
    details: "Quadro de vidro com 50cm x 45cm. Obra exclusiva e feita à mão. Composta por mandalas tecidas e bordadas com lã, utilizando a técnica Ojo de Dios. Reage à luz UV.",
    price: 800.00,
    images: [
      "image/mandala-pintada/mandala-pintada-genesedoequilibrio.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Átomo Pixelado",
    description: "Uma obra que conecta arte têxtil, geometria e estética futurista, com cores fluorescentes e formas inspiradas no universo digital.",
    details: "Quadro de vidro com 30cm x 30cm. Obra exclusiva e feita à mão. Mandalas tecidas e bordadas com lã, utilizando a técnica Ojo de Dios. Reage à luz UV.",
    price: 400.00,
    images: [
      "image/mandala-pintada/mandala-pintada-atomopixelado.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Visão do Divino: Expansão da Consciência",
    description: "Uma obra que une geometria sagrada e espiritualidade, representando proteção, percepção e expansão da consciência por meio da Merkaba e do simbolismo do olho.",
    details: "Peça em MDF com 70cm x 70cm. Obra exclusiva e feita à mão. Reage à luz UV.",
    price: 800.00,
    images: [
      "image/mandala-pintada/mandala-pintada-visaododivinoexpansaodaconsciencia.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Visão Psicodélica",
    description: "Uma composição de cores fluorescentes, pontilhismo e geometria que representa o despertar da consciência e a descoberta de novas perspectivas.",
    details: "Peça em MDF com 50cm x 50cm. Obra exclusiva e feita à mão. Reage à luz UV.",
    price: 300.00,
    images: [
      "image/mandala-pintada/mandala-pintada-visaopsicodelica.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Merkaba & Flor da Vida",
    description: "A união da Merkaba com a Flor da Vida representa proteção, expansão da consciência e conexão universal em uma composição de cores quentes e frias.",
    details: "Peça em MDF com 30cm x 30cm. Obra exclusiva e feita à mão. Reage à luz UV.",
    price: 250.00,
    images: [
      "image/mandala-pintada/mandala-pintada-merkabaflordavida.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Flor da Consciência",
    description: "Tons de violeta e detalhes amarelos se encontram em uma composição que celebra a espiritualidade, a criatividade e o florescimento da consciência.",
    details: "Peça em MDF com 70cm x 70cm. Obra exclusiva e feita à mão. Possui detalhes com espelhos.",
    price: 500.00,
    images: [
      "image/mandala-pintada/mandala-pintada-flordaconsciencia.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Gaia",
    description: "Inspirada na energia da Terra, combina tons de verde e formas geométricas para transmitir equilíbrio, renovação e conexão com a natureza.",
    details: "Peça em MDF com 54cm x 54cm. Obra exclusiva e feita à mão. Possui detalhes com espelhos.",
    price: 400.00,
    images: [
      "image/mandala-pintada/mandala-pintada-gaia.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Elementar",
    description: "Inspirada nos quatro elementos da natureza, combina Terra, Água, Fogo e Ar em uma composição que celebra conexão, equilíbrio e harmonia.",
    details: "Peça em MDF com 50cm x 50cm. Obra exclusiva e feita à mão.",
    price: 280.00,
    images: [
      "image/mandala-pintada/mandala-pintada-elementar.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Reflexo da Criação",
    description: "Na geometria da vida, cada forma reflete o todo e cada ponto de luz revela uma nova perspectiva do universo.",
    details: "Peça em MDF com 30cm x 30cm. Obra exclusiva e feita à mão. Possui detalhes com espelhos.",
    price: 200.00,
    images: [
      "image/mandala-pintada/mandala-pintada-reflexodacriacao.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Terra Sagrada",
    description: "Uma obra que representa a conexão com as origens, unindo geometria e matéria em uma composição de força e equilíbrio.",
    details: "Peça em MDF com 25cm x 25cm. Obra exclusiva e feita à mão.",
    price: 100.00,
    images: [
      "image/mandala-pintada/mandala-pintada-terrasagrada.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Mandala pintada - Sol Verde",
    description: "Inspirada na geometria sagrada e na força da natureza, combina tons de verde e detalhes amarelos para representar vitalidade e harmonia.",
    details: "Peça em MDF com 30cm x 30cm. Obra exclusiva e feita à mão. Possui detalhes com espelhos.",
    price: 130.00,
    images: [
      "image/mandala-pintada/mandala-pintada-solverde.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Conjunto de Mandalas - Aterramento",
    description: "Três mandalas que representam a conexão consigo mesmo e com a Terra: Expandir simboliza novas possibilidades, Equilibrar representa harmonia interior e Enraizar evoca estabilidade e presença.",
    details: "Conjunto com três peças em MDF, medindo 50cm, 30cm e 20cm. Obra exclusiva e feita à mão.",
    price: 400.00,
    images: [
      "image/mandala-pintada/mandala-pintada-trioaterramento.png"
    ]
  },
  {
    category: "mandala-pintada",
    name: "Conjunto de Mandalas - Flor da Vida",
    description: "Um conjunto inspirado na Flor da Vida, que simboliza interconexão e harmonia universal. A combinação de branco, azul, turquesa e dourado cria uma composição de leveza e luminosidade.",
    details: "Conjunto com três peças em MDF, medindo 50cm, 30cm e 10cm. Obra exclusiva e feita à mão.",
    price: 350.00,
    images: [
      "image/mandala-pintada/mandala-pintada-flordavida.png",
      "image/mandala-pintada/mandala-pintada-flordavida2.png"
    ]
  },

  {
    category: "acessorios",
    name: "Acessórios - Bag Apollo",
    description: "Uma bolsinha artesanal exclusiva, ideal para guardar pequenos objetos com charme e personalidade.",
    details: "Bolsinha de 14 cm x 8 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 90.00,
    images: [
      "image/acessorios/acessorios-estojoapollo.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Bag Átomo",
    description: "Uma bolsinha artesanal exclusiva, ideal para guardar pequenos objetos com charme e personalidade.",
    details: "Bolsinha de 14 cm x 8 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 90.00,
    images: [
      "image/acessorios/acessorios-estojoatomo.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Bag Fluxo Floral",
    description: "Uma bolsinha artesanal exclusiva, ideal para guardar pequenos objetos com charme e personalidade.",
    details: "Bolsinha de 14 cm x 8 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 90.00,
    images: [
      "image/acessorios/acessorios-estojofluxofloral.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Bag Mandala Mística",
    description: "Uma bolsinha artesanal exclusiva, ideal para guardar pequenos objetos com charme e personalidade.",
    details: "Bolsinha de 14 cm x 8 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 90.00,
    images: [
      "image/acessorios/acessorios-estojomandalamistica.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Bag Metamorfose",
    description: "Uma bolsinha artesanal exclusiva, ideal para guardar pequenos objetos com charme e personalidade.",
    details: "Bolsinha de 14 cm x 8 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 90.00,
    images: [
      "image/acessorios/acessorios-estojometamorfose.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Bag Transmutar",
    description: "Uma bolsinha artesanal exclusiva, ideal para guardar pequenos objetos com charme e personalidade.",
    details: "Bolsinha de 10 cm x 6 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 50.00,
    images: [
      "image/acessorios/acessorios-estojotransmutar.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Porta-Joias Flor da Vida Roxo",
    description: "Uma caixa artesanal exclusiva para guardar suas joias e pequenos acessórios.",
    details: "Caixa de 20 cm x 15 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 120.00,
    images: [
      "image/acessorios/acessorios-portajoiaflordavidaroxo.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Porta-Joias Flor da Vida",
    description: "Uma caixa artesanal exclusiva para guardar suas joias e pequenos acessórios.",
    details: "Caixa de 20 cm x 15 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 150.00,
    images: [
      "image/acessorios/acessorios-portajoiaflordavida.png",
      "image/acessorios/acessorios-portajoiaflordavida.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Porta-Joias Chama Violeta",
    description: "Uma caixa artesanal exclusiva para guardar suas joias e pequenos acessórios.",
    details: "Caixa de 11 cm x 11 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 100.00,
    images: [
      "image/acessorios/acessorios-portajoiachamavioleta.png",
    ]
  },
  {
    category: "acessorios",
    name: "Acessórios - Porta-Joias Tesserato",
    description: "Uma caixa artesanal exclusiva para guardar suas joias e pequenos acessórios.",
    details: "Caixa de 20 cm x 11 cm, feita à mão. Obra exclusiva que reage à luz UV.",
    price: 150.00,
    images: [
      "image/acessorios/acessorios-portajoiaTesserato.png",
    ]
  },
  {
  category: "brincos",
  name: "Brincos - Espiral",
  description: "Brincos artesanais com bordados delicados e formas em espiral, trazendo movimento e personalidade ao visual.",
  details: "Brinco de 7 cm a 8 cm, com tamanho à escolha do cliente. Base de madeira, confeccionado com técnicas de bordado. Reage à luz UV.",
  price: 60.00,
  images: [
    "image/brincos/brincos-espiral1.png",
    "image/brincos/brincos-espiral2.png",
    "image/brincos/brincos-espiral3.png",
  ]
  },
  {
    category: "brincos",
    name: "Brincos - Transmutar",
    description: "Uma peça artesanal que combina formas geométricas e bordados, simbolizando transformação e renovação.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 70.00,
    images: [
      "image/brincos/brincos-transmutar.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Chakras",
    description: "Cores e formas inspiradas nos chakras, em uma peça artesanal cheia de significado e expressão.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 80.00,
    images: [
      "image/brincos/brincos-chakras.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Pulse",
    description: "Brincos artesanais com bordados que valorizam o movimento e a beleza dos detalhes.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 70.00,
    images: [
      "image/brincos/brincos-pulse.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Fogo",
    description: "Uma peça artesanal inspirada na energia e na intensidade do fogo.",
    details: "Brinco de 7 cm x 7 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 50.00,
    images: [
      "image/brincos/brincos-fogo.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - 7 Chakras",
    description: "Uma composição colorida inspirada nos sete chakras, feita para expressar equilíbrio e personalidade.",
    details: "Brinco de 7 cm x 7 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 60.00,
    images: [
      "image/brincos/brincos-7chakras.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Expansão",
    description: "Uma peça artesanal de formas delicadas, inspirada na expansão e na liberdade.",
    details: "Brinco de 7 cm x 7 cm, com base de madeira. Reage à luz UV.",
    price: 40.00,
    images: [
      "image/brincos/brincos-expansao.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Íris",
    description: "Brincos artesanais com detalhes bordados, inspirados na beleza e na diversidade das cores.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 60.00,
    images: [
      "image/brincos/brincos-iris.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Arco",
    description: "Uma peça artesanal que combina formas e bordados em uma composição cheia de personalidade.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 50.00,
    images: [
      "image/brincos/brincos-arco.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Espiralado",
    description: "Brincos artesanais com desenho espiralado e acabamento bordado, trazendo movimento ao visual.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 60.00,
    images: [
      "image/brincos/brincos-espiralado.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Butterfly",
    description: "Uma peça artesanal inspirada na leveza e na transformação das borboletas.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 60.00,
    images: [
      "image/brincos/brincos-butterfly.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Lírio",
    description: "Brincos artesanais com formato delicado, inspirados na elegância e na beleza do lírio.",
    details: "Brinco de 8 cm x 6 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 60.00,
    images: [
      "image/brincos/brincos-lirio.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Gota",
    description: "Uma peça artesanal de formato delicado, com linhas simples e elegantes.",
    details: "Brinco de 7 cm x 5 cm, com base de madeira.",
    price: 50.00,
    images: [
      "image/brincos/brincos-gota.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Olho Grego",
    description: "Brincos artesanais inspirados no símbolo do olho grego, tradicionalmente associado à proteção.",
    details: "Opções de tamanho: brinco de 5 cm x 5 cm ou modelo gota de 7 cm x 5 cm. Base de madeira.",
    price: 40.00,
    images: [
      "image/brincos/brincos-olhogrego.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Ser",
    description: "Uma peça artesanal que convida à expressão da individualidade e da conexão consigo mesmo.",
    details: "Brinco de 8 cm x 8 cm, com base de madeira e técnicas de bordado. Reage à luz UV.",
    price: 60.00,
    images: [
      "image/brincos/brincos-ser.png",
    ]
  },
  {
    category: "brincos",
    name: "Brincos - Terra",
    description: "Brincos artesanais em formato de gota, inspirados na conexão com a natureza e a terra.",
    details: "Brinco gota de 8 cm x 6 cm, com base de madeira.",
    price: 40.00,
    images: [
      "image/brincos/brincos-terra.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Chaveiro - Chakras",
    description: "Um chaveiro artesanal inspirado nos chakras, com bordados coloridos e detalhes que expressam equilíbrio e personalidade.",
    details: "Chaveiro de 10 cm x 10 cm, com base de aço inox e técnicas de bordado. Reage à luz UV.",
    price: 80.00,
    images: [
      "image/chaveiros/chaveiro-chakras.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Chaveiro - Lua",
    description: "Uma peça artesanal inspirada na lua, trazendo delicadeza e simbolismo para acompanhar o dia a dia.",
    details: "Chaveiro de 10 cm x 10 cm, com base de aço inox e técnicas de bordado. Reage à luz UV.",
    price: 70.00,
    images: [
      "image/chaveiros/chaveiro-lua.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Espiral",
    description: "Um conjunto artesanal com peças bordadas que combinam entre si, criando uma composição cheia de personalidade.",
    details: "Conjunto com brincos de 8 cm, base de madeira, chaveiro de 5 cm e colar de 8 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 150.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-espiral.png",
      "image/chaveiros/chaveiro-conjunto-espiral2.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Íris",
    description: "Uma combinação artesanal de brincos e chaveiro, com bordados que valorizam os detalhes e as cores.",
    details: "Conjunto com brincos de 8 cm e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 110.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-iris.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Amuleto",
    description: "Um conjunto artesanal que une brincos e colar em uma composição especial, inspirada na ideia de amuleto.",
    details: "Conjunto com brincos de 8 cm, base de madeira, e colar de 8 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 150.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-amuleto.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Harmonia",
    description: "Uma combinação de brincos e chaveiro feita à mão, com detalhes bordados que celebram a harmonia entre as peças.",
    details: "Conjunto com brincos de 8 cm, base de madeira, e chaveiro de 5 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 110.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-harmonia.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Espirar",
    description: "Uma combinação artesanal de brincos e chaveiro com formas inspiradas no movimento das espirais.",
    details: "Conjunto com brincos de 8 cm, base de madeira, e chaveiro de 5 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 110.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-espirar.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Transmute",
    description: "Peças artesanais que representam transformação e movimento, reunidas em uma composição exclusiva.",
    details: "Conjunto com brincos de 6 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 150.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-transmute.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Chama",
    description: "Uma combinação artesanal inspirada na energia da chama, com detalhes bordados e cheios de personalidade.",
    details: "Conjunto com brincos de 8 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 120.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-chama.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Micélio",
    description: "Um conjunto artesanal inspirado nas conexões da natureza, com peças bordadas feitas à mão.",
    details: "Conjunto com brincos de 6 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 120.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-micelio.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Lunar",
    description: "Uma composição artesanal inspirada na lua e em sua delicadeza, reunindo brincos e chaveiro.",
    details: "Conjunto com brincos de 8 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 120.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-lunar.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Vórtice",
    description: "Um conjunto artesanal com formas marcantes e bordados que trazem movimento à composição.",
    details: "Conjunto com brincos de 8 cm x 6 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 120.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-vortice.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Olho Grego",
    description: "Uma combinação artesanal inspirada no símbolo do olho grego, tradicionalmente associado à proteção.",
    details: "Conjunto com brincos de 6 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 120.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-olhogrego.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Vermelho Força",
    description: "Uma composição artesanal marcada pela presença do vermelho, simbolizando força e intensidade.",
    details: "Conjunto com brincos de 6 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 100.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-vermelhoforca.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Terral",
    description: "Uma combinação artesanal inspirada na conexão com a terra, reunindo formas delicadas e detalhes bordados.",
    details: "Conjunto com brincos em formato de gota de 8 cm x 6 cm, base de madeira, e chaveiro de 10 cm, com base de aço inox. Confeccionado com técnicas de bordado. Reage à luz UV.",
    price: 100.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-terral.png",
    ]
  },
  {
    category: "chaveiro",
    name: "Conjunto - Acende",
    description: "Um conjunto artesanal com detalhes bordados e um cristal escolhido para complementar a composição.",
    details: "Conjunto com brincos de 6 cm x 6 cm, base de madeira, e chaveiro de 8 cm, com base de aço inox. Confeccionado com técnicas de bordado, reage à luz UV e acompanha cristal a combinar.",
    price: 110.00,
    images: [
      "image/chaveiros/chaveiro-conjunto-acende.png",
    ]
  },
];

const categoryNames = {
  "mandala-pintada": "Mandala pintada",
  "mandala-tecida": "Mandala tecida",
  "chaveiro": "Chaveiros",
  "brincos": "Brincos",
  "porta-treco": "Porta-treco"
};

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });


function productCard(product) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto "${product.name}" (${money(product.price)}). Ele está disponível?`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


  // Aceita tanto images quanto image, para compatibilidade
  const images = product.images?.length
    ? product.images
    : [product.image].filter(Boolean);

  const galleryId = `gallery-${Math.random().toString(36).slice(2, 10)}`;

  const imageSlides = images.map((src, index) => `
    <img
      class="product-image gallery-slide"
      src="${src}"
      alt="${product.name} - foto ${index + 1}"
      loading="${index === 0 ? "eager" : "lazy"}"
      style="${index === 0 ? "" : "display:none"}"
      onerror="this.onerror=null;this.src='https://placehold.co/700x570/F0E8D9/34483A?text=Foto+indisponivel';"
    >
  `).join("");

  const arrows = images.length > 1 ? `
    <button class="gallery-arrow gallery-prev" type="button"
      aria-label="Foto anterior" data-direction="-1">‹</button>
    <button class="gallery-arrow gallery-next" type="button"
      aria-label="Próxima foto" data-direction="1">›</button>
    <div class="gallery-dots" aria-label="Selecionar foto">
      ${images.map((_, index) => `
        <button type="button"
          class="gallery-dot ${index === 0 ? "active" : ""}"
          aria-label="Ir para foto ${index + 1}"
          aria-pressed="${index === 0}"
          data-index="${index}"></button>
      `).join("")}
    </div>
  ` : "";

  return `
    <article class="product-card">
      <div class="product-gallery" id="${galleryId}" data-gallery>
        ${imageSlides}
        ${arrows}
      </div>

      <div class="product-info">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${money(product.price)}</p>
        <button
          class="button-link details-button"
          type="button"
          data-product-name="${product.name}"
        >
          Ver detalhes
        </button>
        <a class="button-link" href="${whatsappUrl}"
          target="_blank" rel="noreferrer">
          Consultar disponibilidade
        </a>
      </div>
    </article>`;
}

//Configura o modal de detalhes do produto

const productModal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

function openProductModal(product) {
  const images = product.images?.length
    ? product.images
    : [product.image].filter(Boolean);

  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto "${product.name}" (${money(product.price)}). Ele está disponível?`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  modalContent.innerHTML = `
    <div class="modal-gallery product-gallery" data-gallery>
      ${images.map((src, index) => `
        <img
          class="product-image gallery-slide"
          src="${src}"
          alt="${product.name} - foto ${index + 1}"
          style="${index === 0 ? "" : "display:none"}"
          onerror="this.onerror=null;this.src='https://placehold.co/700x570/F0E8D9/34483A?text=Foto+indisponivel';"
        >
      `).join("")}

      ${images.length > 1 ? `
        <button class="gallery-arrow gallery-prev"
          type="button" aria-label="Foto anterior"
          data-direction="-1">‹</button>

        <button class="gallery-arrow gallery-next"
          type="button" aria-label="Próxima foto"
          data-direction="1">›</button>

        <div class="gallery-dots">
          ${images.map((_, index) => `
            <button
              type="button"
              class="gallery-dot ${index === 0 ? "active" : ""}"
              aria-label="Ir para foto ${index + 1}"
              aria-pressed="${index === 0}"
              data-index="${index}"
            ></button>
          `).join("")}
        </div>
      ` : ""}
    </div>

    <div class="modal-product-info">
      <h2 id="modal-title">${product.name}</h2>
      <p class="modal-price">${money(product.price)}</p>
      <h3>Sobre a peça</h3>
      <p class="modal-description">${product.details || product.description}</p>

      <a class="button-link modal-whatsapp"
        href="${whatsappUrl}" target="_blank" rel="noreferrer">
        Consultar disponibilidade pelo WhatsApp
      </a>
    </div>
  `;

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  setupGalleries();
  modalClose.focus();
}

function closeProductModal() {
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", event => {
  const button = event.target.closest(".details-button");

  if (button) {
    const product = products.find(
      item => item.name === button.dataset.productName
    );

    if (product) openProductModal(product);
  }
});

modalClose.addEventListener("click", closeProductModal);

productModal.addEventListener("click", event => {
  if (event.target === productModal) {
    closeProductModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && productModal.classList.contains("is-open")) {
    closeProductModal();
  }
});


// Renderiza os produtos em um container específico
function renderProducts(target, items) {
  const container = document.getElementById(target);
  container.innerHTML = items.length
    ? items.map(productCard).join("")
    : '<p class="empty-state">Ainda não há produtos cadastrados nesta categoria.</p>';
  setupGalleries();
}

// Configura as galerias de imagens
function setupGalleries() {
  document.querySelectorAll("[data-gallery]").forEach(gallery => {
    if (gallery.dataset.ready === "true") return;
    gallery.dataset.ready = "true";

    const slides = [...gallery.querySelectorAll(".gallery-slide")];
    const dots = [...gallery.querySelectorAll(".gallery-dot")];

    if (slides.length <= 1) return;

    let current = 0;
    let touchStartX = 0;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.style.display = i === current ? "block" : "none";
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
        dot.setAttribute("aria-pressed", String(i === current));
      });
    }

    gallery.querySelectorAll(".gallery-arrow").forEach(button => {
      button.addEventListener("click", () => {
        showSlide(current + Number(button.dataset.direction));
      });
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });

    gallery.addEventListener("touchstart", event => {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    gallery.addEventListener("touchend", event => {
      const touchEndX = event.changedTouches[0].screenX;
      const difference = touchEndX - touchStartX;

      if (Math.abs(difference) > 40) {
        showSlide(current + (difference < 0 ? 1 : -1));
      }
    }, { passive: true });
  });
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(section => section.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  if (page === "inicio") {
    document.getElementById("page-inicio").classList.add("active");
  } else if (page === "sobre") {
    document.getElementById("page-sobre").classList.add("active");
  } else {
    document.getElementById("page-categoria").classList.add("active");
    document.getElementById("category-title").textContent = categoryNames[page] || "Acessórios";
    document.getElementById("category-description").textContent = `Conheça nossas peças de ${categoryNames[page]?.toLowerCase() || "artesanato"}.`;
    renderProducts("category-products", products.filter(product => product.category === page));
  }

  document.querySelector(".main-nav").classList.remove("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

renderProducts("featured-products", products);
document.querySelectorAll("[data-page]").forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();
    showPage(element.dataset.page);
  });
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const isOpen = nav.classList.toggle("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(isOpen));
});


const bannerCarousel = document.getElementById("banner-carousel");

if (bannerCarousel) {
  const slides = [...bannerCarousel.querySelectorAll(".banner-slide")];
  const indicators = [...bannerCarousel.querySelectorAll(".banner-indicators button")];
  let currentBanner = 0;
  let bannerTimer;

  function showBanner(index) {
    currentBanner = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentBanner);
    });

    indicators.forEach((button, i) => {
      button.classList.toggle("active", i === currentBanner);
    });
  }

  function restartBannerTimer() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(() => {
      showBanner(currentBanner + 1);
    }, 5000);
  }

  bannerCarousel.querySelector(".banner-prev").addEventListener("click", () => {
    showBanner(currentBanner - 1);
    restartBannerTimer();
  });

  bannerCarousel.querySelector(".banner-next").addEventListener("click", () => {
    showBanner(currentBanner + 1);
    restartBannerTimer();
  });

  indicators.forEach((button, index) => {
    button.addEventListener("click", () => {
      showBanner(index);
      restartBannerTimer();
    });
  });

  bannerCarousel.addEventListener("mouseenter", () => {
    clearInterval(bannerTimer);
  });

  bannerCarousel.addEventListener("mouseleave", restartBannerTimer);

  restartBannerTimer();
}
