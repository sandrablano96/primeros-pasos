const persona = {
    nombre: "Juan",
    apellido: "Lopez",
    departamento: "Informatica",
    getNombre: function () {
        return `${this.nombre} ${this.apellido}`
    }
}

const persona2 = {
    nombre: "Juan",
    apellido: "Lopez",
    departamento: "Informatica",
    getNombre: function () {
        return `${this.nombre} ${this.apellido}`
    }
}
console.log(persona.getNombre());
/* 
let nombre = persona.nombre;
let apellido = persona.apellido;
let departamento = persona.departamento;
console.log(nombre,apellido, ' depto:',departamento);
*/

//Desestructuracion. Para que funcione tienen que coincidir con los nombre de propiedades del objeto
let { nombre, apellido, departamento } = persona;
console.log(nombre, apellido, 'depto:', departamento);

/*
const plantilla = ['Juan', 'Maria', 'Rosa'];
let [n1,n2,n3] = plantilla;
console.log(n1,n2,n3);
*/

const suma = (num1, num2) => {
    return num1 + num2;
}

/* Funciones flecha de una linea */
//const suma = (num1,num2) => n1 + n2;
const saludar = () => 'Hola mundo';

console.log('Sumar', suma(3, 4));
