const dividir = (num1,num2) =>
{
    return new Promise(
        (resolve, reject) => {
            if( num2 == 0){
                reject("ERROR: DIVISION POR CERO");
            }else {
                resolve(num1/num2)
            }
        }
    )
}

module.exports = dividir;



/*then y catch son nuevas funciones en los que resultado y msg son el return segun si es resolve o reject
dividir(8,4)
.then ((resultado) =>console.log(`resultado= ${resultado}`))
.catch((msg)=>console.log(msg));

dividir(8,0)
.then ((resultado) =>console.log(`resultado= ${resultado}`))
.catch((msg)=>console.log(msg));

*/