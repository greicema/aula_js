let user = {
    name: 'Greice'
};

//Alterando a propriedade de um objeto
console.log(user);

user.name = "Outro nome 1";
console.log(user);
user["name"] = "Outro nome 2";

console.log(user);
const prop = "name";
user[prop] = "Outro nome 3";
console.log(user);

function getProp(prop) {
    return user[prop]
}

//Criando uma propriedade
user.lastName = 'Mara de Jesus';
console.log(user);

//Deletando uma propriedade
delete user.name;
console.log(user);