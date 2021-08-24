const carrinho = [
    '{ "nome":"Borracha", "preco":3.45 }',
    '{ "nome":"Caderno", "preco":13.90 }',
    '{ "nome":"Kit de Lapis", "preco":41.22 }',
    '{ "nome":"Caneta", "preco": 7.50 }'
]
let getPreco = carrinho.map(function(e){
    let obj = JSON.parse(e)
    return obj.preco
})

console.log(getPreco)