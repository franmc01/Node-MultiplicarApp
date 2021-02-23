const fs = require('fs');

const multiplicar = async (base = 1) => {

    try {
        console.log('----------------------');
        console.log('     Tabla del: ', base);
        console.log('----------------------');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return "Archivo creado correctamente";
    } catch (error) {
        throw error
    }

}

module.exports = {
    multiplicar
}