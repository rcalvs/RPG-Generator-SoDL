// const xd6 = Math.ceil(Math.random() * 6) * 3;
// console.log(xd6);

const humanPersonality = {
    3 : 'O personagem é cruel, maldoso e egoísta. Ele gosta de fazer outros sofrerem.',
    4 : '4 - O personagem é errático e imprevisível. Ele tem dificuldades para manter sua palavra e tende a ter comportamentos inconstantes.',
    5 : 'O poder é o que importa. Obediência à autoridade é seu maior ideal.',
    6 : 'O poder é o que importa. Obediência à autoridade é seu maior ideal.',
    7 : 'O personagem cuida de si mesmo antes de tudo. Ele consideraria trair seus amigos.',
    8 : 'O personagem cuida de si mesmo antes de tudo. Ele consideraria trair seus amigos.',
    9 : 'O personagem coloca os seus interesses e os dos seus amigos acima de tudo.',
    10 : 'O personagem coloca os seus interesses e os dos seus amigos acima de tudo.',
    11 : 'O personagem coloca os seus interesses e os dos seus amigos acima de tudo.',
    12 : 'O personagem coloca os seus interesses e os dos seus amigos acima de tudo.',
    13 : 'O personagem ajuda os outros porque é a coisa certa a se fazer.',
    14 : 'O personagem ajuda os outros porque é a coisa certa a se fazer.',
    15 : 'O personagem tenta fazer o que acha certo, mesmo que quebre leis e convenções sociais.',
    16 : 'O personagem tenta fazer o que acha certo, mesmo que quebre leis e convenções sociais.',
    17 : 'Sua honra e dever guiam tudo que faz.',
    18 : 'O personagem está comprometido com causas nobres e boas. Ele nunca se separa de suas crenças mesmo que a recusa custe sua vida.',
};

const humanReligion = {
    3 : 'O personagem pertence a um culto dedicado a um poder sombrio.',
    4 : 'O personagem pertence a uma seita herege.',
    5 : 'O personagem foi criado nos ensinamentos da bruxaria.',
    6 : 'O personagem foi criado nos ensinamentos da bruxaria.',
    7 : 'O personagem segue os dogmas da Fé Antiga.',
    8 : 'O personagem segue os dogmas da Fé Antiga.',
    9 : 'O personagem segue os dogmas da Fé Antiga.',
    10 : 'O personagem segue os dogmas da Fé Antiga.',
    11 : 'O personagem pertence ao Culto do Novo Deus.',
    12 : 'O personagem pertence ao Culto do Novo Deus.',
    13 : 'O personagem pertence ao Culto do Novo Deus.',
    14 : 'O personagem pertence ao Culto do Novo Deus.',
    15 : 'O personagem pertence ao Culto do Novo Deus.',
    16 : 'O personagem não tem religião.',
    17 : 'O personagem não tem religião.',
    18 : 'O personagem não tem religião.',
};

const humanAge = {
    3: 'O personagem é uma criança, 11 anos de idade ou mais jovem.',
    4: 'O personagem é um adolescente, 12 a 17 anos de idade.',
    5: 'O personagem é um adolescente, 12 a 17 anos de idade.',
    6: 'O personagem é um adolescente, 12 a 17 anos de idade.',
    7: 'O personagem é um adolescente, 12 a 17 anos de idade.',
    8: 'O personagem é um jovem adulto, 18 a 35 anos de idade.',
    9: 'O personagem é um jovem adulto, 18 a 35 anos de idade.',
    10: 'O personagem é um jovem adulto, 18 a 35 anos de idade.',
    11: 'O personagem é um jovem adulto, 18 a 35 anos de idade.',
    12: 'O personagem é um jovem adulto, 18 a 35 anos de idade.',
    13: 'O personagem é um adulto de meia idade, 36 a 55 anos de idade.',
    14: 'O personagem é um adulto de meia idade, 36 a 55 anos de idade.',
    15: 'O personagem é um adulto de meia idade, 36 a 55 anos de idade.',
    16: 'O personagem é um adulto mais velho, 56 a 75 anos de idade.',
    17: 'O personagem é um adulto mais velho, 56 a 75 anos de idade.',
    18: 'O personagem é um adulto venerável, 76 anos ou mais velho.',
};

const humanStature = {
    3 : 'O personagem é baixo e magro.',
    4 : 'O personagem é baixo e pesado.',
    5 : 'O personagem é baixo.',
    6 : 'O personagem é baixo.',
    7 : 'O personagem é magro.',
    8 : 'O personagem é magro.',
    9 : 'O personagem tem altura e peso medianos.',
    10 : 'O personagem tem altura e peso medianos.',
    11 : 'O personagem tem altura e peso medianos.',
    12 : 'O personagem tem altura e peso medianos.',
    13 : 'O personagem está um pouco acima do peso.',
    14 : 'O personagem está um pouco acima do peso.',
    15 : 'O personagem é alto.',
    16 : 'O personagem é alto.',
    17 : 'O personagem é alto e magro.',
    18 : 'O personagem é muito alto e pesado',
};

const humanAparency = {
    3 : 'O personagem é hediondo. Ele parece um monstro. As crianças choram quando o encontram, os fracos do coração desmaiam ao vê-lo e uma pessoa já vomitou depois de olhar bem para seu rosto.',
    4 : 'O personagem é feio, as pessoas acham sua fisionomia desagradável devido a uma cicatriz, verrugas, testa saliente, furúnculos, hemorroidas, um olho preguiçoso ou lacrimejante, ou algo de mesma magnitude.',
    5 : 'A maioria o considera rústico: não feio, mas um pouco pior que o normal.',
    6 : 'A maioria o considera rústico: não feio, mas um pouco pior que o normal.',
    7 : 'O personagem é comum e desinteressante para o olhar. As pessoas o percebem, mas sua aparência não impressiona.',
    8 : 'O personagem é comum e desinteressante para o olhar. As pessoas o percebem, mas sua aparência não impressiona.',
    9 : 'O personagem tem uma aparência perfeitamente comum. Ele se mistura na multidão.',
    10 : 'O personagem tem uma aparência perfeitamente comum. Ele se mistura na multidão.',
    11 : 'O personagem tem uma aparência perfeitamente comum. Ele se mistura na multidão.',
    12 : 'O personagem tem uma aparência perfeitamente comum. Ele se mistura na multidão.',
    13 : 'O personagem tem uma característica física que o torna atraente aos outros. Ele pode ter belos olhos, lábios, cabelo, estatura ou algo mais.',
    14 : 'O personagem tem uma característica física que o torna atraente aos outros. Ele pode ter belos olhos, lábios, cabelo, estatura ou algo mais.',
    15 : 'O personagem tem diversas características físicas atraentes que o tornam bastante belo.',
    16 : 'O personagem tem diversas características físicas atraentes que o tornam bastante belo.',
    17 : 'O personagem é uma das grandes beldades da região, um indivíduo de forma e aparência quase insuperáveis. As pessoas notam sua presença.',
    18 : 'O personagem deixa pessoas belas envergonhadas. Ele é estonteante, cabeças se viram para acompanhá-lo por onde passa. As pessoas se tornam enamoradas por ele, gaguejando e se sentindo ruborizadas quando ele lhes dá atenção. Existe uma linha tênue entre amor e ódio. Caso o personagem despreze as pessoas que se enamoram por ele, essa afeição pode se tornar amargura e ressentimento, chegando até mesmo ao ódio.',
};

const humanAntecessor = {
    1 : 'O personagem morreu e voltou a vida. Ele começa o jogo com 1d6 de Insanidade.',
    2 : 'O personagem foi brevemente possuído por um demônio. Ele começa o jogo com 1 de Corrupção.',
    3 : 'O personagem passou 1d6 anos como prisioneiro de uma masmorra.    ',
    4 : 'O personagem matou alguém a sangue frio. Ele começa o jogo com 1 de Corrupção.',
    5 : 'O personagem contraiu e se recuperou de uma doença terrível.',
    6 : 'O personagem pertencia a um culto estranho e viu muitas coisas estranhas. Ele começa o jogo com 1 de Insanidade.',
    7 : 'As fadas o mantiveram prisioneiro por 1d20 anos.',
    8 : 'O personagem perdeu um ente querido e essa perda ainda o assombra.',
    9 : 'O personagem perdeu um dedo, ou alguns dentes, ou uma orelha, ou possui uma cicatriz.',
    10 : 'O personagem ganha a vida trabalhando em uma profissão.',
    11 : 'O personagem se apaixonou e o relacionamento terminou bem ou ainda existe.',
    12 : 'O personagem tem um cônjuge e 1d6-2 filhos (mínimo 0).',
    13 : 'O personagem viajou muito. Ele fala um idioma adicional.',
    14 : 'O personagem recebeu educação. Ele sabe ler a língua comum.',
    15 : 'O personagem salvou sua cidade de monstros terríveis.',
    16 : 'O personagem frustrou um plano para matar alguém importante e levou o assassino à justiça.',
    17 : 'O personagem executou um grande feito e é um herói para as pessoas de sua cidade natal.',
    18 : 'O personagem encontrou um velho mapa do tesouro.',
    19 : 'Alguém importante e poderoso deve um favor ao personagem.',
    20 : 'O personagem conseguiu algum dinheiro e começa o jogo com 2d6 cc.',
};


function randomize() {
    const randomGen1d6 = Math.ceil(Math.random() * 6);
    const randomGen2d6 = Math.ceil(Math.random() * 6);
    const randomGen3d6 = Math.ceil(Math.random() * 6);
    const sum3d6 = randomGen1d6 + randomGen2d6 + randomGen3d6
    return sum3d6
  }
  
  function humam() {
  
  const rightContent = document.querySelector('text');
  rightContent.innerText = randomize()
      console.log(randomize(), humanPersonality[randomize()], randomize(), humanReligion[randomize()], randomize(), humanAge[randomize()], randomize(), humanStature[randomize()], randomize(), humanAparency[randomize()],randomize(), humanAntecessor[randomize()])
  }
  //function deuCerto() {
  //  console.log("deu Certo");
  //}
  
  //btn.addEventListener('click', deuCerto());

// console.log(humanPersonality[xd3])


// function personality () {
//     const
// }