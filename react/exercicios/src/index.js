import React from 'react'
import ReactDom from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import Multi, { BoaNoite } from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Henrique" sobrenome="Parreiras">
            <Filho nome="Pedro"/>
            <Filho nome="Carla"/>
            <Filho nome="Ana"/>
        </Pai>
        
    </div>
, document.getElementById('root'))
