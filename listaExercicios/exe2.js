// Classificação de Triângulos
const existTrian = (l1,l2,l3) => (l1+l2>l3) && (l2+l3>l1) && (l3+l1>l2) ? true : false
function tipoTrian(l1=6,l2=6,l3=6){
    if (existTrian(l1,l2,l3)){
        if (l1 == l2 && l2 == l3)
            console.log('Triângulo Equilátero')
        else if(l1 == l2 || l2 == l3 || l3 == l1)
            console.log('Triângulo Isósceles')
        else
            console.log('Triângulo Escaleno')
    } else{
        console.log('Forma geométrica inválida')
    }
}

tipoTrian(10,14,8)
tipoTrian()
tipoTrian(1)
tipoTrian(20,15)
tipoTrian(100,1000,1)

