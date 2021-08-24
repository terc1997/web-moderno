function correctNumber(a){
    let intNumber = a.toFixed(0)
    a -= intNumber
    a *=100
    return console.log(`R$${intNumber},${a.toFixed(0)}`)
}
correctNumber(0.5-0.31)