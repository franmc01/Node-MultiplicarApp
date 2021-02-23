const fs = require('fs');
const colors = require('colors');

const multiplicar = async (base, listar, txt) => {

    try {
        //Elabora la tabla de multiplicacion
        let salida = '';
        let mensaje = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.yellow} ${i} ${colors.magenta('=')} ${base * i}\n`;
        }

        if(listar){
            //Imprime en consola la tabla
            console.clear();
            console.log('----------------------');
            console.log('     Tabla del: ', base);
            console.log('----------------------');
            console.log(salida);

            mensaje = 'Tabla generada con exito';
        }

        if(txt){
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            mensaje = `Archivo con la tabla del ${base} creado correctamente`;
        }

        return mensaje;
    } catch (error) {
        throw error
    }

}

module.exports = {
    multiplicar
}