//Spread
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];
var musica = ['cabeça', 'ombro', 'joelhos', 'e', 'pés']; //é igual à declaração da variável acima

function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args);