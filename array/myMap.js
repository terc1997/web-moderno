Array.prototype.myMap = function(callback){
    const newArray = []
    for(let i = 0; i<this.length;i++)
        newArray.push(callback(this[i],i,this))
    return newArray
}

const vector = [1,2,3,4]
const doubleVector = vector.myMap(function(e){
    return e*2
})
console.log(doubleVector)
