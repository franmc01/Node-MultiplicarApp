const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        desc: 'Es el numero de la tabla de multiplicar a generar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: true,
        desc: 'Permite ver o ocultar el resultado de la tabla generada en la consola'

    })
    .option('t', {
        alias: 'txt',
        type: 'boolean',
        default: false,
        desc: 'Permita crear o no un archivo .txt con los datos de la tabla generada'

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }

        return true;
    })
    .argv;


    module.exports = argv;