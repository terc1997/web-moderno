import React from 'react'
import Main from '../templates/Main'

export default props => {
    return (<Main icon="home" title="Início"
        subtitle="Segundo Projeto do Capítulo de React">
        <div className="display-4">Bem Vindo</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar o cadastro de usuários</p>
    </Main>
    )
}