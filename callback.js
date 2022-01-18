/*
setInterval(() => {
    //codigo que ejecutamos
    console.log('Hola mundo');
}, 1500);
*/

let plantilla = [
    {
        id : 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Maria'
    }
]

const getUsuarioId = (id, callback) => {
    
    setTimeout(() => {
        //si existe
        let usuario = plantilla.find(persona => persona.id == id)?.nombre;
        callback(usuario);
    }, 1500);
}

getUsuarioId(2, (usu)=>console.log(usu));
