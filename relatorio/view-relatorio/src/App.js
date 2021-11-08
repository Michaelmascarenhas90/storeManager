import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import Header from "./components/Header/index";
// import Main from "./components/Main";
// import Tfooter from "./components/Table/Tfooter/index";

// import api from './services/api';

import './App.css';

function App() {

  const [order, setOrder] = useState([]);
  const [freteOrder, setFreteOrder] = useState([]);
  const [condPag, setCondPag] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // dados da OC
  useEffect(() => {
    axios
      .get('http://localhost:3001/order/8993')
      .then(response => {
        setOrder(response.data)
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, []);

  // tipo de frete
  useEffect(() => {
    axios
      .get('http://localhost:3001/frete')
      .then(response => {
        setFreteOrder(response.data);
        return setIsLoading(false);
      })
      .catch((error => 
        {
          setError(error.message);
          return setIsLoading(false);
        }
      ))
  })

  // condição pagamento
  useEffect(() => {
    axios
      .get('http://localhost:3001/condpag')
      .then(response => {
        setCondPag(response.data);
        return setIsLoading(false)
      })
      .catch((error) => { setError(error.message)})
  }, []);
 
  const freteMap = freteOrder.map((frete, i) => {
    const returnFilter = (order.CdFrete === frete.CdFrete) ? frete.Descricao : null;

    return returnFilter;
  })

  const condPagMap = condPag.map((condicao) => {
    const content = (order.cdCondPagto === condicao.cdCondPagto) ? condicao.Descricao:null;

    return content;
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
  //     id: {order.Id},
  //     frete: {freteMap},
  //     vendedor: {order.idVendedor},
  //     vlr_total: {order.totalPedido}
  //     f_pagamento: {order.codFormaPagto},
  //     produtos: [
  //       {item: 'Testeira  c/ iluminação farmacia cb300 branco azulado', qtd: 6, vlr_unit: 700, alq_imposto: 7, obs: "Observação 1 verificando se esta renderizando corretamente" },
  //       {item: 'Armação de metal medida 30x40, aplicado em porta palete', qtd: 2, vlr_unit: 130, alq_imposto: 7, obs: "Observação 2 verficando se esta renderizando corretamente" },
  //     ],
  //   },
  //   nome: {order.nmCliente},
  //   CNPJ: {order.nmCliente.replace(/[^0-9]/g,'')},
  //   endereco: {
  //     rua: 'Av afonso Vaz de Melo',
  //     numero: 51,
  //     bairro: 'Industrial',
  //     cidade: 'Contagem',
  //     estado: 'MG'
  //   },
  //   representante: {order.CdRepresentante},
  //   vendedor: 'Igor Augusto dos Santos',
  //   // data atual
  //   data: dataAtual.toLocaleDateString(),
  // };
  return (
      <main>
        {/* <Header client={cliente} order={order} />
        <Main client={cliente} />
        <Tfooter produtos={cliente.oc.produtos} /> */}
        <h2>{order.Id}</h2>
        <h3>{order.nmCliente.replace(/[^0-9]/g,'')}</h3>
        <h3>{freteMap}</h3>
        <h4>{condPagMap}</h4>
      </main>
  );
}

export default App;
