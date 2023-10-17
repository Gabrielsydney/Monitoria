import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){

  //const {nome, sobrenome, cpf, contato, email} = props
  
  return <h1>Nome: {props.nome}
  <br/>
  Sobrenome: {props.sobrenome}
  <br/>
  CPF: {props.cpf}
  <br/>
  Contato: {props.contato}
  <br/>
  Email: {props.email}
  </h1>
}

function App() {
  return (<div>
    <Welcome nome="Paulo" sobrenome="Ricardo" cpf="000.000.000-00" contato="(84) 00200-0000" email="ricardp@email.com"/>
    <Welcome nome="Maria" sobrenome="Clara" cpf="000.000.000-01" contato="(84) 00000-0000" email="mc@email.com"/>    
  </div>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
