import Header from "./components/Header/index";
import Main from "./components/Main";
import './App.css';
import Tfooter from "./components/Table/Tfooter/index";

function App() {

  const dataAtual = new Date();

  const cliente = {
    oc: {
      id: 1789,
      frete: 'FOB',
      vendedor: 'Carlos',
      f_pagamento: ['7', '30', '60'],
      produtos: [
        {item: 'Testeira  c/ iluminação farmacia cb300 branco azulado', qtd: 6, vlr_unit: 700, alq_imposto: 7, obs: "Observação 1 verificando se esta renderizando corretamente" },
        {item: 'Armação de metal medida 30x40, aplicado em porta palete', qtd: 2, vlr_unit: 130, alq_imposto: 7, obs: "Observação 2 verficando se esta renderizando corretamente" },
      ],
    },
    nome: 'Michael Mascarenhas',
    CNPJ: 10175093601,
    endereco: {
      rua: 'linhares',
      numero: 51,
      bairro: 'Industrial',
      cidade: 'Contagem',
      estado: 'MG'
    },
    representante: 'Tele Vendas',
    vendedor: 'Igor Augusto dos Santos',
    // data atual
    data: dataAtual.toLocaleDateString(),
  };
  return (
    <main>
      <Header client={cliente} />
      <Main client={cliente} />
      <Tfooter produtos={cliente.oc.produtos} />
    </main>
  );
}

export default App;
