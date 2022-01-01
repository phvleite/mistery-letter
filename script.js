const cartaGerada = 'carta-gerada';
const cartaTexto = 'carta-texto';
const listaClasses = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];

function sorteio() {
  return (Math.random() * 9).toFixed(0);
}

function alterarClass() {
  const elementos = document.querySelectorAll('#carta-gerada>div');
  console.log(elementos);
}

function gerarTexto(palavra) {
  const texto = document.getElementById(cartaGerada);
  const carta = document.createElement('span');
  carta.innerText = palavra;
  carta.setAttribute('class', listaClasses[sorteio()]);
  texto.appendChild(carta);
  carta.addEventListener('click', alterarClass);
}

function gerarCarta() {
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
