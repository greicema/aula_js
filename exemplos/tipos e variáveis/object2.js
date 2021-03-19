const user = {
    name: 'Greice',
    lasName: 'Mara de Jesus'
}

//Recupera as chaves do objeto
console.log("Propriedades do objeto user: ", Object.keys(user));

//Recuperaos valores das chaves do objeto
console.log("\nValores das propriedades do objeto user: ", Object.values(user));

//Retorna um arrayde arrays contendo [nome_prop, valor_prop]
console.log("\nLista de propriedades e valores: ", Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, { fullName: "Greice Mara de Jesus" });
console.log("\nAdiciona a propriedade fullName no objeto user", user);
console.log("\nRetorna um novo objeto mergeando dois ou mais objetos", Object.assign({}, user, { age: 23 }));

//Previne todas as alterações do projeto
const newObj = { foo: "bar" };
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = 'foo';
console.log("\nVariável newObj após as alterações: ", newObj);

//Permite apenasa a alteração de propriedades existentes em um objeto
const person = { name: 'Greice' };
Object.seal(person);

person.name = 'Greice Mara';
delete person.name;
person.age = 23;
console.log("\nVariável person após as alterações: ", person);