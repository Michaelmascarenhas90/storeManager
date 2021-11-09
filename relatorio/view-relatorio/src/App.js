import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import Header from "./components/Header/index";
// import Main from "./components/Main";
// import Tfooter from "./components/Table/Tfooter/index";

// import api from './services/api';

import './App.css';

function App() {

  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // dados da OC

  const numOrderCompra = 8993;
  useEffect(() => {
    axios
      .get(`http://localhost:3001/order/${numOrderCompra.toString()}`)
      .then(response => {
        setOrder(response.data)
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, []);

  const [freteOrder, setFreteOrder] = useState([]);
  // tipo de frete
    // const idFrete = ((order.CdFrete).toString());
  useEffect(() => {
    axios
      .get('http://localhost:3001/frete')
      .then(response => {
        // console.log(response)
        setFreteOrder(response.data)
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  })

  const freteMap = freteOrder.map((frete, i) => {
     const freteFilter = frete.CdFrete === order.CdFrete ? frete.Descricao : null;
     const filtered = freteFilter.toString();

     return filtered;
  })
  

  
  if (isLoading) {
    return <h1>Buscando dados</h1>
  }
  if (error){
    return <h1>Problemas idenficados: { error }</h1>
  }

  // const dataAtual = new Date();

  // const cliente = {
  //   oc: {
  //     id: order.Id,
  //     frete: freteMap,
  //     vendedor: order.idVendedor,
  //     vlr_total: order.totalPedido,
  //     f_pagamento: order.codFormaPagto,
  //     produtos: [
  //       {item: 'Testeira  c/ iluminação farmacia cb300 branco azulado', qtd: 6, vlr_unit: 700, alq_imposto: 7, obs: "Observação 1 verificando se esta renderizando corretamente" },
  //       {item: 'Armação de metal medida 30x40, aplicado em porta palete', qtd: 2, vlr_unit: 130, alq_imposto: 7, obs: "Observação 2 verficando se esta renderizando corretamente" },
  //     ],
  //   },
  //   nome: order.nmCliente,
  //   CNPJ: order.nmCliente.replace(/[^0-9]/g,''),
  //   endereco: {
  //     rua: 'Av afonso Vaz de Melo',
  //     numero: 51,
  //     bairro: 'Industrial',
  //     cidade: 'Contagem',
  //     estado: 'MG',
  //   },
  //   representante: order.CdRepresentante,
  //   vendedor: vendedores.Nome,
  //   // data atual
  //   data: dataAtual.toLocaleDateString(),
  // };
  return (
      <main>
        {/* <Header order={order} client={cliente} />
        <Main order={order} client={cliente} />
        <Tfooter produtos={cliente.oc.produtos} vlr_total={order.totalPedido} /> */}
        <h2>{order.Id}</h2>
        <span>{order.nmCliente}</span>
        <h3>{order.nmCliente.replace(/[^0-9]/g,'')}</h3>
        <h3>{freteMap}</h3>
        {/* <h4>{fretes}</h4> */}
      </main>
  );
}

export default App;
