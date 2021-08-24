function divisivelPorTres(numero){
    let soma = 0
    let vector = numero.toString().split("")
    for (let i = 0; i < vector.length; i++){
        soma += vector[i]
    }
    if (soma%3 == 0)
        return true
    else
        return false
}

console.log(divisivelPorTres(3))
console.log(divisivelPorTres(22))
console.log(divisivelPorTres(80))
console.log(divisivelPorTres(129))