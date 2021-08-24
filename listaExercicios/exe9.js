const arredondamento = (nota) => (Math.ceil(nota/5)*5 - nota) < 3 ? Math.ceil(nota/5)*5 : nota
function sistemaDeNotas(nota){
    if(nota < 37)
        console.log('Reprovado')
    else {
        notaArr = arredondamento(nota)
        if (notaArr >= 40)
            console.log('Aprovado')
        else
            console.log('Reprovado')
    }
}

