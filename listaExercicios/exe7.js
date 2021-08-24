// Bháskara

function bhaskara(ax2,bx,c){
    let delta = bx**2 - 4*ax2*c
    if(delta > 0){
        let root = [0,0]
        root[0] = (-bx + Math.sqrt(delta))/2
        root[1] = (-bx - Math.sqrt(delta))/2
        return root

    } else{
        return 'Delta negativo'
    }

}

console.log(bhaskara(3,-5,12))
console.log(bhaskara(1,3,2))