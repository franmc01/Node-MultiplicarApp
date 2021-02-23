const { multiplicar } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: true

    })
    .option('t', {
        alias: 'txt',
        type: 'boolean',
        demandOption: true,
        default: false

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }

        return true;
    })
    .argv;

multiplicar(argv.b, argv.l, argv.t).then(na=>console.log(na))
              .catch(err => console.log(err));