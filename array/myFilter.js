Array.prototype.myFilter = function(callback) {
    const newArray = []
    for(let i = 0; i<this.length; i++)
        if(callback(this[i], i, this) == true)
            newArray.push(this[i])
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preoc: 18.99, fragil: false }
]
const maiorQue = (el) => el.preco >= 500.00 
const isFragile = (el) => el.fragil

console.log(produtos.myFilter(isFragile).myFilter(maiorQue))