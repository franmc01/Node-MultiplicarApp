const fs = require('fs');

const multiplicar = async (base, listar, txt, hasta) => {

    try {
        //Elabora la tabla de multiplicacion
        let salida = '';
        let mensaje = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
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
            fs.writeFileSync(`./docs/tabla-${base}.txt`, salida);
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