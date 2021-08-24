const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req,res) => {
    console.log(req.body)
    res.send('<h1> Parabéns </h1>')
})

app.post('/usuarios/:id', (req, resp) =>{
    resp.send('<h1> Parabéns, Usuário Alterado </h1>')
})
app.listen(3003)