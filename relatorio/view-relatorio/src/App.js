import Header from "./components/Header/index";
import Main from "./components/Main";
import './App.css';

function App() {

  const dataAtual = new Date();

  const cliente = {
    oc: {
      id: 1789,
      frete: 'FOB',
      vendedor: 'Carlos',
      f_pagamento: ['7', '30', '60'],
      produtos: [
        {item: 'Testeira  c/ iluminação farmacia cb300 branco azulado', qtd: 6, vlr_unit: 240, alq_imposto: 7, obs: "texto de observação da OC, vamos testar" },
        {item: 'Armação de metal medida 30x40, aplicado em porta palete', qtd: 2, vlr_unit: 130, alq_imposto: 7, obs: "textos aleatorios sobre observação dos item" },
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
    </main>
  );
}

export default App;
