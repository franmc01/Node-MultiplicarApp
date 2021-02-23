const { multiplicar } = require('./helpers/multiplicar')

console.clear();

multiplicar(1).then(na=>console.log(na))
              .catch(err => console.log(err));