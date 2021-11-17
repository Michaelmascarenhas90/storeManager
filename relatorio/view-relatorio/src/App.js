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
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState({});
  const [vendedor, setVendedor] = useState('');
  const [condPag, setCondPag] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // dados da OC
  const numOrderCompra = 8993;

  // informações do pedido
  useEffect(() => {
    axios
      .get(`http://localhost:3001/order/${numOrderCompra.toString()}`)
      .then(response => response.data)
      .then(responseData => {
        setOrder(responseData)
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  },[]);

  // dados do endereço
  useEffect(() => {
    axios
      .get(`http://localhost:3001/address/${order.CdCliente}`)
      .then(response => response.data)
      .then(responseData => {
        setAddress(responseData)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, [order.CdCliente]);

  //itens do pedido  
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
  },[]);

   useEffect(() => {
    axios
      .get(`http://localhost:3001/frete/${order.CdFrete}`)
      .then(response => {
        setFreteOrder(response.data.Descricao);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, [order.CdFrete]);

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
  },[order.idVendedor]);

  useEffect(() => {  
    axios.get(`http://localhost:3001/condicao/${order.cdCondPagto}`)
     .then(response => {
      setCondPag(response.data);

      setIsLoading(false)
    })
    .catch(error => {
      setError(error.message)
      setIsLoading(false)

    })
  }, [order.cdCondPagto]);



  if (isLoading) {
    return <h1>Buscando dados</h1>
  }
  if (error){
    return <h1>Problemas idenficados: { error }</h1>
  }
  
  // console.log(ipi[0].B1_COD.replace(/( )+/g, ''))
  
    const cliente = {
      oc: {
        id: order.Id,
        frete: freteOrder,
        vlr_total: order.totalPedido,
        f_pagamento: condPag.Descricao,
      },
      nome: order.nmCliente,
      CNPJ: order.nmCliente.replace(/[^0-9]/g,''),
      representante: order.CdRepresentante,
      vendedor: vendedor,
      // data atual
      data: new Date().toLocaleDateString(),
    };

  return (
      <main>
        <Header
          order={order}
          client={cliente}
        />
        <Main 
          order={order}
          client={cliente}
          prod={products}
          addre={address}
        />
        <Tfooter
          produtos={products}
          vlr_total={order.totalPedido}
        />
      </main>
  );
}

export default App;
