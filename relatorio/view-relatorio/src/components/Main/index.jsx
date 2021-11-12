import React from "react";
import Table from "../Table";
import "./main.css";

const Main = ({ order, client, prod, addre }) => {

  // const cond_pagamento = client.oc.f_pagamento.map((prazo, i) => {
  //   return <span key={i}>{prazo}, </span>
  // })
  
  return (
    <main className="container" >
      <div className="row row-infor">
        <div className="col-7"><span className='info-user'><strong>Nome:</strong> { order.nmCliente }</span></div>
        {/* {console.log(addre.A1_END)} */}
        <div className="col"><span className='info-user'><strong>CPF/CNPJ:</strong> { order.nmCliente.replace(/[^0-9]/g,'') }</span></div>
      </div>
      <div className="row row-infor">
        <div className="col-"><span className='info-user'><strong>Endereço:</strong> { addre.A1_END }</span></div>
        <div className="col"><span className='info-user'><strong>Bairro:</strong> { addre.A1_BAIRRO }</span></div>
        <div className="col"><span className='info-user'><strong>Cidade:</strong> { addre.A1_MUN }</span></div>
        <div className="col"><span className='info-user'><strong>Estado:</strong> { addre.A1_EST }</span></div>
      </div>
      <div className="row">
        <div className="col-4"><span className='info-user'><strong>Representante:</strong> { client.representante }</span></div>
        <div className="col-sm"><span className='info-user'><strong>Frete:</strong> { client.oc.frete }</span></div>
        <div className="col-5"><span className='info-user'><strong>Vendedor:</strong> { client.vendedor }</span></div>
      </div>
      <div className="row row-infor">
        <div className="col"><span className='info-user'><strong>F.Pagamento:</strong> { client.oc.f_pagamento }</span></div>
      </div>
      <div className="row row-infor"><Table prod={ prod } obs={order.Observacao} /></div>
    </main>
  );
}

export default Main;
