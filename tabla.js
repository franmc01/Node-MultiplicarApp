const argv = require('./config/yargs.config');
const { multiplicar } = require('./helpers/multiplicar');


multiplicar(argv.b, argv.l, argv.t).then(na=>console.log(na))
              .catch(err => console.log(err));