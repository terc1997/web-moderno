// função factory
function criarProduto(nome,preco){
    return {
        nome,
        preco
    }
}
prod1 = criarProduto('detergente',2.50)
console.log(prod1)