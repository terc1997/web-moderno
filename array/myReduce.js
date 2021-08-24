Array.prototype.myReduce = function(callback,valorInicial){
    let indiceInicial = valorInicial ? 1 : 0
    let lastPosition = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        lastPosition = callback(lastPosition,this[i],i,this)
    }
    return lastPosition
}

const soma = (total,valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce(soma))
console.log(nums.reduce(soma,21))