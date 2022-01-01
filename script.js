let cartaContador = 0;
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

function alterarClass2(evento) {
  evento.target.className = listaClasses[sorteio()];
}

/* function alterarClass() {
  const elementos = document.getElementsByTagName('span');
  for (let i = 0; i < elementos.length; i += 1) {
    elementos[i].className = listaClasses[sorteio()];
  }
} */

function gerarTexto(palavra) {
  const texto = document.getElementById(cartaGerada);
  const carta = document.createElement('span');
  carta.innerText = palavra;
  carta.setAttribute('class', listaClasses[sorteio()]);
  texto.appendChild(carta);
  carta.addEventListener('click', alterarClass2);
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
