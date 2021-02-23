const fs = require('fs');

const multiplicar = async (base, listar, txt) => {

    try {
        //Elabora la tabla de multiplicacion
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar){
            //Imprime en consola la tabla
            console.log('----------------------');
            console.log('     Tabla del: ', base);
            console.log('----------------------');
            console.log(salida);
        }

        if(txt){
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            return `Archivo con la tabla del ${base} creado correctamente`;
        }
    } catch (error) {
        throw error
    }

}

module.exports = {
    multiplicar
}