// Edite aqui os cursos, valores e links quando estiverem confirmados.
// As fotos individuais podem ser adicionadas em assets/ e informadas no campo foto.
window.CURSOS = [
  {id:'trio-ternura', nome:'Trio Ternura', preco:157, foto:'', descricao:'Conheça o curso Trio Ternura e descubra os detalhes desta criação do ateliê.', checkout:''},
  {id:'maluly', nome:'Maluly', preco:85, foto:'', descricao:'Um curso especial do Ateliê Agulha e Pano.', checkout:''},
  {id:'emilia', nome:'Emília', preco:49, foto:'', descricao:'Conheça o curso da boneca Emília.', checkout:''},
  {id:'mole', nome:'Mole', preco:49, foto:'', descricao:'Conheça os detalhes deste curso de boneca de pano.', checkout:''},
  {id:'nenem-doll', nome:'Neném Doll', preco:75, foto:'', descricao:'Conheça o curso Neném Doll.', checkout:''},
  {id:'mimos-em-trio', nome:'Mimos em Trio', preco:157, foto:'', descricao:'Conheça o curso Mimos em Trio.', checkout:''},
  {id:'bebe-cebolinha', nome:'Bebê Cebolinha', preco:73, foto:'', descricao:'Conheça o curso Bebê Cebolinha.', checkout:''},
  {id:'maria-flor', nome:'Maria Flor', preco:197, foto:'', descricao:'Conheça o curso Maria Flor.', checkout:''},
  {id:'clarinha', nome:'Clarinha', preco:79, foto:'', descricao:'Conheça o curso Clarinha.', checkout:''}
];
window.moeda = valor => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(valor);
