let cartaContador = 0;
const cartaGerada = 'carta-gerada';
const cartaTexto = 'carta-texto';

const classesEstilo = [
  'newspaper',
  'magazine1',
  'magazine2',
];

const classesTamanho = [
  'medium',
  'big',
  'reallybig',
];

const classesRotacao = [
  'rotateleft',
  'rotateright',
];

const ClassesInclinacao = [
  'skewleft',
  'skewright',
];

function sorteio(qtd) {
  return (Math.random() * qtd).toFixed(0);
}

function alterarClass(evento) {
  const ev = evento;
  ev.target.classList.value = '';
  ev.target.classList.add(classesEstilo[sorteio(2)]);
  ev.target.classList.add(classesTamanho[sorteio(2)]);
  ev.target.classList.add(classesRotacao[sorteio(1)]);
  ev.target.classList.add(ClassesInclinacao[sorteio(1)]);
}

function gerarTexto(palavra) {
  const texto = document.getElementById(cartaGerada);
  const carta = document.createElement('span');
  carta.innerText = palavra;
  carta.classList.add(classesEstilo[sorteio(2)]);
  carta.classList.add(classesTamanho[sorteio(2)]);
  carta.classList.add(classesRotacao[sorteio(1)]);
  carta.classList.add(ClassesInclinacao[sorteio(1)]);
  texto.appendChild(carta);
  carta.addEventListener('click', alterarClass);
  cartaContador += 1;
  document.getElementById('carta-contador').innerText = cartaContador;
}

function gerarCarta() {
  cartaContador = 0;
  document.getElementById('carta-contador').innerText = cartaContador;
  const contCartaTexto = document.getElementById(cartaTexto).value;
  if (contCartaTexto !== ' ' && contCartaTexto !== '') {
    const cartaMisteriosa = document.getElementById(cartaTexto).value.split(' ');
    cartaMisteriosa.forEach((palavra) => gerarTexto(palavra));
    return;
  }
  document.getElementById(cartaGerada).innerText = 'por favor, digite o conteúdo da carta.';
}

function limparTexto() {
  const texto = document.getElementById(cartaGerada);
  while (texto.firstChild) {
    texto.removeChild(texto.firstChild);
  }
  gerarCarta();
}

const btCriarCarta = document.getElementById('criar-carta');
btCriarCarta.addEventListener('click', limparTexto);
