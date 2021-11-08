import React from "react";
import Table from "../Table";
import "./main.css";

const Main = ({ client }) => {

  const cond_pagamento = client.oc.f_pagamento.map((prazo, i) => {
    return <span key={i}>{prazo}, </span>
  })

  return (
    <main className="container" >
      <div class="row row-infor">
        <div className="col-5"><span className='info-user'><strong>Nome:</strong> { client.nome }</span></div>
        <div className="col"><span className='info-user'><strong>CPF/CNPJ:</strong> { client.CNPJ }</span></div>
      </div>
      <div class="row row-infor">
        <div className="col-"><span className='info-user'><strong>Endereço:</strong> { client.endereco.rua }, {client.endereco.numero}</span></div>
        <div className="col"><span className='info-user'><strong>Bairro:</strong> { client.endereco.bairro }</span></div>
        <div className="col"><span className='info-user'><strong>Cidade:</strong> { client.endereco.cidade }</span></div>
        <div className="col"><span className='info-user'><strong>Estado:</strong> { client.endereco.estado }</span></div>
      </div>
      <div className="row">
        <div className="col-4"><span className='info-user'><strong>Representante:</strong> { client.representante }</span></div>
        <div className="col-sm"><span className='info-user'><strong>Frete:</strong> { client.oc.frete }</span></div>
        <div className="col-5"><span className='info-user'><strong>Vendedor:</strong> { client.vendedor }</span></div>
      </div>
      <div className="row row-infor">
        <div className="col"><span className='info-user'><strong>F.Pagamento:</strong> { cond_pagamento }</span></div>
      </div>
      <div className="row row-infor"><Table produtos={ client.oc.produtos }/></div>
    </main>
  );
}

export default Main;
