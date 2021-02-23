const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: true

    })
    .option('t', {
        alias: 'crear_txt',
        type: 'boolean',
        default: false

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }

        return true;
    })
    .argv;


    module.exports = argv;