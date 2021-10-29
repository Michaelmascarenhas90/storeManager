import Header from "./components/Header/index";
import './App.css';
import Cabeçalho from "./components/Budget/Cabeçalho";

function App() {
  const cliente = {
    oc: {
      id: 1789,
      frete: 'FOB',
      vendedor: 'Carlos',
      f_pagamento: [7, 30, 60],
    },
    nome: 'Michael Mascarenhas',
    CNPJ: 10175093601,
    endereço: {
      rua: 'linhares',
      numero: 51,
      bairro: 'Industrial',
      cidade: 'Contagem',
      estado: 'MG'
    },
    representante: 'BRAMIAR REPRESENTACOES E SERVICOS DE REF'
  };
  return (
    <main>
      <Header oc={cliente.oc.id}/>
      <Cabeçalho oc={cliente.oc.id} />
    </main>
  );
}

export default App;
