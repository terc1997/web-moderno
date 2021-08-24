str = '10 20 20 25 0 30 10 1'
console.log(str.split(" "))

function higherWorse(str){
    const vector = str.split(" ")
    let higher = vector[0], worse = vector[0], breakRecord = 0
    for(i in vector){
        if (vector[i] > higher){
            higher = vector[i]
            breakRecord++
        }
        if (vector[i] < worse){
            worse = parseInt(i)
        }
    }
    return [breakRecord, parseInt(worse)]
}
console.log(higherWorse(str))