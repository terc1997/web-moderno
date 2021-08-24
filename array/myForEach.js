const nomes = ['Feijao','Floyd','Rod','Chuchu','CauCau']

Array.prototype.myForEach = function(fun){
    for(let i=0; i<this.length; i++)
        fun(this[i],i,this)    
}

nomes.myForEach(function(nome,indice,vetor){
    console.log(`${indice+1}) ${nome}`)
    console.log(vetor)
})
