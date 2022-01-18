
console.log('EJERCICIOS CON PROMESAS');

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

const miPromesa = new Promise(
    (resolve,reject) => {
        reject('Todo mal');
        resolve('Todo bien');
    }
)

miPromesa
.then((msg) =>console.log(msg))
.catch( (error) =>console.log('Error', error));



const getUsuarioId2 = (id) => {
    const miPromesa = new Promise (
        (resolve,reject) => {
            let usuario = plantilla.find(persona => persona.id == id)?.nombre;
            if(usuario){
                resolve(usuario);
            } else {
                reject(`Error. Usuario ${id} no encontrado`);
            }
            
            
        }
    )

    return miPromesa;  
}

getUsuarioId2(3)
.then(usuario => console.log('Usuario encontrado: ', usuario))
.catch((msg) => console.log('Mensaje', msg));