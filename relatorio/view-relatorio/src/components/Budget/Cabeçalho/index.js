import React from 'react';
import logo from '../../../assets/img/logo.png';

function Cabeçalho({props}) {
  return (
    <section className='container'>
      <div className="row">
        <div className="col">
          <img src={logo} alt='imagem logo Grupo SA' width='30' height='24' />
        </div>
        <div className="col">
          <h1>Orçamento</h1>
        </div>
        <div className="col">
          <span>OC: {props.oc}</span>
        </div>
      </div>
    </section>
  );
}

export default Cabeçalho;
