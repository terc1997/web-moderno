// Juros simples
const simples = (captInit, juros, tempo) => captInit + captInit*((juros/100))*tempo
const composto = (captInit, juros, tempo) => captInit*((1+(juros/100))**tempo)

console.log(`Simples: ${simples(100,10,10)}
Composto: ${composto(100,10,10)}`)