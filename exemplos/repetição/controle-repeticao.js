//break

console.log('Exemplo da utilização de break');

var index = 0;

while (true) {
    index++;

    if (index > 2) {
        break;
    }
    console.log(index);
}

//continue: pula um interação
console.log('\nExemplo da utilização de continue');
const array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 === 0) {
        continue;
    }
    console.log(element);
}