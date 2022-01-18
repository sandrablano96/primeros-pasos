const fs = require('fs');

//crearArchivo = (base = 5) => {}
function crearArchivo(base = 5) {
    
    let salida = '';

    console.clear();
    console.log('================');
    console.log('Tabla del ', base);
    console.log('================');


    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
    }
    );
    
}
//Ponemos llaves para poder importar algunas cosas y no todo
module.exports = {
    crearArchivo
}