console.clear();
console.log(process.argv);
console.log(process.argv[1]);
const arg3= process.argv[2];
[param,valor] = arg3.split("=");
console.log('Base:',valor);