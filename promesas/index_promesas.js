const dividir = require("./mod_promesas");
const colors = require('colors');

const {argv} = require('yargs');

console.log(argv);
let n1= argv.dividendo;
let n2 = argv.cociente;

dividir(n1, n2)
    .then((resultado) => console.log(`resultado= ${resultado}`.rainbow))
    .catch((msg) => console.log(msg.rainbow));