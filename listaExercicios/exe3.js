function tratarErro(erro){
    throw 1
}

function potencia(base=1, expoente=1){
    try {
        if (expoente!= 1)
            return base*potencia(base,expoente-1)
        else
            return base    
    } catch (error) {
        tratarErro(error)
    }
    
}
const potenciaArrow = (base=1,expoente=1) => expoente!=1 ? base*potenciaArrow(base,expoente-1) : base


console.log(potencia(5,3))
console.log(potencia(20))
//console.log(potencia(0,0))
console.log(potenciaArrow(10,3))
console.log(potenciaArrow(10))