import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from "./components/Header/index";
import Main from "./components/Main";
import Tfooter from "./components/Table/Tfooter/index";

// import api from './services/api';

import './App.css';

function App() {

  const [order, setOrder] = useState([]);
  const [freteOrder, setFreteOrder] = useState([]);
  const [vendedor, setVendedor] = useState('')
  const [condPag, setCondPag] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // dados da OC
  const numOrderCompra = 7634;

  // informações do pedido
  useEffect(() => {
    axios
      .get(`http://localhost:3001/order/${numOrderCompra.toString()}`)
      .then(response => {
        setOrder(response.data)
        // console.log(response.data)
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, []);

  //itens do pedido
  const [products, setProducts] = useState([]);
  const [prodLimpo, setProdLimpo] = useState([])
  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/productsbypedido/${numOrderCompra}`)
      .then(response => {
        setProducts(response.data)
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false);
      })
  }, []);

  
  useEffect(() => {
    // console.log(products)
    const listProducts = products.map(produto => produto)
    setProdLimpo(listProducts)
    // console.log(listProducts)
  }, [products])

  console.log(prodLimpo)
  

   useEffect(() => {
    axios
      .get('http://localhost:3001/frete')
      .then(response => {
        // console.log(response)
        setFreteOrder(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, [order]);

  useEffect(() => {  
    axios.get(`http://localhost:3001/vendedor/${order.idVendedor}`)
     .then(response => {
      setVendedor(response.data.Nome);
      setIsLoading(false)
    })
    .catch(error => {
      setError(error.message)
      setIsLoading(false)

    })
  },[order.idVendedor])

  useEffect(() => {  
    axios.get(`http://localhost:3001/condicao/${order.cdCondPagto}`)
     .then(response => {
      setCondPag(response.data);

      // console.log(response.data.Descricao)
      setIsLoading(false)
    })
    .catch(error => {
      setError(error.message)
      setIsLoading(false)

    })
  },[order.cdCondPagto])

    const freteMap = freteOrder.map((frete, i) => {
       const freteFilter = frete.CdFrete === order.CdFrete ? <span>{frete.Descricao}</span> : null;
       const filtered = freteFilter;
  
       return filtered;
    })
  
  if (isLoading) {
    return <h1>Buscando dados</h1>
  }
  if (error){
    return <h1>Problemas idenficados: { error }</h1>
  }

  const dataAtual = new Date();

  const cliente = {
    oc: {
      id: order.Id,
      frete: freteMap,
       vlr_total: order.totalPedido,
      f_pagamento: condPag.Descricao,
      produtos: [
        prodLimpo.map((prod) => {
          return (
            { nome: prod.dsProduto, }
          )
        })
        {item: 'Testeira  c/ iluminação farmacia cb300 branco azulado', qtd: 6, vlr_unit: 700, alq_imposto: 7, obs: "Observação 1 verificando se esta renderizando corretamente" },
        {item: 'Armação de metal medida 30x40, aplicado em porta palete', qtd: 2, vlr_unit: 130, alq_imposto: 7, obs: "Observação 2 verficando se esta renderizando corretamente" },
      ],
    },
    nome: order.nmCliente,
    CNPJ: order.nmCliente.replace(/[^0-9]/g,''),
    endereco: {
      rua: 'Av afonso Vaz de Melo',
      numero: 51,
      bairro: 'Industrial',
      cidade: 'Contagem',
      estado: 'MG',
    },
    representante: order.CdRepresentante,
    vendedor: vendedor,
    // data atual
    data: dataAtual.toLocaleDateString(),
  };
  return (
      <main>
        <Header order={order} client={cliente} />
        <Main order={order} client={cliente} />
        <Tfooter produtos={cliente.oc.produtos} vlr_total={order.totalPedido} />
      </main>
  );
}

export default App;
