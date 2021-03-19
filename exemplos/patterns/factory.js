function Pessoa(customProperties) {
    return {
        name: 'Greice',
        lasName: 'Mara',
        ...customProperties
    }
}

const p = Pessoa({ name: 'Custom name', age: 23 });
console.log(p);