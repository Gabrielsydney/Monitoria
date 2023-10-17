import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){
  return <h1>Nome: {props.name}
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
    <Welcome name="Paulo" sobrenome="Ricardo" cpf="000.000.000-00" contato="(84) 00200-0000" email="ricardp@email.com"/>
    <Welcome name="Maria" sobrenome="Clara" cpf="000.000.000-01" contato="(84) 00000-0000" email="mc@email.com"/>    
  </div>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
