const { multiplicar } = require('./helpers/multiplicar')

console.clear();
const { 2 : entrada } = process.argv;
const { 1 : base } = entrada.split('=');

multiplicar(base).then(na=>console.log(na))
              .catch(err => console.log(err));