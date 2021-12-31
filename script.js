const cartaGerada = 'carta-gerada';
const listaClasses = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotatoleft',
  'rotatoright',
  'skewleft',
  'skewright',
];

function sorteio() {
  return (Math.random() * 9).toFixed(0);
}

function alterarClass(evento) {
  evento.target.setAttribute('class', listaClasses[sorteio()]);
}

function gerarTexto(palavra) {
  console.log(sorteio());
  const texto = document.getElementById(cartaGerada);
  const carta = document.createElement('span');
  carta.innerText = palavra;
  carta.setAttribute('class', listaClasses[sorteio()]);
  texto.appendChild(carta);
  carta.addEventListener('click', alterarClass);
}

function gerarCarta() {
  const contCartaTexto = document.getElementById('carta-texto').value;
  if (contCartaTexto !== ' ' && contCartaTexto !== '') {
    const cartaMisteriosa = document.getElementById('carta-texto').value.split(' ');
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
