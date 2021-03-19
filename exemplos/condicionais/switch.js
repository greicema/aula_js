/*
switch(expressao){
    case valer1:
        [break;]
    case valueN:
        [break;]
    default:
        [break;]
}*/

const fruit = 'pera';

switch (fruit) {
    case 'banana':
        console.log('R$3,00/kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$2,00/kg'); //se os cases tiverem o mesmo resultado, basta acrescentá-los em sequência antes do console.log
        break;
    default:
        console.log('Produto não existe no estoque.');
        break;
}