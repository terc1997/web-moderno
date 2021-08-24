const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getWoman = el => el.genero === 'M'
const getCountry = el => el.pais === 'China'
const getMinorPaycheck = (acc,el) => {
    return acc.salario < el.salario ? acc : el
}


axios.get(url).then(response => {
    const funcionarios = response.data
    const vector = funcionarios
        .filter(getWoman)
        .filter(getCountry)
        .reduce(getMinorPaycheck)
    console.log(vector)
})