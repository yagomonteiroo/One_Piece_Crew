const btns = document.querySelectorAll('.botao');
const shadow = document.querySelector('.shadow');
const bg = document.querySelector('.img-bg');
const logo = document.querySelector('.logo'); 
const nome = document.querySelector('.nome-personagem');
const descricao = document.querySelector('.descricao');

btns.forEach( btn => {
  btn.addEventListener('click', (e) => {

    shadow.style.background = 'linear-gradient(-233deg, #000 40%, rgba(0, 0, 0, 0) 65%) no-repeat';

    if(btn.classList.contains("botao__brook")){
      document.title = 'Brook | One Piece'
      bg.src='./assets/img/brook-bg.png';
      nome.textContent = "Brook";
      descricao.textContent = "Brook é o Músico dos Piratas do Chapéu de Palha. Ele é um esqueleto que os Chapéus de Palha encontraram a bordo de um navio fantasma. Ele é um usuário dae Akuma no Mi Yomi Yomi no Mi, o que o torna um pseudo-imortal por causa de seus poderes.";
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-brook')
    }

    if(btn.classList.contains("botao__chopper")){
      document.title = 'Chopper | One Piece'
      bg.src='./assets/img/chopper-bg.png';
      nome.textContent = "Tony Chopper";
      descricao.textContent = "Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação. Seu sonho é inventar a cura para todas as doenças do mundo.";
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-chopper')
    }

    if(btn.classList.contains("botao__sanji")){
      document.title = 'Sanji | One Piece'
      bg.src='./assets/img/sanji-bg.png';
      nome.textContent = "Sanji";
      descricao.textContent = 'Também conhecido como "Perna Negra" Sanji, este pirata foi o quinto a integrar a tripulação de Luffy. Suas ações como pirata lhe renderam a terceira maior recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro oficial do grupo. Seu sonho é encontrar o All Blue, um lugar onde os peixes de todos os quatro oceanos (North Blue, South Blue, East Blue e West Blue) vivem.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-sanji')
    }

    if(btn.classList.contains("botao__zoro")){
      document.title = 'Zoro | One Piece';
      bg.src='./assets/img/zoro-bg.png';
      nome.textContent = "Rononoa Zoro";
      descricao.textContent = 'Também conhecido como "Caçador de Piratas", Zoro é um ex-caçador de recompensas e foi o primeiro membro a se juntar à tripulação. Sua força e fama como mestre espadachim levam a acreditar que ele seja o imediato de Luffy. Zoro é um dos 4 melhores lutadores da tripulação, ao lado de Luffy, Sanji e Jinbe. Seu sonho é se tornar o maior espadachim do mundo.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-zoro')
    }

    if(btn.classList.contains("botao__luffy")){
      document.title = 'Luffy | One Piece'
      bg.src='./assets/img/luffy-bg.png';
      nome.textContent = "Monkey D. Luffy";
      descricao.textContent = '"Luffy do Chapéu de Palha", como ficou conhecido, é o protagonista do anime, e o fundador e capitão da tripulação Piratas do Chapéu de Palha. Desde muito jovem, tem como seu maior sonho um dia encontrar o lendário tesouro de Gol D. Roger, para se tornar o novo Rei dos Piratas.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-luffy')
    }

    if(btn.classList.contains("botao__nami")){
      document.title = 'Nami | One Piece'
      bg.src='./assets/img/nami-bg.png';
      nome.textContent = "Nami";
      descricao.textContent = 'Uma órfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia desenhar um mapa de todos os mares com todos os lugares mundo mapeados nele.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-nami')
    }

    if(btn.classList.contains("botao__usopp")){
      document.title = 'Usopp | One Piece'
      bg.src='./assets/img/usopp-bg.jpg';
      nome.textContent = "Usopp";
      descricao.textContent = 'Também conhecido como "God Usopp", Usopp é o Atirador dos Piratas do Chapéu de Palha. Ele é o quarto membro da tripulação e o terceiro a entrar. Apesar de sua covardia, Usopp sonha em se tornar um corajoso guerreiro do mar como seu pai Yasopp (atirador dos Piratas do Ruivo). Usopp recebe o posto de 5° Comandante já que a marinha o nomeou um dos comandantes de Luffy.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-usopp')
    }

    if(btn.classList.contains("botao__robin")){
      document.title = 'Robin | One Piece'
      bg.src='./assets/img/robin-bg.jpg';
      nome.textContent = "Nico Robin";
      descricao.textContent = 'Nico Robin, também conhecida como a "Criança Demônio" e/ou a "Luz da Revolução",é a arqueóloga dos Chapéus de Palha e a sétima integrante da tripulação. Ela é a única sobrevivente da ilha destruída de Ohara e como resultado é, atualmente, a única pessoa no mundo capaz de ler e decifrar os Poneglyphs, uma habilidade considerada proibida e que ameaça o Governo Mundial.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-robin')
    }

    if(btn.classList.contains("botao__franky")){
      document.title = 'Franky | One Piece'
      bg.src='./assets/img/franky-bg.jpg';
      nome.textContent = "Franky";
      descricao.textContent = 'Franky é o carpinteiro (mas ta mais para engenheiro) dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos que sonha construir e dirigir um navio capaz de dar a volta ao mundo (o Thousand Sunny). Ele foi o oitavo membro da tripulação e o sétimo a se juntar ao bando.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-franky')
    }

    if(btn.classList.contains("botao__jinbei")){
      document.title = 'Jinbe | One Piece'
      bg.src='./assets/img/jinbei-bg.jpg';
      nome.textContent = "Jinbe";
      descricao.textContent = 'O "Cavaleiro do Mar", Jinbe, é o timoneiro dos Piratas do Chapéu de Palha. Ele é o décimo membro da tripulação e o nono a se juntar, fazendo isso no Arco do País de Wano. Ele é um homem-peixe e um poderoso mestre do gyojin karate. Seu sonho é realizar o desejo moribundo de seu ex-capitão do Piratas do Sol - Fisher Tiger - de coexistência em igualdade entre humanos e homens-peixe.';
      logo.classList.remove(logo.classList[1]);
      logo.classList.add('logo-jinbei')
    }
  })
})

logo.addEventListener('click', () => {
  document.title = 'Muguiwaras | One Piece'
  shadow.style.background = 'linear-gradient(-233deg, #000 10%, rgba(0, 0, 0, 0) 50%) no-repeat';
  bg.src='./assets/img/tripulacao-bg.jpg';
  nome.textContent = "Os Piratas do Chapéu de Palha";
  descricao.textContent = 'Os Piratas do Chapéu de Palha também conhecidos como "Mugiwaras"ou chapéus de palha, são um grupo de piratas líderados por Monkey D. Luffy, atualmente o grupo possui 10 membros e um total de 6 aliados que formam a grande frota dos Chapéus de Palha.';
  logo.style.backgroundImage = "url('./assets/img/luffy-logo.png')";
  logo.classList.remove(logo.classList[1]);
  logo.classList.add('logo-luffy')
  // main.dataset.background= "none";
})
